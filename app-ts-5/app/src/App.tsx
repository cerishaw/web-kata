import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import { GetData } from './data';
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
    this.state = { products: [] };
    this.productDeleted = this.productDeleted.bind(this);
  }

  productDeleted(products: Product[]): void {
    this.setState({ products });
  }

  componentDidMount() {
    GetData().then(products => this.setState({ products }));
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
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
