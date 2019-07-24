import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnnoucementsComponent} from "./annoucements/annoucements.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', component: AnnoucementsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }