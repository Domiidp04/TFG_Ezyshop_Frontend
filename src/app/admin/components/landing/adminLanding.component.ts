import { Component } from '@angular/core';
import { MoneyComponent } from '../money/money.component';
import { OrdersComponent } from '../orders/orders.component';
import { StockComponent } from '../stock/stock.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [OrdersComponent, MoneyComponent, StockComponent, UsersComponent],
  templateUrl: './adminLanding.component.html',
  styleUrl: './adminLanding.component.scss'
})
export class AdminLandingComponent {

}
