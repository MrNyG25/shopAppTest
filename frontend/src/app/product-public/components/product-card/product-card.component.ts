import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;
  wasAdded: boolean = false;

  constructor(private globalService: GlobalService){
    
  }

  addProductToCart(product: Product): void{
    let productsLocalStorage =  localStorage.getItem('cart_products');
    if(productsLocalStorage){
      let products: Product[] = JSON.parse(productsLocalStorage);
      
      if(products.filter(productF => productF.id === product.id).length == 0){
        products.push(product);
        product['wasAdded'] = true;
        this.globalService.refreshLocalStorage('cart_products',  products)
      }

    }else{
      product['wasAdded'] = true;
      this.globalService.refreshLocalStorage('cart_products',  [product])
    }
}
}
