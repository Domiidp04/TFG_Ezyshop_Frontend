import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageProductService {

  public apiUrl: string = 'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/imageProducts';

  constructor(private http: HttpClient) { }

  uploadImage(imageProduct: FormData, productId: number) {
    const httpOptions = this.getHttpOptions();
    delete httpOptions.headers['Content-Type'];
    return this.http.post(this.apiUrl + '/' + productId, imageProduct, httpOptions);
  }

  private getHttpOptions() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
