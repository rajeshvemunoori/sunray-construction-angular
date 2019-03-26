import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './components/app.routes';

export type ScrollPositionRestoration = 
  "disabled" | "enabled" | "top"

export type AnchorScrolling = 
  "disabled" | "enabled"

let routerOptions = {
  scrollPositionRestoration: <ScrollPositionRestoration>'enabled',
  anchorScrolling: <AnchorScrolling>'enabled',
}

let routerModule = RouterModule.forRoot(AppRoutes, routerOptions)

@NgModule({
  imports: [
    routerModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
