import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import { GetData, DeleteData } from './data';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props { }

interface State {
  products: Product[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = {products: []};
    this.fetchProducts = this.fetchProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.fetchProducts();
  }

  fetchProducts() {
    GetData().then(products => {
      this.setState({products});
    });
  }

  removeProduct(productName: string) {
    const promise = DeleteData(productName);
    promise.then(response => {
      if (response.IsOk) {
        GetData().then(products => {
          this.setState({products});
        });
      }
    });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} removeProduct={this.removeProduct} />
          <Route
            exact={true}
            path='/products/:productName'
            render={(props) => <ProductContainer {...props} products={this.state.products} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
