import { useState } from 'react';
import {
  AppBar,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Grid,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const pages = [
  {
    name: 'About',
    path: '#home'
  },
  {
    name: 'Education',
    path: '#education'
  },
  {
    name: 'Work Experience',
    path: '#experience'
  },
  {
    name: 'Projects',
    path: '#projects'
  }
]

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundImage: "linear-gradient(to right, red , yellow)",
    },
    color: "rgb(167, 202, 237)",
  }
});

interface HeaderProps {
  focusedDiv: string;
}

const Header = ({focusedDiv}: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const classes = useStyles();

  let progressPercent = 10;
  if (focusedDiv == "education") {
    progressPercent = 35;
  } else if (focusedDiv == "work_experience") {
    progressPercent = 60;
  } else if (focusedDiv == "projects") {
    progressPercent = 100;
  }
  

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{xs: 'flex', flexDirection: { xs: 'row', md: 'column' }}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="justin reiter sections"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => setAnchorElNav(null)}>
                  <Link to={page.path} key={index} style={{ textDecoration: 'none', color: '#1976d2' }} reloadDocument>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/#home" style={{ textDecoration: 'none', color: 'white' }} reloadDocument>
              Justin Reiter
            </Link>
          </Typography>
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
            {pages.map((page, index) =>(
              <Link to={page.path} key={index} style={{ textDecoration: 'none' }} reloadDocument>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            </Box>
            <Grid md item width="100%">
              <LinearProgress className={classes.root} sx={{height: 12, mb: 1}} variant="determinate" value={progressPercent}/>
            </Grid>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
