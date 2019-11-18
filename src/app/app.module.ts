import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from "./components/demo.component";
import { Demo2Component } from './components/demo2/demo2.component';
import { BaiTap2Module } from './baitapmodule/bai-tap2/bai-tap2.module';
import { DatabindingModule } from './databinding/databinding.module';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    // DemoComponent,
    Demo2Component,
    // Bt2HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // cac component cua app module co the goi va su dung cac component ma baitap2module da export ra ben ngoai
    BaiTap2Module,
    DatabindingModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //

})
export class AppModule { }
