import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import { getProducts, addProduct, removeProduct } from './data';
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
    this.state = { products: [] };
  }

  async componentDidMount() {
    this.populateProducts();
  }

  removeProduct = async (name: string) => {
    await removeProduct(name);
    this.populateProducts();
  }

  addProduct = async (product: Product) => {
    await addProduct(product);
    this.populateProducts();
  }

  async populateProducts() {
    const products = await getProducts();
    this.setState({ products: products });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div className='products-container'>
          <ProductMenu onAdd={this.addProduct} onRemove={this.removeProduct} products={this.state.products} />
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
