import React, {Component} from 'react'
import './Products.css'

class Products extends Component {
    render() {
        return <div className="product-container">
            {this.props.items.products.map((product) => <Product name={product.name} free={product.free} new={product.new}/>)}
        </div>
    }
}

class Product extends Component {
    render() {
        return <div className="product">
            <p className="product-title">{this.props.name}</p>
            <p>{this.props.free ? 'Free!' : ''}</p>
            <p>{this.props.new ? 'New!' : ''}</p>

            </div>
    }
}

export default Products;