import React, {Component} from 'react'
import {Redirect} from "react-router-dom";
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from "./Product";

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products
        }
    }

    render() {
        let product = this.state.products.filter(product => product['name'].split(' ').join('') === this.props.match.params.product)[0];
        if (!product) {
            return <Redirect to="/"/>
        }
        return <div className='product-container'>
            <Product product={product} />
        </div>
    }
}

export default ProductContainer