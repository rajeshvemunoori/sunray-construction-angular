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
export class LogService {
    /**
     * @param {?} targets
     */
    constructor(targets) {
        this.targets = targets;
    }
    // debug (standard output)
    /**
     * @param {...?} msg
     * @return {?}
     */
    debug(...msg) {
        if (Config.DEBUG.LEVEL_4) {
            // console.debug does not work on {N} apps... use `log`
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, msg, LogLevel.Debug)));
        }
        return Promise.resolve();
    }
    // error
    /**
     * @param {...?} err
     * @return {?}
     */
    error(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, LogLevel.Error)));
        }
        return Promise.resolve();
    }
    // warn
    /**
     * @param {...?} err
     * @return {?}
     */
    warn(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, LogLevel.Warning)));
        }
        return Promise.resolve();
    }
    // info
    /**
     * @param {...?} err
     * @return {?}
     */
    info(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
            return Promise.all(_.map(this.targets, logger => this.logEvent(logger, err, LogLevel.Info)));
        }
        return Promise.resolve();
    }
    /**
     * @private
     * @param {?} target
     * @param {?} message
     * @param {?} level
     * @return {?}
     */
    logEvent(target, message, level) {
        return target.log({ level: level, message: message });
    }
}
LogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LogTarget,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.targets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nZ2luZy9sb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUc1QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQTZCLGFBQWEsQ0FBQTtBQUUzRCxPQUFPLEVBQUUsU0FBUyxFQUFZLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUc1RCxNQUFNLE9BQU8sVUFBVTs7OztJQUVyQixZQUF3QyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQzVELENBQUM7Ozs7OztJQUdNLEtBQUssQ0FBQyxHQUFHLEdBQUc7UUFDakIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4Qix1REFBdUQ7WUFDdkQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9GO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBR00sS0FBSyxDQUFDLEdBQUcsR0FBRztRQUNqQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2hELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUdNLElBQUksQ0FBQyxHQUFHLEdBQUc7UUFDaEIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNoRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakc7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFHTSxJQUFJLENBQUMsR0FBRyxHQUFHO1FBQ2hCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDaEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsTUFBaUIsRUFBRSxPQUF3QixFQUFFLEtBQWU7UUFDM0UsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUF6Q0YsVUFBVTs7Ozt3Q0FHSyxNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQUFqQiw2QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBDb25maWcgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgQ29uc29sZVNlcnZpY2UgfSAgICAgICAgICAgICAgICBmcm9tICcuLi9jb25zb2xlLnNlcnZpY2UnXG5pbXBvcnQgeyBMb2dUYXJnZXQsIExvZ0V2ZW50LCBMb2dMZXZlbCB9IGZyb20gJy4vbG9nLnRhcmdldCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KExvZ1RhcmdldCkgcHJpdmF0ZSB0YXJnZXRzOiBMb2dUYXJnZXRbXSkge1xuICB9XG5cbiAgLy8gZGVidWcgKHN0YW5kYXJkIG91dHB1dClcbiAgcHVibGljIGRlYnVnKC4uLm1zZykge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCkge1xuICAgICAgLy8gY29uc29sZS5kZWJ1ZyBkb2VzIG5vdCB3b3JrIG9uIHtOfSBhcHBzLi4uIHVzZSBgbG9nYFxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBtc2csIExvZ0xldmVsLkRlYnVnKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvLyBlcnJvclxuICBwdWJsaWMgZXJyb3IoLi4uZXJyKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIGVyciwgTG9nTGV2ZWwuRXJyb3IpKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8vIHdhcm5cbiAgcHVibGljIHdhcm4oLi4uZXJyKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIGVyciwgTG9nTGV2ZWwuV2FybmluZykpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLy8gaW5mb1xuICBwdWJsaWMgaW5mbyguLi5lcnIpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzEpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5JbmZvKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwcml2YXRlIGxvZ0V2ZW50KHRhcmdldDogTG9nVGFyZ2V0LCBtZXNzYWdlOiBzdHJpbmcgfCBPYmplY3QsIGxldmVsOiBMb2dMZXZlbCkge1xuICAgIHJldHVybiB0YXJnZXQubG9nKHsgbGV2ZWw6IGxldmVsLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICB9XG59XG4iXX0=