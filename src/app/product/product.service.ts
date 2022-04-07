import { Injectable } from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product : Product[] = [
    {
      id: 1,
      name: 'Collier lumineux à LED',
      price: 15.99,
      description: "Collier lumineux pour chien, fermeture par clip, visible dans un rayon de 500 m, améliore la sécurité dans l'obscurité, lumière constante ou clignotante, livré avec câble USB pour le recharger.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/lumineux/led/eyenimal/vert/pour/chien/0/800/70180_pla_eyenimal_leuchthalsband_usb_gruen_hs_01_0.jpg"
    },{
      id: 2,
      name: 'Collier lumineux à LED',
      price: 15.99,
      description: "Collier lumineux pour chien, fermeture par clip, visible dans un rayon de 500 m, améliore la sécurité dans l'obscurité, lumière constante ou clignotante, livré avec câble USB pour le recharger.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/lumineux/led/eyenimal/vert/pour/chien/0/800/70180_pla_eyenimal_leuchthalsband_usb_gruen_hs_01_0.jpg"
    },{
      id: 3,
      name: 'Collier lumineux à LED',
      price: 15.99,
      description: "Collier lumineux pour chien, fermeture par clip, visible dans un rayon de 500 m, améliore la sécurité dans l'obscurité, lumière constante ou clignotante, livré avec câble USB pour le recharger.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/lumineux/led/eyenimal/vert/pour/chien/0/800/70180_pla_eyenimal_leuchthalsband_usb_gruen_hs_01_0.jpg"
    },
  ];

  getAllProducts(): Product[] {
    return this.product;
  }
  getProductById(id: number): Product {
    return this.product.find(product => product.id === id);
  }
  updateProduct(product: Product) {
    const index = this.product.findIndex(p => p.id === product.id);
    this.product[index] = product;
  }
  deleteProduct(id: number) {
    this.product = this.product.filter(product => product.id !== id);
  }

  constructor() { }
}
