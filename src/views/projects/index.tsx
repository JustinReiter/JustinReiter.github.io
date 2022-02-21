import react from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { chunk } from 'lodash';

import { Project, HTMLLink } from '../../types';
import { projects } from '../../data';

const renderLinkButton = (link: HTMLLink) => {
  if (link.type === 'link') {
    return (
      <Link href={link.href} target="_blank" rel="noreferrer" underline="none" key={link.href}>
        <Button variant='outlined' startIcon={<LinkIcon />}>
          Link
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={link.href} target="_blank" rel="noreferrer" underline="none" key={link.href}>
        <Button variant='outlined' startIcon={<GitHubIcon />}>
          Github
        </Button>
      </Link>
    );
  }
};

const renderKeywords = (keywords: string[]) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={1}>
      {keywords.map((keyword: string) =>
        <Chip label={keyword} variant="filled" color="primary" key={keyword}/>
      )}
    </Stack>
  );
};

const renderRow = (projectRow: Project[], index: number) => {
  return (
    <Grid container xs={12} spacing={2} key={index}>
      {projectRow.map((project: Project, index: number) =>
        <Grid item xs={4} spacing={2} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={project.img ? require(`../../assets/${project.img.src}`) : ''}
              alt={project?.img?.alt || ''}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardContent>
              {renderKeywords(project.keywords)}
            </CardContent>
            <CardActions>
              {project.links.map(link => renderLinkButton(link))}
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};


const Projects = () => {
  console.log("render Projects");
  return (
    <Container maxWidth='lg'>
      <Grid container xs={12} spacing={2} rowSpacing={2}>
        { chunk(projects, 3).map((projectRow: Project[], index: number) => renderRow(projectRow, index))}
      </Grid>
    </Container>
  )
};

export default Projects;
