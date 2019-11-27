import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoInteractionComponent } from './demo-interaction/demo-interaction.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { SeatItemComponent } from './seat-item/seat-item.component';



@NgModule({
  declarations: [DemoInteractionComponent, StudentItemComponent, BookticketComponent, SeatItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DemoInteractionComponent,
    StudentItemComponent,
    BookticketComponent,
    SeatItemComponent
  ]
})
export class ComponentInteractionModule { }
