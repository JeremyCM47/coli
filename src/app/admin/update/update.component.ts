import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../product/product.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() product;
  @Input() displayStyle;

  @Output() displayStyleChange = new EventEmitter<string>();

  updateProductForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.required]),
      imageUrl: new FormControl('',[Validators.required])
    });
    setTimeout(()=> {
      console.log(this.product);
    },3000)
  }

  onSubmit() {
    this.productService.updateProduct(this.updateProductForm.value);
    this.closeModal();
  }
  closeModal() {
    this.displayStyleChange.emit("none");
  }





}
