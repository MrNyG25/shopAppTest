import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPublicRoutingModule } from './product-public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


import { PrimengModule } from '../primeng/primeng.module';
import { ProductPublicListComponent } from './components/product-public-list/product-public-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductPublicListComponent
  ],
  imports: [
    CommonModule,
    ProductPublicRoutingModule,
    PrimengModule
  ]
})
export class ProductPublicModule { }
