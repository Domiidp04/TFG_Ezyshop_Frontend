import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MENU_ITEMS } from '../../../assets/menu-items';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenubarModule, OverlayPanelModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  isCarrito: boolean = false;

  ngOnInit(): void {
    this.items = MENU_ITEMS;
  }

  switchCarrito(){
    if(this.isCarrito){
      this.isCarrito=false;
    }else{
      this.isCarrito=true;
    }
  }



}
