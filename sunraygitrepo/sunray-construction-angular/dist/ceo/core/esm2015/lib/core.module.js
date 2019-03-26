/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// angular
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
// module
import { ConsoleService, LogService, RouterExtensions, WindowService, AppService, StorageService, InflectionService, RouteReusableStrategy, } from './services/index';
export class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    /**
     * @param {?} configuredProviders
     * @return {?}
     */
    static forRoot(configuredProviders) {
        return {
            ngModule: CoreModule,
            providers: configuredProviders
        };
    }
}
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
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUdyRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFVBQVUsRUFDVixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLGtCQUFrQixDQUFBO0FBbUJ6QixNQUFNLE9BQU8sVUFBVTs7OztJQU9yQixZQUFvQyxZQUF3QjtRQUMxRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7OztJQVZELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQStCO1FBQzVDLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRTtvQkFDVCxjQUFjO29CQUNkLFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCO3dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQ2hDO2lCQUNGO2FBQ0Y7Ozs7WUFRbUQsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbW9kdWxlXG5pbXBvcnQge1xuICBDb25zb2xlU2VydmljZSxcbiAgTG9nU2VydmljZSxcbiAgUm91dGVyRXh0ZW5zaW9ucyxcbiAgV2luZG93U2VydmljZSxcbiAgQXBwU2VydmljZSxcbiAgU3RvcmFnZVNlcnZpY2UsXG4gIEluZmxlY3Rpb25TZXJ2aWNlLFxuICBSb3V0ZVJldXNhYmxlU3RyYXRlZ3ksXG59IGZyb20gJy4vc2VydmljZXMvaW5kZXgnXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbnNvbGVTZXJ2aWNlLFxuICAgIExvZ1NlcnZpY2UsXG4gICAgUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBXaW5kb3dTZXJ2aWNlLFxuICAgIEFwcFNlcnZpY2UsXG4gICAgU3RvcmFnZVNlcnZpY2UsXG4gICAgSW5mbGVjdGlvblNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUm91dGVSZXVzZVN0cmF0ZWd5LFxuICAgICAgdXNlQ2xhc3M6IFJvdXRlUmV1c2FibGVTdHJhdGVneVxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=