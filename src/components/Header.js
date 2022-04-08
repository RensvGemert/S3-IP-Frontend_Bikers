import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#5c785a'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color='inherit' href='/products'>Products</Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bikers
          </Typography>
          <Button color="inherit" href='/signin'>Sign In</Button>
          <Button color="inherit" href='/signup'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}