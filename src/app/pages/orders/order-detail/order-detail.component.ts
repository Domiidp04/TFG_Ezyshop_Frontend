import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../model/order';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit{

  public orderId:number;
  public order: Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private paymentService: PaymentService){ }

  ngOnInit(): void {
    this.orderId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getOrderDetail();
  }

  private getOrderDetail(): void{
    this.orderService.getOrderDetail(this.orderId).subscribe(
      (data: Order) => {
        console.log(data);
        this.order = data;
      }
    );
  }

  public makePayment(): void{
    this.paymentService.makePayment(this.orderId).subscribe(
      (response) => {
        window.open(response, '_self');
      },
      (error) => {
        console.error('Error en la creación de la orden:', error);
      }
    );
  }

}
