import React from 'react';
import dotenv from 'dotenv';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './components/header';
import Footer from './components/footer';
import BreadCrumb from './components/breadcrumb';
import Product from './components/product';
import './grid.css';

function App() {
  dotenv.config();
  return (
      <div className="App">
        <Header />
        <BreadCrumb />
        <Product />
        <Footer />
      </div>
  );
}

export default App;
