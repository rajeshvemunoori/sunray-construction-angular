/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LogTargetBase, LogLevel, LogTargetOptions, LogTarget } from './log.target';
import { ConsoleService } from '../console.service';
var ConsoleTarget = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleTarget, _super);
    function ConsoleTarget(console, options) {
        var _this = _super.call(this, options) || this;
        _this.console = console;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ConsoleTarget.prototype.writeToLog = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.level) {
            case LogLevel.Debug:
                this.console.log(event.message);
                break;
            case LogLevel.Info:
                this.console.info(event.message);
                break;
            case LogLevel.Warning:
                this.console.warn(event.message);
                break;
            case LogLevel.Error:
                this.console.error(event.message);
                break;
        }
        return Promise.resolve();
    };
    ConsoleTarget.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsoleTarget.ctorParameters = function () { return [
        { type: ConsoleService },
        { type: LogTargetOptions }
    ]; };
    return ConsoleTarget;
}(LogTargetBase));
export { ConsoleTarget };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleTarget.prototype.console;
}
/**
 * @param {?} level
 * @param {?} consoleService
 * @return {?}
 */
export function createConsoleTarget(level, consoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: level });
}
/**
 * @param {?} logLevel
 * @return {?}
 */
export function provideConsoleTarget(logLevel) {
    return {
        provide: LogTarget, deps: [ConsoleService],
        multi: true,
        useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: logLevel }); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBWSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQUNtQyx5Q0FBYTtJQUM5Qyx1QkFBb0IsT0FBdUIsRUFBRSxPQUF5QjtRQUF0RSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQWdCOztJQUUzQyxDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxLQUFlO1FBQ3hCLFFBQVEsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNuQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDVDtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXRCRixVQUFVOzs7O2dCQUZGLGNBQWM7Z0JBRHFCLGdCQUFnQjs7SUEwQjVELG9CQUFDO0NBQUEsQUF2QkQsQ0FDbUMsYUFBYSxHQXNCL0M7U0F0QlksYUFBYTs7Ozs7O0lBQ1osZ0NBQStCOzs7Ozs7O0FBdUI3QyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZSxFQUFFLGNBQThCO0lBQ2pGLE9BQU8sSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsUUFBa0I7SUFDckQsT0FBTztRQUNMLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzFDLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUEvQyxDQUErQztLQUNuRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ1RhcmdldEJhc2UsIExvZ0V2ZW50LCBMb2dMZXZlbCwgTG9nVGFyZ2V0T3B0aW9ucywgTG9nVGFyZ2V0IH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uc29sZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVUYXJnZXQgZXh0ZW5kcyBMb2dUYXJnZXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlU2VydmljZSwgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmxldmVsKSB7XG4gICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mbzpcbiAgICAgICAgdGhpcy5jb25zb2xlLmluZm8oZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxuICAgICAgICB0aGlzLmNvbnNvbGUuZXJyb3IoZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGVUYXJnZXQobGV2ZWw6IExvZ0xldmVsLCBjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KGNvbnNvbGVTZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBsZXZlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25zb2xlVGFyZ2V0KGxvZ0xldmVsOiBMb2dMZXZlbCk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBMb2dUYXJnZXQsIGRlcHM6IFtDb25zb2xlU2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBsb2dMZXZlbCB9KVxuICB9O1xufVxuIl19