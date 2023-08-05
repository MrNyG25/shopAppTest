import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { NgxCurrencyModule } from "ngx-currency";
import { PipeModule } from 'src/app/pipes/pipe.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    NgxCurrencyModule,
    PipeModule
  ]
})
export class ProductModule { }
