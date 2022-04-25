import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
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

const skills = [
  "JavaScript",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "NoSQL",
  "Git",
  "Bash",
];

const Strong = (props: any) => (<span style={{fontWeight: 'bold'}}>{props.children}</span>);

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
              <Typography gutterBottom variant="body1" component="div" sx={{pt:2}} >
                I am a passionate developer that is always looking for new challenges. I have previously worked as a <Strong>full-stack developer</Strong> and continuously experiment with new technologies on side projects. You can view my <Link href="/#/experience" underline="none">past work experiences</Link> such as <Link href="https://www.uplift.com/" rel="noopener" target="_blank" underline="none">Uplift</Link>, <Link href="https://horizn.com/" rel="noopener" target="_blank" underline="none">Horizn</Link> and <Link href="https://www.ibm.com/ca-en" rel="noopener" target="_blank" underline="none">IBM</Link> in addition to <Link href="/#/projects" underline="none">past & current side projects</Link> such as <Strong>WZClot</Strong> and <Strong>Flock</Strong>!
              </Typography>
              <Typography variant="body1" component="div">
                Outside of programming, I follow Formula 1 and baseball closely, and I am always looking for new things to get involved with. Feel free to reach out to me!
              </Typography>
              <Typography variant="h5" component="div" sx={{mt: 2}}>Skills</Typography>
              <Grid container direction='row' spacing={1}>
                {skills.map((skill: string) =>
                  <Grid item key={skill}>
                    <Chip label={skill} variant="filled" color="primary" />
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6} display='flex' sx={{ justifyContent: 'center', mt: 2 }}>
            <img
              style={{borderRadius: 20}}
              src={jr}
              alt="Justin Reiter"
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
              <Link href="https://www.student.cs.uwaterloo.ca/~jdreiter/ReiterResume-4A.pdf" target="_blank" rel="noreferrer" underline="none">
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
