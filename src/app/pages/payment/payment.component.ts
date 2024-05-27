import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit(): void {
    const url = this.router.url;  // obtén la URL actual

    if (url.includes('pay/success')) {
      this.paymentService.successPay().subscribe(() => {
        this.router.navigate(['/my-orders']);  // redirige a 'mis pedidos'
      });
    }
  }

}
