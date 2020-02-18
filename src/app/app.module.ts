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

import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { BookItemComponent } from './components/shared/book-item/book-item.component';
import { BookListComponent } from './components/home/book-list/book-list.component';
import { UserListComponent } from './components/home/user-list/user-list.component';
import { UserItemComponent } from './components/shared/user-item/user-item.component';

import { UserComponent } from './components/user/user.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { UsereditprofileComponent } from './components/user/usereditprofile/usereditprofile.component';
import { UserhavebooksComponent } from './components/user/userhavebooks/userhavebooks.component';
import { UserwantbooksComponent } from './components/user/userwantbooks/userwantbooks.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { SearchchatComponent } from './components/user/searchchat/searchchat.component';
import { ComplaintsComponent } from './components/user/complaints/complaints.component';



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
    ModalComponent,
    BookdetailsComponent, 
    BookItemComponent, 
    BookListComponent, 
    UserListComponent, 
    UserItemComponent,
    UserComponent, 
    UserprofileComponent, 
    UsereditprofileComponent, 
    UserhavebooksComponent, 
    UserwantbooksComponent, 
    ChatComponent, 
    SearchchatComponent, 
    ComplaintsComponent
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
