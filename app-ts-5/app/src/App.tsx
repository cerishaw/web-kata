import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props {
}

interface State {
    products: Product[];
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {products: []};
        fetch('/api/products/get').then(function (response: Response) {
            return response.json();
        }).then((json) => this.setState({products: json}));

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(product: string) {
        fetch('/api/products/delete/' + product, {method: 'DELETE'}).then(function (response: Response) {
            return response.json();
        }).then((json) => this.setState({products: json}));
    }

    render(): JSX.Element {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
                </div>
                <div className='products-container'>
                    <ProductMenu products={this.state.products} deleteProduct={this.deleteProduct}/>
                    <Route
                        exact={true}
                        path='/products/:productName'
                        render={(props) => <ProductContainer {...props} products={this.state.products}/>}
                    />
                </div>
            </div>
        );
    }
}

export default App;
