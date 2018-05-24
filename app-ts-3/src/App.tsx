import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import ProductsComponent from './ProductsComponent';
import { Product } from './Models/Product';

const data = GetData();

interface AppProps { }

interface AppState {
  products: Product[];
  productToAdd: Product | undefined;
  productNameToFilter: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { products: data, productToAdd: undefined, productNameToFilter: '' };

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this);
    this.handleProductFilterChange = this.handleProductFilterChange.bind(this);
  }

  handleProductNameChange(event: React.FormEvent<HTMLInputElement>) {
    const name = event.currentTarget.value;
    const productToAdd = Object.assign({}, this.state.productToAdd, { name });

    this.setState({ productToAdd });
  }

  handleProductDescriptionChange(event: React.FormEvent<HTMLInputElement>) {
    const description = event.currentTarget.value;
    const productToAdd = Object.assign({}, this.state.productToAdd, { description });

    this.setState({ productToAdd });
  }

  handleProductFilterChange(event: React.FormEvent<HTMLInputElement>) {
    const filterName = event.currentTarget.value;
    this.setState({ productNameToFilter: filterName });
  }

  handleAddProduct(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (this.state.productToAdd === undefined) {
      return;
    }

    const products = [...this.state.products];

    products.push(this.state.productToAdd as Product);

    this.setState({ products, productToAdd: undefined });
  }

  removeProduct(product: Product): void {

    const products = this.state.products.filter(
      (p: Product) => p.name !== product.name);

    this.setState({ products });
  }

  render(): JSX.Element {

    const filterName = this.state.productNameToFilter;
    const products = this.state.products.filter(
      prod => prod.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));
    const productName = (this.state.productToAdd && this.state.productToAdd.name) || '';
    const productDescription = (this.state.productToAdd && this.state.productToAdd.description) || '';

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 3- Filter, show and hide objects</h2>
        </div>
        <div className='filter-products'>
          <form>
            <label>filter by product name:</label>
            <input
              type='text'
              name='name'
              onChange={this.handleProductFilterChange}
            />
          </form>
        </div>
        <div className='add-product'>
          <form onSubmit={this.handleAddProduct}>
            <label>product name:</label>
            <input
              type='text'
              name='name'
              onChange={this.handleProductNameChange}
              value={productName}
            />
            <br /><br />
            <label>description:</label>
            <input
              type='text'
              name='description'
              onChange={this.handleProductDescriptionChange}
              value={productDescription}
            />
            <br /><br />
            <input type='submit' value='add product' />
          </form>
        </div>
        <div className='products-container'>
          <ProductsComponent
            products={products}
            removeProduct={this.removeProduct}
          />
        </div>
      </div>
    );
  }
}