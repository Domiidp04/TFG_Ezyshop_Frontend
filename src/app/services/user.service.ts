import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/ezyshop/api/users'
  constructor(private http: HttpClient) { }

  getUserData() {
    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode.jwtDecode(token);

    const userId = decodedToken.sub;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get(`${this.apiUrl}/name/${userId}`, httpOptions);
  }

  updateUser(id: number, updatedUser: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.put(`${this.apiUrl}/${id}`, updatedUser,httpOptions);
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
