/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
import { Directive, } from "@angular/core";
import { Router, NavigationEnd, } from '@angular/router';
var ScrollTopDirective = /** @class */ (function () {
    function ScrollTopDirective(router) {
        this.router = router;
    }
    /**
     * @return {?}
     */
    ScrollTopDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.routerNavigationEnd$
            .subscribe(function (event) { return _this.scrollTop(); });
        this.scrollTop();
    };
    Object.defineProperty(ScrollTopDirective.prototype, "routerNavigationEnd$", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._routerNavigationEnd$) {
                this._routerNavigationEnd$ = this.buildNavEndEvent();
            }
            return this._routerNavigationEnd$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ScrollTopDirective.prototype.buildNavEndEvent = /**
     * @private
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }))));
    };
    /**
     * @return {?}
     */
    ScrollTopDirective.prototype.scrollTop = /**
     * @return {?}
     */
    function () {
        console.log("scroll to the top -- directive");
        window.scrollTo(0, 0);
    };
    ScrollTopDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ceoScrollTop]"
                },] }
    ];
    /** @nocollapse */
    ScrollTopDirective.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return ScrollTopDirective;
}());
export { ScrollTopDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollTopDirective.prototype._routerNavigationEnd$;
    /**
     * @type {?}
     * @private
     */
    ScrollTopDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9kaXJlY3RpdmVzL3Njcm9sbC10b3Avc2Nyb2xsLXRvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QyxPQUFPLEVBQ0wsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxNQUFNLEVBQ04sYUFBYSxHQUNkLE1BQU0saUJBQWlCLENBQUE7QUFHeEI7SUFNRSw0QkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO1FBRXZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsc0JBQUksb0RBQW9COzs7O1FBQXhCO1lBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO2FBQ3JEO1lBRUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sNkNBQWdCOzs7O0lBQXhCO1FBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLENBQUMsQ0FDaEQsRUFBNkIsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBRUQsc0NBQVM7OztJQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBUEMsTUFBTTs7SUF3Q1IseUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWhDWSxrQkFBa0I7Ozs7OztJQUM3QixtREFBd0Q7Ozs7O0lBR3RELG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQge1xuICBSb3V0ZXIsXG4gIE5hdmlnYXRpb25FbmQsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2Nlb1Njcm9sbFRvcF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb3BEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9yb3V0ZXJOYXZpZ2F0aW9uRW5kJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uRW5kPlxuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7fVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXJOYXZpZ2F0aW9uRW5kJFxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLnNjcm9sbFRvcCgpKVxuXG4gICAgdGhpcy5zY3JvbGxUb3AoKVxuICB9XG5cbiAgZ2V0IHJvdXRlck5hdmlnYXRpb25FbmQkKCk6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD4ge1xuICAgIGlmKCF0aGlzLl9yb3V0ZXJOYXZpZ2F0aW9uRW5kJCkge1xuICAgICAgdGhpcy5fcm91dGVyTmF2aWdhdGlvbkVuZCQgPSB0aGlzLmJ1aWxkTmF2RW5kRXZlbnQoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yb3V0ZXJOYXZpZ2F0aW9uRW5kJFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5hdkVuZEV2ZW50KCk6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKSBhcyBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+XG4gIH1cbiAgXG4gIHNjcm9sbFRvcCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInNjcm9sbCB0byB0aGUgdG9wIC0tIGRpcmVjdGl2ZVwiKVxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICB9XG59XG5cbiJdfQ==