import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './Routes.js';
import { SignupPage } from './Routes.js';
import { Home } from './Routes.js';
import { CreateProduct } from './Routes.js';
import { MyProducts } from './Routes.js';
import "./App.css";


// import SignupPage from './pages/SignupPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/myproducts' element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
    // <h1 className='bg-black font-bold text-8xl text-white'> tailwindcss</h1>
  );
};


export default App;