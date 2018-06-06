import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import { Link } from 'react-router-dom';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
}

class ProductItem extends Component<ProductItemProps, {}> {
  render(): JSX.Element {
    const name = this.props.product.name;

    return (
      <div className='product-item'>
        <Link to={'/products/' + name}>
          <div className='name'>{name}</div>
        </Link>
      </div>
    );
  }
}

export default ProductItem;