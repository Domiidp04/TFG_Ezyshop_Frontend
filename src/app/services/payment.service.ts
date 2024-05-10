import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public apiUrl: string = 'http://localhost:8081/ezyshop/api/payment/'

  constructor(private http: HttpClient) { }

  makePayment(orderId: number): Observable<string> {
    // Construye la URL completa
    const token = localStorage.getItem('access_token');

    // Define las opciones de la petición HTTP, incluyendo los encabezados
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'text' as 'json'
    };

    const url = `${this.apiUrl}${orderId}`;

    // Realiza la petición POST
    return this.http.post<string>(url, {}, httpOptions);
  }


}
