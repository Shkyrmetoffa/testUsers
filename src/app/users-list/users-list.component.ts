import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  public users: User;

  constructor(private _UserService: UserService) { }

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this._UserService.getUsers()
      .subscribe(
        users => {
        console.log(users)
          this.users = users},
        error => console.log(error)
      );
  }

}