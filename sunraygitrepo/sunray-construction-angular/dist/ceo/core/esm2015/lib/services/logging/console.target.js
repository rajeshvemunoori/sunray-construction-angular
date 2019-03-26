/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LogTargetBase, LogLevel, LogTargetOptions, LogTarget } from './log.target';
import { ConsoleService } from '../console.service';
export class ConsoleTarget extends LogTargetBase {
    /**
     * @param {?} console
     * @param {?} options
     */
    constructor(console, options) {
        super(options);
        this.console = console;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    writeToLog(event) {
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
    }
}
ConsoleTarget.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleTarget.ctorParameters = () => [
    { type: ConsoleService },
    { type: LogTargetOptions }
];
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
        useFactory: (c) => new ConsoleTarget(c, { minLogLevel: logLevel })
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFZLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BELE1BQU0sT0FBTyxhQUFjLFNBQVEsYUFBYTs7Ozs7SUFDOUMsWUFBb0IsT0FBdUIsRUFBRSxPQUF5QjtRQUNwRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUUzQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFlO1FBQ3hCLFFBQVEsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNuQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDVDtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXRCRixVQUFVOzs7O1lBRkYsY0FBYztZQURxQixnQkFBZ0I7Ozs7Ozs7SUFLOUMsZ0NBQStCOzs7Ozs7O0FBdUI3QyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZSxFQUFFLGNBQThCO0lBQ2pGLE9BQU8sSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsUUFBa0I7SUFDckQsT0FBTztRQUNMLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzFDLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQ25GLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nVGFyZ2V0QmFzZSwgTG9nRXZlbnQsIExvZ0xldmVsLCBMb2dUYXJnZXRPcHRpb25zLCBMb2dUYXJnZXQgfSBmcm9tICcuL2xvZy50YXJnZXQnO1xuaW1wb3J0IHsgQ29uc29sZVNlcnZpY2UgfSBmcm9tICcuLi9jb25zb2xlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZVRhcmdldCBleHRlbmRzIExvZ1RhcmdldEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnNvbGU6IENvbnNvbGVTZXJ2aWNlLCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQubGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRGVidWc6XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvOlxuICAgICAgICB0aGlzLmNvbnNvbGUuaW5mbyhldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XG4gICAgICAgIHRoaXMuY29uc29sZS5lcnJvcihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uc29sZVRhcmdldChsZXZlbDogTG9nTGV2ZWwsIGNvbnNvbGVTZXJ2aWNlOiBDb25zb2xlU2VydmljZSkge1xuICByZXR1cm4gbmV3IENvbnNvbGVUYXJnZXQoY29uc29sZVNlcnZpY2UsIHsgbWluTG9nTGV2ZWw6IGxldmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbnNvbGVUYXJnZXQobG9nTGV2ZWw6IExvZ0xldmVsKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IExvZ1RhcmdldCwgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IGxvZ0xldmVsIH0pXG4gIH07XG59XG4iXX0=