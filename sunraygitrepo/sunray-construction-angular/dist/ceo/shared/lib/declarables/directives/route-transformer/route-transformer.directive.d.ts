import { ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ClickStopEventBubbleDirective } from '../click-stop-event-bubble/click-stop-event-bubble.directive';
export declare class RouteTransformerDirective extends ClickStopEventBubbleDirective {
    private el;
    private router;
    routeEvent: EventEmitter<any>;
    constructor(el: ElementRef, router: Router);
    onClick(event: any): void;
    private getLink;
    private handleLink;
    private emitRouteEvent;
    private canRoute;
    private navigate;
    private buildNavigationExtras;
    private getUrlFragment;
    private buildQueryParams;
}
