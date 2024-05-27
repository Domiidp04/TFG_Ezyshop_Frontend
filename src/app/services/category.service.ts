import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://localhost:8081/ezyshop/api/categories"


  constructor(private http: HttpClient) { }

  getCategories(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<Category[]>(this.apiUrl, httpOptions)
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
