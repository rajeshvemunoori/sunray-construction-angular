/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialogAdapterService, } from './mat-dialog-adapter.service';
import { ConfigService, } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "./mat-dialog-adapter.service";
import * as i2 from "./config.service";
var DialogService = /** @class */ (function () {
    function DialogService(dialogAdapter, configService) {
        this.dialogAdapter = dialogAdapter;
        this.configService = configService;
    }
    /**
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.open = /**
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    function (component, config) {
        config = this.buildDialogConfig(component, config);
        return this.openVendorDialog(component, config);
    };
    /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.buildDialogConfig = /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    function (component, config) {
        return this.configService.provide(component, config);
    };
    /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.openVendorDialog = /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    function (component, config) {
        return this.dialogAdapter.open(component, config);
    };
    DialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: MatDialogAdapterService },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.inject(i1.MatDialogAdapterService), i0.inject(i2.ConfigService)); }, token: DialogService, providedIn: "root" });
    return DialogService;
}());
export { DialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogService.prototype.dialogAdapter;
    /**
     * @type {?}
     * @private
     */
    DialogService.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBWTFDLE9BQU8sRUFDTCx1QkFBdUIsR0FDeEIsTUFBTSw4QkFBOEIsQ0FBQTtBQUVyQyxPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0sa0JBQWtCLENBQUE7Ozs7QUFFekI7SUFJRSx1QkFDVSxhQUFzQyxFQUN0QyxhQUE0QjtRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQzs7Ozs7O0lBRUosNEJBQUk7Ozs7O0lBQUosVUFDRSxTQUFrQyxFQUNsQyxNQUFxQjtRQUVyQixNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakQsQ0FBQzs7Ozs7OztJQUVPLHlDQUFpQjs7Ozs7O0lBQXpCLFVBQ0UsU0FBa0MsRUFDbEMsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDdEQsQ0FBQzs7Ozs7OztJQUVPLHdDQUFnQjs7Ozs7O0lBQXhCLFVBQ0UsU0FBa0MsRUFDbEMsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbkQsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVEMsdUJBQXVCO2dCQUl2QixhQUFhOzs7d0JBbkJmO0NBb0RDLEFBOUJELElBOEJDO1NBM0JZLGFBQWE7Ozs7OztJQUV0QixzQ0FBOEM7Ozs7O0lBQzlDLHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRGlhbG9nQ29tcG9uZW50VHlwZSxcbiAgaURpYWxvZ0NvbXBvbmVudENvbmZpZyxcbiAgaURpYWxvZ0NvbmZpZyxcbiAgaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gIGlEaWFsb2dDb21wb25lbnQsXG4gIGlEaWFsb2dTZXJ2aWNlLFxuICBpTWF0RGlhbG9nQ29uZmlnLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbn0gZnJvbSAnLi9tYXQtZGlhbG9nLWFkYXB0ZXIuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnLi9jb25maWcuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIGlEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dBZGFwdGVyOiBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW4oXG4gICAgY29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGlEaWFsb2dDb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHRoaXMuYnVpbGREaWFsb2dDb25maWcoY29tcG9uZW50LCBjb25maWcpXG4gICAgcmV0dXJuIHRoaXMub3BlblZlbmRvckRpYWxvZyhjb21wb25lbnQsIGNvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaWFsb2dDb25maWcoXG4gICAgY29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGlEaWFsb2dDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UucHJvdmlkZShjb21wb25lbnQsIGNvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgb3BlblZlbmRvckRpYWxvZyhcbiAgICBjb21wb25lbnQ6IGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyxcbiAgKTogaURpYWxvZ0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nQWRhcHRlci5vcGVuKGNvbXBvbmVudCwgY29uZmlnKVxuICB9XG59XG4iXX0=