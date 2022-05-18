import React, { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

        const login = async () => { 
            const request = new Request('http://localhost:8080/api/users/signin', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
        })

        const response = await fetch(request);
        const data = await response.json();    

        localStorage.setItem('userId', data.userId);
        localStorage.setItem('isAdmin', data.is_admin);
    }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
      };

   
      
    
    return (
        <div className='ProductCreate'>
            <Form className='rounded p-5 p-5' onSubmit={handleSubmit}>
                <h1>Signin</h1>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="email" 
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}                    
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type='password'
                    placeholder='password'
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                </Form.Group>

                <Button 
                    variant='success'
                    onClick={login}
                    type="submit">Signin            
                </Button>

                <Link to="/products" style={{marginLeft: 12}}className="btn btn-danger">Cancel</Link>
            </Form>
        </div>
    )
}

export default Signin;