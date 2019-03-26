/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/index';
export class AuthGuard {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        if (this.authService.userSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9ndWFyZHMvYXV0aC1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFnQixlQUFlLENBQUE7QUFDcEQsT0FBTyxFQUNRLE1BQU0sRUFDcEIsTUFBTSxpQkFBaUIsQ0FBQTtBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFHL0MsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBRXBCLFlBQ1UsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUE7U0FDWjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzNCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDOzs7WUFmRixVQUFVOzs7O1lBRkYsV0FBVztZQUhMLE1BQU07Ozs7Ozs7SUFTakIsZ0NBQWdDOzs7OztJQUNoQywyQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSwgUm91dGVyXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmKHRoaXMuYXV0aFNlcnZpY2UudXNlclNpZ25lZEluKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG59XG4iXX0=