/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var LogLevel = {
    Debug: 0,
    Info: 1,
    Warning: 2,
    Error: 4,
};
export { LogLevel };
LogLevel[LogLevel.Debug] = 'Debug';
LogLevel[LogLevel.Info] = 'Info';
LogLevel[LogLevel.Warning] = 'Warning';
LogLevel[LogLevel.Error] = 'Error';
/**
 * @record
 */
export function LogEvent() { }
if (false) {
    /** @type {?} */
    LogEvent.prototype.message;
    /** @type {?} */
    LogEvent.prototype.level;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
LogTargetOptions = /** @class */ (function () {
    function LogTargetOptions() {
    }
    return LogTargetOptions;
}());
/**
 * @abstract
 */
export { LogTargetOptions };
if (false) {
    /** @type {?} */
    LogTargetOptions.prototype.minLogLevel;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
LogTarget = /** @class */ (function () {
    function LogTarget() {
    }
    return LogTarget;
}());
/**
 * @abstract
 */
export { LogTarget };
if (false) {
    /**
     * @abstract
     * @param {?} event
     * @return {?}
     */
    LogTarget.prototype.log = function (event) { };
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
LogTargetBase = /** @class */ (function () {
    function LogTargetBase(options) {
        this.options = options;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    LogTargetBase.prototype.log = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    };
    return LogTargetBase;
}());
/**
 * @abstract
 */
export { LogTargetBase };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LogTargetBase.prototype.options;
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    LogTargetBase.prototype.writeToLog = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9sb2dnaW5nL2xvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsUUFBUztJQUNULE9BQVE7SUFDUixVQUFXO0lBQ1gsUUFBUzs7Ozs7Ozs7OztBQUdYLDhCQUdDOzs7SUFGQywyQkFBeUI7O0lBQ3pCLHlCQUFnQjs7Ozs7QUFHbEI7Ozs7SUFBQTtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7O0lBREMsdUNBQXNCOzs7OztBQUd4Qjs7OztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7Ozs7O0lBREMsK0NBQTRDOzs7OztBQUc5Qzs7OztJQUNFLHVCQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUMvQyxDQUFDOzs7OztJQUVELDJCQUFHOzs7O0lBQUgsVUFBSSxLQUFlO1FBQ2pCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0gsb0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7Ozs7OztJQVhhLGdDQUFtQzs7Ozs7OztJQVUvQywwREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIERlYnVnID0gMCxcbiAgSW5mbyA9IDEsXG4gIFdhcm5pbmcgPSAyLFxuICBFcnJvciA9IDRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dFdmVudCB7XG4gIG1lc3NhZ2U6IHN0cmluZyB8IE9iamVjdDtcbiAgbGV2ZWw6IExvZ0xldmVsO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0T3B0aW9ucyB7XG4gIG1pbkxvZ0xldmVsOiBMb2dMZXZlbDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldCB7XG4gIGFic3RyYWN0IGxvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXRCYXNlIGltcGxlbWVudHMgTG9nVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IExvZ1RhcmdldE9wdGlvbnMpIHtcbiAgfVxuXG4gIGxvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChldmVudC5sZXZlbCA+PSB0aGlzLm9wdGlvbnMubWluTG9nTGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLndyaXRlVG9Mb2coZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT47XG59XG4iXX0=