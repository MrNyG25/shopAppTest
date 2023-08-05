import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Product } from 'src/app/interfaces/product.interface';
import { GlobalService } from 'src/app/services/global.service';
import { UploadEvent } from '../../interfaces/UploadEvent.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [MessageService],
})
export class ProductFormComponent {
    
  uploadedFiles: any[] = [];
  isEditing:boolean = false;
  data_to_patch: any = {};

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sku: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    stock_quantity: new FormControl('', [Validators.required]),
  });

  constructor(
    private productService: ProductService,
    public globalService: GlobalService,
    public config: DynamicDialogConfig,
    private messageService: MessageService){
    /* const data = config.data;
    const data_to_patch = data?.data_to_patch;
    if(data_to_patch){
      this.isEditing = true;
      this.data_to_patch = data_to_patch;
      this.productForm.patchValue(data_to_patch);
    } */
  }
  ngOnInit(): void {
  }

  get name(): FormControl {
    return this.productForm.get('name') as FormControl;
  }
  
  get sku(): FormControl {
    return this.productForm.get('sku') as FormControl;
  }
  

  get description(): FormControl {
    return this.productForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get('price') as FormControl;
  }

  get stock_quantity(): FormControl {
    return this.productForm.get('stock_quantity') as FormControl;
  }

  onSubmit(){

    if(this.uploadedFiles.length == 0){
      this.showBottomCenter("error", "Mensaje", "Por favor seleccionar una imagen")
      return;
    }
    if(this.productForm.valid){
  
      const formData: FormData = new FormData();

      formData.append('name', this.productForm.get('name').value);
      formData.append('sku', this.productForm.get('sku').value);
      formData.append('image', this.uploadedFiles[0]);
      formData.append('description', this.productForm.get('description').value);
      formData.append('price', this.productForm.get('price').value);
      formData.append('stock_quantity', this.productForm.get('stock_quantity').value);

      if(this.isEditing){
        /* this.productService.saveProduct(!formData).subscribe(res => {
          this.showBottomCenter("success", "Mensaje", "Producto guardado exitosamente")
        }, err => {
          this.showBottomCenter("error", "Mensaje", "No se pudo guardar el producto")
        }) */
        this.isEditing = false;
      }else{
        this.productService.saveProduct(formData).subscribe(res => {
          this.showBottomCenter("success", "Mensaje", "Producto guardado exitosamente")
          this.productForm.reset();
          this.uploadedFiles = [];
        }, err => {
          if(err?.error?.message?.sku){
            this.showBottomCenter("error", "Mensaje", "El SKU ya se encuentra registrado")
          }else{
            this.showBottomCenter("error", "Mensaje", "No se pudo guardar el producto")
          }
        })
        /* this.productService.saveHotel(this.productForm.value)
        this.showToastSuccess("Hotel agregado correctamente"); */
      }
      //this.productForm.reset();
    }else{
      this.productForm.markAllAsTouched();
      this.showBottomCenter("error", "Mensaje", "Por favor llenar todos los campo")
    }
  }

  onSelect(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  showBottomCenter(severity: string, summary: string, detail: string) {
    this.messageService.add({ key: 'bc', severity, summary, detail });
  }
}
