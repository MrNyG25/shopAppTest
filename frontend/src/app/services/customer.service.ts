import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  getCustomers(){
    return this.http.get(this.API_URL+'users');
  }

  saveCustomer(customer: Customer | any){
    return this.http.post(this.API_URL+'users', customer);
  }
}
