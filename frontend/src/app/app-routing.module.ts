import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './product-public/components/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'products-public',
    loadChildren: () => import('./product-public/product-public.module').then(m => m.ProductPublicModule)
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '',   redirectTo: '/products-public', pathMatch: 'full' },
  { path: '**', redirectTo: '/products-public', }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
