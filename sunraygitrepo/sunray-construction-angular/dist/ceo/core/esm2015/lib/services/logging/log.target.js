/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LogLevel = {
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
export class LogTargetOptions {
}
if (false) {
    /** @type {?} */
    LogTargetOptions.prototype.minLogLevel;
}
/**
 * @abstract
 */
export class LogTarget {
}
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
export class LogTargetBase {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    log(event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9sb2dnaW5nL2xvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsUUFBUztJQUNULE9BQVE7SUFDUixVQUFXO0lBQ1gsUUFBUzs7Ozs7Ozs7OztBQUdYLDhCQUdDOzs7SUFGQywyQkFBeUI7O0lBQ3pCLHlCQUFnQjs7Ozs7QUFHbEIsTUFBTSxPQUFnQixnQkFBZ0I7Q0FFckM7OztJQURDLHVDQUFzQjs7Ozs7QUFHeEIsTUFBTSxPQUFnQixTQUFTO0NBRTlCOzs7Ozs7O0lBREMsK0NBQTRDOzs7OztBQUc5QyxNQUFNLE9BQWdCLGFBQWE7Ozs7SUFDakMsWUFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBZTtRQUNqQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUdGOzs7Ozs7SUFYYSxnQ0FBbUM7Ozs7Ozs7SUFVL0MsMERBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBEZWJ1ZyA9IDAsXG4gIEluZm8gPSAxLFxuICBXYXJuaW5nID0gMixcbiAgRXJyb3IgPSA0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nRXZlbnQge1xuICBtZXNzYWdlOiBzdHJpbmcgfCBPYmplY3Q7XG4gIGxldmVsOiBMb2dMZXZlbDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldE9wdGlvbnMge1xuICBtaW5Mb2dMZXZlbDogTG9nTGV2ZWw7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXQge1xuICBhYnN0cmFjdCBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0QmFzZSBpbXBsZW1lbnRzIExvZ1RhcmdldCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XG4gIH1cblxuICBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoZXZlbnQubGV2ZWwgPj0gdGhpcy5vcHRpb25zLm1pbkxvZ0xldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy53cml0ZVRvTG9nKGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHdyaXRlVG9Mb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+O1xufVxuIl19