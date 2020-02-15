import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import{LoginPageComponent} from './components/login-page/login-page.component'
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [AppComponent, 
    HeaderComponent,
     FooterComponent,
      NotFoundComponent,
      LoginPageComponent, 
       SignUpPageComponent],
  imports: [BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
