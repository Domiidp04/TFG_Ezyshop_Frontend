import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { OrderDto } from '../model/orderDto';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/orders';

  constructor(private http: HttpClient) { }

  createOrderWithOrderProducts(orderRequestDto: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<any>(this.apiUrl, orderRequestDto, httpOptions);
  }

  getOrdersByUser(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<any>(this.apiUrl + '/user', httpOptions);
  }

  getOrderDetail(orderId: number){
    const httpOptions = this.getHttpOptions();
    return this.http.get(this.apiUrl+ '/' + orderId, httpOptions)
  }

  getMoney(): Promise<number>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<number>(this.apiUrl+ '/money', httpOptions));
  }

  getOrdersCount(): Promise<number>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<number>(this.apiUrl+ '/count', httpOptions));
  }

  getOrders(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Order[]>(this.apiUrl, httpOptions);
  }

  private getHttpOptions() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
