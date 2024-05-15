import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private inicioSesionStatus = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
  return this.http.post('http://localhost:8081/ezyshop/api/auth/login', {username, password}, { observe: 'response' }).pipe(tap(res => {
    const token = res.headers.get('Authorization');
    console.log(token);  // Imprime el token
    localStorage.setItem('access_token', token);
  }))
}

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  getInicioSesionStatus(): Observable<boolean> {
    return this.inicioSesionStatus.asObservable();
  }


}
