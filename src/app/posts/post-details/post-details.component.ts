import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post.model';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: Post;

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
  }

  postChecked(){
    this.managerService.postChecked(this.post.id);
  }

}
