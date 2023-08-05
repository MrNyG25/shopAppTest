import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isAdminMode: boolean = false;
  
  items: MenuItem[] = [];

  ngOnInit() {
  }

  login(): void{

  }

  register(): void{

  }
}
