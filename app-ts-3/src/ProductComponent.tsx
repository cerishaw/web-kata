import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import { Product } from './Models/Product';

interface Props {
  product: Product;
  removeProduct: Function;
}

interface State {
  showDescription: boolean;
}

class ProductComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showDescription: false };

    this.toggleDesc = this.toggleDesc.bind(this);
  }

  toggleDesc() {
    const prev = this.state.showDescription;
    this.setState({showDescription: !prev});
  }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>
            {this.props.product.name}
            <div
              className='product-expand'
              onClick={this.toggleDesc}
            >
              {this.state.showDescription ? '+' : '-'}
            </div>
          </div>
          {this.state.showDescription ? <div className='desc'>{this.props.product.description}</div> : null}
        </div>
        <div className='actions'>
          <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;