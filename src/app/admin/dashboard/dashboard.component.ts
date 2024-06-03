import { Component, OnInit } from '@angular/core';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminProductsComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  public money: number;
  public orders: number;
  public stock: number;
  public users: number;

  constructor(private authService: AuthService, private orderService: OrderService, private router:Router){}

  async ngOnInit(): Promise<void> {
    this.money = await this.orderService.getMoney();
  }

  public cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}
