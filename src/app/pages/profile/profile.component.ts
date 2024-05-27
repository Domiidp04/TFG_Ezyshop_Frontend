import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.userService.getUserData().subscribe((data: User) => {
      this.user = data;
    });
  }

  public reditectToEdit(): void{
    this.route.navigate(['/profile/edit']);
  }
}
