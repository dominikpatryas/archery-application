import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {AnnouncementsComponent} from './announcements/announcements.component';


export const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
