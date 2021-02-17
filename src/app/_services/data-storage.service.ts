import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../_models/post.model';
import { User } from '../_models/user.model';
import { IData } from './data.interface';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService implements IData {

  baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<User[]>(this.baseUrl + '/users')
  }

  getPostsByUserId(userId: number): Observable<any> {
    return this.http.get<Post[]>(this.baseUrl + '/users/' + userId + '/posts')
  }

  getCommentsByPostId(postId: number): Observable<any> {
    return this.http
      .get<Post[]>(this.baseUrl + '/posts/' + postId + '/comments')
  }
}
