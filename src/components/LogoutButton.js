import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <Button onClick={() => logout()} style={{color: 'white'}} href='/'>Logout</Button>
            </>
        )
    )
}

export default LogoutButton