import {
  Component,
  OnInit,
  Input,
  Injector,
} from '@angular/core';

import {
  NgbModal, NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

import {
  IframeComponent,
} from '@ceo/shared'

import { headerMenuVideos } from './videos';

@Component({
  selector: 'sunray-ui-site-layout-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  menu$: any

  @Input()
  layoutService: any

  videos: any = headerMenuVideos
  submenusDisabled: boolean = false

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit() {
    (<any>this.layoutService).routerNavigationStart$
      .subscribe(event => this.reset())
  }

  private reset() {
    this.resetSubmenus()
  }

  private resetSubmenus() {
    this.submenusDisabled = true
    let enableSubmenus = () => {
      this.submenusDisabled = false
    }
    setTimeout(enableSubmenus, 500)
  }

  onItemEvent(event) {
    let target = event.target

    let elementName = 'iframe-element'
    this.ensureCustomElement(elementName)
    this.showCustomElement(
      this.dialogServiceConfig(elementName, this.elementInputs(target))
    )
  }

  showCustomElement(elementConfig) {
    let dialogConfig = this.getDialogConfig()
    this.layoutService.dialogService.open(elementConfig, dialogConfig)
  }

  elementInputs(target) {
    return {
      url: target.url,
    }
  }

  getDialogConfig() {
    return {
      width: '800px'
    }
  }

  ensureCustomElement(elementName) {
    let config = {
      elementName: elementName,
      ctor: IframeComponent,
      opts: {injector: this.injector},
    }
    this.layoutService.defineCustomElement(config)
  }

  dialogServiceConfig(elementName, elementInputs: any = {}) {
    return {
      element: elementName,
      customElement: {
        name: elementName,
        inputs: elementInputs,
      },
      config: {
        header: {
          show: false,
        },
        footer: {
          show: false,
        }
      }
    }
  }
}
