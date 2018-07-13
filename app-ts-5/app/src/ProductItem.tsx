import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from './Models/Product';
import './ProductItem.css';
import { RemoveProduct } from './data';

interface ProductItemProps {
  product: Product;
  onProductDelete: Function;
}

class ProductItem extends Component<ProductItemProps, {}> {
  constructor(props: ProductItemProps) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(): void {
    const product = this.props.product;
    RemoveProduct(product).then(products => this.props.onProductDelete(products));
  }

  render(): JSX.Element {
    const name = this.props.product.name;

    return (
      <div className='product-item'>
        <div className='name'><Link to={`/products/${name}`}>{name}</Link></div>
        <div className='deleteButton' onClick={this.deleteProduct}>x</div>
      </div>
    );
  }
}

export default ProductItem;