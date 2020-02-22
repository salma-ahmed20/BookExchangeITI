import { UserHaveBookItem } from "../../../models/user-want.book.model";
import { LoginService } from "./../../../services/user/login/login.service";
import { UserService } from "./../../../services/user/user/user.service";
import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../_modal";
import { ServiceNameService } from "src/app/services/search/search.service";

@Component({
  selector: "app-add-request",
  templateUrl: "./add-request.component.html",
  styleUrls: ["./add-request.component.css"]
})
export class AddRequestComponent implements OnInit {
  @Input() requestedBook: UserHaveBookItem;
  userHaveBooks: Book[];
  currentuUerId;
  selectedBook: Book;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private modalService: ModalService,
    private serviceNameService: ServiceNameService
  ) {
    this.selectedBook = new Book();
  }

  ngOnInit() {
    if (this.loginService.isLoggedInNew()) {
      this.currentuUerId = this.loginService.getCurrentLogginId();
      // this.userService.getUserHaveBook(this.currentuUerId).subscribe(res => {
      //   this.userHaveBooks = res;
      // });
    }
  }
  closeModale(id) {
    this.modalService.close(this.requestedBook.Book.Book_Id + "AddBookModal");
  }
  keyword = "Title";
  data = Book[0];

  selectEvent(item: Book) {
    console.log(item);
    this.selectedBook = item;
  }

  onChangeSearch(val: string) {
    this.currentuUerId = this.loginService.getCurrentLogginId();
    this.serviceNameService
      .searchByNameAtUser(this.currentuUerId, val)
      .subscribe(res => {
        this.data = res;
      });
  }

  onFocused(e) {
    // do something when input is focused
  }
}
