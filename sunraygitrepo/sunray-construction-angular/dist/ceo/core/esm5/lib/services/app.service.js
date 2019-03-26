/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Config } from '../utils';
import { LogService } from './logging/log.service';
var AppService = /** @class */ (function () {
    function AppService(log) {
        this.log = log;
        this.log.debug("AppService -> Config env: " + Config.ENVIRONMENT().ENV);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    AppService.prototype.debug = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.log.debug(message);
    };
    AppService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AppService.ctorParameters = function () { return [
        { type: LogService }
    ]; };
    return AppService;
}());
export { AppService };
if (false) {
    /** @type {?} */
    AppService.prototype.log;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFVLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7SUFFRSxvQkFBbUIsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQTZCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVNLDBCQUFLOzs7O0lBQVosVUFBYSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7O2dCQVJGLFVBQVU7Ozs7Z0JBRkYsVUFBVTs7SUFXbkIsaUJBQUM7Q0FBQSxBQVRELElBU0M7U0FSWSxVQUFVOzs7SUFDVCx5QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9ICAgICBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZ2dpbmcvbG9nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmxvZy5kZWJ1ZyhgQXBwU2VydmljZSAtPiBDb25maWcgZW52OiAke0NvbmZpZy5FTlZJUk9OTUVOVCgpLkVOVn1gKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgdGhpcy5sb2cuZGVidWcobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==