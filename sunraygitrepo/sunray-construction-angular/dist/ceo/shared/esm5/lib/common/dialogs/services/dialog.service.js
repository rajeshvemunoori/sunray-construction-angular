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
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.open = /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    function (dialogElement, config) {
        config = this.buildDialogConfig(dialogElement, config);
        return this.openVendorDialog(dialogElement, config);
    };
    /**
     * @return {?}
     */
    DialogService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this.dialogAdapter.closeAll();
    };
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.buildDialogConfig = /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    function (dialogElement, config) {
        return this.configService.provide(dialogElement, config);
    };
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.openVendorDialog = /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    function (dialogElement, config) {
        return this.dialogAdapter.open(dialogElement, config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQWExQyxPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sOEJBQThCLENBQUE7QUFFckMsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLGtCQUFrQixDQUFBOzs7O0FBRXpCO0lBSUUsdUJBQ1UsYUFBc0MsRUFDdEMsYUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7OztJQUVKLDRCQUFJOzs7OztJQUFKLFVBQ0UsYUFBaUMsRUFDakMsTUFBOEI7UUFHOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFdEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3JELENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQy9CLENBQUM7Ozs7Ozs7SUFFTyx5Q0FBaUI7Ozs7OztJQUF6QixVQUNFLGFBQWlDLEVBQ2pDLE1BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzFELENBQUM7Ozs7Ozs7SUFFTyx3Q0FBZ0I7Ozs7OztJQUF4QixVQUNFLGFBQWlDLEVBQ2pDLE1BQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZELENBQUM7O2dCQW5DRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRDLHVCQUF1QjtnQkFJdkIsYUFBYTs7O3dCQXBCZjtDQTREQyxBQXJDRCxJQXFDQztTQWxDWSxhQUFhOzs7Ozs7SUFFdEIsc0NBQThDOzs7OztJQUM5QyxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIERpYWxvZ0NvbXBvbmVudFR5cGUsXG4gIGlEaWFsb2dDb21wb25lbnRDb25maWcsXG4gIGlEaWFsb2dDb25maWcsXG4gIGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICBpRGlhbG9nQ29tcG9uZW50LFxuICBpRGlhbG9nSHRtbEVsZW1lbnQsXG4gIGlEaWFsb2dTZXJ2aWNlLFxuICBpTWF0RGlhbG9nQ29uZmlnLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbn0gZnJvbSAnLi9tYXQtZGlhbG9nLWFkYXB0ZXIuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnLi9jb25maWcuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIGlEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dBZGFwdGVyOiBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW4oXG4gICAgZGlhbG9nRWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyB8IHN0cmluZyxcbiAgKTogaURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgICBjb25maWcgPSB0aGlzLmJ1aWxkRGlhbG9nQ29uZmlnKGRpYWxvZ0VsZW1lbnQsIGNvbmZpZylcblxuICAgIHJldHVybiB0aGlzLm9wZW5WZW5kb3JEaWFsb2coZGlhbG9nRWxlbWVudCwgY29uZmlnKVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5kaWFsb2dBZGFwdGVyLmNsb3NlQWxsKClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaWFsb2dDb25maWcoXG4gICAgZGlhbG9nRWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyB8IHN0cmluZyxcbiAgKTogaURpYWxvZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnU2VydmljZS5wcm92aWRlKGRpYWxvZ0VsZW1lbnQsIGNvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgb3BlblZlbmRvckRpYWxvZyhcbiAgICBkaWFsb2dFbGVtZW50OiBpRGlhbG9nSHRtbEVsZW1lbnQsXG4gICAgY29uZmlnOiBpRGlhbG9nQ29uZmlnLFxuICApOiBpRGlhbG9nQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dBZGFwdGVyLm9wZW4oZGlhbG9nRWxlbWVudCwgY29uZmlnKVxuICB9XG5cbn1cbiJdfQ==