import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './Models/Product';
import './ProductContainer.css';
import ProductComponent from './ProductComponent';

interface Props extends RouteComponentProps<{ productName: string}> {
    products: Product[];
}

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {

    let product = this.props.products.filter((p) => p.name ===  this.props.match.params.productName)[0];
    return (
      <div className='product-container'>
          <ProductComponent product={product}/>
      </div>
    );
  }
}

export default ProductContainer;