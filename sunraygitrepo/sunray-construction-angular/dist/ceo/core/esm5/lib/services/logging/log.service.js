/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// angular
import { Injectable, Inject } from '@angular/core';
import * as _ from 'lodash';
// module
import { Config } from '../../utils';
import { LogTarget, LogLevel } from './log.target';
var LogService = /** @class */ (function () {
    function LogService(targets) {
        this.targets = targets;
    }
    // debug (standard output)
    // debug (standard output)
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.debug = 
    // debug (standard output)
    /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var _this = this;
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Config.DEBUG.LEVEL_4) {
            // console.debug does not work on {N} apps... use `log`
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, msg, LogLevel.Debug); }));
        }
        return Promise.resolve();
    };
    // error
    // error
    /**
     * @param {...?} err
     * @return {?}
     */
    LogService.prototype.error = 
    // error
    /**
     * @param {...?} err
     * @return {?}
     */
    function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Error); }));
        }
        return Promise.resolve();
    };
    // warn
    // warn
    /**
     * @param {...?} err
     * @return {?}
     */
    LogService.prototype.warn = 
    // warn
    /**
     * @param {...?} err
     * @return {?}
     */
    function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Warning); }));
        }
        return Promise.resolve();
    };
    // info
    // info
    /**
     * @param {...?} err
     * @return {?}
     */
    LogService.prototype.info = 
    // info
    /**
     * @param {...?} err
     * @return {?}
     */
    function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Info); }));
        }
        return Promise.resolve();
    };
    /**
     * @private
     * @param {?} target
     * @param {?} message
     * @param {?} level
     * @return {?}
     */
    LogService.prototype.logEvent = /**
     * @private
     * @param {?} target
     * @param {?} message
     * @param {?} level
     * @return {?}
     */
    function (target, message, level) {
        return target.log({ level: level, message: message });
    };
    LogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LogService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [LogTarget,] }] }
    ]; };
    return LogService;
}());
export { LogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.targets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nZ2luZy9sb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUc1QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQTZCLGFBQWEsQ0FBQTtBQUUzRCxPQUFPLEVBQUUsU0FBUyxFQUFZLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUU1RDtJQUdFLG9CQUF3QyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQzVELENBQUM7SUFFRCwwQkFBMEI7Ozs7OztJQUNuQiwwQkFBSzs7Ozs7O0lBQVo7UUFBQSxpQkFNQztRQU5ZLGFBQU07YUFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO1lBQU4sd0JBQU07O1FBQ2pCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEIsdURBQXVEO1lBQ3ZELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFROzs7Ozs7SUFDRCwwQkFBSzs7Ozs7O0lBQVo7UUFBQSxpQkFLQztRQUxZLGFBQU07YUFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO1lBQU4sd0JBQU07O1FBQ2pCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDaEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDO1NBQy9GO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU87Ozs7OztJQUNBLHlCQUFJOzs7Ozs7SUFBWDtRQUFBLGlCQUtDO1FBTFcsYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTix3QkFBTTs7UUFDaEIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNoRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDLENBQUM7U0FDakc7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTzs7Ozs7O0lBQ0EseUJBQUk7Ozs7OztJQUFYO1FBQUEsaUJBS0M7UUFMVyxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNoQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2hELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7O0lBRU8sNkJBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsTUFBaUIsRUFBRSxPQUF3QixFQUFFLEtBQWU7UUFDM0UsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkF6Q0YsVUFBVTs7Ozs0Q0FHSyxNQUFNLFNBQUMsU0FBUzs7SUF1Q2hDLGlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1ksVUFBVTs7Ozs7O0lBRVIsNkJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ29uZmlnIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uc29sZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgTG9nVGFyZ2V0LCBMb2dFdmVudCwgTG9nTGV2ZWwgfSBmcm9tICcuL2xvZy50YXJnZXQnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciggQEluamVjdChMb2dUYXJnZXQpIHByaXZhdGUgdGFyZ2V0czogTG9nVGFyZ2V0W10pIHtcbiAgfVxuXG4gIC8vIGRlYnVnIChzdGFuZGFyZCBvdXRwdXQpXG4gIHB1YmxpYyBkZWJ1ZyguLi5tc2cpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQpIHtcbiAgICAgIC8vIGNvbnNvbGUuZGVidWcgZG9lcyBub3Qgd29yayBvbiB7Tn0gYXBwcy4uLiB1c2UgYGxvZ2BcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgbXNnLCBMb2dMZXZlbC5EZWJ1ZykpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLy8gZXJyb3JcbiAgcHVibGljIGVycm9yKC4uLmVycikge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCB8fCBDb25maWcuREVCVUcuTEVWRUxfMykge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBlcnIsIExvZ0xldmVsLkVycm9yKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvLyB3YXJuXG4gIHB1YmxpYyB3YXJuKC4uLmVycikge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCB8fCBDb25maWcuREVCVUcuTEVWRUxfMikge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBlcnIsIExvZ0xldmVsLldhcm5pbmcpKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8vIGluZm9cbiAgcHVibGljIGluZm8oLi4uZXJyKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8xKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIGVyciwgTG9nTGV2ZWwuSW5mbykpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2dFdmVudCh0YXJnZXQ6IExvZ1RhcmdldCwgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0LCBsZXZlbDogTG9nTGV2ZWwpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmxvZyh7IGxldmVsOiBsZXZlbCwgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgfVxufVxuIl19