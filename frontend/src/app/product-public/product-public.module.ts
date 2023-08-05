import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPublicRoutingModule } from './product-public-routing.module';


import { PrimengModule } from '../primeng/primeng.module';
import { ProductPublicListComponent } from './components/product-public-list/product-public-list.component';
import { CommonComponentsModule } from '../components/common-components.module';

@NgModule({
  declarations: [
    ProductPublicListComponent
  ],
  imports: [
    CommonModule,
    ProductPublicRoutingModule,
    PrimengModule,
    CommonComponentsModule
  ]
})
export class ProductPublicModule { }
