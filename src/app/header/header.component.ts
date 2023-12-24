import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 menuValue:boolean=false;
 menu_icon :string ='bi bi-list';
 openMenu(){
    this.menuValue =! this.menuValue ;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
   closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}
