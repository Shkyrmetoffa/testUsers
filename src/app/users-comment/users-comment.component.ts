import { Comments } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users-comment',
  templateUrl: './users-comment.component.html',
  styleUrls: ['./users-comment.component.css']
})
export class UsersCommentComponent implements OnInit {
  public comments: Comments;
  constructor(  private _UserService: UserService,
    private route: ActivatedRoute,
  ) { }
    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this._UserService.getPostsComments(+params['postId']))
        .subscribe(
          comments =>{
            console.log(comments)
            this.comments = comments},
          error => console.log(error)
          );
      }

}
