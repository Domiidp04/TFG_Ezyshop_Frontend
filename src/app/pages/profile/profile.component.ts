import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData(){
    this.userService.getUserData().subscribe(
      (data: User)=>{
        this.user = data;
        console.log(data);
      }
    )

  }


}
