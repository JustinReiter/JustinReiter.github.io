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
import { chunk } from 'lodash';

import { Experience } from '../../types';
import { experiences } from '../../data';

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
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {experience.company} | {experience.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {experience.description}
          </Typography>
        </CardContent>
        <CardContent>
          {renderKeywords(experience.keywords)}
        </CardContent>
      </Card>
    </Grid>
  );
};


const WorkExperience = () => {
  console.log("render Work Experience");
  return (
    <Container maxWidth='lg'>
      <Grid container xs={12} spacing={2} rowSpacing={2}>
        { experiences.map((experience: Experience, index: number) => renderExperience(experience, index))}
      </Grid>
    </Container>
  )
};

export default WorkExperience;
