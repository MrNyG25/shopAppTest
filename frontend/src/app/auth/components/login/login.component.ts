import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { LoginData } from '../../interfaces/LoginData.interface';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private authService: AuthService, 
    private router: Router,
    public globalService: GlobalService,
    private messageService: MessageService){}

  ngOnInit(): void {
    

  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value as LoginData).subscribe((res: any) =>{
        if(res?.data?.is_admin){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/products-public'])
          localStorage.setItem('user_data', JSON.stringify(res?.data));
        }
        this.showBottomCenter('success', 'Mensaje', 'Bienvenido')
      }, err => {
        this.showBottomCenter('error', 'Error', 'Credenciale invalidas o usuario no existe')
      })
    }else{
      this.loginForm.markAllAsTouched();
      this.showBottomCenter('error', 'Error', 'Formulario no valido')
    }
  }

  showBottomCenter(severity: string, summary: string, detail: string) {
    this.messageService.add({ key: 'bc', severity, summary, detail });
  }
}
