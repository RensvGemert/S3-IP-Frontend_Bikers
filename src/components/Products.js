import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../index.css';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@mui/material/CircularProgress';
import ProductCardCrud from './ProductCardCrud';
import ProductCard from './ProductCard';

const Products = () => {

  const { isLoading } = useAuth0();
  const [productItems, setProductItems] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(json => {
        setProductItems(json)
      });
  }, []);

  // If site is loading render a "loading.."
  if (isLoading) {
    return (
      <div style={{ fontSize: '20px', textAlign: 'center', justifyContent: 'center', paddingTop: '40vh' }}>
        <CircularProgress color='success' />
      </div>
    )
  }


  // if user is authenticated and admin
  if (isAuthenticated && user.email === 'renscodetest@gmail.com') {
    return (
      <>
        <Button href="/product/create">Add Product</Button>
        <div className='grid'>
          {
            productItems.map(product => {
              return <ProductCardCrud key={product.productId} product={product} />
            }
            )
          }
        </div>
      </>
    );
  }

  // if regular user
  return (
    <>
      <div className='grid'>
        {
          productItems.map(product => {
            return <ProductCard key={product.productId} product={product}/>
          }         
          )
        }
      </div>
    </>
  );
}


export default Products;