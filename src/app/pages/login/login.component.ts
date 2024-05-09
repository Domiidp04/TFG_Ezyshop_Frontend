import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private http: HttpClient){ }

  ngOnInit(): void {
   this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  public login(): void {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      (res) => {
        localStorage.setItem("token", res['access_token']);
      }
    )
    this.loginForm.reset();
  }

}
