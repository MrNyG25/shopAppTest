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
  refHotelFormModal: DynamicDialogRef = new DynamicDialogRef;

  
  first = 0;

  rows = 10;

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,) {}

  ngOnInit() {
    //this.getproducts();
  }


  /* getproducts(): void{
    this.productService
      .getproducts()
      .subscribe((products: Product[]) => (this.products = products));
  } */

  onChangeProductStatus(product_id: string){
    //this.productService.toggleproductstatus(hotel_id);
    console.log(product_id)
  }

  onShowRoomFormModal(data_to_patch: any = null): void {
    this.refHotelFormModal = this.dialogService.open(ProductFormComponent, {
        header: 'Registro producto',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          data_to_patch
        }
    });

    /* this.refHotelFormModal.onClose.subscribe(() => {
      this.getproducts();
    }); */

  }

  ngOnDestroy(): void {
    if (this.refHotelFormModal) {
        this.refHotelFormModal.close();
    }
  }
}
