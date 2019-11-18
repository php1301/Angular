import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';



@NgModule({
  declarations: [DemoDirectiveComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoDirectiveComponent]
})
export class DirectivesModule { }
