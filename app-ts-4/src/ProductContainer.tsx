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
    const product = this.state.products.find((p: Product) => p.name === productName) || null ;
    return (
      
      <div className='product-container'>
        {product ?
          <div className='product'>
            <div className='product-name' >
              {product.name}
            </div>
            <div className='product-description'>
              {product.description}
            </div>
          </div> : null }
      </div>
    );
  }
}

export default ProductContainer;