/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/index';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        if (this.authService.userSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router }
    ]; };
    return AuthGuard;
}());
export { AuthGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9ndWFyZHMvYXV0aC1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFnQixlQUFlLENBQUE7QUFDcEQsT0FBTyxFQUNRLE1BQU0sRUFDcEIsTUFBTSxpQkFBaUIsQ0FBQTtBQUV4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFL0M7SUFHRSxtQkFDVSxXQUF3QixFQUN4QixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDOzs7O0lBRUosK0JBQVc7OztJQUFYO1FBQ0UsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFBO1NBQ1o7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUMzQixPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQzs7Z0JBZkYsVUFBVTs7OztnQkFGRixXQUFXO2dCQUhMLE1BQU07O0lBcUJyQixnQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksU0FBUzs7Ozs7O0lBR2xCLGdDQUFnQzs7Ozs7SUFDaEMsMkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsIFJvdXRlclxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICBpZih0aGlzLmF1dGhTZXJ2aWNlLnVzZXJTaWduZWRJbigpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuIl19