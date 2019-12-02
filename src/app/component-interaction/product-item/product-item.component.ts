import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from 'src/app/models/iProduct';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input("ProductInput") productItems: Iproduct
  @Output() productEmitter = new EventEmitter
  chooseItem(item): void {
    this.productEmitter.emit(item)
  }
  constructor() { }

  ngOnInit() {
  }

}
