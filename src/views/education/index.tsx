import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

import { COURSES } from '../../data';
import SnapScrollContainer from '../components/SnapScrollContainer';

const Home = () => {
  return (
    <SnapScrollContainer style={{}} className="education">
      <div>
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", mb: 2}}>
          <CardContent>
            <Typography variant="h4" component="div">
              University of Waterloo | Honours Software Engineering
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Sep 2018 - Apr 2023
            </Typography>
            <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
              I am a recent Software Engineering graduate from the University of Waterloo.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
            Relevant Course Material
            </Typography>
            <Grid container xs={12}>
              {COURSES.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.code}>
                  <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
                    <b>{course.code}</b> — {course.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </SnapScrollContainer>
  )
};

export default Home;
