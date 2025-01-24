import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './Routes.js';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    // <h1 className='bg-black font-bold text-8xl text-white'> tailwindcss</h1>
  );
};


export default App;