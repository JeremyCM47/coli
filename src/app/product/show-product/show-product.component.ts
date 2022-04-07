import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private router: ActivatedRoute, private productService: ProductService) {
  }

  product : Product = null;

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      const id = Number(params['id']);
      this.product = this.productService.getProductById(id);
    });

  }

}