import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user.model';
import { ManagerService } from 'src/app/_services/manager.service'
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit, OnDestroy {

  users: User[] = [];
  subscription: Subscription;

  constructor(private managerService: ManagerService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  ngAfterViewInit(): void {
    //this.managerService.userChecked(this.users[0])
  }

  ngOnInit(): void {
    this.subscription = this.managerService.getUsers().subscribe(
      response => {
        this.users = response;
        this.managerService.userChecked(this.users[0]);
      },
      error =>
        console.error('failed to get users'));
  }
}
