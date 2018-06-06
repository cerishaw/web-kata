import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import './ProductContainer.css';
import { GetData } from './data';

interface Props {
  product: Product;
}

class ProductContainer extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = { products: GetData() };
  }

  render(): JSX.Element {
    const { product } = this.props;

    return (
      <div className='product-container'>
        {product.name} | {product.description}
      </div>
    );
  }
}

export default ProductContainer;