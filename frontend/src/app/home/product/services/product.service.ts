import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  getProducts(){
    return this.http.get(this.API_URL+'products');
  }

  saveProduct(product: Product | any){
    return this.http.post(this.API_URL+'products', product);
  }
}
