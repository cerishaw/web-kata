import { Product } from './Models/Product';
import 'whatwg-fetch';

export function GetData(): Promise<Product[]> {
    return fetch('/api/products/get')
    .then(response => {
        return response.json();
    }).then(json => {
        return json;
    }).catch(e => {
        console.error(e);
    });
}

export function DeleteData(productName: string): Promise<Response> {
    return fetch(`/api/products/delete/${productName}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.status === 200) {
            return {IsOk: true} as Response;
        }
        return {IsOk: false} as Response;
    })
    .catch(e => {
        return {IsOk: false, ErrorMessage: e} as Response;
    });
}

export interface Response {
    IsOk: boolean;
    ErrorMessage: string;
}