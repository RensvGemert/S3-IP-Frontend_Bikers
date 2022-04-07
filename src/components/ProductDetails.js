import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../index.css";

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/api/products/details/${id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })
    }, [`http://localhost:8080/api/products/details/${id}`]);

    if (product) {
        return (
            <div className="gridDetails">
                {
                    <div className='details-left'>
                    <div key={product.productId}>
                        <img src={product.productImageUrl} className='product-image' alt=''></img>
                        <h1 className='content'> {product.productTitle} </h1>
                    </div>
                    </div>
                }
                {
                    <div className='details-right'>
                    <div style={{ backgroundColor: '#f0f0f0', alignSelf: 'start' }}>
                        <h1>Description</h1>
                        <hr />
                        <p className='descriptiontext'> {product.productDescription} </p>

                        <h1>Price</h1>
                        <hr />
                        <p className='descriptiontext'>{product.productPrice}</p>
                        <Button>Add To Cart</Button>
                    </div>
                    </div>
                }
            </div>
        )
    }

    return (
        <div>
            <h1>Product could not be found!</h1>
        </div>
    )
}

export default ProductDetails;

