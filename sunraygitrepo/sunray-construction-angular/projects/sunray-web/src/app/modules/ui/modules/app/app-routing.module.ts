import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }            from '@ceo/shared';

import { SharedModule, app }     from './modules/shared'
import { LayoutModule, LayoutComponent } from './modules/layout'

const routes: Routes = [
  {
    path: '',
    component: app.AppComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'accounts',
            loadChildren: './modules/account/account.module#AccountModule'
          },
          {
            path: 'invoices',
            loadChildren: './modules/accounting/accounting.module#AccountingModule'
          },
          {
            path: 'employees',
            loadChildren: './modules/admin/admin.module#AdminModule'
          },
          {
            path: 'documents',
            loadChildren: './modules/document/document.module#DocumentModule'
          },
          {
            path: 'projects',
            loadChildren: './modules/project/project.module#ProjectModule'
          },
          {
            path: 'reports',
            loadChildren: './modules/report/report.module#ReportModule'
          },
          {
            path: 'print',
            loadChildren: './modules/print/print.module#PrintModule'
          },
          {
            path: 'dashboard',
            loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
          },
          {
            path: 'settings',
            loadChildren: './modules/setting/setting.module#SettingModule'
          },
          {
            path: 'requests',
            loadChildren: './modules/document-request/document-request.module#DocumentRequestModule'
          },
        ]
      }
    ]
  }
];

let allRoutes: Array <any> = [
  ...routes,
];

@NgModule({
  imports: [
    RouterModule.forChild(allRoutes),
    SharedModule,
    LayoutModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
