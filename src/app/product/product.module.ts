import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowProductComponent } from './show-product/show-product.component';
import {ProductComponent} from "./product.component";


@NgModule({
  declarations: [HomeComponent, ShowProductComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
