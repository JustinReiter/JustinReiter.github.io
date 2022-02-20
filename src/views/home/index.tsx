import react from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container
} from '@mui/material'

import jr from '../../assets/jr.jpg';


function Home() {

  return (
    <Container maxWidth="sm">
      <Card sx={{ display: 'flex' }}>
        <CardContent>
          Justin Reiter
        </CardContent>
        <CardMedia
          component="img"
          image={jr}
        />
      </Card>
    </Container>
  )
}

export default Home;
