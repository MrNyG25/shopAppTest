import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Customer } from 'src/app/interfaces/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [MessageService]
})
export class CustomerFormComponent {
  customerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public globalService: GlobalService,
    private messageService: MessageService,
    private customerService: CustomerService
    ) {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone_number: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      // Handle form submission here
      this.customerService.saveCustomer(this.customerForm.value as Customer).subscribe((res) => {
        this.showBottomCenter("success", "Mensaje", "Producto guardado exitosamente")
        this.customerForm.reset();
      }, err => {
        if(err?.error?.message?.email){
          this.showBottomCenter("error", "Mensaje", "El correo ya se encuentra registrado")
        }else{
          this.showBottomCenter("error", "Mensaje", "No se pudo realizar el registro")
        }
      }
      )
    } else {
      this.showBottomCenter("error", "Mensaje", "Por favor llenar todos los campo")
      this.customerForm.markAllAsTouched();
    }
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmedPassword = control.get('password_confirmation');

    if (password.value !== confirmedPassword.value) {
      confirmedPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmedPassword.setErrors(null);
      return null;
    }
  }

  get name(): FormControl {
    return this.customerForm.get('name') as FormControl;
  }

  get surname(): FormControl {
    return this.customerForm.get('surname') as FormControl;
  }

  get phone_number(): FormControl {
    return this.customerForm.get('phone_number') as FormControl;
  }

  get email(): FormControl {
    return this.customerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.customerForm.get('password') as FormControl;
  }

  get password_confirmation(): FormControl {
    return this.customerForm.get('password_confirmation') as FormControl;
  }


  showBottomCenter(severity: string, summary: string, detail: string) {
    this.messageService.add({ key: 'bc', severity, summary, detail });
  }
}
