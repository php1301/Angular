import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoOnewayComponent } from './demo-oneway/demo-oneway.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DemoOnewayComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DemoOnewayComponent]
})
export class DatabindingModule { }
