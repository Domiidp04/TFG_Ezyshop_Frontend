import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  public user: User;
  public updateForm: FormGroup;

  constructor(private userService: UserService, private route: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.initData();
    this.initForm();
  }

  private initForm() {
    this.updateForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  private initFormData(): void {
    this.updateForm.get('username').setValue(this.user.username || '');
    this.updateForm.get('email').setValue(this.user.email || '');
    this.updateForm.get('name').setValue(this.user.name || '');
    this.updateForm.get('lastname').setValue(this.user.lastname || '');
    this.updateForm.get('zip').setValue(this.user.zip || '');
    this.updateForm.get('street').setValue(this.user.street || '');
    this.updateForm.get('number').setValue(this.user.number || '');
    this.updateForm.get('description').setValue(this.user.description || '');
  }

  private initData() {
    this.userService.getUserData().subscribe((data: User) => {
      this.user = data;
      this.initFormData();
    });
  }

  public updateUser() {
    this.userService.updateUser(this.user.id, this.updateForm.value).subscribe(
      (response) => {
        console.log(response);
        this.authService.logout();
        this.route.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
