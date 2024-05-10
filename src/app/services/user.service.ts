import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/ezyshop/api/users/'
  constructor(private http: HttpClient) { }

  getUserData() {
    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode.jwtDecode(token);
    console.log(decodedToken);

    const userId = decodedToken.iat; // Asume que el ID del usuario está en la propiedad 'sub'
    console.log(userId);


    return this.http.get(`${this.apiUrl}${userId}`);
  }

}
