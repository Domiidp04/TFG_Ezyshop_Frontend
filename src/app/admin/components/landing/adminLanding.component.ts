import { Component } from '@angular/core';
import { MoneyComponent } from '../money/money.component';
import { OrdersComponent } from '../orders/orders.component';
import { StockComponent } from '../stock/stock.component';
import { UsersComponent } from '../users/users.component';
import { OrderService } from '../../../services/order.service';
import { ProductService } from '../../../services/product.service';
import { UserService } from '../../../services/user.service';
import { ChartBillingComponent } from '../chart-billing/chart-billing.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [OrdersComponent, MoneyComponent, StockComponent, UsersComponent, ChartBillingComponent],
  templateUrl: './adminLanding.component.html',
  styleUrl: './adminLanding.component.scss',
})
export class AdminLandingComponent {
  public money: number;
  public orders: number;
  public stock: number;
  public users: number;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private productService: ProductService
  ) {}

  async ngOnInit(): Promise<void> {
    this.money = await this.orderService.getMoney();
    this.users = await this.userService.getUsersCount();
    this.orders = await this.orderService.getOrdersCount();
    this.stock = await this.productService.getStock();
  }
}
