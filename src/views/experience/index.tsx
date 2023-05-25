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
import { useRef, useEffect } from 'react';
import useOnScreen from '../../utils/UseOnScreen';

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
          {renderKeywords(experience.keywords)}
        </CardContent>
      </Card>
    </Grid>
  );
};

interface WorkExperienceProps {
  setFocusedDiv: React.Dispatch<React.SetStateAction<string>>;
}

const WorkExperience = ({setFocusedDiv}: WorkExperienceProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    setFocusedDiv("work_experience");
  }, [isVisible]);

  return (
    <SnapScrollContainer style={{}} innerRef={ref} id="experience" nextId="projects">
      <Grid container xs={12} spacing={2} alignContent="start">
        { experiences.map((experience: Experience, index: number) => renderExperience(experience, index))}
      </Grid>
    </SnapScrollContainer>
  )
};

export default WorkExperience;
