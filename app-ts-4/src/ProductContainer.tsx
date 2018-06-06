import * as React from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';
import { GetData } from './data';

interface Props extends RouteComponentProps<{ productName: string }> {
  productName: string;
}

// class ProductContainer extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//   }

//   render(): JSX.Element {
//     return (
//       <div className='product-container'>
//         {this.props.match.params.productName}
//       </div>
//     );
//   }
// }

const ProductContainer: React.StatelessComponent<Props> = ({ match }) => {
  const {description} = GetData().find(p => p.name === match.params.productName) || {description: 'Not a product'};
  
  return (
    <div className='product-container'>
      <h3>
        {match.params.productName}
      </h3>
      <span>{description}</span>
    </div>);
};

export default ProductContainer;