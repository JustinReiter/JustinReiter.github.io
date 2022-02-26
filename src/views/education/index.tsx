import {
  Card,
  CardContent,
  Container,
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
            Sep 2018 - Present
          </Typography>
          <Typography gutterBottom sx={{ pt: 2 }} variant="body1" component="div">
            I am currently in my 4A term of Software Engineering at the University of Waterloo and will be graduating in April 2023.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
};

export default Home;
