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
    newProductName: string;
    newProductDescription: string;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            products: [],
            newProductName: '',
            newProductDescription: ''
        };
        fetch('/api/products/get').then(function (response: Response) {
            return response.json();
        }).then((json) => this.setState({products: json}));

        this.deleteProduct = this.deleteProduct.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            newProductName: event.currentTarget.value
        });
    }

    onDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            newProductDescription: event.currentTarget.value
        });
    }

    onSubmit(event: React.FormEvent<HTMLButtonElement>): void {
        event.preventDefault();

        let newProduct = {
            name: this.state.newProductName,
            description: this.state.newProductDescription
        };

        fetch('api/products/add', {method: 'POST', body: JSON.stringify(newProduct),  headers: {
            'Content-Type': 'application/json'}
        }).then(function (response: Response) { return response.json();
        }).then(json => this.setState({products: json}));
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

                <div className='add-product'>
                    <form>
                        <label>Product Name:
                            <input
                                name='newProductName'
                                value={this.state.newProductName}
                                onChange={this.onNameChange}
                            />
                        </label>
                        <label>Product Description:
                            <input
                                name='newProductDescription'
                                value={this.state.newProductDescription}
                                onChange={this.onDescriptionChange}
                            />
                        </label>
                        <button type='submit' onClick={this.onSubmit}>Submit</button>
                    </form>
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
