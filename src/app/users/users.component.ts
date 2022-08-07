import { ResponseUsers } from './user.model';
import { UsersService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers!: ResponseUsers;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe(res => this.responseUsers =res )
  }

}
