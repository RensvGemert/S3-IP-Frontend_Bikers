import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../index.css';
import ProductCardCrud from './ProductCardCrud';
import ProductCard from './ProductCard';

const Products = () => {

  const admin = localStorage.getItem('isAdmin');
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(json => {
        setProductItems(json)
      });
  }, []);

  if(admin !== "true"){
  return (
      <div className='grid'>
        {
          productItems.map(product => {
            return <ProductCard key={product.productId} product={product}/>
          }         
          )
        }
      </div>
  );
 } 
 
 else {
  return (
    <>
    {console.log(productItems)}
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
}

export default Products;