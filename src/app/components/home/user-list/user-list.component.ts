import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users=
  [
    {id:1,UName:"u1",BName:"b1"},
    {id:4,UName:"u2",BName:"b2"},
    {id:3,UName:"u3",BName:"b3"},
    {id:5,UName:"u4",BName:"b4"}

  ]
  constructor() { }

  ngOnInit() {
  }

}
