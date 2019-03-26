/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var MatDialogAdapterService = /** @class */ (function () {
    function MatDialogAdapterService(dialog) {
        this.dialog = dialog;
        this.adapterConfigProperties = [
            'width', 'height',
        ];
        this.nonDataProperties = [
            'componentType',
        ];
    }
    /**
     * @param {?} dialogConfig
     * @return {?}
     */
    MatDialogAdapterService.prototype.open = /**
     * @param {?} dialogConfig
     * @return {?}
     */
    function (dialogConfig) {
        var /** @type {?} */ config = this.buildAdapterDialogConfig(dialogConfig);
        var /** @type {?} */ componentType = dialogConfig.config.componentType;
        return this.dialog.open(componentType, config);
    };
    /**
     * @param {?} dialogConfig
     * @return {?}
     */
    MatDialogAdapterService.prototype.buildAdapterDialogConfig = /**
     * @param {?} dialogConfig
     * @return {?}
     */
    function (dialogConfig) {
        var /** @type {?} */ dialogComponentData = {
            data: this.buildComponentData(dialogConfig)
        };
        var /** @type {?} */ adapterDialogConfig = _.pick(dialogConfig.config, this.adapterConfigProperties);
        return _.merge(adapterDialogConfig, dialogComponentData);
    };
    /**
     * @param {?} dialogConfig
     * @return {?}
     */
    MatDialogAdapterService.prototype.buildComponentData = /**
     * @param {?} dialogConfig
     * @return {?}
     */
    function (dialogConfig) {
        return dialogConfig;
    };
    MatDialogAdapterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    MatDialogAdapterService.ctorParameters = function () { return [
        { type: MatDialog, },
    ]; };
    /** @nocollapse */ MatDialogAdapterService.ngInjectableDef = i0.defineInjectable({ factory: function MatDialogAdapterService_Factory() { return new MatDialogAdapterService(i0.inject(i1.MatDialog)); }, token: MatDialogAdapterService, providedIn: "root" });
    return MatDialogAdapterService;
}());
export { MatDialogAdapterService };
function MatDialogAdapterService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MatDialogAdapterService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MatDialogAdapterService.ctorParameters;
    /** @type {?} */
    MatDialogAdapterService.prototype.adapterConfigProperties;
    /** @type {?} */
    MatDialogAdapterService.prototype.nonDataProperties;
    /** @type {?} */
    MatDialogAdapterService.prototype.dialog;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvbWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLG1CQUFtQixDQUFDOzs7O0lBdUJ6QixpQ0FDVTtRQUFBLFdBQU0sR0FBTixNQUFNO3VDQVJ5QjtZQUN2QyxPQUFPLEVBQUUsUUFBUTtTQUNsQjtpQ0FDa0M7WUFDakMsZUFBZTtTQUNoQjtLQUlHOzs7OztJQUVKLHNDQUFJOzs7O0lBQUosVUFDRSxZQUEyQjtRQUUzQixxQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3hELHFCQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQTtRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQy9DOzs7OztJQUVPLDBEQUF3Qjs7OztjQUM5QixZQUEyQjtRQUczQixxQkFBSSxtQkFBbUIsR0FBRztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQztTQUM1QyxDQUFBO1FBRUQscUJBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDOUIsWUFBWSxDQUFDLE1BQU0sRUFDbkIsSUFBSSxDQUFDLHVCQUF1QixDQUM3QixDQUFBO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTs7Ozs7O0lBR2xELG9EQUFrQjs7OztjQUFDLFlBQTJCO1FBQ3BELE1BQU0sQ0FBQyxZQUFZLENBQUE7OztnQkF6Q3RCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZkMsU0FBUzs7O2tDQUpYOztTQW9CYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEFcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQge1xuICBNb2RhbENvbXBvbmVudFxufSBmcm9tICcuLi8uLi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaURpYWxvZ0NvbmZpZyxcbiAgRGlhbG9nQ29tcG9uZW50VHlwZSxcbiAgaU1hdERpYWxvZ0NvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nQWRhcHRlclNlcnZpY2Uge1xuICBwcml2YXRlIGFkYXB0ZXJDb25maWdQcm9wZXJ0aWVzOiBhbnlbXSA9IFtcbiAgICAnd2lkdGgnLCAnaGVpZ2h0JyxcbiAgXVxuICBwcml2YXRlIG5vbkRhdGFQcm9wZXJ0aWVzOiBhbnlbXSA9IFtcbiAgICAnY29tcG9uZW50VHlwZScsXG4gIF1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICkge31cblxuICBvcGVuKFxuICAgIGRpYWxvZ0NvbmZpZzogaURpYWxvZ0NvbmZpZyxcbiAgKTogYW55IHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5idWlsZEFkYXB0ZXJEaWFsb2dDb25maWcoZGlhbG9nQ29uZmlnKVxuICAgIGxldCBjb21wb25lbnRUeXBlID0gZGlhbG9nQ29uZmlnLmNvbmZpZy5jb21wb25lbnRUeXBlXG5cbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbihjb21wb25lbnRUeXBlLCBjb25maWcpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRhcHRlckRpYWxvZ0NvbmZpZyhcbiAgICBkaWFsb2dDb25maWc6IGlEaWFsb2dDb25maWdcbiAgKTogaU1hdERpYWxvZ0NvbmZpZyB7XG5cbiAgICBsZXQgZGlhbG9nQ29tcG9uZW50RGF0YSA9IHtcbiAgICAgIGRhdGE6IHRoaXMuYnVpbGRDb21wb25lbnREYXRhKGRpYWxvZ0NvbmZpZylcbiAgICB9XG5cbiAgICBsZXQgYWRhcHRlckRpYWxvZ0NvbmZpZyA9IF8ucGljayhcbiAgICAgIGRpYWxvZ0NvbmZpZy5jb25maWcsXG4gICAgICB0aGlzLmFkYXB0ZXJDb25maWdQcm9wZXJ0aWVzXG4gICAgKVxuXG4gICAgcmV0dXJuIF8ubWVyZ2UoYWRhcHRlckRpYWxvZ0NvbmZpZywgZGlhbG9nQ29tcG9uZW50RGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb21wb25lbnREYXRhKGRpYWxvZ0NvbmZpZzogaURpYWxvZ0NvbmZpZykge1xuICAgIHJldHVybiBkaWFsb2dDb25maWdcbiAgfVxufVxuIl19