import React, { Component } from 'react'

class Product extends Component {
  render() {
    return <div className='product'>
      <div className='details'>
        <div className='name'><h1>{this.props.product.name}</h1></div>
        <div className='desc'>{this.props.product.description}</div>
      </div>
    </div>
  }
}

export default Product