/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Directive, ElementRef, HostListener, EventEmitter, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { ClickStopEventBubbleDirective, } from '../click-stop-event-bubble/click-stop-event-bubble.directive';
var RouteTransformerDirective = /** @class */ (function (_super) {
    tslib_1.__extends(RouteTransformerDirective, _super);
    function RouteTransformerDirective(el, router) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.router = router;
        _this.routeEvent = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RouteTransformerDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var linkElement = this.getLink(event);
        if (linkElement) {
            this.handleLink(linkElement);
            this.stopEventBubble(event);
        }
        else {
            return;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    RouteTransformerDirective.prototype.getLink = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.tagName === 'A') {
            return event.target;
        }
        else if (event.target.parentElement.tagName === 'A') {
            return event.target.parentElement;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.handleLink = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.canRoute(element)) {
            this.navigate(element);
        }
        else {
            this.emitRouteEvent(element);
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.emitRouteEvent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var event = {
            target: element
        };
        this.routeEvent.emit(event);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.canRoute = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return window.location.origin == element.origin;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.navigate = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var url = element.pathname;
        /** @type {?} */
        var opts = {};
        /** @type {?} */
        var extras = this.buildNavigationExtras(element);
        this.router.navigate([url, opts], extras);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.buildNavigationExtras = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var extras = ((/** @type {?} */ ({})));
        /** @type {?} */
        var queryParams = this.buildQueryParams(element);
        if (!_.isEmpty(queryParams)) {
            extras.queryParams = queryParams;
        }
        /** @type {?} */
        var fragment = this.getUrlFragment(element);
        if (!_.isEmpty(fragment)) {
            extras.fragment = fragment;
        }
        return extras;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.getUrlFragment = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element.hash.substring(1);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    RouteTransformerDirective.prototype.buildQueryParams = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var pairs = element.search.slice(1).split('&');
        /** @type {?} */
        var result = {};
        if (pairs[0].length > 0) {
            _.forEach(pairs, function (pair) {
                pair = pair.split('=');
                result[pair[0]] = decodeURI(pair[1] || '');
            });
        }
        return result;
    };
    RouteTransformerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ceoRouteTransformer]'
                },] }
    ];
    /** @nocollapse */
    RouteTransformerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Router }
    ]; };
    RouteTransformerDirective.propDecorators = {
        routeEvent: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return RouteTransformerDirective;
}(ClickStopEventBubbleDirective));
export { RouteTransformerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdHJhbnNmb3JtZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGlyZWN0aXZlcy9yb3V0ZS10cmFuc2Zvcm1lci9yb3V0ZS10cmFuc2Zvcm1lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUFFLFlBQVksRUFDMUIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQVV4QyxPQUFPLEVBQ0wsNkJBQTZCLEdBQzlCLE1BQU0sOERBQThELENBQUE7QUFFckU7SUFHK0MscURBQTZCO0lBSTFFLG1DQUFvQixFQUFjLEVBQVUsTUFBYztRQUExRCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsUUFBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFGMUQsZ0JBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTs7SUFJdkQsQ0FBQzs7Ozs7SUFHTSwyQ0FBTzs7OztJQURkLFVBQ2UsS0FBSzs7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFckMsSUFBRyxXQUFXLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7YUFDSTtZQUNILE9BQU07U0FDUDtJQUNILENBQUM7Ozs7OztJQUVPLDJDQUFPOzs7OztJQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxLQUFL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QUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBckJZLFVBQVU7Z0JBS2QsTUFBTTs7OzZCQWtCWixNQUFNOzBCQU9OLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBbUZuQyxnQ0FBQztDQUFBLEFBOUZELENBRytDLDZCQUE2QixHQTJGM0U7U0EzRlkseUJBQXlCOzs7SUFDcEMsK0NBQ3VEOzs7OztJQUUzQyx1Q0FBc0I7Ozs7O0lBQUUsMkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgSHR0cFBhcmFtcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5cblxuXG5pbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5cbmltcG9ydCB7XG4gIENsaWNrU3RvcEV2ZW50QnViYmxlRGlyZWN0aXZlLFxufSBmcm9tICcuLi9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS5kaXJlY3RpdmUnXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZW9Sb3V0ZVRyYW5zZm9ybWVyXSdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVUcmFuc2Zvcm1lckRpcmVjdGl2ZSBleHRlbmRzIENsaWNrU3RvcEV2ZW50QnViYmxlRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpXG4gIHJvdXRlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50KSB7XG4gICAgbGV0IGxpbmtFbGVtZW50ID0gdGhpcy5nZXRMaW5rKGV2ZW50KVxuXG4gICAgaWYobGlua0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlTGluayhsaW5rRWxlbWVudClcbiAgICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGV2ZW50KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGluayhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxpbmsoZWxlbWVudCkge1xuICAgIGlmKHRoaXMuY2FuUm91dGUoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmF2aWdhdGUoZWxlbWVudClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVtaXRSb3V0ZUV2ZW50KGVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Um91dGVFdmVudChlbGVtZW50KTogdm9pZCB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiBlbGVtZW50XG4gICAgfVxuICAgIHRoaXMucm91dGVFdmVudC5lbWl0KGV2ZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5Sb3V0ZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT0gZWxlbWVudC5vcmlnaW5cbiAgfVxuXG4gIHByaXZhdGUgbmF2aWdhdGUoZWxlbWVudCkge1xuICAgIGxldCB1cmwgPSBlbGVtZW50LnBhdGhuYW1lXG4gICAgbGV0IG9wdHMgPSB7fVxuICAgIGxldCBleHRyYXMgPSB0aGlzLmJ1aWxkTmF2aWdhdGlvbkV4dHJhcyhlbGVtZW50KVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmwsIG9wdHNdLCBleHRyYXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTmF2aWdhdGlvbkV4dHJhcyhlbGVtZW50KSB7XG4gICAgbGV0IGV4dHJhcyA9ICg8YW55Pnt9KVxuXG4gICAgbGV0IHF1ZXJ5UGFyYW1zID0gdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGVsZW1lbnQpXG4gICAgaWYoIV8uaXNFbXB0eShxdWVyeVBhcmFtcykpIHtcbiAgICAgIGV4dHJhcy5xdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zXG4gICAgfVxuXG4gICAgbGV0IGZyYWdtZW50ID0gdGhpcy5nZXRVcmxGcmFnbWVudChlbGVtZW50KVxuICAgIGlmKCFfLmlzRW1wdHkoZnJhZ21lbnQpKSB7XG4gICAgICBleHRyYXMuZnJhZ21lbnQgPSBmcmFnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBleHRyYXNcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXJsRnJhZ21lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lmhhc2guc3Vic3RyaW5nKDEpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUXVlcnlQYXJhbXMoZWxlbWVudCkge1xuICAgIGxldCBwYWlycyA9IGVsZW1lbnQuc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJylcbiAgICB2YXIgcmVzdWx0ID0ge31cbiAgICBpZihwYWlyc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICBfLmZvckVhY2gocGFpcnMsIGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcGFpciA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgICByZXN1bHRbcGFpclswXV0gPSBkZWNvZGVVUkkocGFpclsxXSB8fCAnJylcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgXG4gIH1cbn1cbiJdfQ==