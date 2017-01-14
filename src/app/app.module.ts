import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersPostComponent } from './users-post/users-post.component';
import { UsersCommentComponent } from './users-comment/users-comment.component';
import { NoContentComponent } from './no-content/no-content.component';
import { UserService } from './user.service';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId/posts', component: UsersPostComponent },
  { path: 'posts/:postId/comments', component: UsersCommentComponent },
  { path: '**',    component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersPostComponent,
    UsersCommentComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
