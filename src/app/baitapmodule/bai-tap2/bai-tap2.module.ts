import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { Bt2HomeComponent } from './bt2-home/bt2-home.component';
import { Bt2CarouselComponent } from './bt2-carousel/bt2-carousel.component';
import { Bt2ContentComponent } from './bt2-content/bt2-content.component';
import { Bt2HeaderComponent } from './bt2-header/bt2-header.component';
import { Bt2FooterComponent } from './bt2-footer/bt2-footer.component';
//decorator
@NgModule({
    //khai bao component
    declarations: [
        //khai bao component
        Bt2HomeComponent,
        Bt2CarouselComponent,
        Bt2ContentComponent,
        Bt2HeaderComponent,
        Bt2FooterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [Bt2HomeComponent]
})
export class BaiTap2Module{}