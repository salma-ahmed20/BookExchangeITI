import { HttpClientModule } from "@angular/common/http";
import { SearchPopupComponent } from "./Components/search/search-popup/search-popup.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from "./components/home/home.component";
import { SliderComponent } from "./components/home/slider/slider.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RequestsComponent } from "./components/header/requests/requests.component";
import { RequestItemComponent } from "./components/shared/request-item/request-item.component";
import { BookdetailsComponent } from "./components/bookdetails/bookdetails.component";
import { BookItemComponent } from "./components/shared/book-item/book-item.component";
import { BookListComponent } from "./components/home/book-list/book-list.component";
import { UserListComponent } from "./components/home/user-list/user-list.component";
import { UserItemComponent } from "./components/shared/user-item/user-item.component";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SignUpPageComponent } from "./components/sign-up-page/sign-up-page.component";

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
    BookdetailsComponent,
    BookItemComponent,
    BookListComponent,
    UserListComponent,
    UserItemComponent,
    LoginPageComponent,
    SignUpPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
