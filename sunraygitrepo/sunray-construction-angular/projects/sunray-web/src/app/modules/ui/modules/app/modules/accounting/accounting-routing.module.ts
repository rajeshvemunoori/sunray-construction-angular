import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay

import * as pages from './pages';

const routes: Routes =  [
  {
    path: ':id/edit',
    component: pages.InvoiceEditPage,
  },
  {
    path: ':id/pay-invoice',
    component: pages.PayInvoicePage,
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
export class AccountingRoutingModule { }
