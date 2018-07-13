import { Product } from './Models/Product';
import 'whatwg-fetch';

function GetData(): Promise<Product[]> {
    return fetch('/api/products/get').then(data => (data.json()));
}

function RemoveProduct(product: Product): Promise<Product[]> {
    const name = product.name;
    return fetch(`/api/products/delete/${name}`, { method: 'DELETE' }).then(data => data.json());
}

export { GetData, RemoveProduct };