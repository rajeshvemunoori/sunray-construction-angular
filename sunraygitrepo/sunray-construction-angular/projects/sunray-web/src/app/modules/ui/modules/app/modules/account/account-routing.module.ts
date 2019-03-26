import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay
import * as pages from './pages';

const routes: Routes =  [
  {
    path: '',
    component: pages.CompanyDirectoryPage
  },
  {
    path: ':id/edit',
    component: pages.CompanyEditPage
  },
  {
    path: ':id/division-edit',
    component: pages.DivisionEditPage
  },
  {
    path: ':id/user-edit',
    component: pages.UserEditPage
  },
  {
    path: ':id',
    component: pages.CompanyDetailPage,
    children: [
      {
        path: 'account',
        component: pages.AccountPaneComponent
      },
      {
        path: 'additional-info',
        component: pages.AdditionalInfoPaneComponent
      },
      {
        path: 'users',
        component: pages.UserPaneComponent
      },
      {
        path: 'address-book',
        component: pages.AddressBookPaneComponent
      },
      {
        path: 'divisions',
        component: pages.DivisionPaneComponent
      },
      {
        path: 'invoices',
        component: pages.InvoicePaneComponent
      },
      {
        path: 'preferences',
        component: pages.PreferencePaneComponent
      },
      {
        path: 'profile',
        component: pages.ProfilePaneComponent
      },
      {
        path: 'users',
        component: pages.UserPaneComponent
      },
    ]
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
export class AccountRoutingModule { }
