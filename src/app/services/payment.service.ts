import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public apiUrl: string = 'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/payment/'
  private SUCCESS_URL = 'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/pay/success';


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  makePayment(orderId: number): Observable<string> {
    const httpOptions = {
        ...this.getHttpOptions(),
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

    const httpOptions = this.getHttpOptions();

    // Haz la solicitud GET al servidor
    return this.http.get(url,httpOptions);
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
