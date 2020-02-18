import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {path:'bookdetails/:id',component:BookdetailsComponent},
  { path: "**", pathMatch: "full", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
