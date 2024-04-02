import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';

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
    this.items = [
      {
        label: 'File',
      },
      {
        label: 'Edit',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
            url: '/edit?layout=1',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
      },
      {
        label: 'Events'
      },
      {
        label: 'Quit',
      },
    ];
  }
}
