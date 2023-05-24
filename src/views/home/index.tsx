import {
  Button,
  Card,
  CardActions,
  CardContent,
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
import { useEffect, useState } from "react";
import SnapScrollContainer from "../components/SnapScrollContainer";

const TITLE_TEXT = "Hi! I am Justin Reiter!";

interface HomeProps {
  setFocusedDiv: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({setFocusedDiv}: HomeProps) => {
  const [titleText, setTitleText] = useState<string>("Hi!");
  const [cursor, setCursor] = useState<string>("|");
  let initialDelay = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleText((titleText) => {
        if (initialDelay < 9) {
          initialDelay++;
          return titleText;
        }
        if (titleText == TITLE_TEXT) {
          clearInterval(timer);
          return TITLE_TEXT;
        }

        if (TITLE_TEXT.at(titleText.length) == " ") {
          return titleText + TITLE_TEXT.at(titleText.length) + TITLE_TEXT.at(titleText.length+1);
        } else {
          return titleText + TITLE_TEXT.at(titleText.length);
        }
      })
    }, 100);

    const cursorTimer = setInterval(() => {
      setCursor((cursor) => cursor ? "" : "|");
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);


  return (
    <SnapScrollContainer style={{}} id="home" nextId="education">
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <Grid
          container
          xs={12}
          display="flex"
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        >
          <Grid item xs={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {titleText+cursor}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ pt: 1 }}
              >
                I am a passionate developer that is always looking for new
                challenges and projects. My most recent work experience was working at{" "}
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
                You can view my past work experiences and projects below!
              </Typography>
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Interests
              </Typography>
              <Typography variant="body1" component="div">
                <List sx={{mb: -5}}>
                  <ListItem>
                    🏎 Formula 1 - unfortunately a Ferrari fan{" "}
                  </ListItem>
                  <ListItem>⚾️ Baseball - go Jays!</ListItem>
                  <ListItem sx={{ display: "block"}}>
                    🎧 Podcasts - here are my favourites:
                    <List sx={{ml:6, listStyleType: 'disc'}} dense={true}>
                      <ListItem sx={{display: 'list-item', pl: 1}}>
                        <Link
                          href="https://darknetdiaries.com/"
                          rel="noopener"
                          target="_blank"
                          underline="none"
                        >
                          Darknet Diaries
                        </Link> - follows stories from the dark side of the Internet
                      </ListItem>
                      <ListItem sx={{display: 'list-item', pl: 1}}>
                        <Link
                          href="https://www.behindthebastards.com"
                          rel="noopener"
                          target="_blank"
                          underline="none"
                        >
                          Behind the Bastards
                        </Link> - exposes the bizarre realities behind the worst humans in history
                      </ListItem>
                      <ListItem sx={{display: 'list-item', pl: 1}}>
                        <Link
                          href="https://www.formula1.com/en/latest/tags.beyond-the-grid.63HGi6Q0grEg1ToZBtPNQ9.html#default"
                          rel="noopener"
                          target="_blank"
                          underline="none"
                        >
                          F1: Beyond the Grid
                        </Link> - interviews F1 drivers, engineers and more about their journey & experiences
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem sx={{ display: "block"}}>
                    🧑‍💻 Side projects - always looking for new projects
                  </ListItem>
                </List>
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            display="flex"
            sx={{ justifyContent: "center", mt: 2 }}
            order={{ xs: 1, md: 2 }}
          >
            <img
              style={{ borderRadius: 20, height: 450 }}
              src={jr}
              alt="Justin Reiter"
            />
          </Grid>
        </Grid>
        {/* <CardContent>
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
        </CardContent> */}
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
    </SnapScrollContainer>
  );
};

export default Home;
