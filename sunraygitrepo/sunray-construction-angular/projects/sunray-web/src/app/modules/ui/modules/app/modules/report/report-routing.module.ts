import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay
import * as pages from './pages';

const routes: Routes =  [
  {
    path: '',
    component: pages.ReportTypeDirectoryPage,
  },
  {
    path: ':id',
    component: pages.ReportDetailPage,
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
export class ReportRoutingModule { }
