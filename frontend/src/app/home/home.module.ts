import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CommonComponentsModule } from '../components/common-components.module';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from './../primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentsModule,
    PrimengModule
  ]
})
export class HomeModule { }
