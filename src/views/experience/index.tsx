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
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={1}>
      {keywords.map((keyword: string) =>
        <Chip label={keyword} variant="filled" color="primary" key={keyword}/>
      )}
    </Stack>
  );
};

const renderRow = (experienceRow: Experience[], index: number) => {
  return (
    <Grid container xs={12} spacing={2} key={index}>
      {experienceRow.map((experience: Experience, index: number) =>
        <Grid item xs={6} spacing={2} key={index}>
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
      )}
    </Grid>
  );
};


const WorkExperience = () => {
  console.log("render Work Experience");
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        { chunk(experiences, 2).map((experienceRow: Experience[], index: number) => renderRow(experienceRow, index))}
      </Grid>
    </Container>
  )
};

export default WorkExperience;
