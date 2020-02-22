import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { UsereditprofileComponent } from "./usereditprofile/usereditprofile.component";
import { UserwantbooksComponent } from "./userwantbooks/userwantbooks.component";
import { UserhavebooksComponent } from "./userhavebooks/userhavebooks.component";
import { SearchchatComponent } from "./searchchat/searchchat.component";
import { ComplaintsComponent } from "./complaints/complaints.component";

const routes: Routes = [
  {
    path: "user/:id",
    component: UserComponent,
    children: [
      { path: "profile", component: UserprofileComponent },
      { path: "editprofile", component: UsereditprofileComponent },
      { path: "wantedbooks", component: UserwantbooksComponent },
      { path: "havedbooks", component: UserhavebooksComponent },
      { path: "searchchat", component: SearchchatComponent },
      { path: "complaint", component: ComplaintsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
