/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
// module
import { ConsoleService, LogService, RouterExtensions, WindowService, AppService, StorageService, InflectionService, RouteReusableStrategy, } from './services/index';
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    /**
     * @param {?} configuredProviders
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?} configuredProviders
     * @return {?}
     */
    function (configuredProviders) {
        return {
            ngModule: CoreModule,
            providers: configuredProviders
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    providers: [
                        ConsoleService,
                        LogService,
                        RouterExtensions,
                        WindowService,
                        AppService,
                        StorageService,
                        InflectionService,
                        {
                            provide: RouteReuseStrategy,
                            useClass: RouteReusableStrategy
                        },
                    ]
                },] }
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUdyRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFVBQVUsRUFDVixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLGtCQUFrQixDQUFBO0FBR3pCO0lBdUJFLG9CQUFvQyxZQUF3QjtRQUMxRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7OztJQVZNLGtCQUFPOzs7O0lBQWQsVUFBZSxtQkFBK0I7UUFDNUMsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNULGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakI7NEJBQ0UsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsUUFBUSxFQUFFLHFCQUFxQjt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBUW1ELFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQUtuQyxpQkFBQztDQUFBLEFBNUJELElBNEJDO1NBWlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7XG4gIENvbnNvbGVTZXJ2aWNlLFxuICBMb2dTZXJ2aWNlLFxuICBSb3V0ZXJFeHRlbnNpb25zLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBBcHBTZXJ2aWNlLFxuICBTdG9yYWdlU2VydmljZSxcbiAgSW5mbGVjdGlvblNlcnZpY2UsXG4gIFJvdXRlUmV1c2FibGVTdHJhdGVneSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCdcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uc29sZVNlcnZpY2UsXG4gICAgTG9nU2VydmljZSxcbiAgICBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIFdpbmRvd1NlcnZpY2UsXG4gICAgQXBwU2VydmljZSxcbiAgICBTdG9yYWdlU2VydmljZSxcbiAgICBJbmZsZWN0aW9uU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBSb3V0ZVJldXNlU3RyYXRlZ3ksXG4gICAgICB1c2VDbGFzczogUm91dGVSZXVzYWJsZVN0cmF0ZWd5XG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==