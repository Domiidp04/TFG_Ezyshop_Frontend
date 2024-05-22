import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/ezyshop/api/products';

  getProducts(): Observable<Product[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product[]>(this.apiUrl, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product>(`${this.apiUrl}/${id}`,httpOptions);
  }

  getProductsByTitle(name: string){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product[]>(`${this.apiUrl}/title?name=${name}`,httpOptions);
  }

  getProductsShops(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product[]>(`${this.apiUrl}/shops`,httpOptions);
  }


  getProductsByCategoryId(categoryId: number){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product[]>(`${this.apiUrl}/${categoryId}/categories`, httpOptions);
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
