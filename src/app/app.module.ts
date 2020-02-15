import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RequestsComponent } from './components/header/requests/requests.component';
import { RequestItemComponent } from './components/shared/request-item/request-item.component';
import { UserComponent } from './components/user/user.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { UsereditprofileComponent } from './components/user/usereditprofile/usereditprofile.component';
import { UserhavebooksComponent } from './components/user/userhavebooks/userhavebooks.component';
import { UserwantbooksComponent } from './components/user/userwantbooks/userwantbooks.component';



@NgModule({

  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, SliderComponent,
    NotFoundComponent,RequestsComponent, RequestItemComponent, UserComponent, UserprofileComponent, UsereditprofileComponent, UserhavebooksComponent, UserwantbooksComponent],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
