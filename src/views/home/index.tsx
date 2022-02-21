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

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import jr from '../../assets/jr_compressed.jpg';


const Home = () => {
  console.log("render Home");
  return (
    <Container maxWidth='lg'>
      <Card sx={{ display: 'flex', flexDirection: 'column'}}>
        <Grid container xs={12} display='flex' sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6} display='flex' sx={{ justifyContent: 'center', mt: 2 }}>
            <img
              style={{borderRadius: 20}}
              src={jr}
            />
          </Grid>
        </Grid>
        <CardActions>
          <Grid container xs={12} spacing={1}>
            <Grid item>
              <Link href="https://github.com/JustinReiter" target="_blank" rel="noreferrer" underline="none">
                <Button variant='outlined' startIcon={<GitHubIcon />}>
                  @JustinReiter
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.linkedin.com/in/justin-reiter/" target="_blank" rel="noreferrer" underline="none">
                <Button variant='outlined' startIcon={<LinkedInIcon />}>
                  @Justin-Reiter
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.student.cs.uwaterloo.ca/~jdreiter/ReiterResume-3A-1.pdf" target="_blank" rel="noreferrer" underline="none">
                <Button variant='outlined' startIcon={<ArticleIcon />}>
                  Resume
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="mailto:jdreiter@uwaterloo.ca" underline="none">
                <Button variant='outlined' startIcon={<EmailIcon />}>
                  Email
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  )
};

export default Home;
