import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import SignUpPage from './pages/SignupPage';
import "./App.css";

import Cart from './pages/Cart';
import Home from './pages/Home'; 
import CreateProduct from './pages/CreateProduct';
// import MyProduct from './pages/MyProducts';
import MyProducts from './pages/MyProducts';
import ProductDetails from './pages/productDetails';
import Profile from "./pages/profile.jsx";
const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-products' element={<MyProducts />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;