import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './Models/Product';
import { GetData } from './data';
import ProductComponent from './ProductComponent';

interface Props extends RouteComponentProps<{ productName: string }> {
}

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const products = GetData(); // how to pass this using props?
    const name = this.props.match.params.productName;
    const product = products.find(p => p.name === name) as Product;

    return (
      <div className='product-container'>
        <ProductComponent product={product}/>
      </div>
    );
  }
}

export default ProductContainer;