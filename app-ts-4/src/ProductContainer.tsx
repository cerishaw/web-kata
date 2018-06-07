import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './Models/Product';
import './ProductContainer.css';

interface Props extends RouteComponentProps<{ productName: string}> {
    products: Product[];
}

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className='product-container'>
          {this.props.match.params.productName}
      </div>
    );
  }
}

export default ProductContainer;