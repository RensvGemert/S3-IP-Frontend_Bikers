import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_admin, setAdmin] = useState('');

    const createUser = () => {
        axios.post(`http://localhost:8080/api/users/signup`, {
            name,
            email,
            password,
            is_admin
        })
    }


    return (
        <div className='ProductCreate'>
            <Form className='rounded p-5 p-5'>
                <h1>Signup</h1>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Name:</Form.Label>               
                <Form.Control 
                    type="text" 
                    placeholder="name"
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                </Form.Group>
            
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

                <Form.Group className="mb-3" controlId="formBasicImageUrl">
                <Form.Label>Admin?</Form.Label>
                <Form.Control 
                    type="checkbox" 
                    autoComplete='off'
                    onChange={(event) => {
                        setAdmin(1);
                    }}
                />
                </Form.Group>

                <Button 
                    variant='success'
                    onClick={createUser}
                    type="submit">Signup            
                </Button>

                <Link to="/products" style={{marginLeft: 12}}className="btn btn-danger">Cancel</Link>
            </Form>
        </div>
    )
}

export default SignUp;