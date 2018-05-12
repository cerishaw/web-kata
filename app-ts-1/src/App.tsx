import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import { Product } from './Models/Product';
import ProductList from './ProductList';

class App extends Component {
  render(): JSX.Element {
    const data: Product[]  = GetData();

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
        </div>
        <p className='App-intro'/>
        <ProductList data={data} />
      </div>);
  }
}

export default App;