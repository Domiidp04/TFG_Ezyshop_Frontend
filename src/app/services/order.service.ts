import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDto } from '../model/orderDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8081/ezyshop/api/orders';

  constructor(private http: HttpClient) { }

  createOrderWithOrderProducts(orderRequestDto: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<any>(this.apiUrl, orderRequestDto, httpOptions);
  }

  getOrdersByUser(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<any>(this.apiUrl + '/user', httpOptions);
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
