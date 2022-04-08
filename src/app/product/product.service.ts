import {Injectable} from '@angular/core';
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
      name: 'Collier MARVEL pour chien',
      price: 9.99,
      description: "Collier en nylon de style Comics (licence officielle Disney®), entièrement imprimé à l'effigie des héros MARVEL, anneau en métal, pendentif en forme de bouclier de Captain America, largeur réglable.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/marvel/pour/chien/1/800/133708_pla_cerda_hundehalsband_marvel_sm_hs_05_1.jpg"
    },{
      id: 3,
      name: 'Collier Bobby Safe, rouge pour chien',
      price: 4.99,
      description: "Collier tendance pour chien, coloris rouge vif, point sellier réfléchissant pour une meilleure visibilité, collier avec fermeture à clip, en nylon.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/bobby/safe/rouge/pour/chien/5/800/104055_pla_canifrance_bobby_dog_halsband_rot_hs_01_5.jpg"
    },{
      id: 4,
      name: 'Collier en cuir Heim Stars, noir pour chien',
      price: 14.99,
      description: "Magnifique collier pour chien en cuir souple de grande qualité avec doublure de couleur beige, orné d'étoiles argentées.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/en/cuir/heim/stars/noir/pour/chien/1/800/160891_heim_halsband_stars_4_1.jpg"
    },{
      id: 5,
      name: 'Collier Hunter Swiss pour chien',
      price: 30.99,
      description: "Collier pour chien, à bords ultra-doux en cuir nappa souple et résistant, tour de cou réglable, superbe design, en cuir écologique tanné naturellement, fabrication respectueuse de l'environnement.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/hunter/swiss/pour/chien/0/800/_dsc9098_0.jpg"
    },{
      id: 6,
      name: 'Collier Trixie Premium, large doublure en néoprène pour chien',
      price: 11.99,
      description: "Collier confortable aspect camouflage pour chien, large doublure en néoprène, répartition optimale de la pression, boucle anti-traction, réglage en continu, en polyester et néoprène.",
      imageUrl: "https://shop-cdn-m.mediazs.com/bilder/collier/trixie/premium/large/doublure/en/noprne/pour/chien/3/800/202196_pla_trixie_premium_halsband_extrabreite_neopren_polsterung_hs_01_3.jpg"
    }
  ];

  getAllProducts(): Product[] {
    return this.product;
  }
  getProductById(id: number): Product {
    return this.product.find(product => product.id === id);
  }
  createProduct(product: Product) {
    product.id = this.product.length + 1;
    this.product.push(product);
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
