import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {Product} from "../../product/product";
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  products: Product[]

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id);
    this.getAllProducts();
  }
  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }

}
