import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createProductForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required])
  });
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.createProduct(this.createProductForm.value);
    this.router.navigate(['/admin']);
  }
}
