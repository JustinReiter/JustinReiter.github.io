import {
  Card,
  CardContent,
  Chip,
  Grid,
  Link,
  Typography,
} from '@mui/material';


import { Experience } from '../../types';
import { experiences } from '../../data';
import SnapScrollContainer from '../components/SnapScrollContainer';

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
    <Grid item xs={12} md={6} key={index}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {experience.link ? renderLink(experience.link, experience.company) : experience.company} | {experience.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            {experience.date} | {experience.location}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" color="text.secondary">
            {experience.short_desc}
          </Typography>
          {renderKeywords(experience.keywords)}
        </CardContent>
      </Card>
    </Grid>
  );
};

const WorkExperience = () => {

  return (
    <SnapScrollContainer style={{}} id="experience" nextId="projects">
      <Grid container xs={12} spacing={2} alignContent="start" sx={{ marginTop: { xs: "2vh" } }}>
        { experiences.map((experience: Experience, index: number) => renderExperience(experience, index))}
      </Grid>
    </SnapScrollContainer>
  )
};

export default WorkExperience;
