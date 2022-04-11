import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <Button onClick={() => loginWithRedirect()} style={{color: 'white'}}>Login</Button>
            </>
        )
    )
}

export default LoginButton