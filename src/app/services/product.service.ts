import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, firstValueFrom } from "rxjs";
import { Product } from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/products';

  getProducts(): Promise<Product[]> {
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<Product[]>(this.apiUrl, httpOptions));
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

  getProductsDesc(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Product[]>(`${this.apiUrl}/news`,httpOptions);
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

  public updateProduct(id: number, product: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.put(`${this.apiUrl}/${id}`, product, httpOptions);
  }

  public create(product: Product): Promise<Product>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.post<Product>(this.apiUrl, product, httpOptions));
  }

  getStock(): Promise<number>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<number>(`${this.apiUrl}/stock`,httpOptions));
  }

  deleteProduct(productId:number){
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.delete(`${this.apiUrl}/${productId}`,httpOptions));
  }

}
