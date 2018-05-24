import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import ProductComponent from './ProductComponent';
import { Product } from './Models/Product';

interface Props {
    products: Product[];
    removeProduct: Function;
}

class ProductsComponent extends Component<Props, {}> {
    render(): JSX.Element {
        return (
            <div className='products'>
                {this.props.products.map(
                    (p: Product) => {
                        return <ProductComponent
                            product={p}
                            key={'product-' + p.name}
                            removeProduct={this.props.removeProduct}
                        />;
                    }
                )}
            </div>
        );
    }
}

export default ProductsComponent;