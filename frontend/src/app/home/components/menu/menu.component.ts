import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items =  [
      {
          label: 'Administración',
          icon: 'pi pi-pw pi-building',
          items: [
            {
                label: 'Productos', 
                icon: 'pi pi-microsoft',
                routerLink: '/home/products'
            },
            {
                label: 'Informes', 
                icon: 'pi pi-book',
                routerLink: 'bookings'
            },
            {
                label: 'Clientes', 
                icon: 'pi pi-users',
                routerLink: 'bookings'
            }

          ]
      },
  ];
  }


}
