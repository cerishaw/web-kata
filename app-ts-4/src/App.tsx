import * as React from 'react';
import { Component } from 'react';
import { GetData } from './data';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

interface Props { }

interface State {
  products: Product[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { products: GetData() };
  }

  render(): JSX.Element {
    return (
      <Router>
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 4 TypeScript - Add router to an app</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} />
          <Route path='/products/:productName' component={ProductContainer}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;