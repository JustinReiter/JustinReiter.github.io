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
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

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
  } else if (link.type === 'devpost') {
    return (
      <Link href={link.href} target="_blank" rel="noreferrer" underline="none" key={link.href}>
        <Button variant='outlined' startIcon={<LinkIcon />}>
          Devpost
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
    <Grid container direction='row' spacing={1}>
      {keywords.map((keyword: string) =>
        <Grid item key={keyword}>
          <Chip label={keyword} variant="filled" color="primary" />
        </Grid>
      )}
    </Grid>
  );
};

const renderProject = (project: Project, index: number) => {
  return (
      <Grid item  xs={12} md={6} spacing={2} key={index}>
        <Card>
          {project?.img && 
            <CardMedia
              component="img"
              height="140"
              image={project.img ? require(`../../assets/${project.img.src}`) : ''}
              alt={project?.img?.alt || ''}
            />
          }
          <CardContent>
            <Typography variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
              {project.date}
            </Typography>
            <Typography variant="body2" gutterBottom={project?.subdescription !== undefined} sx={{pt: 2}}>
              {project.description}
            </Typography>
            {project?.subdescription && 
              <Typography variant="body2" sx={{pt: 2}}>
                {project.subdescription}
              </Typography>
            }
          </CardContent>
          <CardContent>
            {renderKeywords(project.keywords)}
          </CardContent>
          <CardActions>
            {project.links.map(link => renderLinkButton(link))}
          </CardActions>
        </Card>
      </Grid>
  );
};


const Projects = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container xs={12} spacing={2} rowSpacing={2}>
        { projects.map((project: Project, index: number) => renderProject(project, index)) }
      </Grid>
    </Container>
  )
};

export default Projects;