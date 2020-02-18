import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhavebooks',
  templateUrl: './userhavebooks.component.html',
  styleUrls: ['./userhavebooks.component.css']
})
export class UserhavebooksComponent implements OnInit {

  books=
  [
    {id:1,name:"img1"},
    {id:4,name:"img4"},
    {id:3,name:"img3"},
    {id:4,name:"img1"}

  ]
 
  constructor() { }

  ngOnInit() {
  }

}
