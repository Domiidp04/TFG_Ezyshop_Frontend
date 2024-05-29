import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../model/user';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-admin-edit-users',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-edit-users.component.html',
  styleUrl: './admin-edit-users.component.scss'
})
export class AdminEditUsersComponent {

  public user: User;
  public userId: number;
  public updateForm: FormGroup;

  constructor(private userService: UserService, private route: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('userId'));
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

  private async initData(): Promise<void> {
    this.user = await this.userService.getUserById(this.userId);
    this.initFormData();
  }

  public updateUser() {
    this.userService.updateUser(this.user.id, this.updateForm.value).subscribe(
      (response) => {
        console.log(response);
        this.route.navigate(['/dashboard/users']);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
