import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Login } from '../model/login';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private inicioSesionStatus = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private http: HttpClient, private userService: UserService, private route: Router) {}

  login(username: string, password: string) {
    return this.http
      .post(
        'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/auth/login',
        { username, password },
        { observe: 'response' }
      )
      .pipe(
        tap(async (res) => {
          const token = res.headers.get('Authorization');
          localStorage.setItem('access_token', token);
          this.inicioSesionStatus.next(true);

          // Obtener el usuario y guardar su rol en el localStorage
          const user = await this.userService.getUserByUsername(username);
          localStorage.setItem('user_role', user.role);

          if (localStorage.getItem('user_role') === 'ADMIN') {
            this.route.navigate(['/dashboard']);
          } else {
            this.route.navigate(['/']);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('token');
    this.inicioSesionStatus.next(false);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getInicioSesionStatus(): Observable<boolean> {
    return this.inicioSesionStatus.asObservable();
  }

  register(register: Login) {
    return this.http.post<Login>(
      'https://tfg-ezyshop-backend-sbido.onrender.com/ezyshop/api/auth/register',
      register
    );
  }
}
