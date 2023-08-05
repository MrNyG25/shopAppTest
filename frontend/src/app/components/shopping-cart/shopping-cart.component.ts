import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  products: any = [
    {
        "id": 10,
        "name": "paisaje",
        "sku": "1231",
        "description": "123112",
        "price": 1130,
        "stock_quantity": 123,
        "image_url": "public/files/products_images/2023-08-05/time_09_25_50_ygcPREnsEYne15OU4ZsRiXrLfV1MDTabEnlsYgbF.jpg"
    },
    {
        "id": 11,
        "name": "Algo1",
        "sku": "2312",
        "description": "123112",
        "price": 1230,
        "stock_quantity": 122,
        "image_url": "public/files/products_images/2023-08-05/time_09_29_06_ApZ7znDaFz6PsnBCYxfyFQIgJATGT31o2tXByeAv.png"
    }
];
}
