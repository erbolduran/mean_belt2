import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { AppmntComponent } from './appmnt/appmnt.component';
import { AppmntShowComponent } from './appmnt/appmnt-show/appmnt-show.component';
import { AppmntNewComponent } from './appmnt/appmnt-new/appmnt-new.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UserComponent, children: [
    {path: '', component: UserNewComponent}
    ]
  },

  {path: 'show', component: AppmntComponent, children: [
    {path: '', component: AppmntShowComponent}
    ]
  },

  {path: 'new', component: AppmntComponent, children: [
    {path: '', component: AppmntNewComponent}
    ]
  },

  { path: '*', component: UserNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
