import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import './ProductItem.css';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  product: Product;
}

class ProductItem extends Component<ProductItemProps, {}> {
  render(): JSX.Element {
    const name = this.props.product.name;
    const link = '/products/' + name;

    return (
      <div className='product-item'>
        <div className='name'>{name}</div>
        <Link to={link}>About</Link>
      </div>
    );
  }
}

export default ProductItem;