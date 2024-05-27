import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [AccordionModule, CommonModule, RouterLink],
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
