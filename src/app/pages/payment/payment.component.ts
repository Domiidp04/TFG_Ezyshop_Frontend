import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url;  // obtén la URL actual

    if (url.includes('pay/success')) {
      this.router.navigate(['/my-orders']);  // redirige a 'mis pedidos'
    }
  }

}
