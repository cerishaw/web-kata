import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.css'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
        <Link to={"/products/" + name.split(' ').join('')}>
            <div className='name'>{name}</div>
        </Link>
    </div>
  }
}

export default ProductItem