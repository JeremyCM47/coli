import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../product/product.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {

  @Input() product;
  @Input() displayStyle;

  @Output() displayStyleChange = new EventEmitter<string>();

  updateProductForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.updateProductForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.required]),
      imageUrl: new FormControl('',[Validators.required])
    });
    this.updateProductForm.setValue({
      name: this.product.name,
      price: this.product.price,
      description: this.product.description,
      imageUrl: this.product.imageUrl
    });
  }

  onSubmit() {
    let productToUpdate = {
      id: this.product.id,
      name: this.updateProductForm.value.name,
      price: this.updateProductForm.value.price,
      description: this.updateProductForm.value.description,
      imageUrl: this.updateProductForm.value.imageUrl
    };
    this.productService.updateProduct(productToUpdate);
    this.closeModal();
  }
  closeModal() {
    this.displayStyleChange.emit("none");
  }

}
