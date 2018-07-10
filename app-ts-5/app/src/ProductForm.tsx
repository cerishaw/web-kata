import * as React from 'react';
import { Product } from './Models/Product';

interface ProductFormProps {
    onAdd: (product: Product) => void;
}

interface ProductFormState {
    name?: string;
    description?: string;
}

class ProductForm extends React.Component<ProductFormProps, ProductFormState> {
    constructor(props: ProductFormProps) {
        super(props);
        this.state = { name: '', description: '' };
    }

    handleInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.currentTarget;
        this.setState({ [target.name]: target.value });
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.onAdd({
            name: this.state.name || '',
            description: this.state.description || ''
        });
        this.setState({ name: '', description: '' });
        event.preventDefault();
    }

    render(): JSX.Element {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Name'
                    name='name'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <textarea
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleInputChange}
                />
                <input type='submit' value='Add' />
            </form>
        );
    }
}

export default ProductForm;