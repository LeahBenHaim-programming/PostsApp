import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManagerService } from 'src/app/_services/manager.service';
import { Comment } from 'src/app/_models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit, OnDestroy {

  comments: Comment[] = [];
  subscription: Subscription;

  constructor(private managerService: ManagerService,private ngZone:NgZone) { }

  ngOnInit(): void {
    this.subscription = this.managerService.onCommentsUpdateByPost
    .subscribe(
      response => this.comments =response? response:[],
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
