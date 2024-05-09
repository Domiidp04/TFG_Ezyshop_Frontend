import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MENU_ITEMS } from '../../../assets/menu-items';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../model/product';
import { ProductCarritoComponent } from '../product-carrito/product-carrito.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenubarModule, OverlayPanelModule, SidebarModule, ProductCarritoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  isCarrito: boolean = false;
  isInicioSesion: boolean = false;
  public carrito: Product[] = [];

  public total: number = 0;

  constructor(private carritoService: CarritoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.items = MENU_ITEMS;

    this.carritoService.carritoActual.subscribe(carrito => {
      this.carrito = carrito;
      this.total = this.priceTotal(carrito);
    });

    this.inicioSesion();
  }

  switchCarrito() {
    if (this.isCarrito) {
      this.isCarrito = false;
    } else {
      this.isCarrito = true;
    }
  }

  inicioSesion() {
    if (localStorage.getItem('access_token')) {
      this.isInicioSesion = true;
    }
  }

  private priceTotal(carrito: Product[]) {
    return carrito.reduce((total, producto) => {
      if (producto.discountPrice) {
        return total + producto.discountPrice;
      }
      else {
        return total + producto.price;
      }
    }, 0);
  }

  public cerrarSesion() {
    this.authService.logout();
  }


}
