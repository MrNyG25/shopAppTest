import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CommonComponentsModule { }
