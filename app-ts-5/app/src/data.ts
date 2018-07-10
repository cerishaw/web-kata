import { Product } from './Models/Product';

async function GetData(): Promise<Product[]> {
    const response = await fetch('/api/products/get', { method: 'GET' });
    return response.json();
}

export { GetData };