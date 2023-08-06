import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ProductPublicListComponent } from './components/product-public-list/product-public-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPublicListComponent
  },
  {
    path: 'register-customer',
    component: CustomerFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPublicRoutingModule { }
