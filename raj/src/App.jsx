import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/container/Home';
import Tv from './components/container/Tv';
import Fashion from './components/container/Fashion';
import Laptop from './components/container/Laptop';
import Mobiles from './components/container/Mobiles';
import Airbuds from './components/container/Airbuds';
import './App.css';
import Products from './components/container/Allproducts';
import ProductDetails from './components/container/ProductDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/ProductDetails/:id' element={<ProductDetails />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Laptop" element={<Laptop />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Airbuds" element={<Airbuds />} />
      </Routes>
    </>
  );
}

export default App;
