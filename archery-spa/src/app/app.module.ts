import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {AppRoutingModule, routes} from './app-routing.module';
import { AnnoucementsComponent } from './annoucements/annoucements.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertifyService} from './_services/alertify.service';
import {UserService} from './_services/user.service';
import { AnnouncementService } from './_services/announcement.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnnoucementsComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
  providers: [
      AlertifyService,
      UserService,
      AnnouncementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
