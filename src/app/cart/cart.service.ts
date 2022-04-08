import { Injectable } from '@angular/core';
import {Cart} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {items: [], total: 0};

  constructor() { }

  getCart() {
    return this.cart;
  }
  addToCart(product) {
    if (this.cart.items.find(item => item.id === product.id)) {
      this.cart.items.find(item => item.id === product.id).quantity++;
    } else {
      this.cart.items.push({...product, quantity: 1});
    }
    this.getTotal();
  }
  removeOneFromCart(product) {
    if (this.cart.items.find(item => item.id === product.id).quantity > 1) {
      this.cart.items.find(item => item.id === product.id).quantity--;
    } else {
      this.cart.items.splice(this.cart.items.indexOf(product), 1);
    }
    this.getTotal();
  }
  removeFromCart(product) {
    this.cart.items.splice(this.cart.items.indexOf(product), 1);
    this.getTotal();
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.cart.items.length; i++) {
      total += this.cart.items[i].price * this.cart.items[i].quantity;
    }
    this.cart.total = this.arround(total);
  }
  arround(number): number {
    return Math.round(number * 100) / 100;
  }




}
