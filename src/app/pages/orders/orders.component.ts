import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit{
  public orders: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrdersByUser();
  }

  private getOrdersByUser() {
    this.orderService.getOrdersByUser().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
}
