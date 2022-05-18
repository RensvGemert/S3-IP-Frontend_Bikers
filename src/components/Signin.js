import React, { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = () => { 
      axios.post('http://localhost:8080/api/users/signin', {
      email,
      password
    }).then()};

    return (
        <div className='ProductCreate'>
            <Form className='rounded p-5 p-5'>
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