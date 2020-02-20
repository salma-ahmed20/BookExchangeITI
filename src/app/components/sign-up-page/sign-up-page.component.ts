import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  private url:"https://my-json-server.typicode.com/typicode/demo/posts";


  constructor( private http:HttpClient) { 
  

  }
  CreateForm(input:HTMLInputElement){
    let fname={Fname:input.value}
this.http.post(this.url,JSON.stringify(fname))
.subscribe(Response=>{
 

})
  }

  submit(value){
    console.log(value);
    
  }

  ngOnInit() {
  }

}
