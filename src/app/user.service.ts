import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: Http) { }
  
  getUsers() {
    return this._http.get(`${this.URL}/users?_page=1&_limit=100`)
      .map(this.extractData)
      .catch(error => Observable.throw(error.json()));
  }

  getUsersPosts(userId: number){
    return this._http.get(`${this.URL}/users/${userId}/posts`)
      .map(this.extractData)
      .catch(error => Observable.throw(error.json()));
  }

  getPostsComments(postId: number){
    return this._http.get(`${this.URL}/posts/${postId}/comments`)
      .map(this.extractData)
      .catch(error => Observable.throw(error.json()));
  }

    private extractData(res: Response) {
      return res.json();
    }
}