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
export class DialogService {
    /**
     * @param {?} dialogAdapter
     * @param {?} configService
     */
    constructor(dialogAdapter, configService) {
        this.dialogAdapter = dialogAdapter;
        this.configService = configService;
    }
    /**
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    open(component, config) {
        config = this.buildDialogConfig(component, config);
        return this.openVendorDialog(component, config);
    }
    /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    buildDialogConfig(component, config) {
        return this.configService.provide(component, config);
    }
    /**
     * @private
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    openVendorDialog(component, config) {
        return this.dialogAdapter.open(component, config);
    }
}
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DialogService.ctorParameters = () => [
    { type: MatDialogAdapterService },
    { type: ConfigService }
];
/** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.inject(i1.MatDialogAdapterService), i0.inject(i2.ConfigService)); }, token: DialogService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBWTFDLE9BQU8sRUFDTCx1QkFBdUIsR0FDeEIsTUFBTSw4QkFBOEIsQ0FBQTtBQUVyQyxPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0sa0JBQWtCLENBQUE7Ozs7QUFLekIsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFlBQ1UsYUFBc0MsRUFDdEMsYUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7OztJQUVKLElBQUksQ0FDRixTQUFrQyxFQUNsQyxNQUFxQjtRQUVyQixNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakQsQ0FBQzs7Ozs7OztJQUVPLGlCQUFpQixDQUN2QixTQUFrQyxFQUNsQyxNQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN0RCxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQ3RCLFNBQWtDLEVBQ2xDLE1BQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUQyx1QkFBdUI7WUFJdkIsYUFBYTs7Ozs7Ozs7SUFRWCxzQ0FBOEM7Ozs7O0lBQzlDLHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRGlhbG9nQ29tcG9uZW50VHlwZSxcbiAgaURpYWxvZ0NvbXBvbmVudENvbmZpZyxcbiAgaURpYWxvZ0NvbmZpZyxcbiAgaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gIGlEaWFsb2dDb21wb25lbnQsXG4gIGlEaWFsb2dTZXJ2aWNlLFxuICBpTWF0RGlhbG9nQ29uZmlnLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbn0gZnJvbSAnLi9tYXQtZGlhbG9nLWFkYXB0ZXIuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnLi9jb25maWcuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIGlEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dBZGFwdGVyOiBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW4oXG4gICAgY29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGlEaWFsb2dDb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHRoaXMuYnVpbGREaWFsb2dDb25maWcoY29tcG9uZW50LCBjb25maWcpXG4gICAgcmV0dXJuIHRoaXMub3BlblZlbmRvckRpYWxvZyhjb21wb25lbnQsIGNvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaWFsb2dDb25maWcoXG4gICAgY29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGlEaWFsb2dDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UucHJvdmlkZShjb21wb25lbnQsIGNvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgb3BlblZlbmRvckRpYWxvZyhcbiAgICBjb21wb25lbnQ6IGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyxcbiAgKTogaURpYWxvZ0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nQWRhcHRlci5vcGVuKGNvbXBvbmVudCwgY29uZmlnKVxuICB9XG59XG4iXX0=