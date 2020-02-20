
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-geners',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.css']
})
export class GenersComponent implements OnInit{
 
  genres:any;
 
  // selectedGenreId=0;
  /**
   *
   */
  // constructor(private router:Router) {
  //   router.parseUrl(router.url).queryParams.
  // }
  ngOnInit() {
    
 
    this.genres =  [
      { id: 11, name: 'Fiction' },
      { id: 12, name: 'Novel' },
      { id: 13, name: 'Fantasy' },
      { id: 14, name: ' Science fiction' },
      { id: 15, name: ' Horror' },
      { id: 16, name: ' Western' },
      { id: 17, name: ' Romance' },
      { id: 18, name: 'Thriller' },
      { id: 19, name: 'Mystery' },
      { id: 20, name: 'Childrens literature' },
    ];
  }

//   goToGenre(id){
//     console.log(id);
    
// this.selectedGenreId = id;
//   }


}
