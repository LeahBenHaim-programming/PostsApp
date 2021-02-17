import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { User } from 'src/app/_models/user.model';
import { Post } from '../_models/post.model';
import { DataStorageService } from './data-storage.service';
import { IData } from './data.interface'
import { Comment } from 'src/app/_models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class ManagerService implements IData {

  onPostsUpdate = new Subject<Post[]>();
  onCommentsUpdateByPost = new Subject<Comment[]>();

  constructor(private dataStorageService: DataStorageService) {
  }

  userChecked(userId: number) {
    this.getPostsByUserId(userId)
      .subscribe(
        response => this.onPostsUpdate.next(response),
        error => console.error('failed to get posts by user id'))
  }
  postChecked(postId: number) {
    this.getCommentsByPostId(postId)
      .subscribe(
        response => this.onCommentsUpdateByPost.next(response),
        error => console.error('failed to get comments by post id'))
  }

  getUsers(): Observable<any> {
    return this.dataStorageService.getUsers();
  }
  
  getPostsByUserId(userId: number): Observable<any> {
    return this.dataStorageService.getPostsByUserId(userId);
  }


  getCommentsByPostId(postId: number): Observable<any> {
    return this.dataStorageService.getCommentsByPostId(postId);
  }
}
