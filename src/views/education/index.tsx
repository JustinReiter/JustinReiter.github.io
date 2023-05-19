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
      <Card sx={{ display: 'flex', flexDirection: 'column', mb: 2}}>
        <CardContent>
          <Typography variant="h4" component="div">
            University of Waterloo | Honours Software Engineering
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Sep 2018 - Present
          </Typography>
          <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
            I am currently in my 4B term of Software Engineering at the University of Waterloo and will be graduating in April this year.
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
    </SnapScrollContainer>
  )
};

export default Home;
