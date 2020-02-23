import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user/user.service';

@Component({
  selector: 'app-userwantbooks',
  templateUrl: './userwantbooks.component.html',
  styleUrls: ['./userwantbooks.component.css']
})
export class UserwantbooksComponent implements OnInit {

  books:any;
  id;
 
  constructor(private route:ActivatedRoute,private user: UserService){}
  ngOnInit() {
    this.user.getUserWantBook().subscribe(res => {
      this.books = res;
    });
  
   this.books=
  [
    {id:1,name:"img1"},
    {id:4,name:"img4"},
    {id:3,name:"img3"},
    {id:4,name:"img1"}

  ]
  this.route.paramMap['id']
    this.route.params.subscribe(params=>{
    this.id = +params.get('id');
  }
    );

}


}
