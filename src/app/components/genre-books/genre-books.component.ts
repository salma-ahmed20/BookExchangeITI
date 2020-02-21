import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { GenBooksService } from 'src/app/services/genreBooks/gen-books.service';

@Component({
  selector: 'app-genre-books',
  templateUrl: './genre-books.component.html',
  styleUrls: ['./genre-books.component.css']
})
export class GenreBooksComponent implements OnInit {
id:any;
books:any;


  constructor(private route:ActivatedRoute,private service:GenBooksService){

  }
  ngOnInit() {
  this.service.getBooks()
  .subscribe(response=>{
    

   
  });

    this.route.paramMap['id']
    this.route.paramMap.subscribe(params=>{
    this.id = +params.get('id');
    this.books=[
      { id:1,name:"book "+this.id},
      { id:2,name:"book "+this.id},
      { id:3,name:"book "+this.id},
      { id:4,name:"book " +this.id},
      
    ]
  }

  
  
  
  
 
     
 
    )}}