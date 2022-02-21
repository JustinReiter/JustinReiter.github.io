import react from 'react';
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import jr from '../../assets/jr_compressed.jpg';


const Home = () => {
  console.log("render Home");
  return (
    <Container maxWidth='md'>
      <Card sx={{ display: 'flex', flexDirection: 'column'}}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Hi! I am Justin Reiter
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                I am proficient with C++ and JavaScript, with a lot of prior experience in Python, Java, C# and HTML. Currently I am interested in Artificial Intelligence as well as full-stack. My current projects include creating an intelligent bot in C# to play Warzone, building a platform to track competitive ladders on Warzone in real-time and codeveloping a Django platform used by 700 people to integrate events on Warzone.
              </Typography>
              <Typography variant="body1" component="div">
                Outside of programming, I follow Formula 1 and baseball closely, and I am always looking for new things to get involved with.
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <CardMedia
              component='img'
              image={jr}
              height="500"
              width="375"
            />
          </Box>
        </Card>
        <CardActions>
          <Link href="https://github.com/JustinReiter" target="_blank" rel="noreferrer" underline="none">
            <Button variant='outlined' startIcon={<GitHubIcon />}>
              @JustinReiter
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/justin-reiter/" target="_blank" rel="noreferrer" underline="none">
            <Button variant='outlined' startIcon={<LinkedInIcon />}>
              @Justin-Reiter
            </Button>
          </Link>
          <Link href="https://www.student.cs.uwaterloo.ca/~jdreiter/ReiterResume-3A-1.pdf" target="_blank" rel="noreferrer" underline="none">
            <Button variant='outlined' startIcon={<ArticleIcon />}>
              Resume
            </Button>
          </Link>
          <Link href="mailto:jdreiter@uwaterloo.ca" underline="none">
            <Button variant='outlined' startIcon={<EmailIcon />}>
              Email
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
};

export default Home;
