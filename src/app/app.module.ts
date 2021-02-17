import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
    PostsListComponent,
    PostDetailsComponent,
    CommentsListComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
