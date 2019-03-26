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
    let providers = [
        { provide: ConsoleService, useValue: console },
        { provide: StorageService, useValue: localStorage },
        { provide: WindowService, useClass: (options && options.window) || WindowMock },
        {
            provide: LogTarget,
            deps: [ConsoleService],
            useFactory: (c) => new ConsoleTarget(c, { minLogLevel: LogLevel.Debug }),
            multi: true
        },
        LogService,
        //analyticsProviders,
        { provide: RouterExtensions, useClass: RouterExtensionsMock },
        AppService
    ];
    return providers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90ZXN0aW5nL3Byb3ZpZGVycy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHN0osT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUsbUJBQW1CLENBQUMsT0FBYTtJQUMvQyxXQUFXO0lBQ1gsb0VBQW9FOzs7O1FBRWhFLFNBQVMsR0FBRztRQUNkLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1FBQzlDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1FBQ25ELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtRQUMvRTtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN0QixVQUFVLEVBQUUsQ0FBQyxDQUFpQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hGLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtRQUM3RCxVQUFVO0tBQ1g7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG4vLyBSZW1vdmluZyBkZXYgb24gYW5hbHl0aWNzIG1vZHVsZVxuLy9pbXBvcnQgeyBhbmFseXRpY3NQcm92aWRlcnMgfSBmcm9tICcuLi8uLi8uLi9hbmFseXRpY3MnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlLCBDb25zb2xlU2VydmljZSwgTG9nU2VydmljZSwgTG9nVGFyZ2V0LCBDb25zb2xlVGFyZ2V0LCBMb2dMZXZlbCwgUm91dGVyRXh0ZW5zaW9ucywgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuLy8gbW9ja3NcbmltcG9ydCB7IFdpbmRvd01vY2sgfSBmcm9tICcuLi9tb2Nrcy93aW5kb3cubW9jayc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zTW9jayB9IGZyb20gJy4uL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9DT1JFX1BST1ZJREVSUyhvcHRpb25zPzogYW55KTogQXJyYXk8YW55PiB7XG4gIC8vIG9wdGlvbnM6XG4gIC8vIHdpbmRvdzogICA9IGN1c3RvbSB3aW5kb3cgbW9jayAobWFpbmx5IGZvciBjaGFuZ2luZyBvdXQgbGFuZ3VhZ2UpXG5cbiAgbGV0IHByb3ZpZGVycyA9IFtcbiAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VWYWx1ZTogY29uc29sZSB9LFxuICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZVZhbHVlOiBsb2NhbFN0b3JhZ2UgfSxcbiAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUNsYXNzOiAob3B0aW9ucyAmJiBvcHRpb25zLndpbmRvdykgfHwgV2luZG93TW9jayB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExvZ1RhcmdldCxcbiAgICAgIGRlcHM6IFtDb25zb2xlU2VydmljZV0sXG4gICAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IExvZ0xldmVsLkRlYnVnIH0pLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvZ1NlcnZpY2UsXG4gICAgLy9hbmFseXRpY3NQcm92aWRlcnMsXG4gICAgeyBwcm92aWRlOiBSb3V0ZXJFeHRlbnNpb25zLCB1c2VDbGFzczogUm91dGVyRXh0ZW5zaW9uc01vY2sgfSxcbiAgICBBcHBTZXJ2aWNlXG4gIF07XG5cbiAgcmV0dXJuIHByb3ZpZGVycztcbn1cbiJdfQ==