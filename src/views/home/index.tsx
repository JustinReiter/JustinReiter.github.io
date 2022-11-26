import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import jr from "../../assets/JustinReiter_BigSur_cropped-min.jpg";
import { FC, ReactNode } from "react";

const skills = [
  "JavaScript",
  "Python",
  "C++",
  "TypeScript",
  "SQL",
  "NoSQL",
  "GCP",
  "AWS",
  "Git",
  "Bash",
];

const frameworks = ["React", "Redux", "Django", "Backbone"];

interface StrongProps {
  children: ReactNode;
}

const Strong: FC<StrongProps> = ({ children }) => (
  <span style={{ fontWeight: "bold" }}>{children}</span>
);

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <Grid
          container
          xs={12}
          display="flex"
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Hi! I am Justin Reiter
              </Typography>
              
              <Typography
                variant="body1"
                component="div"
                sx={{ pt: 2 }}
              >
                Currently I am working for{" "}
                <Link
                  href="https://www.splunk.com/"
                  rel="noopener"
                  target="_blank"
                  underline="none"
                >
                  Splunk
                </Link>{" "} as a SWE Intern in the Bay area.
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ pt: 1 }}
              >
                I am a passionate developer that is always looking for new
                challenges. I have previously worked as a{" "}
                <Strong>full-stack developer</Strong> and continuously
                experiment with new technologies on side projects. You can view
                my{" "}
                <Link href="/#/experience" underline="none">
                  past work experiences
                </Link>{" "}
                such as{" "}
                <Link
                  href="https://www.uplift.com/"
                  rel="noopener"
                  target="_blank"
                  underline="none"
                >
                  Uplift
                </Link>
                ,{" "}
                <Link
                  href="https://horizn.com/"
                  rel="noopener"
                  target="_blank"
                  underline="none"
                >
                  Horizn
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.ibm.com/ca-en"
                  rel="noopener"
                  target="_blank"
                  underline="none"
                >
                  IBM
                </Link>.
              </Typography>
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Interests
              </Typography>
              <Typography variant="body1" component="div">
                <List>
                  <ListItem>
                    🏎 Formula 1 - Unfortunately a Ferrari fan{" "}
                  </ListItem>
                  <ListItem>⚾️ Baseball - Go Jays!</ListItem>
                  <ListItem sx={{ display: "block"}}>
                    🎧 Podcasts - Current favourite is&nbsp;
                    <Link
                      href="https://darknetdiaries.com/"
                      rel="noopener"
                      target="_blank"
                      underline="none"
                    >
                      Darknet Diaries
                    </Link>
                  </ListItem>
                  <ListItem sx={{ display: "block"}}>
                    🧑‍💻 Side projects - I am always busy with new projects. Currently working on&nbsp;
                    <Link
                      href="https://github.com/brendanfly/wzclot"
                      rel="noopener"
                      target="_blank"
                      underline="none"
                    >
                      WZClot
                    </Link> (a Django platform to create richer events for a Risk-like game,&nbsp;
                    <Link
                      href="https://www.warzone.com/"
                      rel="noopener"
                      target="_blank"
                      underline="none"
                    >
                      Warzone
                    </Link>
                    ) and&nbsp;
                    <Link
                      href="https://github.com/JustinReiter/wombat-symx"
                      rel="noopener"
                      target="_blank"
                      underline="none"
                    >
                      Wombat SymX
                    </Link>
                    &nbsp;(a symbolic execution engine for Rust as my fourth year capstone project).
                  </ListItem>
                </List>
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            sx={{ justifyContent: "center", mt: 2 }}
            order={{ xs: 1, md: 2 }}
          >
            <img
              style={{ borderRadius: 20, height: "500px" }}
              src={jr}
              alt="Justin Reiter"
            />
          </Grid>
        </Grid>
        <CardContent>
          <Grid container xs={12} spacing={1}>
            <Typography variant="h5" component="div" sx={{ mt: 2, pb: 1 }}>
              Skills
            </Typography>
            <Grid container direction="row" spacing={1} sx={{ p: 1 }}>
              {skills.map((skill: string) => (
                <Grid item key={skill}>
                  <Chip label={skill} variant="filled" color="primary" />
                </Grid>
              ))}
              {frameworks.map((framework: string) => (
                <Grid item key={framework}>
                  <Chip label={framework} variant="filled" color="secondary" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container xs={12} spacing={1}>
            <Grid item>
              <Link
                href="https://github.com/JustinReiter"
                target="_blank"
                rel="noreferrer"
                underline="none"
              >
                <Button variant="outlined" startIcon={<GitHubIcon />}>
                  @JustinReiter
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/justin-reiter/"
                target="_blank"
                rel="noreferrer"
                underline="none"
              >
                <Button variant="outlined" startIcon={<LinkedInIcon />}>
                  @Justin-Reiter
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.student.cs.uwaterloo.ca/~jdreiter/JustinReiterResume-4B.pdf"
                target="_blank"
                rel="noreferrer"
                underline="none"
              >
                <Button variant="outlined" startIcon={<ArticleIcon />}>
                  Resume
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="mailto:jdreiter@uwaterloo.ca" underline="none">
                <Button variant="outlined" startIcon={<EmailIcon />}>
                  Email
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
