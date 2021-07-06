import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { LoginComponent } from './control/login/login.component';
import { RegisterComponent } from './control/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './modules/admin/admin.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SellerComponent } from './modules/seller/seller.component';

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: ControlComponent
  },
  {path: 'signup', component: RegisterComponent},
 {
  path: 'profile/:id',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'profile/:id/dash', component: DashboardComponent},
    {path: 'profile/:id/posts',  component: PostsComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
