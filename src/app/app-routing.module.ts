import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {GenersComponent} from './components/geners/geners.component'
import { GenreBooksComponent } from './components/genre-books/genre-books.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:'genre',children:[
    {path:":id",component:GenreBooksComponent}
  ]},
  { path: "home", component: HomeComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


