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

  isSignedIn: boolean = false;

  ngOnInit() {
    let dataUser = localStorage.getItem('user_data');

    if(dataUser){
      this.isSignedIn = true;
    }  

    console.log(dataUser);
  }

  logOut(): void{
    this.isSignedIn = false;
    localStorage.removeItem('user_data');
  }

}
