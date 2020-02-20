import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Genres } from 'src/app/models/genre_book.model';


@Injectable({
  providedIn: 'root'
})
export class GenBooksService {
  private url:"";

  constructor(private http:HttpClient) { 
    
    }

    getBooks(){
      return this.http.get<Genres[]>(this.url);
  }
}
