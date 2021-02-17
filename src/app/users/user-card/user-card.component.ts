import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
  }

  userChecked(){
    this.managerService.userChecked(this.user.id);
  }
}
