import { Observable }   from 'rxjs';

import {
  Component, OnInit, Input
} from '@angular/core'

import {
  iEntity, iEntityCollection,
} from '@ceo/entity'

import {
  SharedBasePage as BasePage,
} from '@sunray-ui-app/modules/imports'

@Component({
  selector: 'sunray-ui-app-accounting-pay-invoice-page',
  templateUrl: './pay-invoice.page.html',
  styleUrls: ['./pay-invoice.page.scss'],
})
export class PayInvoicePage extends BasePage {

  delegatedProperties: any = {
    dataService: [
      'getTableHeader$',
    ],
  }

  @Input() entity: iEntity

  entity$: Observable<iEntity>
  entityLabels$: Observable<iEntityCollection>

  ngOnInit() {
    this.entityLabels$ = this.
      getPaymentDetailHeader$()
  }

  getPaymentDetailHeader$() {
    let item = "invoice-pay-payment-details-headers"
    return this.getTableHeader$(item)
  }
}
