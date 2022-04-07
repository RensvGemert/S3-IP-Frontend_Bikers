import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


const ProductUpdate = () => {
    const { id } = useParams();
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');

    const updateProduct = () => {
        axios.put(`http://localhost:8080/api/products/update/${id}`, {
            productTitle,
            productDescription,
            productPrice,
            productImageUrl
        },
            {
                headers: { "Content-Type": "application/json" }
            }
        )
    }

    return (
        <>
            <Form className='rounded p-5 p-5'>
                <h1>Update product</h1>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete='off'
                        onChange={(event) => {
                            setProductTitle(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete='off'
                        onChange={(event) => {
                            setProductDescription(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        step=".01"
                        autoComplete='off'
                        onChange={(event) => {
                            setProductPrice(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete='off'
                        onChange={(event) => {
                            setProductImageUrl(event.target.value);
                        }}
                    />
                </Form.Group>

                <Button
                    onClick={updateProduct}
                    variant="success"
                    to="/products"
                    type="submit">Update
                </Button>

                <Button href="/products" style={{ marginLeft: 12 }} className="btn btn-danger">Cancel</Button>
            </Form>
        </>
    );
}

export default ProductUpdate;