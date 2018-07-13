import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products
    }
  }


  render() {
    console.log(this.props.match.params.product)
    return <div className='product-container'>
        {this.props.match.params.product}
    </div>
  }
}

export default ProductContainer