import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductCreate from './ProductCreate';
import ProductDetails from './ProductDetails';
import ProductDelete from './ProductDelete';
import ProductUpdate from './ProductUpdate';
import Products from './Products';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Navigation() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/product/details/:id' exact element={ <ProductDetails/>} /> 
                    <Route path='/product/create' exact element={<ProductCreate />} />
                    <Route path='/product/delete/:id' exact element={<ProductDelete />} />
                    <Route path='/product/update/:id' exact element={<ProductUpdate />} />                         
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;

