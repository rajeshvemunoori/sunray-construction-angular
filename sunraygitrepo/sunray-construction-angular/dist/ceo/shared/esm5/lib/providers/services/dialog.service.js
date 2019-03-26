/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { BehaviorSubject, } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModalComponent } from '../../declarables/components/modal/modal.component';
import { MatDialogAdapterService, } from './mat-dialog-adapter.service';
import * as i0 from "@angular/core";
import * as i1 from "./mat-dialog-adapter.service";
var DialogService = /** @class */ (function () {
    function DialogService(dialogAdapter) {
        this.dialogAdapter = dialogAdapter;
        this.defaultConfig = {
            actions$: new BehaviorSubject(0),
            config: {
                componentType: ModalComponent,
                width: '500px',
                header: {
                    show: false,
                },
                footer: {
                    show: false,
                },
            }
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.open = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        config = this.buildDialogConfig(config);
        var /** @type {?} */ vendorDialog = this.openVendorDialog(config);
        return /** @type {?} */ (vendorDialog.componentInstance);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.buildDialogConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ contentComponentDialogActions$ = _.get(config, 'component.ngElementStrategy.componentRef.instance.dialogActions$');
        if (contentComponentDialogActions$) {
            var /** @type {?} */ componentActionSubject = {
                actions$: contentComponentDialogActions$
            };
            config = _.defaultsDeep(config, componentActionSubject);
        }
        return _.defaultsDeep(config, this.defaultConfig);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DialogService.prototype.openVendorDialog = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return this.dialogAdapter.open(config);
    };
    DialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: MatDialogAdapterService, },
    ]; };
    /** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.inject(i1.MatDialogAdapterService)); }, token: DialogService, providedIn: "root" });
    return DialogService;
}());
export { DialogService };
function DialogService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DialogService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DialogService.ctorParameters;
    /** @type {?} */
    DialogService.prototype.defaultConfig;
    /** @type {?} */
    DialogService.prototype.dialogAdapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxlQUFlLEdBQ2hCLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sb0RBQW9ELENBQUE7QUFTM0QsT0FBTyxFQUNMLHVCQUF1QixHQUN4QixNQUFNLDhCQUE4QixDQUFBOzs7O0lBb0JuQyx1QkFDVTtRQUFBLGtCQUFhLEdBQWIsYUFBYTs2QkFmQztZQUN0QixRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sRUFBRTtnQkFDTixhQUFhLEVBQUUsY0FBYztnQkFDN0IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNELE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsS0FBSztpQkFDWjthQUNGO1NBQ0Y7S0FJRzs7Ozs7SUFFSiw0QkFBSTs7OztJQUFKLFVBQ0UsTUFBcUI7UUFFckIsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN2QyxxQkFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWhELE1BQU0sbUJBQXNCLFlBQVksQ0FBQyxpQkFBaUIsRUFBQTtLQUMzRDs7Ozs7SUFFTyx5Q0FBaUI7Ozs7Y0FDdkIsTUFBcUI7UUFFckIscUJBQUksOEJBQThCLEdBQ2hDLENBQUMsQ0FBQyxHQUFHLENBQ0gsTUFBTSxFQUNOLGtFQUFrRSxDQUNuRSxDQUFBO1FBRUgsRUFBRSxDQUFBLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLHFCQUFJLHNCQUFzQixHQUFHO2dCQUMzQixRQUFRLEVBQUUsOEJBQThCO2FBQ3pDLENBQUE7WUFFRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtTQUN4RDtRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7Ozs7OztJQUczQyx3Q0FBZ0I7Ozs7Y0FBQyxNQUFNO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTs7O2dCQXBEekMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMQyx1QkFBdUI7Ozt3QkFwQnpCOztTQTBCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIE1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4uLy4uL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBpRGlhbG9nQ29uZmlnLFxuICBpTWF0RGlhbG9nQ29uZmlnLFxuICBEaWFsb2dDb21wb25lbnRUeXBlLFxuICBpRGlhbG9nQ29tcG9uZW50Q29uZmlnLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbn0gZnJvbSAnLi9tYXQtZGlhbG9nLWFkYXB0ZXIuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBhY3Rpb25zJDogbmV3IEJlaGF2aW9yU3ViamVjdCgwKSxcbiAgICBjb25maWc6IHtcbiAgICAgIGNvbXBvbmVudFR5cGU6IE1vZGFsQ29tcG9uZW50LFxuICAgICAgd2lkdGg6ICc1MDBweCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZ0FkYXB0ZXI6IE1hdERpYWxvZ0FkYXB0ZXJTZXJ2aWNlLFxuICApIHt9XG5cbiAgb3BlbihcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICkge1xuICAgIGNvbmZpZyA9IHRoaXMuYnVpbGREaWFsb2dDb25maWcoY29uZmlnKVxuICAgIGxldCB2ZW5kb3JEaWFsb2cgPSB0aGlzLm9wZW5WZW5kb3JEaWFsb2coY29uZmlnKVxuXG4gICAgcmV0dXJuIDxEaWFsb2dDb21wb25lbnRUeXBlPnZlbmRvckRpYWxvZy5jb21wb25lbnRJbnN0YW5jZVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZERpYWxvZ0NvbmZpZyhcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcsXG4gICk6IGlEaWFsb2dDb25maWcge1xuICAgIGxldCBjb250ZW50Q29tcG9uZW50RGlhbG9nQWN0aW9ucyQgPSBcbiAgICAgIF8uZ2V0KFxuICAgICAgICBjb25maWcsIFxuICAgICAgICAnY29tcG9uZW50Lm5nRWxlbWVudFN0cmF0ZWd5LmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dBY3Rpb25zJCdcbiAgICAgIClcblxuICAgIGlmKGNvbnRlbnRDb21wb25lbnREaWFsb2dBY3Rpb25zJCkge1xuICAgICAgbGV0IGNvbXBvbmVudEFjdGlvblN1YmplY3QgPSB7XG4gICAgICAgIGFjdGlvbnMkOiBjb250ZW50Q29tcG9uZW50RGlhbG9nQWN0aW9ucyRcbiAgICAgIH1cblxuICAgICAgY29uZmlnID0gXy5kZWZhdWx0c0RlZXAoY29uZmlnLCBjb21wb25lbnRBY3Rpb25TdWJqZWN0KVxuICAgIH1cblxuICAgIHJldHVybiBfLmRlZmF1bHRzRGVlcChjb25maWcsIHRoaXMuZGVmYXVsdENvbmZpZylcbiAgfVxuXG4gIHByaXZhdGUgb3BlblZlbmRvckRpYWxvZyhjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dBZGFwdGVyLm9wZW4oY29uZmlnKVxuICB9XG59XG4iXX0=