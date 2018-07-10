import { Product } from './Models/Product';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch('/api/products/get', { method: 'GET' });
    return response.json();
}