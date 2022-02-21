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
                I am proficient with JavaScript and Python, with a lot of prior experience in C++, Java, and more. Previously, I have interned with companies such as Uplift, Horizn, Bank of America and IBM in a variety of roles, mainly centered around web development. I am also highly active with side projects spanning open-source contributions in the WZClot platform, to personal platforms exploring statistics in games.
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
