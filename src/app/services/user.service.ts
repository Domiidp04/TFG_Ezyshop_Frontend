import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/ezyshop/api/users/name/'
  constructor(private http: HttpClient) { }

  getUserData() {
    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode.jwtDecode(token);
    console.log(decodedToken);

    const userId = decodedToken.sub; // Asume que el ID del usuario está en la propiedad 'sub'
    console.log(userId);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get(`${this.apiUrl}${userId}`, httpOptions);
  }


}
