import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../index.css';

const Products = () => {

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(json => {
        setProductItems(json)
      });
  }, []);


  return (
    <>
      <Button href="/product/create">Add Product</Button>
      <div className='grid'>
      {
      productItems.map(product => (  
        <div key={product.productId}>   
        <Card sx={{ maxWidth: 400, margin: 10 }}>
          <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Button href={`/product/update/${product.productId}`} style={{ color: 'black' }} size="small">Edit</Button>
            <Button href={`/product/delete/${product.productId}`} style={{ color: 'red' }} size="small">Delete</Button>
          </CardActions>
          <CardMedia
            component="img"
            image={product.productImageUrl}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.productTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product.productPrice}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button href={`/product/details/${product.productId}`} size="small">Details</Button>
          </CardActions>
        </Card>
          </div>
          ))
          }
      </div>
    </>
  );
}

export default Products;