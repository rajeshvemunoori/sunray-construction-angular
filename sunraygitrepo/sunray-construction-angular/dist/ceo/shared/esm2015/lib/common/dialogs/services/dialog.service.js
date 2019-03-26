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
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    open(dialogElement, config) {
        config = this.buildDialogConfig(dialogElement, config);
        return this.openVendorDialog(dialogElement, config);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.dialogAdapter.closeAll();
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    buildDialogConfig(dialogElement, config) {
        return this.configService.provide(dialogElement, config);
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    openVendorDialog(dialogElement, config) {
        return this.dialogAdapter.open(dialogElement, config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQWExQyxPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sOEJBQThCLENBQUE7QUFFckMsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLGtCQUFrQixDQUFBOzs7O0FBS3pCLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixZQUNVLGFBQXNDLEVBQ3RDLGFBQTRCO1FBRDVCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNuQyxDQUFDOzs7Ozs7SUFFSixJQUFJLENBQ0YsYUFBaUMsRUFDakMsTUFBOEI7UUFHOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFdEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3JELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMvQixDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQ3ZCLGFBQWlDLEVBQ2pDLE1BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzFELENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FDdEIsYUFBaUMsRUFDakMsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7O1lBbkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRDLHVCQUF1QjtZQUl2QixhQUFhOzs7Ozs7OztJQVFYLHNDQUE4Qzs7Ozs7SUFDOUMsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBEaWFsb2dDb21wb25lbnRUeXBlLFxuICBpRGlhbG9nQ29tcG9uZW50Q29uZmlnLFxuICBpRGlhbG9nQ29uZmlnLFxuICBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgaURpYWxvZ0NvbXBvbmVudCxcbiAgaURpYWxvZ0h0bWxFbGVtZW50LFxuICBpRGlhbG9nU2VydmljZSxcbiAgaU1hdERpYWxvZ0NvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nQWRhcHRlclNlcnZpY2UsXG59IGZyb20gJy4vbWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIENvbmZpZ1NlcnZpY2UsXG59IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBpRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nQWRhcHRlcjogTWF0RGlhbG9nQWRhcHRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBvcGVuKFxuICAgIGRpYWxvZ0VsZW1lbnQ6IGlEaWFsb2dIdG1sRWxlbWVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcgfCBzdHJpbmcsXG4gICk6IGlEaWFsb2dDb21wb25lbnQge1xuXG4gICAgY29uZmlnID0gdGhpcy5idWlsZERpYWxvZ0NvbmZpZyhkaWFsb2dFbGVtZW50LCBjb25maWcpXG5cbiAgICByZXR1cm4gdGhpcy5vcGVuVmVuZG9yRGlhbG9nKGRpYWxvZ0VsZW1lbnQsIGNvbmZpZylcbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuZGlhbG9nQWRhcHRlci5jbG9zZUFsbCgpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRGlhbG9nQ29uZmlnKFxuICAgIGRpYWxvZ0VsZW1lbnQ6IGlEaWFsb2dIdG1sRWxlbWVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcgfCBzdHJpbmcsXG4gICk6IGlEaWFsb2dDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UucHJvdmlkZShkaWFsb2dFbGVtZW50LCBjb25maWcpXG4gIH1cblxuICBwcml2YXRlIG9wZW5WZW5kb3JEaWFsb2coXG4gICAgZGlhbG9nRWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyxcbiAgKTogaURpYWxvZ0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nQWRhcHRlci5vcGVuKGRpYWxvZ0VsZW1lbnQsIGNvbmZpZylcbiAgfVxuXG59XG4iXX0=