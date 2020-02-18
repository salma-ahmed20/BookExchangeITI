import { BookModule } from "./components/book/book.module";
import { HomeModule } from "./components/home/home.module";
import { SearchPopupComponent } from "./Components/search/search-popup/search-popup.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RequestsComponent } from "./components/header/requests/requests.component";
import { RequestItemComponent } from "./components/shared/request-item/request-item.component";

import { ModalComponent } from "./components/shared/modal/modal.component";

import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { UserListComponent } from "./components/home/user-list/user-list.component";
import { UserItemComponent } from "./components/shared/user-item/user-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    RequestsComponent,
    RequestItemComponent,
    SearchPopupComponent,
    ModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    BookModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
