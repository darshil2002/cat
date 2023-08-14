import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  items!: MenuItem[];

constructor(private router: Router){}

  ngOnInit(){
    this.items = [
    
    
      {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          command: () => this.router.navigate(['/home'])
      },
      {
          label: 'Filter',
          icon: 'pi pi-fw pi-th-large',
          command: () => this.router.navigate(['/filtor'])
      }
  ];
}

  
}
