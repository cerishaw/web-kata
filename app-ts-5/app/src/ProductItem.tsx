import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from './Models/Product';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
  onRemove: () => void;
}

class ProductItem extends Component<ProductItemProps, {}> {
  render(): JSX.Element {
    const name = this.props.product.name;

    return (
      <div className='product-item'>
        <div className='name'><Link to={`/products/${name}`}>{name}</Link></div>
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );
  }
}

export default ProductItem;