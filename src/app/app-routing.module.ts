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

const routes: Routes = [
  {
    path: 'login',
    component: ControlComponent
  },
 {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'seller',
  component: SellerComponent
},
{
  path: 'admin',
  component: AdminComponent
}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
