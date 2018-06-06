import * as React from 'react';
import { Component } from 'react';
import { GetData } from './data';
import ProductMenu from './ProductMenu';
import { Product } from './Models/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProductContainer from './ProductContainer';
import { RouteComponentProps } from 'react-router';

interface PropsFromUrl extends RouteComponentProps<{ productName: string }> { }

class ProductItem extends Component<PropsFromUrl, {}> {
  render(): JSX.Element {
    const { productName } = this.props.match.params;
    const product = GetData().filter(p => p.name === productName)[0];

    return <ProductContainer product={product} />;
  }
}

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
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 4 TypeScript - Add router to an app</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} />
          <Router>
            <div>
              <Route exact={true} path='/' render={p => (<h1>Default</h1>)} />
              <Route path='/products/:productName' component={ProductItem} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;