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
export class Config {
    // convenient platform checks
    /**
     * @return {?}
     */
    static IS_WEB() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }
    /**
     * @return {?}
     */
    static IS_MOBILE_NATIVE() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }
    /**
     * @return {?}
     */
    static IS_MOBILE_HYBRID() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
    }
    /**
     * @return {?}
     */
    static IS_DESKTOP() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
    }
    /**
     * @return {?}
     */
    static ENVIRONMENT() {
        try {
            return JSON.parse('<%= ENV_CONFIG %>');
        }
        catch (exp) {
            return {};
        }
    }
    /**
     * @return {?}
     */
    static IS_DEBUG_MODE() {
        for (let key in Config.DEBUG) {
            if (Config.DEBUG[key]) {
                // if any level is on, debug mode is on
                return true;
            }
        }
        return false;
    }
    // reset debug defaults
    /**
     * @return {?}
     */
    static RESET() {
        for (let key in Config.DEBUG) {
            Config.DEBUG[key] = false;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsK0JBS0M7OztJQUpDLHdCQUFhOztJQUNiLHdCQUFhOztJQUNiLHNDQUEyQjs7SUFDM0IsbUNBQXdCOzs7OztBQUcxQixnQ0FLQzs7O0lBSkMseUJBQVk7O0lBQ1osbUNBQXNCOztJQUN0QixtQ0FBc0I7O0lBQ3RCLDZCQUFnQjs7Ozs7QUFHbEIsNkJBQTJCO0FBRTNCLE1BQU0sT0FBTyxNQUFNOzs7OztJQXNCVixNQUFNLENBQUMsTUFBTTtRQUNsQixPQUFPLE1BQU0sQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7OztJQUVNLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDNUIsT0FBTyxNQUFNLENBQUMsZUFBZSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsZ0JBQWdCO1FBQzVCLE9BQU8sTUFBTSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLFVBQVU7UUFDdEIsT0FBTyxNQUFNLENBQUMsZUFBZSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsV0FBVztRQUN2QixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDeEM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLGFBQWE7UUFDekIsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzVCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsdUNBQXVDO2dCQUN2QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBR00sTUFBTSxDQUFDLEtBQUs7UUFDakIsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7QUExRGEsWUFBSyxHQUFHO0lBQ3BCLE9BQU8sRUFBRSxLQUFLOztJQUNkLE9BQU8sRUFBRSxLQUFLOztJQUNkLE9BQU8sRUFBRSxLQUFLOztJQUNkLE9BQU8sRUFBRSxLQUFLLENBQUUsdUJBQXVCO0NBQ3hDLENBQUM7O0FBR1ksZ0JBQVMsR0FBZTtJQUNwQyxHQUFHLEVBQUUsS0FBSztJQUNWLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLE9BQU8sRUFBRSxTQUFTO0NBQ25CLENBQUM7O0FBR1ksc0JBQWUsR0FBVyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7O0lBaEI3RCxhQUtFOztJQUdGLGlCQUtFOztJQUdGLHVCQUE2RDs7SUFsQjdELDJCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZlZWwgZnJlZSB0byBleHRlbmQgdGhpcyBpbnRlcmZhY2Vcbi8vIGRlcGVuZGluZyBvbiB5b3VyIGFwcCBzcGVjaWZpYyBjb25maWcuXG5leHBvcnQgaW50ZXJmYWNlIEVudkNvbmZpZyB7XG4gIEFQST86IHN0cmluZztcbiAgRU5WPzogc3RyaW5nO1xuICBXT1JEUFJFU1NfQVBJX1VSTD86IHN0cmluZztcbiAgU1VOUkFZX0FQSV9VUkw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaVBsYXRmb3JtcyB7XG4gIFdFQjogc3RyaW5nO1xuICBNT0JJTEVfTkFUSVZFOiBzdHJpbmc7XG4gIE1PQklMRV9IWUJSSUQ6IHN0cmluZztcbiAgREVTS1RPUDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDb25maWcge31cblxuZXhwb3J0IGNsYXNzIENvbmZpZyBpbXBsZW1lbnRzIGlDb25maWcge1xuICBwdWJsaWMgUGFnZUNsYXNzOiBhbnk7XG5cbiAgcHVibGljIHN0YXRpYyBERUJVRyA9IHtcbiAgICBMRVZFTF8xOiBmYWxzZSwgLy8gLmluZm8gb25seVxuICAgIExFVkVMXzI6IGZhbHNlLCAvLyAud2FybiBvbmx5XG4gICAgTEVWRUxfMzogZmFsc2UsIC8vIC5lcnJvciBvbmx5XG4gICAgTEVWRUxfNDogZmFsc2UgIC8vIC5sb2cgKyBhbGwgdGhlIGFib3ZlXG4gIH07XG5cbiAgLy8gc3VwcG9ydGVkIHBsYXRmb3Jtc1xuICBwdWJsaWMgc3RhdGljIFBMQVRGT1JNUzogaVBsYXRmb3JtcyA9IHtcbiAgICBXRUI6ICd3ZWInLFxuICAgIE1PQklMRV9OQVRJVkU6ICdtb2JpbGVfbmF0aXZlJyxcbiAgICBNT0JJTEVfSFlCUklEOiAnbW9iaWxlX2h5YnJpZCcsXG4gICAgREVTS1RPUDogJ2Rlc2t0b3AnXG4gIH07XG5cbiAgLy8gY3VycmVudCB0YXJnZXQgKGRlZmF1bHRzIHRvIHdlYilcbiAgcHVibGljIHN0YXRpYyBQTEFURk9STV9UQVJHRVQ6IHN0cmluZyA9IENvbmZpZy5QTEFURk9STVMuV0VCO1xuXG4gIC8vIGNvbnZlbmllbnQgcGxhdGZvcm0gY2hlY2tzXG4gIHB1YmxpYyBzdGF0aWMgSVNfV0VCKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBDb25maWcuUExBVEZPUk1fVEFSR0VUID09PSBDb25maWcuUExBVEZPUk1TLldFQjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgSVNfTU9CSUxFX05BVElWRSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9PT0gQ29uZmlnLlBMQVRGT1JNUy5NT0JJTEVfTkFUSVZFO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBJU19NT0JJTEVfSFlCUklEKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBDb25maWcuUExBVEZPUk1fVEFSR0VUID09PSBDb25maWcuUExBVEZPUk1TLk1PQklMRV9IWUJSSUQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIElTX0RFU0tUT1AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIENvbmZpZy5QTEFURk9STV9UQVJHRVQgPT09IENvbmZpZy5QTEFURk9STVMuREVTS1RPUDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgRU5WSVJPTk1FTlQoKTogRW52Q29uZmlnIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoJzwlPSBFTlZfQ09ORklHICU+Jyk7XG4gICAgfSBjYXRjaCAoZXhwKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBJU19ERUJVR19NT0RFKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGtleSBpbiBDb25maWcuREVCVUcpIHtcbiAgICAgIGlmIChDb25maWcuREVCVUdba2V5XSkge1xuICAgICAgICAvLyBpZiBhbnkgbGV2ZWwgaXMgb24sIGRlYnVnIG1vZGUgaXMgb25cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHJlc2V0IGRlYnVnIGRlZmF1bHRzXG4gIHB1YmxpYyBzdGF0aWMgUkVTRVQoKSB7XG4gICAgZm9yIChsZXQga2V5IGluIENvbmZpZy5ERUJVRykge1xuICAgICAgQ29uZmlnLkRFQlVHW2tleV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==