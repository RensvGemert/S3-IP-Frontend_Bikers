import React from 'react';

function Home() {

    const email = localStorage.getItem('email');

    return (  
        <h1>Welcome { email }</h1>
      );
    }

export default Home;