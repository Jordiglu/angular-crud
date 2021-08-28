import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdduserComponent } from './adduser/adduser.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: NewsletterComponent },
  { path: 'users', component: UserComponent },
  { path: 'newsletter', component: NewsletterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
