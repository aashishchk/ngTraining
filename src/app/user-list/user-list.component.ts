import { Component, OnInit } from '@angular/core';
import { UserListService } from '../_services/user-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist$: Observable<object>;
  userList: object[];
  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.userlist$ = this.userListService.getUserList();
    // this.userlist$.subscribe((data: object[]) => {
    //   this.userList = data;
    // });
  }

}
