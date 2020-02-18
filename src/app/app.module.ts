import { UserComponent } from './components/user/user.component';
import { UserwantbooksComponent } from './components/user/userwantbooks/userwantbooks.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { UserhavebooksComponent } from './components/user/userhavebooks/userhavebooks.component';
import { UsereditprofileComponent } from './components/user/usereditprofile/usereditprofile.component';
import { SearchchatComponent } from './components/user/searchchat/searchchat.component';
import { ComplaintsComponent } from './components/user/complaints/complaints.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { SignUpModule } from "./components/sign-up-page/signup.module";
import { LoginModule } from "./components/login-page/login.module";
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    RequestsComponent,
    RequestItemComponent,
    SearchPopupComponent,
    ModalComponent,
    ChatComponent,
    ComplaintsComponent,
    SearchchatComponent,
    UsereditprofileComponent,
    UserhavebooksComponent,
    UserprofileComponent,
    UserwantbooksComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,

    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    BookModule,
    LoginModule,
    SignUpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
