import react from 'react';
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Card sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent>
          <Typography variant="h4" component="div">
            University of Waterloo | Honours Software Engineering
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Sep 2018 - Apr 2023
          </Typography>
          <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
            I am currently in my 4A term of Software Engineering at the University of Waterloo.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
};

export default Home;
