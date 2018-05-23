import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import { Product } from './Models/Product';

interface Props {
  product: Product;
  removeProduct: Function;
}

interface State {
  showProduct: Boolean;
 }

class ProductComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {showProduct: false};
  }

  showHideProductDescription() {
    this.setState({showProduct: !this.state.showProduct});
  }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>{this.props.product.name}</div>
          <a onClick={() => this.showHideProductDescription()}>{this.state.showProduct ? '-' : '+'}</a>
          {this.state.showProduct ? <div className='desc'>{this.props.product.description}</div> : null}
        </div>
        <div className='actions'>
          <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;