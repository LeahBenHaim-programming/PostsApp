import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, OnDestroy } from '@angular/core';
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

  onCurrentUserChanged = new Subject<User>();
  onPostsUpdate = new Subject<Post[]>();
  onCommentsUpdateByPost = new Subject<Comment[]>();

  currentUser: User = null;
  currentPostId: number = 0;

  constructor(private dataStorageService: DataStorageService, private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        if(this.currentPostId){
        this.ngZone.run(() => {
          this.getComments(this.currentPostId);
          console.log("interval")
        })};
      }, 30000);
    })
  }

  userChecked(user: User) {
    this.currentUser = user;
    this.postChecked(0);
    this.onCurrentUserChanged.next(this.currentUser);
    this.getPostsByUserId(user.id)
      .subscribe(
        response => {
          this.onPostsUpdate.next(response);
          this.currentUser.posts=response;
        },
        error => console.error('failed to get posts by user id'))
  }

  postChecked(postId: number) {
    this.currentPostId=postId;
    this.getComments(postId);
  }
  getCommentsByPostId(postId: number): Observable<any> {
    return this.dataStorageService.getCommentsByPostId(postId);
  }

  getComments(postId: number) {
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
}
