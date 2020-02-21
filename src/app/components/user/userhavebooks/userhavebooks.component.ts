import { UserService } from "./../../../services/user/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-userhavebooks",
  templateUrl: "./userhavebooks.component.html",
  styleUrls: ["./userhavebooks.component.css"]
})
export class UserhavebooksComponent implements OnInit {
  books: any;
  
  constructor(private user: UserService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.books=
  [
    {id:1,name:"img1"},
    {id:4,name:"img4"},
    {id:3,name:"img3"},
    {id:4,name:"img1"}

  ]

    this.user.getUserHaveBook().subscribe(res => {

      this.books = res;

    });
  }
}
