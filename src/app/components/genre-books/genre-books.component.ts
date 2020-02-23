import { Book } from "./../../models/book_item.model";
import { GenreService } from "./../../services/gener/genre.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-genre-books",
  templateUrl: "./genre-books.component.html",
  styleUrls: ["./genre-books.component.css"]
})
export class GenreBooksComponent implements OnInit {
  books: Book[];

  constructor(private route: ActivatedRoute, private service: GenreService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.service.getBookByGenreId(id).subscribe(res => {
        this.books = res[0];
      });
    });
  }
}
