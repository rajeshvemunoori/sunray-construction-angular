import '../rxjs-imports'

// angular
import { NgModule }                from '@angular/core'
import {
  APP_BASE_HREF, DatePipe, }       from '@angular/common'
import { BrowserModule }           from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  RouterModule,
} from '@angular/router'

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'


import { StoreDevtoolsModule }     from '@ngrx/store-devtools'

// vendor
import { TranslateLoader }      from '@ngx-translate/core'
import { AngularTokenModule }   from 'angular-token'
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap'
import { InlineSVGModule }      from 'ng-inline-svg'

// service modules
import {
  WindowService, StorageService, ConsoleService,
  createConsoleTarget, provideConsoleTarget, LogTarget,
  LogLevel, ConsoleTarget,
  CoreModule,
} from '@ceo/core'

import { StateModule }              from '@ceo/state'
import { AnalyticsModule }          from '@ceo/analytics'
import { VendorProvidersModule }    from '@ceo/vendor'
import {
  SharedProvidersModule,
  CeoFormsModule,
} from '@ceo/shared'
import { EntityModule }             from '@ceo/entity'

import { environment } from '../environments/environment'

// app
import { AppRoutingModule } from './app-routing.module'
import {
  appComponents, AppComponent,
} from './components'

import { providers } from './providers'

declare var window, console, localStorage

// For AoT compilation to work:
export function win() {
  return window
}
export function storage() {
  return localStorage
}
export function cons() {
  return console
}
export function consoleLogTarget(consoleService: ConsoleService) {
  return new ConsoleTarget(consoleService, { minLogLevel: LogLevel.Debug })
}

@NgModule({
  imports: [
    //angular core modules
    HttpClientModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'sunray-web' }),
    BrowserAnimationsModule,
    // vendor modules
    NgbModule.forRoot(),
    InlineSVGModule.forRoot({ baseUrl: environment.baseUrl }),
    StoreDevtoolsModule.instrument({
      name: environment.applicationName,
      maxAge: 25,
    }),
    AngularTokenModule.forRoot({
      apiBase:   environment.apis.sunray.config.url,
      apiPath:   'api/v1',
    }),
    //@ceo modules
    AnalyticsModule,
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: StorageService, useFactory: (storage) },
      { provide: ConsoleService, useFactory: (cons) },
      {
        provide: LogTarget,
        useFactory: (consoleLogTarget),
        deps: [ConsoleService],
        multi: true
      }
    ]),
    StateModule,
    SharedProvidersModule,
    VendorProvidersModule,
    EntityModule,
    CeoFormsModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    ...appComponents
  ],
  providers: [
    DatePipe,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    AngularTokenModule,
    providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
