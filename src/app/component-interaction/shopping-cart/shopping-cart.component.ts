import { Component, OnInit } from '@angular/core';
import { Iproduct, IproductCart } from 'src/app/models/iProduct';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: Iproduct[] = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5
    }, {
      id: 3,
      name: 'Iphone XS',
      image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4
    }
  ];
  cart: IproductCart[] = []
  totalAmount = 0;
  // outputCart: IproductCart[] = []
  handleOutputCart(prod: Iproduct): void {
    const cartItem = {
      product: prod,
      quanity: 1
    }
    const index = this.cart.findIndex(item => item.product.id === prod.id)
    if (index !== -1) {
      this.cart[index].quanity += 1;
      console.log("ok")
    }
    else {


      this.cart.push(cartItem)
      this._snackBar.open('Add successfully', 'okay', {
        duration: 1000
      })
    }
    this.totalAmount += prod.price
  }
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
