/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApiService, ApiRequestUrlBuilder, } from '@ceo/shared';
import { ApiRequestOptionsBuilder, } from '../../services/index';
/**
 * @param {?} apiConfig
 * @param {?} http
 * @param {?} csvToJsonService
 * @param {?} responseParser
 * @return {?}
 */
export function buildApiService(apiConfig, http, csvToJsonService, responseParser) {
    /** @type {?} */
    let urlBuilder = new ApiRequestUrlBuilder(apiConfig);
    /** @type {?} */
    let optionsBuilder = new ApiRequestOptionsBuilder(apiConfig);
    return new ApiService(http, csvToJsonService, responseParser, urlBuilder, optionsBuilder);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvc3RvcmUvYnVpbGRlcnMvYnVpbGQtYXBpLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0sYUFBYSxDQUFBO0FBRXBCLE9BQU8sRUFDTCx3QkFBd0IsR0FDekIsTUFBTSxzQkFBc0IsQ0FBQTs7Ozs7Ozs7QUFFN0IsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsU0FBUyxFQUNULElBQUksRUFDSixnQkFBZ0IsRUFDaEIsY0FBYzs7UUFHVixVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7O1FBQ2hELGNBQWMsR0FBRyxJQUFJLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztJQUU1RCxPQUFPLElBQUksVUFBVSxDQUNuQixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxVQUFVLEVBQ1YsY0FBYyxDQUNmLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBpU2VydmljZSxcbiAgQXBpUmVxdWVzdFVybEJ1aWxkZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4J1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBcGlTZXJ2aWNlKFxuICBhcGlDb25maWcsXG4gIGh0dHAsXG4gIGNzdlRvSnNvblNlcnZpY2UsXG4gIHJlc3BvbnNlUGFyc2VyLFxuKTogYW55IHtcblxuICBsZXQgdXJsQnVpbGRlciA9IG5ldyBBcGlSZXF1ZXN0VXJsQnVpbGRlcihhcGlDb25maWcpXG4gIGxldCBvcHRpb25zQnVpbGRlciA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIoYXBpQ29uZmlnKVxuXG4gIHJldHVybiBuZXcgQXBpU2VydmljZShcbiAgICBodHRwLFxuICAgIGNzdlRvSnNvblNlcnZpY2UsXG4gICAgcmVzcG9uc2VQYXJzZXIsXG4gICAgdXJsQnVpbGRlcixcbiAgICBvcHRpb25zQnVpbGRlclxuICApXG59XG4iXX0=