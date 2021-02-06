import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { SellerComponent } from 'src/app/modules/seller/seller.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RequestssellerComponent } from 'src/app/modules/seller/requestsseller/requestsseller.component';
import { RequestsadminComponent } from 'src/app/modules/admin/requestsadmin/requestsadmin.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    SellerComponent,
    AdminComponent,
   RequestssellerComponent,
   RequestsadminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class DefaultModule { }
