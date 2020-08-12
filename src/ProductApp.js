import React from 'react';
// import logo from './logo.svg';
import Product from './Product';
import ProductList from './ProductList';
import './ProductApp.css';
import Navbar from './Navbar';

function ProductApp() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default ProductApp;
