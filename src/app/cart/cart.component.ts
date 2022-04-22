import { Component, OnInit } from '@angular/core';
import {Cart} from "./cart";
import {CartService} from "./cart.service";
import {Product} from "../product/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService : CartService) { }

  getCart(): void {
    this.cart = this.cartService.getCart();
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
  removeOneFromCart(product: Product): void {
    this.cartService.removeOneFromCart(product);
  }
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
  arround(number): number {
    return Math.round(number * 100) / 100;
  }

  ngOnInit(): void {
    this.getCart();
  }

}
