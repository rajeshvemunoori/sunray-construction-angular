/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
import { Directive, } from "@angular/core";
import { Router, NavigationEnd, } from '@angular/router';
export class ScrollTopDirective {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.routerNavigationEnd$
            .subscribe(event => this.scrollTop());
        this.scrollTop();
    }
    /**
     * @return {?}
     */
    get routerNavigationEnd$() {
        if (!this._routerNavigationEnd$) {
            this._routerNavigationEnd$ = this.buildNavEndEvent();
        }
        return this._routerNavigationEnd$;
    }
    /**
     * @private
     * @return {?}
     */
    buildNavEndEvent() {
        return (/** @type {?} */ (this.router.events.pipe(filter(event => event instanceof NavigationEnd))));
    }
    /**
     * @return {?}
     */
    scrollTop() {
        console.log("scroll to the top -- directive");
        window.scrollTo(0, 0);
    }
}
ScrollTopDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ceoScrollTop]"
            },] }
];
/** @nocollapse */
ScrollTopDirective.ctorParameters = () => [
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9kaXJlY3RpdmVzL3Njcm9sbC10b3Avc2Nyb2xsLXRvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QyxPQUFPLEVBQ0wsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxNQUFNLEVBQ04sYUFBYSxHQUNkLE1BQU0saUJBQWlCLENBQUE7QUFNeEIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUc3QixZQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQjthQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUV2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1NBQ3JEO1FBRUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUE7SUFDbkMsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDdEIsT0FBTyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FDaEQsRUFBNkIsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN2QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFQQyxNQUFNOzs7Ozs7O0lBU04sbURBQXdEOzs7OztJQUd0RCxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgUm91dGVyLFxuICBOYXZpZ2F0aW9uRW5kLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltjZW9TY3JvbGxUb3BdXCJcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9wRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcm91dGVyTmF2aWdhdGlvbkVuZCQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD5cbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge31cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVyTmF2aWdhdGlvbkVuZCRcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5zY3JvbGxUb3AoKSlcblxuICAgIHRoaXMuc2Nyb2xsVG9wKClcbiAgfVxuXG4gIGdldCByb3V0ZXJOYXZpZ2F0aW9uRW5kJCgpOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+IHtcbiAgICBpZighdGhpcy5fcm91dGVyTmF2aWdhdGlvbkVuZCQpIHtcbiAgICAgIHRoaXMuX3JvdXRlck5hdmlnYXRpb25FbmQkID0gdGhpcy5idWlsZE5hdkVuZEV2ZW50KClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcm91dGVyTmF2aWdhdGlvbkVuZCRcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROYXZFbmRFdmVudCgpOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICkgYXMgT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uRW5kPlxuICB9XG4gIFxuICBzY3JvbGxUb3AoKSB7XG4gICAgY29uc29sZS5sb2coXCJzY3JvbGwgdG8gdGhlIHRvcCAtLSBkaXJlY3RpdmVcIilcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgfVxufVxuXG4iXX0=