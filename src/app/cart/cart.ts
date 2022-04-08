import {ProductWithQuantity} from "../product/product";

export interface Cart {
  items: ProductWithQuantity[];
  total: number;
}
