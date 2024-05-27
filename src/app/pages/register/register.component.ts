import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  public register(): void{

    this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.route.navigate(['/login']);
      }
    )
  }



}
