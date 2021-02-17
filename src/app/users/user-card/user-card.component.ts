import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { User } from 'src/app/_models/user.model';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnDestroy {

  @Input() user: User;
  isChecked = false;
  subscription: Subscription;

  constructor(private managerService: ManagerService) { }
  ngOnInit(): void {
    this.subscription = this.managerService.onCurrentUserChanged
      .subscribe(
        (cu:User) => { 
          this.isChecked = (cu.id == this.user.id) ? true : false 
        },error=>{console.log("error")}
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  userChecked() {
    this.managerService.userChecked(this.user);
  }
}
