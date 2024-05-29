import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/internal/Observable';
import { firstValueFrom } from 'rxjs';
import { User } from '../model/user';


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

  getUsers(): Promise<User[]>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<User[]>(`${this.apiUrl}`, httpOptions))
  }

  getUserById(userId: number): Promise<User>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<User>(`${this.apiUrl}/${userId}`, httpOptions))
  }

  updateUser(id: number, updatedUser: any): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.put(`${this.apiUrl}/${id}`, updatedUser,httpOptions);
  }

  getUsersCount(): Promise<number>{
    const httpOptions = this.getHttpOptions();
    return firstValueFrom(this.http.get<number>(`${this.apiUrl}/count`,httpOptions));
  }

  deleteUser(userId: number){
    const httpOptions = this.getHttpOptions();
    firstValueFrom(this.http.delete(`${this.apiUrl}/${userId}`, httpOptions));
  }

  createUser(user: User){
    const httpOptions = this.getHttpOptions();
    firstValueFrom(this.http.post(`${this.apiUrl}`, user ,httpOptions));
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
