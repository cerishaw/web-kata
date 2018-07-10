import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import ProductItem from './ProductItem';
import './ProductMenu.css';
import ProductForm from './ProductForm';

interface ProductMenuProps {
  products: Product[];
  onAdd: (product: Product) => void;
  onRemove: (name: string) => void;
}

class ProductMenu extends Component<ProductMenuProps, {}> {
  render(): JSX.Element {
    return (
      <div className='product-menu'>
        <ProductForm onAdd={this.props.onAdd} />
        {this.props.products.map(
          (p, i) => <ProductItem onRemove={() => this.props.onRemove(p.name)} product={p} key={'product-' + i} />
        )}
      </div>
    );
  }
}

export default ProductMenu;