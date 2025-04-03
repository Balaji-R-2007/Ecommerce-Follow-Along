import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import SignUpPage from './pages/SignupPage';
import "./App.css";
import CreateAddress from "./pages/createAddress";
import Cart from './pages/Cart';
import Home from './pages/Home'; 
import CreateProduct from './pages/CreateProduct';
// import MyProduct from './pages/MyProducts';
import MyProducts from './pages/MyProducts';
import ProductDetails from './pages/productDetails';
import Profile from "./pages/profile.jsx";
import Myorder from "./pages/Myorder.jsx";
import SelectAddress from './pages/SelectAddress.jsx';
import OrderConfirmation from "./pages/OrderConfirmation";
const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myorders" element={<Myorder/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-products' element={<MyProducts />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-address" element={<CreateAddress />} />
      <Route path="/select-address" element={<SelectAddress />} />    
       <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;