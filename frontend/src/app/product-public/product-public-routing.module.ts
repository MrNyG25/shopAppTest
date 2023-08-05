import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPublicListComponent } from './components/product-public-list/product-public-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPublicListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPublicRoutingModule { }
