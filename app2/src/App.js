import React, {Component} from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { products: data.products};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.setState({ products: [...this.state.products, { name: this.state.name, description: this.state.description}]});
        console.log(this.state.products);
        event.preventDefault();
    }

    removeProduct(productName) {
        this.setState({ products: this.state.products.filter(product => product.name !== productName)});
    }

    render() {
        return <div className="App">
            <div className="App-header">
                <h2>Kata 2- Add and remove objects</h2>
            </div>
            <div className='add-product'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='products-container'>
                <Products products={this.state.products} handleRemove={this.removeProduct}/>
            </div>
        </div>
    }
}

export default App
