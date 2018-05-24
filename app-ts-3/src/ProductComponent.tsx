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
  }

  toggleShowDescription = () => {
    this.setState( (prevState) => ({showDescription: !prevState.showDescription}));
  }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>
            <span className='showDescription' onClick={this.toggleShowDescription}>
              {this.state.showDescription ? '-' : '+'}</span> {this.props.product.name}
          </div>
          {this.state.showDescription && <div className='desc'>{this.props.product.description}</div>}
        </div>
        <div className='actions'>
          <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;