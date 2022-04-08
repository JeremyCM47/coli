export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ProductWithQuantity extends Product {
  quantity: number;
}
