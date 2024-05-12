import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public apiUrl: string = 'http://localhost:8081/ezyshop/api/payment/'
  private SUCCESS_URL = 'http://localhost:8081/ezyshop/api/pay/success';


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

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

  successPay(): Observable<any> {
    // Obtén los parámetros de la URL
    const paymentId = this.route.snapshot.queryParamMap.get('paymentId');
    const payerId = this.route.snapshot.queryParamMap.get('PayerID');
    const orderId = this.route.snapshot.queryParamMap.get('orderId');

    // Construye la URL para la solicitud GET
    const url = `${this.SUCCESS_URL}?paymentId=${paymentId}&PayerID=${payerId}&orderId=${orderId}`;

    const token = localStorage.getItem('access_token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'text' as 'json'
    };

    // Haz la solicitud GET al servidor
    return this.http.get(url,httpOptions);
  }


}
