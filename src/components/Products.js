import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import '../index.css';
import { useAuth0 } from '@auth0/auth0-react';

const Products = () => {

  const [productItems, setProductItems] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(json => {
        setProductItems(json)
      });
  }, []);

  if (isAuthenticated && user.email === 'renscodetest@gmail.com') {
    return (
      <>
        <Button href="/product/create">Add Product</Button>
        <div className='grid'>
          {
            productItems.map(product => (
              <div key={product.productId}>
                <Card sx={{ maxWidth: 400, margin: '50px' }}>

                  <CardActions style={{ justifyContent: 'center' }}>
                    <Button href={`/product/details/${product.productId}`} size="small">Info</Button>
                    <Button href={`/product/update/${product.productId}`} size="small"><EditIcon /></Button>
                    <Button href={`/product/delete/${product.productId}`} style={{ color: 'red' }} size="small"><RemoveCircleOutlineIcon /></Button>
                  </CardActions>

                  <CardMedia
                    component="img"
                    image={product.productImageUrl}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ height: 100 }}>
                      {product.productTitle}
                    </Typography>

                    <Typography variant="body3" color="text.secondary">
                      {product.productPrice}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card>
              </div>
            ))
          }
        </div>
      </>
    );
  }
  return (
    <>
      <div className='grid'>
        {
          productItems.map(product => (
            <div key={product.productId}>
              <Card sx={{ maxWidth: 400, margin: '50px' }}>

                <CardActions style={{ justifyContent: 'center' }}>
                  <Button href={`/product/details/${product.productId}`} size="small">Info</Button>
                </CardActions>

                <CardMedia
                  component="img"
                  image={product.productImageUrl}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ height: 100 }}>
                    {product.productTitle}
                  </Typography>

                  <Typography variant="body3" color="text.secondary">
                    {product.productPrice}
                  </Typography>
                </CardContent>
                <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
                  <Button size="small">Add to Cart</Button>
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