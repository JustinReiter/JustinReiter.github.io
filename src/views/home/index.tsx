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
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import jr from '../../assets/jr_compressed.jpg';


const Home = () => {
  console.log("render Home");
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column'}}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent>
            Justin Reiter
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
  )
};

export default Home;
