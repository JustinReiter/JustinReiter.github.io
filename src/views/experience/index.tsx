import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import ListItemText from '@mui/material/ListItemText';

import { Experience } from '../../types';
import { experiences } from '../../data';

const renderLink = (link: string, name: string) => {
  return (
    <Link href={link} target="_blank" rel="noopener" underline="none">{name}</Link>
  )
}

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

const renderExperience = (experience: Experience, index: number) => {
  return (
    <Grid item xs={12} md={6} spacing={2} key={index}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {experience.link ? renderLink(experience.link, experience.company) : experience.company} | {experience.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            {experience.date} | {experience.location}
          </Typography>
          <List dense={true}>
            { experience.description.map((line, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemText>
                    • {line}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
        <CardContent>
          {renderKeywords(experience.keywords)}
        </CardContent>
      </Card>
    </Grid>
  );
};


const WorkExperience = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container xs={12} spacing={2} rowSpacing={2}>
        { experiences.map((experience: Experience, index: number) => renderExperience(experience, index))}
      </Grid>
    </Container>
  )
};

export default WorkExperience;
