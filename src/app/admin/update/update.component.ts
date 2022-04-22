import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.displayStyleChange.emit("none");
  }

  @Input() product;
  @Input() displayStyle;

  @Output() displayStyleChange = new EventEmitter<string>();



}
