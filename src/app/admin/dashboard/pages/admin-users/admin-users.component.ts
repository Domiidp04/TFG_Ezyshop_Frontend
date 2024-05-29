import { Component, NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { Product } from '../../../../model/product';
import { ProductService } from '../../../../services/product.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterLink } from '@angular/router';
import { User } from '../../../../model/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    CommonModule,
    TimelineModule,
    IconFieldModule,
    InputIconModule,
    RouterLink
  ],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent {

  public users: User[];
  public first: number = 0;
  public rows: number = 10;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  private async getUsers(): Promise<void> {
    this.users = await this.userService.getUsers();
  }
  public next(): void {
    this.first = this.first + this.rows;
  }

  public prev() {
    this.first = this.first - this.rows;
  }

  public reset() {
    this.first = 0;
  }

  public pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  public isLastPage(): boolean {
    return this.users
      ? this.first === this.users.length - this.rows
      : true;
  }

  public isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

  public getSeverityDisabled(disabled: boolean) {
    switch (disabled) {
      case false:
        return 'success';
      case true:
        return 'danger';
    }
  }

  public updateProduct(userId: number, user:Product) {
    this.userService.updateUser(userId, user).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  public async deleteUser(userId: number){
    await this.userService.deleteUser(userId);
    this.getUsers();
  }
}
