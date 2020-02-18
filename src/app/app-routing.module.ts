import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddBookComponent } from "./components/book/add-book/add-book.component";

import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { UsereditprofileComponent } from './components/user/usereditprofile/usereditprofile.component';
import { UserwantbooksComponent } from './components/user/userwantbooks/userwantbooks.component';
import { UserhavebooksComponent } from './components/user/userhavebooks/userhavebooks.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { ComplaintsComponent } from './components/user/complaints/complaints.component';
import { SearchchatComponent } from './components/user/searchchat/searchchat.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book/add", component: AddBookComponent, outlet: "modalShared" },
  
  { path: "user/profile", component: UserprofileComponent },
  { path: "user/editprofile", component: UsereditprofileComponent },
  { path: "user/wantedbooks", component: UserwantbooksComponent },
  { path: "user/havedbooks", component: UserhavebooksComponent },
  { path: "user/searchchat", component: SearchchatComponent },
  { path: "user/complaint", component: ComplaintsComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
