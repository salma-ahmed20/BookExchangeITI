import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  books=
  [
    {id:1,name:"img1"},
    {id:4,name:"img4"},
    {id:3,name:"img3"},
    {id:5,name:"img5"},

  ]
 
  constructor() { }

  ngOnInit() {
  }

}
