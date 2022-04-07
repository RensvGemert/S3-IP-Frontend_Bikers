import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../index.css";


const ProductDelete = () => {

    function DeleteMethod() {
        const { id } = useParams()
        useEffect(() => {
            fetch(`http://localhost:8080/api/products/delete/${id}`, { method: 'DELETE' })
            // .then(() => setStatus('Delete successful'));
        }, []);
    }

    return (
        <>
            <h1>Are you sure?</h1>
            <Button onClick={DeleteMethod()}>Delete</Button>
            <Button href="/products">Cancel</Button>
        </>
    );

}
export default ProductDelete;