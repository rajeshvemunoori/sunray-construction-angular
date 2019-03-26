import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay
import * as pages from './pages';

const routes: Routes =  [
  {
    path: '',
    component: pages.EmployeeDirectoryPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AdminRoutingModule { }
