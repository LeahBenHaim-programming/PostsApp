import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ManagerService } from 'src/app/_services/manager.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.managerService.getUsers().subscribe(
      response => this.users = response,
      error => console.error('failed to get users'));
  }


}
