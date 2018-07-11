import { Product } from './Models/Product';
import 'whatwg-fetch';

function GetData(): Promise<Product[]> {
    return fetch('/api/products/get')
    .then(response => {
        return response.json();
    }).then(json => {
        return json;
    }).catch(e => {
        console.error(e);
    });
}

export { GetData };