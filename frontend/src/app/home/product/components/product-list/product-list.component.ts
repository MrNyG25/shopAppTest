import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductFormComponent } from '../product-form/product-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from '../../services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class ProductListComponent {
  refProductFormModal: DynamicDialogRef = new DynamicDialogRef;

  
  first = 0;

  rows = 10;

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,) {}

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void{
    this.productService
      .getProducts()
      .subscribe((res: any) => {
        let products: Product[] = res.data;

        this.products = products

      });
  }

  onChangeProductStatus(product_id: string){
    //this.productService.toggleproductstatus(hotel_id);
    console.log(product_id)
  }

  onShowProductFormModal(data_to_patch: Product | null = null): void {
    this.refProductFormModal = this.dialogService.open(ProductFormComponent, {
        header: 'Registro producto',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          data_to_patch
        }
    });

    this.refProductFormModal.onClose.subscribe(() => {
      this.getProducts();
    });

  }

  ngOnDestroy(): void {
    if (this.refProductFormModal) {
        this.refProductFormModal.close();
    }
  }
}
