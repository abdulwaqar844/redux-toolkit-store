import React from 'react';
import { Product } from './features/counter/Product';
import {Basket} from "./features/counter/Basket"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>T-Shirt Store</h1>
        <h3>Developed Using Redux Toolkit</h3>
        <Product />
        <Basket/>
        </header>
    </div>
  );
}

export default App;
