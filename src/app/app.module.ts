import { SearchPopupComponent } from "./Components/search/search-popup/search-popup.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { RequestsComponent } from './components/header/requests/requests.component';
import { RequestItemComponent } from './components/shared/request-item/request-item.component';
import{ LoginPageComponent} from './components/login-page/login-page.component'
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GenersComponent } from './components/geners/geners.component';

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
    LoginPageComponent, 
    SignUpPageComponent, 
    GenersComponent,
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
