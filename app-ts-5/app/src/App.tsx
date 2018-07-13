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
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleProductDescChange = this.handleProductDescChange.bind(this);
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

  handleProductNameChange(event: React.FormEvent<HTMLInputElement>): void {
    const productName = event.currentTarget.value;
    let { newProduct } = this.state;
    newProduct.name = productName;
    this.setState({ newProduct: newProduct });
  }

  handleProductDescChange(event: React.FormEvent<HTMLInputElement>): void {
    const productDescription = event.currentTarget.value;
    let { newProduct } = this.state;
    newProduct.description = productDescription;
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
                name='productName'
                value={this.state.newProduct.name}
                onChange={this.handleProductNameChange}
              />
            </label>
            <label>Product description:
              <input
                name='productDescription'
                value={this.state.newProduct.description}
                onChange={this.handleProductDescChange}
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
