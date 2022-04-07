import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCreate = () => {
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');

    const createProduct = () => {
        axios.post(`http://localhost:8080/api/products/create`, {
            productTitle,
            productDescription,
            productPrice,
            productImageUrl
        })
    }

    return (
        <div className='ProductCreate'>
            <Form className='rounded p-5 p-5'>
                <h1>Create product</h1>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>               
                <Form.Control 
                    type="text" 
                    placeholder="Enter title"
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setProductTitle(event.target.value);
                    }}
                />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Description" 
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setProductDescription(event.target.value);
                    }}                    
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control 
                    type='number'
                    step=".01"
                    placeholder='0.00'
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setProductPrice(event.target.value);
                    }}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImageUrl">
                <Form.Label>Image Url:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="http://via.placeholder.com/300x300" 
                    autoComplete='off'
                    required
                    onChange={(event) => {
                        setProductImageUrl(event.target.value);
                    }}
                />
                </Form.Group>

                <Button 
                    variant='success'
                    onClick={createProduct}
                    type="submit">Create            
                </Button>

                <Link to="/products" style={{marginLeft: 12}}className="btn btn-danger">Cancel</Link>
            </Form>
        </div>
    )
}

export default ProductCreate;