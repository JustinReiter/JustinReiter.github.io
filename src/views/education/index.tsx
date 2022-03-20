import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'

import { COURSES } from '../../data';

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Card sx={{ display: 'flex', flexDirection: 'column', mb: 2}}>
        <CardContent>
          <Typography variant="h4" component="div">
            University of Waterloo | Honours Software Engineering
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Sep 2018 - Present
          </Typography>
          <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
            I am currently in my 4A term of Software Engineering at the University of Waterloo and will be graduating in April 2023.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent>
          <Typography variant="h6" gutterBottom component="div">
           Relevant Course Material
          </Typography>
          <Grid container xs={12}>
            {COURSES.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.code}>
                <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
                  {course.code} — {course.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
};

export default Home;
