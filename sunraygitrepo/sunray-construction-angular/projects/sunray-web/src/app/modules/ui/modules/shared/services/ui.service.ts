import { Injectable } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router'
import { DatePipe }               from '@angular/common'

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap'

import {
  DialogService,
  Mixin,
  PropertyDelegator,
  InputControlService,
} from '@ceo/shared'

import { ResourceFormFactory } from '@sunray-api'

import { SnackBarNotificationService } from './snack-bar-notification.service'

@Injectable()
@Mixin([PropertyDelegator])
export class UiService implements PropertyDelegator {
  public delegatedProperties = {
    notificationService: ['showNotification'],
  }

  constructor(
    public modalService: NgbModal,
    public dialogService: DialogService,
    public resourceFormFactory: ResourceFormFactory,
    public notificationService: SnackBarNotificationService,
    public datePipe: DatePipe,
    public inputControlService: InputControlService
  ) {
    this.setAllDelegatedProperties()
  }

  formatDate(date, format = "EEEE, \n MMMM d, y"): string {
    return this.datePipe.transform(date, format)
  }

  showDialog(...args: any) {
    return this.dialogService.open(...args)
  }


  // Mixin functions
  public setDelegatedProperties(source: any, propName: string[]): void {}
  public setAllDelegatedProperties(): void {}
}
