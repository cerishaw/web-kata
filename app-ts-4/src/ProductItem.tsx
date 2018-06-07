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
    const link = '/products/' + name;

    return (
      <div className='product-item'>
        <div className='name'>
          <Link to={link}>{name}</Link>
        </div>
      </div>
    );
  }
}

export default ProductItem;