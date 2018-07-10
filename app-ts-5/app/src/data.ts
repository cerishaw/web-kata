import { Product } from './Models/Product';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch('/api/products/get', { method: 'GET' });
    return response.json();
}

export async function removeProduct(name: string): Promise<void> {
    await fetch(`/api/products/delete/${name}`, { method: 'DELETE' });
}

export async function addProduct(product: Product): Promise<void> {
    await fetch('/api/products/add', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}