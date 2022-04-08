import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../index.css";


const ProductDelete = () => {
    const { id } = useParams()

    const deleteProduct = () => {
        fetch(`http://localhost:8080/api/products/delete/${id}`, { method: 'DELETE' })
    };
    
    return (
        <>
            <h1>Are you sure?</h1>
            <Button onClick={deleteProduct}  style={{ color: 'red' }} >Delete</Button>
            <Button href="/products">Cancel</Button>
        </>
    );

}
export default ProductDelete;