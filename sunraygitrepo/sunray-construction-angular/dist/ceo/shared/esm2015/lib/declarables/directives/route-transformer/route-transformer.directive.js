/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Directive, ElementRef, HostListener, EventEmitter, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { ClickStopEventBubbleDirective, } from '../click-stop-event-bubble/click-stop-event-bubble.directive';
export class RouteTransformerDirective extends ClickStopEventBubbleDirective {
    /**
     * @param {?} el
     * @param {?} router
     */
    constructor(el, router) {
        super();
        this.el = el;
        this.router = router;
        this.routeEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        /** @type {?} */
        let linkElement = this.getLink(event);
        if (linkElement) {
            this.handleLink(linkElement);
            this.stopEventBubble(event);
        }
        else {
            return;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    getLink(event) {
        if (event.target.tagName === 'A') {
            return event.target;
        }
        else if (event.target.parentElement.tagName === 'A') {
            return event.target.parentElement;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    handleLink(element) {
        if (this.canRoute(element)) {
            this.navigate(element);
        }
        else {
            this.emitRouteEvent(element);
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    emitRouteEvent(element) {
        /** @type {?} */
        let event = {
            target: element
        };
        this.routeEvent.emit(event);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    canRoute(element) {
        return window.location.origin == element.origin;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    navigate(element) {
        /** @type {?} */
        let url = element.pathname;
        /** @type {?} */
        let opts = {};
        /** @type {?} */
        let extras = this.buildNavigationExtras(element);
        this.router.navigate([url, opts], extras);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    buildNavigationExtras(element) {
        /** @type {?} */
        let extras = ((/** @type {?} */ ({})));
        /** @type {?} */
        let queryParams = this.buildQueryParams(element);
        if (!_.isEmpty(queryParams)) {
            extras.queryParams = queryParams;
        }
        /** @type {?} */
        let fragment = this.getUrlFragment(element);
        if (!_.isEmpty(fragment)) {
            extras.fragment = fragment;
        }
        return extras;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getUrlFragment(element) {
        return element.hash.substring(1);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    buildQueryParams(element) {
        /** @type {?} */
        let pairs = element.search.slice(1).split('&');
        /** @type {?} */
        var result = {};
        if (pairs[0].length > 0) {
            _.forEach(pairs, function (pair) {
                pair = pair.split('=');
                result[pair[0]] = decodeURI(pair[1] || '');
            });
        }
        return result;
    }
}
RouteTransformerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ceoRouteTransformer]'
            },] }
];
/** @nocollapse */
RouteTransformerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Router }
];
RouteTransformerDirective.propDecorators = {
    routeEvent: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    RouteTransformerDirective.prototype.routeEvent;
    /**
     * @type {?}
     * @private
     */
    RouteTransformerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    RouteTransformerDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdHJhbnNmb3JtZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGlyZWN0aXZlcy9yb3V0ZS10cmFuc2Zvcm1lci9yb3V0ZS10cmFuc2Zvcm1lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQUUsWUFBWSxFQUMxQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBVXhDLE9BQU8sRUFDTCw2QkFBNkIsR0FDOUIsTUFBTSw4REFBOEQsQ0FBQTtBQUtyRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsNkJBQTZCOzs7OztJQUkxRSxZQUFvQixFQUFjLEVBQVUsTUFBYztRQUN4RCxLQUFLLEVBQUUsQ0FBQTtRQURXLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjFELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQUl2RCxDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxLQUFLOztZQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUVyQyxJQUFHLFdBQVcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUNJO1lBQ0gsT0FBTTtTQUNQO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFBO1NBQ3BCO2FBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQ25ELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUE7U0FDbEM7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsT0FBTztRQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN2QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM3QjtJQUNILENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxPQUFPOztZQUN4QixLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsT0FBTztTQUNoQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQTtJQUNqRCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBTzs7WUFDbEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFROztZQUN0QixJQUFJLEdBQUcsRUFBRTs7WUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzQyxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxPQUFPOztZQUMvQixNQUFNLEdBQUcsQ0FBQyxtQkFBSyxFQUFFLEVBQUEsQ0FBQzs7WUFFbEIsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7U0FDakM7O1lBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQzNDLElBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1NBQzNCO1FBRUQsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBTztRQUM1QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLE9BQU87O1lBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUMxQyxNQUFNLEdBQUcsRUFBRTtRQUNmLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBUyxJQUFJO2dCQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDNUMsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQzs7O1lBN0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBckJZLFVBQVU7WUFLZCxNQUFNOzs7eUJBa0JaLE1BQU07c0JBT04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVBqQywrQ0FDdUQ7Ozs7O0lBRTNDLHVDQUFzQjs7Ozs7SUFBRSwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQge1xuICBIdHRwUGFyYW1zLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcblxuXG5cbmltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICdAY2VvL2NvcmUnXG5cblxuaW1wb3J0IHtcbiAgQ2xpY2tTdG9wRXZlbnRCdWJibGVEaXJlY3RpdmUsXG59IGZyb20gJy4uL2NsaWNrLXN0b3AtZXZlbnQtYnViYmxlL2NsaWNrLXN0b3AtZXZlbnQtYnViYmxlLmRpcmVjdGl2ZSdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nlb1JvdXRlVHJhbnNmb3JtZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVRyYW5zZm9ybWVyRGlyZWN0aXZlIGV4dGVuZHMgQ2xpY2tTdG9wRXZlbnRCdWJibGVEaXJlY3RpdmUge1xuICBAT3V0cHV0KClcbiAgcm91dGVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBsZXQgbGlua0VsZW1lbnQgPSB0aGlzLmdldExpbmsoZXZlbnQpXG5cbiAgICBpZihsaW5rRWxlbWVudCkge1xuICAgICAgdGhpcy5oYW5kbGVMaW5rKGxpbmtFbGVtZW50KVxuICAgICAgdGhpcy5zdG9wRXZlbnRCdWJibGUoZXZlbnQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5rKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIHJldHVybiBldmVudC50YXJnZXRcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGluayhlbGVtZW50KSB7XG4gICAgaWYodGhpcy5jYW5Sb3V0ZShlbGVtZW50KSkge1xuICAgICAgdGhpcy5uYXZpZ2F0ZShlbGVtZW50KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdFJvdXRlRXZlbnQoZWxlbWVudClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRSb3V0ZUV2ZW50KGVsZW1lbnQpOiB2b2lkIHtcbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IGVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5yb3V0ZUV2ZW50LmVtaXQoZXZlbnQpXG4gIH1cblxuICBwcml2YXRlIGNhblJvdXRlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PSBlbGVtZW50Lm9yaWdpblxuICB9XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0ZShlbGVtZW50KSB7XG4gICAgbGV0IHVybCA9IGVsZW1lbnQucGF0aG5hbWVcbiAgICBsZXQgb3B0cyA9IHt9XG4gICAgbGV0IGV4dHJhcyA9IHRoaXMuYnVpbGROYXZpZ2F0aW9uRXh0cmFzKGVsZW1lbnQpXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybCwgb3B0c10sIGV4dHJhcylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROYXZpZ2F0aW9uRXh0cmFzKGVsZW1lbnQpIHtcbiAgICBsZXQgZXh0cmFzID0gKDxhbnk+e30pXG5cbiAgICBsZXQgcXVlcnlQYXJhbXMgPSB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZWxlbWVudClcbiAgICBpZighXy5pc0VtcHR5KHF1ZXJ5UGFyYW1zKSkge1xuICAgICAgZXh0cmFzLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXNcbiAgICB9XG5cbiAgICBsZXQgZnJhZ21lbnQgPSB0aGlzLmdldFVybEZyYWdtZW50KGVsZW1lbnQpXG4gICAgaWYoIV8uaXNFbXB0eShmcmFnbWVudCkpIHtcbiAgICAgIGV4dHJhcy5mcmFnbWVudCA9IGZyYWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dHJhc1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVcmxGcmFnbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaGFzaC5zdWJzdHJpbmcoMSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRRdWVyeVBhcmFtcyhlbGVtZW50KSB7XG4gICAgbGV0IHBhaXJzID0gZWxlbWVudC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKVxuICAgIHZhciByZXN1bHQgPSB7fVxuICAgIGlmKHBhaXJzWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIF8uZm9yRWFjaChwYWlycywgZnVuY3Rpb24ocGFpcikge1xuICAgICAgICBwYWlyID0gcGFpci5zcGxpdCgnPScpXG4gICAgICAgIHJlc3VsdFtwYWlyWzBdXSA9IGRlY29kZVVSSShwYWlyWzFdIHx8ICcnKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCBcbiAgfVxufVxuIl19