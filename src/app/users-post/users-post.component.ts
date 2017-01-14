import { Posts } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users-post',
  templateUrl: './users-post.component.html',
  styleUrls: ['./users-post.component.css']
})
export class UsersPostComponent implements OnInit {
  public posts: Posts[];

    constructor(
    private _UserService: UserService,
    private route: ActivatedRoute,
  ) { }
    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this._UserService.getUsersPosts(+params['userId']))
        .subscribe(
          posts => this.posts = posts,
          error => console.log(error)
          );
      }

}
