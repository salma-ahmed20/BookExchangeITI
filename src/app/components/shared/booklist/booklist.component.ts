import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.css"]
})
export class BooklistComponent implements OnInit {
  @Input() books: Book[];
  id;
  constructor( private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap['id']
  this.route.paramMap.subscribe(params=>{
  this.id = +params.get('id');
  
  })

  }
}
