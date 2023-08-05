import { Product } from './../../interfaces/product.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-list-cart',
  templateUrl: './products-list-cart.component.html',
  styleUrls: ['./products-list-cart.component.scss']
})
export class ProductsListCartComponent {
  @Input() products: Product[] = [];
  total_price: number = 0;

  ngOnInit(): void {
    this.computePriceProducts();
    
  }

  computePriceProducts(){
    this.total_price = this.products.map(product => product.price)
                                    .reduce((sum,productPrice) => (sum + productPrice))
  }
}
