import { Product } from './Models/Product';
import 'whatwg-fetch';

function GetData(): Promise<Product[]> {
    return fetch('/api/products/get').then(data => (data.json()));
}

export { GetData };