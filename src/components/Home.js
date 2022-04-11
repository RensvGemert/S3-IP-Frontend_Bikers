import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function Home() {

    const {user, isAuthenticated} = useAuth0();

    if(isAuthenticated) {
    return (
        isAuthenticated && (
        <>
            <h1>Welcome { user.name }</h1>
        </>
        )
      );
    }

    if(!isAuthenticated){
        <>
            <h1>Welcome</h1>
        </>
    }
}

export default Home;