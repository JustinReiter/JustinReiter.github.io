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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

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

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
