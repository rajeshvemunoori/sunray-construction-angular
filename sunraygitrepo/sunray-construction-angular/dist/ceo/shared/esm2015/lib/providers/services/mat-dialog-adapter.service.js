/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class MatDialogAdapterService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
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
    open(dialogConfig) {
        let /** @type {?} */ config = this.buildAdapterDialogConfig(dialogConfig);
        let /** @type {?} */ componentType = dialogConfig.config.componentType;
        return this.dialog.open(componentType, config);
    }
    /**
     * @param {?} dialogConfig
     * @return {?}
     */
    buildAdapterDialogConfig(dialogConfig) {
        let /** @type {?} */ dialogComponentData = {
            data: this.buildComponentData(dialogConfig)
        };
        let /** @type {?} */ adapterDialogConfig = _.pick(dialogConfig.config, this.adapterConfigProperties);
        return _.merge(adapterDialogConfig, dialogComponentData);
    }
    /**
     * @param {?} dialogConfig
     * @return {?}
     */
    buildComponentData(dialogConfig) {
        return dialogConfig;
    }
}
MatDialogAdapterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MatDialogAdapterService.ctorParameters = () => [
    { type: MatDialog, },
];
/** @nocollapse */ MatDialogAdapterService.ngInjectableDef = i0.defineInjectable({ factory: function MatDialogAdapterService_Factory() { return new MatDialogAdapterService(i0.inject(i1.MatDialog)); }, token: MatDialogAdapterService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvbWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLG1CQUFtQixDQUFDOzs7QUFlM0IsTUFBTTs7OztJQVFKLFlBQ1U7UUFBQSxXQUFNLEdBQU4sTUFBTTt1Q0FSeUI7WUFDdkMsT0FBTyxFQUFFLFFBQVE7U0FDbEI7aUNBQ2tDO1lBQ2pDLGVBQWU7U0FDaEI7S0FJRzs7Ozs7SUFFSixJQUFJLENBQ0YsWUFBMkI7UUFFM0IscUJBQUksTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN4RCxxQkFBSSxhQUFhLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUE7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUMvQzs7Ozs7SUFFTyx3QkFBd0IsQ0FDOUIsWUFBMkI7UUFHM0IscUJBQUksbUJBQW1CLEdBQUc7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7U0FDNUMsQ0FBQTtRQUVELHFCQUFJLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzlCLFlBQVksQ0FBQyxNQUFNLEVBQ25CLElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQTtRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLENBQUE7Ozs7OztJQUdsRCxrQkFBa0IsQ0FBQyxZQUEyQjtRQUNwRCxNQUFNLENBQUMsWUFBWSxDQUFBOzs7O1lBekN0QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFmQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHtcbiAgTW9kYWxDb21wb25lbnRcbn0gZnJvbSAnLi4vLi4vZGVjbGFyYWJsZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb25maWcsXG4gIERpYWxvZ0NvbXBvbmVudFR5cGUsXG4gIGlNYXREaWFsb2dDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdERpYWxvZ0FkYXB0ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhZGFwdGVyQ29uZmlnUHJvcGVydGllczogYW55W10gPSBbXG4gICAgJ3dpZHRoJywgJ2hlaWdodCcsXG4gIF1cbiAgcHJpdmF0ZSBub25EYXRhUHJvcGVydGllczogYW55W10gPSBbXG4gICAgJ2NvbXBvbmVudFR5cGUnLFxuICBdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xuICApIHt9XG5cbiAgb3BlbihcbiAgICBkaWFsb2dDb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGFueSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuYnVpbGRBZGFwdGVyRGlhbG9nQ29uZmlnKGRpYWxvZ0NvbmZpZylcbiAgICBsZXQgY29tcG9uZW50VHlwZSA9IGRpYWxvZ0NvbmZpZy5jb25maWcuY29tcG9uZW50VHlwZVxuXG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50VHlwZSwgY29uZmlnKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFkYXB0ZXJEaWFsb2dDb25maWcoXG4gICAgZGlhbG9nQ29uZmlnOiBpRGlhbG9nQ29uZmlnXG4gICk6IGlNYXREaWFsb2dDb25maWcge1xuXG4gICAgbGV0IGRpYWxvZ0NvbXBvbmVudERhdGEgPSB7XG4gICAgICBkYXRhOiB0aGlzLmJ1aWxkQ29tcG9uZW50RGF0YShkaWFsb2dDb25maWcpXG4gICAgfVxuXG4gICAgbGV0IGFkYXB0ZXJEaWFsb2dDb25maWcgPSBfLnBpY2soXG4gICAgICBkaWFsb2dDb25maWcuY29uZmlnLFxuICAgICAgdGhpcy5hZGFwdGVyQ29uZmlnUHJvcGVydGllc1xuICAgIClcblxuICAgIHJldHVybiBfLm1lcmdlKGFkYXB0ZXJEaWFsb2dDb25maWcsIGRpYWxvZ0NvbXBvbmVudERhdGEpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29tcG9uZW50RGF0YShkaWFsb2dDb25maWc6IGlEaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnXG4gIH1cbn1cbiJdfQ==