import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductCreate from './ProductCreate';
import ProductDetails from './ProductDetails';
import ProductDelete from './ProductDelete';
import ProductUpdate from './ProductUpdate';
import Products from './Products';
import Profile from './Profile';
import Signup from './Signup';
import Logout from './Logout';
import Signin from './Signin';

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

                    <Route path='/signin' exact element={<Signin />} />         
                    <Route path='/signup' exact element={<Signup />} />    
                    <Route path='/profile' exact element={<Profile />} />   
                    <Route path='/logout' exact element={<Logout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;

