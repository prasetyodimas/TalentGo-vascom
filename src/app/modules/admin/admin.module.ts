import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
