import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user/user.service';
import { AppmntService } from './appmnt/appmnt.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { AppmntComponent } from './appmnt/appmnt.component';
import { AppmntShowComponent } from './appmnt/appmnt-show/appmnt-show.component';
import { AppmntNewComponent } from './appmnt/appmnt-new/appmnt-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    AppmntComponent,
    AppmntShowComponent,
    AppmntNewComponent,
    UserLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, AppmntService],
  bootstrap: [AppComponent]
})
export class AppModule { }
