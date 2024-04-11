import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MENU_ITEMS } from '../../../assets/menu-items';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = MENU_ITEMS;
  }
}
