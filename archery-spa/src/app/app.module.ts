import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import {UserService} from './_services/user.service';
import {AnnouncementService} from './_services/announcement.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AnnouncementsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
      UserService,
      AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
