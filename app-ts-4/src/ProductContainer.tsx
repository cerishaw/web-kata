import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './Models/Product';
import { GetData } from './data';

interface Props extends RouteComponentProps<{ productName: string }> {
}

interface State {
  products: Product[];
}

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: GetData()
    };
  }

  render(): JSX.Element {
    const productName = this.props.match.params.productName;
    const product = this.state.products.filter((p: Product) => p.name === productName)[0];
    return (
      <div className='product-container'>
        <div className='product-name' >
          {product.name}
        </div>
        <div className='product-description'>
          {product.description}
        </div>
      </div>
    );
  }
}

export default ProductContainer;