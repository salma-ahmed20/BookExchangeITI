import { SearchPopupComponent } from "./Components/search/search-popup/search-popup.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from "./components/home/home.component";
import { SliderComponent } from "./components/home/slider/slider.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RequestsComponent } from "./components/header/requests/requests.component";
import { RequestItemComponent } from "./components/shared/request-item/request-item.component";
import { AddBookComponent } from "./components/book/add-book/add-book.component";
import { ModalComponent } from "./components/shared/modal/modal.component";

import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    NotFoundComponent,
    RequestsComponent,
    RequestItemComponent,
    SearchPopupComponent,
    AddBookComponent,
    ModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
