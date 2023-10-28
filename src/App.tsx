import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './component/Product';
import Products from './component/Products';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='*' element={<h2>Not Found!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
