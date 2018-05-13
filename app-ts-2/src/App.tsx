import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { GetData } from './data';
import { Product } from './Models/Product';

const data = GetData();

interface AppProps {
}

interface AppState {
  products: Product[];
  newProduct: Product | undefined;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      products: data,
      newProduct: undefined
    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (this.state.newProduct === undefined) {
      return;
    }

    const products = [...this.state.products];
    products.push(this.state.newProduct as Product);

    this.setState({ 
      products, 
      newProduct: undefined 
    });
  }

  handleNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const name = event.currentTarget.value;
    const newProduct = Object.assign({}, this.state.newProduct, { name });

    this.setState({ newProduct });
  }

  handleDescriptionChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const description = event.currentTarget.value;
    const newProduct = Object.assign({}, this.state.newProduct, { description });

    this.setState({ newProduct });
  }

  removeProduct = (product: Product): void => {
    const products = this.state.products.filter(
    (p: Product) => p.name !== product.name);

    this.setState({ products });
  }

  render(): JSX.Element {
    const productName = (this.state.newProduct && this.state.newProduct.name) || '';
    const productDescription = (this.state.newProduct && this.state.newProduct.description) || '';

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>
          <form onSubmit={this.handleAddProduct}>
            <label>Product Name:
              <input 
                type='text' 
                name='name' 
                onChange={this.handleNameChange}
                value={productName}
              />
            </label>
            <label>Product Description:
              <input 
                type='text' 
                name='description' 
                onChange={this.handleDescriptionChange}
                value={productDescription}
              />
            </label>
            <input type='submit' value='add product' />
          </form>
        </div>
        <div className='products-container'>
          <ProductList 
            products={this.state.products}
            removeProduct={this.removeProduct}
          />
        </div>
      </div>);
  }
}

export default App;