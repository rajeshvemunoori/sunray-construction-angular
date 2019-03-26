import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Other feature modules
//import { LayoutModule, BodyComponent, BodyHeaderComponent }   from '../../../layout/index';

// SunRay
import { DashboardPage }  from './pages/index';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'mail-manager',
    component: DashboardPage,
  },
  {
    path: 'performance',
    component: DashboardPage,
  },
  {
    path: 'account-manager-hard',
    component: DashboardPage,
  },
  {
    path: 'supervisor',
    component: DashboardPage,
  }
];

@NgModule({
  imports: [
    //LayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class DashboardRoutingModule { }
