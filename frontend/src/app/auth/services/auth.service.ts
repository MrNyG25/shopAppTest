import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../interfaces/LoginData.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,

  ) { }

  login(data: LoginData){
    return this.http.post(this.API_URL+'auth/login', data);
  }
}
