import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import ProductItem from './ProductItem';
import './ProductMenu.css';

interface ProductMenuProps {
  products: Product[];
  removeProduct: (productName: string) => void;
}

class ProductMenu extends Component<ProductMenuProps, {}> {
  render(): JSX.Element {
    return (
      <div className='product-menu'>
        {this.props.products.map(
          (p, i) => <ProductItem product={p} key={'product-' + i} removeProduct={this.props.removeProduct} />
        )}
      </div>
    );
  }
}

export default ProductMenu;