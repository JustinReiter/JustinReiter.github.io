import react from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container
} from '@mui/material'

import jr from '../../assets/jr.jpg';


const Home = () => {
  console.log("render Home");
  return (
    <Container maxWidth='md'>
      <Card sx={{ display: 'flex' }}>
        <CardContent>
          Justin Reiter
        </CardContent>
        <CardMedia
          component='img'
          image={jr}
        />
      </Card>
    </Container>
  )
};

export default Home;
