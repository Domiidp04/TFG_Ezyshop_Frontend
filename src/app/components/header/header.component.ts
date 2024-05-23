import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../model/product';
import { ProductCarritoComponent } from '../product-carrito/product-carrito.component';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { PaymentService } from '../../services/payment.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    MenubarModule,
    OverlayPanelModule,
    SidebarModule,
    ProductCarritoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isCarrito: boolean = false;
  public isInicioSesion: boolean = false;
  public carrito: Product[] = [];

  public total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private authService: AuthService,
    private orderService: OrderService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carritoService.carritoActual.subscribe((carrito) => {
      this.carrito = carrito;
      this.total = this.priceTotal(carrito);
      this.inicioSesion();
    });

    this.authService.getInicioSesionStatus().subscribe((status) => {
      this.isInicioSesion = status;
      if (!status) {
        this.carrito = [];
        localStorage.removeItem('carrito');
        this.total = 0;
      }
    });
  }

  switchCarrito() {
    if (this.isCarrito) {
      this.isCarrito = false;
      this.inicioSesion();
    } else {
      this.isCarrito = true;
      this.inicioSesion();
    }
  }

  inicioSesion() {
    if (localStorage.getItem('access_token') != undefined) {
      this.isInicioSesion = true;
    }
  }

  private priceTotal(carrito: Product[]) {
    let total = carrito.reduce((total, producto) => {
      if (producto.discountPrice) {
        return total + producto.discountPrice;
      } else {
        return total + producto.price;
      }
    }, 0);

    // Si hay al menos un producto en el carrito, añade 1.99 al total
    if (carrito.length > 0) {
      total += 1.99;
    }

    return total;
  }

  public cerrarSesion() {
    this.authService.logout();
  }

  saveProduct() {
    const orderProducts = this.carrito.map((product) => {
      return { productId: product.id };
    });

    const orderRequestDto = { orderProducts };

    this.orderService.createOrderWithOrderProducts(orderRequestDto).subscribe(
      (order) => {
        this.total = 0;
        this.paymentService.makePayment(order.id).subscribe(
          (response) => {
            window.open(response, '_self');
          },
          (error) => {
            console.error('Error en la creación de la orden:', error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
    this.carrito = [];
    localStorage.removeItem('carrito');
    this.total = 0;
  }
}
