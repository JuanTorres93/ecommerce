const BASE_URL = "https://api.escuelajs.co/api/v1";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
}

export async function getProductById(productId) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID ${productId}`);
  }
  return await response.json();
}
