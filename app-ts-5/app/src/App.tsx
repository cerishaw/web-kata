import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import { GetData, AddProduct } from './data';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props { }

interface State {
  products: Product[];
  newProduct: Product;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Access the REST API instead of grabbing products from data.ts
    this.state = { products: [], newProduct: { name: '', description: '' } };
    this.productDeleted = this.productDeleted.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  productDeleted(products: Product[]): void {
    this.setState({ products });
  }

  addProduct(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    AddProduct(this.state.newProduct).then(products => this.setState({ products }));
  }

  componentDidMount() {
    GetData().then(products => this.setState({ products }));
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const propertyValue = event.currentTarget.value;
    const propertyName = event.currentTarget.name;

    let { newProduct } = this.state;
    newProduct[propertyName] = propertyValue;
    this.setState({ newProduct: newProduct });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div>
          <form onSubmit={this.addProduct}>
            <label>
              Product name:
              <input
                name='name'
                value={this.state.newProduct.name}
                onChange={this.handleInputChange}
              />
            </label>
            <label>Product description:
              <input
                name='description'
                value={this.state.newProduct.description}
                onChange={this.handleInputChange}
              />
            </label>
            <input type='submit' value='Add product' />
          </form>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} onProductDelete={this.productDeleted} />
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
