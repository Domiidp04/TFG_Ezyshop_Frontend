import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => {
      console.log(data); // Haz algo con los datos aquí
    }, error => {
      console.error(error); // Maneja el error aquí
    });
  }



}
