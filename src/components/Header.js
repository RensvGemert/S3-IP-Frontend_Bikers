import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { user, isAuthenticated } = useAuth0();


  if(isAuthenticated) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#5c785a'}}>
          <Typography style={{textTransform: 'uppercase', paddingRight: '30px'}}>Bikers</Typography>
          <Button color='inherit' href='/products'>Products</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>       
          </Typography>        
          <Button href='/profile' style={{fontSize: '16px', color: 'black', textTransform: 'lowercase'}}>{ user.email }</Button> 
          <Button color="inherit"><LoginButton/> <LogoutButton /></Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
  } 

  return(
    <Box>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#5c785a'}}>
          <Typography style={{textTransform: 'uppercase', paddingRight: '30px'}}>Bikers</Typography>
          <Button color='inherit' href='/products'>Products</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>       
          </Typography>        
          <Button color="inherit"><LoginButton/> <LogoutButton /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}