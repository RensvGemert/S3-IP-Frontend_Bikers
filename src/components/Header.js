import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {

  const userId = localStorage.getItem('userId');

  if(userId !== null){
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#5c785a' }}>
          <Typography style={{ textTransform: 'uppercase', paddingRight: '30px' }}>Bikers</Typography>
          <Button color='inherit' href='/products'>Products</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Button color='inherit' href='/logout' >Logout</Button>
          <Button color='inherit' href='/profile'>Profile</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
 }

 if(userId === null){
 return (
  <Box>
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: '#5c785a' }}>
        <Typography style={{ textTransform: 'uppercase', paddingRight: '30px' }}>Bikers</Typography>
        <Button color='inherit' href='/products'>Products</Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>

        <Button color='inherit' href='/signup'>Signup</Button>
        <Button color='inherit' href='/signin'>Signin</Button>

      </Toolbar>
    </AppBar>
  </Box>
);
}

}