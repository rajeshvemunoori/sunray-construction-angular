import * as _           from 'lodash'
import {
  Observable,
  pipe,
} from 'rxjs'
import {
  mergeMap, map,
  filter, tap,
  skipWhile,
} from 'rxjs/operators'

import {
  Component, 
  Injector,
} from '@angular/core'

import { iEntityCollection } from '@ceo/entity'

import {
  ApiRequestUrlBuilder,
} from '@sunray-api'
import {
  SharedBasePage as BasePage,
  PageService,
} from '@sunray-ui-app/modules/imports'
export {
  PayInvoicePage,
} from '@sunray-ui-app/modules/accounting/pages'
import { CompanyEditPage }        from '../../company-edit'

import { DataService } from './data.service'

@Component({
  selector: 'sunray-ui-app-account-company-detail-invoice-pane',
  templateUrl: './invoice-pane.component.html',
  styleUrls: ['./invoice-pane.component.scss'],
  providers: [DataService],
})
export class InvoicePaneComponent extends BasePage {
  delegatedProperties: any = {
    dataService: [
      'getStoreData$',
      'itemActions$',
      'collectionActions$',
      'getTableHeader$',
    ],
    pageService: [
      'showDialog', 'ensureCustomElement',
      'buildCustomElement', 'resourceFormFactory',
    ]
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    private urlBuilder: ApiRequestUrlBuilder,
    private injector: Injector,
  ) {
    super(pageService, dataService)
  }

  get collectionHeader$() {
    let item = 'company-detail-invoices-headers'
    return this.getTableHeader$(item)
  }

  get collection$() {
    let selectorName = 'app.entities.companies.selectedEntityInvoicesAll'
    return this.getStoreData$(selectorName).pipe(
      map(collection => {
        let addInvoiceId = (invoice) => {
          invoice.attributes['invoice-id']=invoice.id
        }
        _.map(collection.entities, addInvoiceId)
        return collection
      })
    )
  }

  triggerAction(event_) {
    switch(event_.action)
    {
      case "pdf":
        this.document_url(event_.entity.id, "invoice-documents")
        break
      case "excel":
        this.document_url(event_.entity.id, "invoice-documents", "xls")
        break
      case "pdf_summary":
        this.document_url(event_.entity.id, "invoice-summary-documents")
        break
      case "download_work_orders":
        this.downloadWorkOrders(event_.entity.id)
        break
      case "credit_card_payment_create":
        this.payInvoice(event_.entity)
        break
      default:
        break
    }
  }

  payInvoice(entity: iEntity) {
    let elementName = 'pay-invoice'
    this.ensureCustomElement(
      elementName,
      PayInvoicePage,
      {injector: this.injector}
    )

    let customElement = this.buildCustomElement(
      elementName,
      {
        paneName: 'Company Info'
      }
    )
    this.showDialog(customElement, this.dialogConfig())
  }

  document_url(id, type, fileType='pdf') {
    let pdfFileId = id + "."+fileType;
    let resourceOpts = {
      feature: 'app',
      type: type,
      payload: {
        id: pdfFileId
      }
    }
    let url = this.urlBuilder.build(resourceOpts);
    window.open(url, "_blank");
  }

  downloadWorkOrders(id) {
    let filePath = id + "/completed_notices";

    let resourceOpts = {
      feature: 'app',
      type: "invoices",
      id: filePath
    }
    let url = this.urlBuilder.build(resourceOpts);
    window.open(url, "_blank");
  }

  private dialogConfig() {
    return {
      header: {
        show: true,
        title: 'Pay Invoice'
      }
    }
  }
}
