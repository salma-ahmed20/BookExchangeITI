import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { ModalService } from "../_modal";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"]
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  openModalPreview() {
    this.modalService.open(this.book.Book_Id + "Modal");
  }
}
