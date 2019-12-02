import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoInteractionComponent } from './demo-interaction/demo-interaction.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatButtonModule } from "@angular/material/button"
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [DemoInteractionComponent, StudentItemComponent, BookticketComponent, SeatItemComponent, ShoppingCartComponent, CartItemComponent, ProductItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    DemoInteractionComponent,
    StudentItemComponent,
    BookticketComponent,
    SeatItemComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ProductItemComponent
  ]
})
export class ComponentInteractionModule { }
