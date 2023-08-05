import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsListCartComponent } from './products-list-cart/products-list-cart.component';
import { PipeModule } from '../pipes/pipe.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ShoppingCartComponent,
    ProductsListCartComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    PipeModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CommonComponentsModule { }
