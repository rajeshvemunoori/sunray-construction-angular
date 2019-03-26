import * as invoiceEditPage     from './invoice-edit'
import * as payInvoicePage      from './pay-invoice'

export const pages: any[] = [
  invoiceEditPage.InvoiceEditPage,
  invoiceEditPage.FeeTypeComponent,
  payInvoicePage.PayInvoicePage,
];

export * from './invoice-edit'
export * from './pay-invoice'
