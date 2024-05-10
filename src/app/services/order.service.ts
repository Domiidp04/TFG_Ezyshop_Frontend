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
    // Obtén el token del localStorage
    const token = localStorage.getItem('access_token');

    // Define las opciones de la petición HTTP, incluyendo los encabezados
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    // Realiza la petición POST con las opciones definidas
    return this.http.post<any>(this.apiUrl, orderRequestDto, httpOptions);
  }


}
