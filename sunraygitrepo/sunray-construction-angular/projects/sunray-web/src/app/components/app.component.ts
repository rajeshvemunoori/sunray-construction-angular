import * as _ from "lodash";

// any operators needed throughout your application
import './operators';

// libs
import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router'

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { LogService, AppService, Config } from '@ceo/core'

import { icons } from 'projects/sunray-web/src/environments/icons'

// app
import { AnalyticsService } from '@ceo/analytics';

import { BaseComponent } from '@ceo/shared'

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  private icons: any[]= icons

  constructor(
    public analytics: AnalyticsService,
    public logger: LogService,
    private appService: AppService,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    super()
  }

  ngOnInit() {
    //this.setRouterOptions()
    this.registerIcons()
    this.showRoutes()
  }

  //TODO: Do we need this?
  // What is the purpose of shouldReuseRoute
  private setRouterOptions(shouldReuse = true) {
    let shouldReuseRoute = (
      future: ActivatedRouteSnapshot,
      curr: ActivatedRouteSnapshot
    ) => {
      return true
    }

    this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute
  }

  private registerIcons() {
    let registerIcon = (icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    }
    _.map(this.icons, registerIcon);
  }

  private showRoutes() {
    for (var i = 0; i < this.router.config.length; i++) {
      var routePath:string = this.router.config[i].path;
      this.logger.debug(routePath)
    }
  }
}
