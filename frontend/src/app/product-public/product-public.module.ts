import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPublicRoutingModule } from './product-public-routing.module';


import { PrimengModule } from '../primeng/primeng.module';
import { ProductPublicListComponent } from './components/product-public-list/product-public-list.component';
import { CommonComponentsModule } from '../components/common-components.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  declarations: [
    ProductPublicListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductPublicRoutingModule,
    PrimengModule,
    CommonComponentsModule,
    PipeModule
  ]
})
export class ProductPublicModule { }
