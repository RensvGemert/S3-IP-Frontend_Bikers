import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <ul>
                    <h1>Profile</h1>
                    <li><img src={user.picture} alt='' /></li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                </ul>
            </>
        )
    )
}

export default Profile