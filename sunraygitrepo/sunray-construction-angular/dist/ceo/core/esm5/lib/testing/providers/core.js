/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// app
// Removing dev on analytics module
//import { analyticsProviders } from '../../../analytics';
// module
import { WindowService, StorageService, ConsoleService, LogService, LogTarget, ConsoleTarget, LogLevel, RouterExtensions, AppService } from '../../services';
// mocks
import { WindowMock } from '../mocks/window.mock';
import { RouterExtensionsMock } from '../mocks/router-extensions.mock';
/**
 * @param {?=} options
 * @return {?}
 */
export function TEST_CORE_PROVIDERS(options) {
    // options:
    // window:   = custom window mock (mainly for changing out language)
    // options:
    // window:   = custom window mock (mainly for changing out language)
    /** @type {?} */
    var providers = [
        { provide: ConsoleService, useValue: console },
        { provide: StorageService, useValue: localStorage },
        { provide: WindowService, useClass: (options && options.window) || WindowMock },
        {
            provide: LogTarget,
            deps: [ConsoleService],
            useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: LogLevel.Debug }); },
            multi: true
        },
        LogService,
        //analyticsProviders,
        { provide: RouterExtensions, useClass: RouterExtensionsMock },
        AppService
    ];
    return providers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90ZXN0aW5nL3Byb3ZpZGVycy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHN0osT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUsbUJBQW1CLENBQUMsT0FBYTtJQUMvQyxXQUFXO0lBQ1gsb0VBQW9FOzs7O1FBRWhFLFNBQVMsR0FBRztRQUNkLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1FBQzlDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1FBQ25ELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtRQUMvRTtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN0QixVQUFVLEVBQUUsVUFBQyxDQUFpQixJQUFLLE9BQUEsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFyRCxDQUFxRDtZQUN4RixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7UUFDN0QsVUFBVTtLQUNYO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcFxuLy8gUmVtb3ZpbmcgZGV2IG9uIGFuYWx5dGljcyBtb2R1bGVcbi8vaW1wb3J0IHsgYW5hbHl0aWNzUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vLi4vYW5hbHl0aWNzJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSwgQ29uc29sZVNlcnZpY2UsIExvZ1NlcnZpY2UsIExvZ1RhcmdldCwgQ29uc29sZVRhcmdldCwgTG9nTGV2ZWwsIFJvdXRlckV4dGVuc2lvbnMsIEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbi8vIG1vY2tzXG5pbXBvcnQgeyBXaW5kb3dNb2NrIH0gZnJvbSAnLi4vbW9ja3Mvd2luZG93Lm1vY2snO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc01vY2sgfSBmcm9tICcuLi9tb2Nrcy9yb3V0ZXItZXh0ZW5zaW9ucy5tb2NrJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfQ09SRV9QUk9WSURFUlMob3B0aW9ucz86IGFueSk6IEFycmF5PGFueT4ge1xuICAvLyBvcHRpb25zOlxuICAvLyB3aW5kb3c6ICAgPSBjdXN0b20gd2luZG93IG1vY2sgKG1haW5seSBmb3IgY2hhbmdpbmcgb3V0IGxhbmd1YWdlKVxuXG4gIGxldCBwcm92aWRlcnMgPSBbXG4gICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlVmFsdWU6IGNvbnNvbGUgfSxcbiAgICB7IHByb3ZpZGU6IFN0b3JhZ2VTZXJ2aWNlLCB1c2VWYWx1ZTogbG9jYWxTdG9yYWdlIH0sXG4gICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3cpIHx8IFdpbmRvd01vY2sgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMb2dUYXJnZXQsXG4gICAgICBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLFxuICAgICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBMb2dMZXZlbC5EZWJ1ZyB9KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2dTZXJ2aWNlLFxuICAgIC8vYW5hbHl0aWNzUHJvdmlkZXJzLFxuICAgIHsgcHJvdmlkZTogUm91dGVyRXh0ZW5zaW9ucywgdXNlQ2xhc3M6IFJvdXRlckV4dGVuc2lvbnNNb2NrIH0sXG4gICAgQXBwU2VydmljZVxuICBdO1xuXG4gIHJldHVybiBwcm92aWRlcnM7XG59XG4iXX0=