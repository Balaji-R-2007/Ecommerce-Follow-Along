import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import SignUpPage from './pages/SignupPage';
import "./App.css";
import Home from './pages/Home'; 
import CreateProduct from './pages/CreateProduct';
// import MyProduct from './pages/MyProducts';
import MyProducts from './pages/MyProducts';
const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/create-product" element={<CreateProduct />} />

      <Route path='/myproducts' element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;