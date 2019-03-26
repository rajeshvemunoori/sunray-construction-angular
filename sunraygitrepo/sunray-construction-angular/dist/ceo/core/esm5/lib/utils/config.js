/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function EnvConfig() { }
if (false) {
    /** @type {?|undefined} */
    EnvConfig.prototype.API;
    /** @type {?|undefined} */
    EnvConfig.prototype.ENV;
    /** @type {?|undefined} */
    EnvConfig.prototype.WORDPRESS_API_URL;
    /** @type {?|undefined} */
    EnvConfig.prototype.SUNRAY_API_URL;
}
/**
 * @record
 */
export function iPlatforms() { }
if (false) {
    /** @type {?} */
    iPlatforms.prototype.WEB;
    /** @type {?} */
    iPlatforms.prototype.MOBILE_NATIVE;
    /** @type {?} */
    iPlatforms.prototype.MOBILE_HYBRID;
    /** @type {?} */
    iPlatforms.prototype.DESKTOP;
}
/**
 * @record
 */
export function iConfig() { }
var Config = /** @class */ (function () {
    function Config() {
    }
    // convenient platform checks
    // convenient platform checks
    /**
     * @return {?}
     */
    Config.IS_WEB = 
    // convenient platform checks
    /**
     * @return {?}
     */
    function () {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    };
    /**
     * @return {?}
     */
    Config.IS_MOBILE_NATIVE = /**
     * @return {?}
     */
    function () {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    };
    /**
     * @return {?}
     */
    Config.IS_MOBILE_HYBRID = /**
     * @return {?}
     */
    function () {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
    };
    /**
     * @return {?}
     */
    Config.IS_DESKTOP = /**
     * @return {?}
     */
    function () {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
    };
    /**
     * @return {?}
     */
    Config.ENVIRONMENT = /**
     * @return {?}
     */
    function () {
        try {
            return JSON.parse('<%= ENV_CONFIG %>');
        }
        catch (exp) {
            return {};
        }
    };
    /**
     * @return {?}
     */
    Config.IS_DEBUG_MODE = /**
     * @return {?}
     */
    function () {
        for (var key in Config.DEBUG) {
            if (Config.DEBUG[key]) {
                // if any level is on, debug mode is on
                return true;
            }
        }
        return false;
    };
    // reset debug defaults
    // reset debug defaults
    /**
     * @return {?}
     */
    Config.RESET = 
    // reset debug defaults
    /**
     * @return {?}
     */
    function () {
        for (var key in Config.DEBUG) {
            Config.DEBUG[key] = false;
        }
    };
    Config.DEBUG = {
        LEVEL_1: false,
        // .info only
        LEVEL_2: false,
        // .warn only
        LEVEL_3: false,
        // .error only
        LEVEL_4: false // .log + all the above
    };
    // supported platforms
    Config.PLATFORMS = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native',
        MOBILE_HYBRID: 'mobile_hybrid',
        DESKTOP: 'desktop'
    };
    // current target (defaults to web)
    Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
    return Config;
}());
export { Config };
if (false) {
    /** @type {?} */
    Config.DEBUG;
    /** @type {?} */
    Config.PLATFORMS;
    /** @type {?} */
    Config.PLATFORM_TARGET;
    /** @type {?} */
    Config.prototype.PageClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsK0JBS0M7OztJQUpDLHdCQUFhOztJQUNiLHdCQUFhOztJQUNiLHNDQUEyQjs7SUFDM0IsbUNBQXdCOzs7OztBQUcxQixnQ0FLQzs7O0lBSkMseUJBQVk7O0lBQ1osbUNBQXNCOztJQUN0QixtQ0FBc0I7O0lBQ3RCLDZCQUFnQjs7Ozs7QUFHbEIsNkJBQTJCO0FBRTNCO0lBQUE7SUE4REEsQ0FBQztJQXpDQyw2QkFBNkI7Ozs7O0lBQ2YsYUFBTTs7Ozs7SUFBcEI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7OztJQUVhLHVCQUFnQjs7O0lBQTlCO1FBQ0UsT0FBTyxNQUFNLENBQUMsZUFBZSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFYSx1QkFBZ0I7OztJQUE5QjtRQUNFLE9BQU8sTUFBTSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRWEsaUJBQVU7OztJQUF4QjtRQUNFLE9BQU8sTUFBTSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUM3RCxDQUFDOzs7O0lBRWEsa0JBQVc7OztJQUF6QjtRQUNFLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7SUFFYSxvQkFBYTs7O0lBQTNCO1FBQ0UsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzVCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsdUNBQXVDO2dCQUN2QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx1QkFBdUI7Ozs7O0lBQ1QsWUFBSzs7Ozs7SUFBbkI7UUFDRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBMURhLFlBQUssR0FBRztRQUNwQixPQUFPLEVBQUUsS0FBSzs7UUFDZCxPQUFPLEVBQUUsS0FBSzs7UUFDZCxPQUFPLEVBQUUsS0FBSzs7UUFDZCxPQUFPLEVBQUUsS0FBSyxDQUFFLHVCQUF1QjtLQUN4QyxDQUFDOztJQUdZLGdCQUFTLEdBQWU7UUFDcEMsR0FBRyxFQUFFLEtBQUs7UUFDVixhQUFhLEVBQUUsZUFBZTtRQUM5QixhQUFhLEVBQUUsZUFBZTtRQUM5QixPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDOztJQUdZLHNCQUFlLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUEyQy9ELGFBQUM7Q0FBQSxBQTlERCxJQThEQztTQTlEWSxNQUFNOzs7SUFHakIsYUFLRTs7SUFHRixpQkFLRTs7SUFHRix1QkFBNkQ7O0lBbEI3RCwyQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZWVsIGZyZWUgdG8gZXh0ZW5kIHRoaXMgaW50ZXJmYWNlXG4vLyBkZXBlbmRpbmcgb24geW91ciBhcHAgc3BlY2lmaWMgY29uZmlnLlxuZXhwb3J0IGludGVyZmFjZSBFbnZDb25maWcge1xuICBBUEk/OiBzdHJpbmc7XG4gIEVOVj86IHN0cmluZztcbiAgV09SRFBSRVNTX0FQSV9VUkw/OiBzdHJpbmc7XG4gIFNVTlJBWV9BUElfVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlQbGF0Zm9ybXMge1xuICBXRUI6IHN0cmluZztcbiAgTU9CSUxFX05BVElWRTogc3RyaW5nO1xuICBNT0JJTEVfSFlCUklEOiBzdHJpbmc7XG4gIERFU0tUT1A6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpQ29uZmlnIHt9XG5cbmV4cG9ydCBjbGFzcyBDb25maWcgaW1wbGVtZW50cyBpQ29uZmlnIHtcbiAgcHVibGljIFBhZ2VDbGFzczogYW55O1xuXG4gIHB1YmxpYyBzdGF0aWMgREVCVUcgPSB7XG4gICAgTEVWRUxfMTogZmFsc2UsIC8vIC5pbmZvIG9ubHlcbiAgICBMRVZFTF8yOiBmYWxzZSwgLy8gLndhcm4gb25seVxuICAgIExFVkVMXzM6IGZhbHNlLCAvLyAuZXJyb3Igb25seVxuICAgIExFVkVMXzQ6IGZhbHNlICAvLyAubG9nICsgYWxsIHRoZSBhYm92ZVxuICB9O1xuXG4gIC8vIHN1cHBvcnRlZCBwbGF0Zm9ybXNcbiAgcHVibGljIHN0YXRpYyBQTEFURk9STVM6IGlQbGF0Zm9ybXMgPSB7XG4gICAgV0VCOiAnd2ViJyxcbiAgICBNT0JJTEVfTkFUSVZFOiAnbW9iaWxlX25hdGl2ZScsXG4gICAgTU9CSUxFX0hZQlJJRDogJ21vYmlsZV9oeWJyaWQnLFxuICAgIERFU0tUT1A6ICdkZXNrdG9wJ1xuICB9O1xuXG4gIC8vIGN1cnJlbnQgdGFyZ2V0IChkZWZhdWx0cyB0byB3ZWIpXG4gIHB1YmxpYyBzdGF0aWMgUExBVEZPUk1fVEFSR0VUOiBzdHJpbmcgPSBDb25maWcuUExBVEZPUk1TLldFQjtcblxuICAvLyBjb252ZW5pZW50IHBsYXRmb3JtIGNoZWNrc1xuICBwdWJsaWMgc3RhdGljIElTX1dFQigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9PT0gQ29uZmlnLlBMQVRGT1JNUy5XRUI7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIElTX01PQklMRV9OQVRJVkUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIENvbmZpZy5QTEFURk9STV9UQVJHRVQgPT09IENvbmZpZy5QTEFURk9STVMuTU9CSUxFX05BVElWRTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgSVNfTU9CSUxFX0hZQlJJRCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9PT0gQ29uZmlnLlBMQVRGT1JNUy5NT0JJTEVfSFlCUklEO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBJU19ERVNLVE9QKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBDb25maWcuUExBVEZPUk1fVEFSR0VUID09PSBDb25maWcuUExBVEZPUk1TLkRFU0tUT1A7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIEVOVklST05NRU5UKCk6IEVudkNvbmZpZyB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKCc8JT0gRU5WX0NPTkZJRyAlPicpO1xuICAgIH0gY2F0Y2ggKGV4cCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgSVNfREVCVUdfTU9ERSgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gQ29uZmlnLkRFQlVHKSB7XG4gICAgICBpZiAoQ29uZmlnLkRFQlVHW2tleV0pIHtcbiAgICAgICAgLy8gaWYgYW55IGxldmVsIGlzIG9uLCBkZWJ1ZyBtb2RlIGlzIG9uXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyByZXNldCBkZWJ1ZyBkZWZhdWx0c1xuICBwdWJsaWMgc3RhdGljIFJFU0VUKCkge1xuICAgIGZvciAobGV0IGtleSBpbiBDb25maWcuREVCVUcpIHtcbiAgICAgIENvbmZpZy5ERUJVR1trZXldID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=