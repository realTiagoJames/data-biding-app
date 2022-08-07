import { RequestCreate } from '../user.model';
import { Component, OnInit } from '@angular/core';

 '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

   request: RequestCreate = {
    name:'',
    job:''
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
