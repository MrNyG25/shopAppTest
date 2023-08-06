import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    console.log("init shopping carts")

  }

}
