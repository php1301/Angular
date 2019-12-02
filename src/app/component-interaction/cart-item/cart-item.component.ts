import { Component, OnInit, Input } from '@angular/core';
import { Iproduct, IproductCart } from 'src/app/models/iProduct';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: IproductCart
  // cart: IproductCart[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.cartItem)

  }

}
