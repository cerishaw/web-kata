import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import { Product } from './Models/Product';

interface Props {
  product: Product;
  removeProduct: Function;

}

interface ProductComponentState {
    showDescription: boolean;
}

class ProductComponent extends Component<Props, ProductComponentState> {
  constructor(props: Props) {
    super(props);
    this.state = {showDescription: false};
    this.handleToggleDescription = this.handleToggleDescription.bind(this);
  }

    handleToggleDescription(event: React.MouseEvent<HTMLElement>): void {
        let showDescription = this.state.showDescription;
        this.setState({showDescription: !showDescription});
    }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>{this.props.product.name}
          <span onClick={this.handleToggleDescription}>{this.state.showDescription ? ' - ' : ' + '}</span>
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