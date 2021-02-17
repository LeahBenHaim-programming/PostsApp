import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/_models/post.model';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  subscription: Subscription;

  constructor(private managerService: ManagerService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.managerService.onPostsUpdate
      .subscribe(
        response => {
          this.posts = response;
          this.managerService.currentUser.posts = response
        }
      )
  }
}
