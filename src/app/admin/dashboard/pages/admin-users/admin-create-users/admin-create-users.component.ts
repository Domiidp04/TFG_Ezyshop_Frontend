import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { User } from '../../../../../model/user';
import { AuthService } from '../../../../../services/auth.service';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-admin-create-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-create-users.component.html',
  styleUrl: './admin-create-users.component.scss'
})
export class AdminCreateUsersComponent {
  public user: User;
  public userId: number;
  public createForm: FormGroup;

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.createForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  public async createUser(){
    await this.userService.createUser(this.createForm.value);
  }



}
