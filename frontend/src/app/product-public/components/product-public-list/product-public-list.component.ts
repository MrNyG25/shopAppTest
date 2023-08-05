import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductPublicService } from '../../services/product-public.service';

@Component({
  selector: 'app-product-public-list',
  templateUrl: './product-public-list.component.html',
  styleUrls: ['./product-public-list.component.scss']
})
export class ProductPublicListComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private productPublicService: ProductPublicService
  ) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void{
    this.productPublicService
      .getProducts()
      .subscribe((res: any) => {
        let products: Product[] = res.data;

        this.products = products

      });
  }

}
