import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import { GetData, DeleteData, AddData } from './data';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props { }

interface State {
  products: Product[];
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = {products: [], newProductDescription: '', newProductName: ''};
    this.fetchProducts = this.fetchProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.productNameChanged = this.productNameChanged.bind(this);
    this.productDescriptionChanged = this.productDescriptionChanged.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.fetchProducts();
  }

  fetchProducts() {
    GetData().then(products => {
      this.setState({products});
    });
  }

  removeProduct(productName: string) {
    DeleteData(productName)
    .then(response => {
      if (response.IsOk) {
        const remainingProducts = this.state.products.filter(p => p.name !== productName);
        this.setState({products: remainingProducts});
      }
    })
    .catch(err => alert(err));
  }

  addProduct() {
    if (!this.state.newProductName) {
      alert('Product name must not be empty');
      return;
    }
    var existing = this.state.products.filter(p => p.name === this.state.newProductName);
    if (existing && existing.length) {
      alert('Product already exists');
      return;
    }
    const product = {name: this.state.newProductName, description: this.state.newProductDescription};

    AddData(product)
    .then(response => {
      if (response.IsOk) {
        const products = this.state.products;
        products.push(product);
        this.setState({products: products, newProductDescription: '', newProductName: ''});
      }
    })
    .catch(err => alert(err));
  }

  productNameChanged(e: React.FormEvent<HTMLInputElement>) {
    this.setState({newProductName: e.currentTarget.value});
  }

  productDescriptionChanged(e: React.FormEvent<HTMLInputElement>) {
    this.setState({newProductDescription: e.currentTarget.value});
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div>
          Product name:
          <input value={this.state.newProductName} onChange={this.productNameChanged} />

          Product description:
          <input value={this.state.newProductDescription} onChange={this.productDescriptionChanged}/>

          <button onClick={this.addProduct} >Add</button>
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
