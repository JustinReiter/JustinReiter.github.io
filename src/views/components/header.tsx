import react from 'react';
import {
  AppBar,
  Box,
} from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        Justin Reiter
      </Box>
    </AppBar>
  );
};

export default Header;
