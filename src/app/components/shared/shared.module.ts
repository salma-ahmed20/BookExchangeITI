import { AddRequestComponent } from "./add-request/add-request.component";
import { RouterModule, Router } from "@angular/router";
import { UserItemComponent } from "./user-item/user-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookListComponent } from "../home/book-list/book-list.component";
import { ChangeBackgroundDirective } from "src/app/directives/change-background.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { UserListComponent } from "../home/user-list/user-list.component";
import { BookOverviewComponent } from "./book-overview/book-overview.component";
import { BooklistComponent } from "./booklist/booklist.component";
import { ModalModule } from "./_modal";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

@NgModule({
  declarations: [
    BookListComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BookOverviewComponent,
    BooklistComponent,
    AddRequestComponent
  ],
  imports: [CommonModule, ModalModule, RouterModule, AutocompleteLibModule],
  exports: [
    BookListComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BooklistComponent,
    BookOverviewComponent,
    CommonModule,
    ModalModule,
    AddRequestComponent,
    AutocompleteLibModule
  ]
})
export class SharedModule {}
