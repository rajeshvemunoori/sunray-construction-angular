/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} contentComponent
     * @param {?} dialogConfig
     * @return {?}
     */
    open(contentComponent, dialogConfig) {
        /** @type {?} */
        let config = this.buildAdapterDialogConfig(dialogConfig);
        /** @type {?} */
        let dialogComponentType = dialogConfig.componentType;
        /** @type {?} */
        let dialogComponent = this.getDialogComponent(dialogComponentType, config);
        return this.configuredDialogComponent(dialogComponent, contentComponent);
    }
    /**
     * @private
     * @param {?} dialogComponentType
     * @param {?} config
     * @return {?}
     */
    getDialogComponent(dialogComponentType, config) {
        /** @type {?} */
        let dialog = this.dialog.open(dialogComponentType, config);
        return (/** @type {?} */ (dialog.componentInstance));
    }
    /**
     * @private
     * @param {?} dialogConfig
     * @return {?}
     */
    buildAdapterDialogConfig(dialogConfig) {
        /** @type {?} */
        let dialogComponentData = {
            data: this.buildComponentData(dialogConfig)
        };
        /** @type {?} */
        let adapterDialogConfig = _.pick(dialogConfig, this.adapterConfigProperties);
        return _.merge(adapterDialogConfig, dialogComponentData);
    }
    /**
     * @private
     * @param {?} dialogConfig
     * @return {?}
     */
    buildComponentData(dialogConfig) {
        return dialogConfig;
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentComponent
     * @return {?}
     */
    configuredDialogComponent(dialogComponent, contentComponent) {
        this.addContentComponent(dialogComponent, contentComponent);
        return (/** @type {?} */ (dialogComponent));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentComponent
     * @return {?}
     */
    addContentComponent(dialogComponent, contentComponent) {
        this.showContentComponent(dialogComponent, contentComponent);
        this.launchContentComponent(dialogComponent, contentComponent);
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentComponent
     * @return {?}
     */
    showContentComponent(dialogComponent, contentComponent) {
        document
            .getElementById(dialogComponent.contentElementId)
            .appendChild((/** @type {?} */ (contentComponent)));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentComponent
     * @return {?}
     */
    launchContentComponent(dialogComponent, contentComponent) {
        /** @type {?} */
        let action = this.buildLaunchAction(dialogComponent);
        /** @type {?} */
        let event = (/** @type {?} */ ({
            action: action
        }));
        dialogComponent.data.actions$.next((/** @type {?} */ (event)));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @return {?}
     */
    buildLaunchAction(dialogComponent) {
        return {
            name: 'launch',
            payload: {
                dialogRef: dialogComponent.dialogRef
            }
        };
    }
}
MatDialogAdapterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatDialogAdapterService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ MatDialogAdapterService.ngInjectableDef = i0.defineInjectable({ factory: function MatDialogAdapterService_Factory() { return new MatDialogAdapterService(i0.inject(i1.MatDialog)); }, token: MatDialogAdapterService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatDialogAdapterService.prototype.adapterConfigProperties;
    /**
     * @type {?}
     * @private
     */
    MatDialogAdapterService.prototype.nonDataProperties;
    /**
     * @type {?}
     * @private
     */
    MatDialogAdapterService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nL21hdC1kaWFsb2ctYWRhcHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBbUIzQixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBUWxDLFlBQ1UsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVJuQiw0QkFBdUIsR0FBVTtZQUN2QyxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFBO1FBQ08sc0JBQWlCLEdBQVU7WUFDakMsZUFBZTtTQUNoQixDQUFBO0lBSUUsQ0FBQzs7Ozs7O0lBRUosSUFBSSxDQUNGLGdCQUF5QyxFQUN6QyxZQUEyQjs7WUFHdkIsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7O1lBRXBELG1CQUFtQixHQUFHLFlBQVksQ0FBQyxhQUFhOztZQUNoRCxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQztRQUMxRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUMxRSxDQUFDOzs7Ozs7O0lBRU8sa0JBQWtCLENBQ3hCLG1CQUF3QyxFQUN4QyxNQUFNOztZQUVGLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUM7UUFFMUQsT0FBTyxtQkFBa0IsTUFBTSxDQUFDLGlCQUFpQixFQUFBLENBQUE7SUFDbkQsQ0FBQzs7Ozs7O0lBRU8sd0JBQXdCLENBQzlCLFlBQTJCOztZQUd2QixtQkFBbUIsR0FBRztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQztTQUM1Qzs7WUFFRyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM5QixZQUFZLEVBQ1osSUFBSSxDQUFDLHVCQUF1QixDQUM3QjtRQUVELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO0lBQzFELENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFlBQTJCO1FBQ3BELE9BQU8sWUFBWSxDQUFBO0lBQ3JCLENBQUM7Ozs7Ozs7SUFFTyx5QkFBeUIsQ0FDL0IsZUFBaUMsRUFDakMsZ0JBQXlDO1FBRXpDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUMzRCxPQUFPLG1CQUFrQixlQUFlLEVBQUEsQ0FBQTtJQUMxQyxDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQ3pCLGVBQWlDLEVBQ2pDLGdCQUF5QztRQUV6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FDMUIsZUFBaUMsRUFDakMsZ0JBQXlDO1FBRXpDLFFBQVE7YUFDTCxjQUFjLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO2FBQ2hELFdBQVcsQ0FBQyxtQkFBSyxnQkFBZ0IsRUFBQSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7OztJQUVPLHNCQUFzQixDQUM1QixlQUFpQyxFQUNqQyxnQkFBeUM7O1lBRXJDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDOztZQUNoRCxLQUFLLEdBQUcsbUJBQW9CO1lBQzlCLE1BQU0sRUFBRSxNQUFNO1NBQ2YsRUFBQTtRQUNELGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBb0IsS0FBSyxFQUFBLENBQUMsQ0FBQTtJQUMvRCxDQUFDOzs7Ozs7SUFHTyxpQkFBaUIsQ0FDdkIsZUFBaUM7UUFFakMsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxlQUFlLENBQUMsU0FBUzthQUNyQztTQUNGLENBQUE7SUFDSCxDQUFDOzs7WUF0R0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkJDLFNBQVM7Ozs7Ozs7O0lBcUJULDBEQUVDOzs7OztJQUNELG9EQUVDOzs7OztJQUdDLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7XG4gIE1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4uLy4uLy4uL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBEaWFsb2dDb21wb25lbnRUeXBlLFxuICBpRGlhbG9nQWN0aW9uLFxuICBpRGlhbG9nQWN0aW9uRXZlbnQsXG4gIGlEaWFsb2dDb21wb25lbnQsXG4gIGlEaWFsb2dDb25maWcsXG4gIGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICBpTWF0RGlhbG9nQ29uZmlnLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dBZGFwdGVyU2VydmljZSB7XG4gIHByaXZhdGUgYWRhcHRlckNvbmZpZ1Byb3BlcnRpZXM6IGFueVtdID0gW1xuICAgICd3aWR0aCcsICdoZWlnaHQnLFxuICBdXG4gIHByaXZhdGUgbm9uRGF0YVByb3BlcnRpZXM6IGFueVtdID0gW1xuICAgICdjb21wb25lbnRUeXBlJyxcbiAgXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7fVxuXG4gIG9wZW4oXG4gICAgY29udGVudENvbXBvbmVudDogaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgZGlhbG9nQ29uZmlnOiBpRGlhbG9nQ29uZmlnLFxuICApOiBpRGlhbG9nQ29tcG9uZW50IHtcblxuICAgIGxldCBjb25maWcgPSB0aGlzLmJ1aWxkQWRhcHRlckRpYWxvZ0NvbmZpZyhkaWFsb2dDb25maWcpXG5cbiAgICBsZXQgZGlhbG9nQ29tcG9uZW50VHlwZSA9IGRpYWxvZ0NvbmZpZy5jb21wb25lbnRUeXBlXG4gICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuZ2V0RGlhbG9nQ29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudFR5cGUsIGNvbmZpZylcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmVkRGlhbG9nQ29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudCwgY29udGVudENvbXBvbmVudClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlhbG9nQ29tcG9uZW50KFxuICAgIGRpYWxvZ0NvbXBvbmVudFR5cGU6IERpYWxvZ0NvbXBvbmVudFR5cGUsXG4gICAgY29uZmlnXG4gICk6IGlEaWFsb2dDb21wb25lbnQge1xuICAgIGxldCBkaWFsb2cgPSB0aGlzLmRpYWxvZy5vcGVuKGRpYWxvZ0NvbXBvbmVudFR5cGUsIGNvbmZpZylcblxuICAgIHJldHVybiA8aURpYWxvZ0NvbXBvbmVudD5kaWFsb2cuY29tcG9uZW50SW5zdGFuY2VcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZGFwdGVyRGlhbG9nQ29uZmlnKFxuICAgIGRpYWxvZ0NvbmZpZzogaURpYWxvZ0NvbmZpZ1xuICApOiBpTWF0RGlhbG9nQ29uZmlnIHtcblxuICAgIGxldCBkaWFsb2dDb21wb25lbnREYXRhID0ge1xuICAgICAgZGF0YTogdGhpcy5idWlsZENvbXBvbmVudERhdGEoZGlhbG9nQ29uZmlnKVxuICAgIH1cblxuICAgIGxldCBhZGFwdGVyRGlhbG9nQ29uZmlnID0gXy5waWNrKFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICAgdGhpcy5hZGFwdGVyQ29uZmlnUHJvcGVydGllc1xuICAgIClcblxuICAgIHJldHVybiBfLm1lcmdlKGFkYXB0ZXJEaWFsb2dDb25maWcsIGRpYWxvZ0NvbXBvbmVudERhdGEpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29tcG9uZW50RGF0YShkaWFsb2dDb25maWc6IGlEaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZWREaWFsb2dDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgICBjb250ZW50Q29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudFxuICApOiBpRGlhbG9nQ29tcG9uZW50IHtcbiAgICB0aGlzLmFkZENvbnRlbnRDb21wb25lbnQoZGlhbG9nQ29tcG9uZW50LCBjb250ZW50Q29tcG9uZW50KVxuICAgIHJldHVybiA8aURpYWxvZ0NvbXBvbmVudD5kaWFsb2dDb21wb25lbnRcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29udGVudENvbXBvbmVudChcbiAgICBkaWFsb2dDb21wb25lbnQ6IGlEaWFsb2dDb21wb25lbnQsIFxuICAgIGNvbnRlbnRDb21wb25lbnQ6IGlEaWFsb2dDb250ZW50Q29tcG9uZW50XG4gICk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0NvbnRlbnRDb21wb25lbnQoZGlhbG9nQ29tcG9uZW50LCBjb250ZW50Q29tcG9uZW50KVxuICAgIHRoaXMubGF1bmNoQ29udGVudENvbXBvbmVudChkaWFsb2dDb21wb25lbnQsIGNvbnRlbnRDb21wb25lbnQpXG4gIH1cblxuICBwcml2YXRlIHNob3dDb250ZW50Q29tcG9uZW50KFxuICAgIGRpYWxvZ0NvbXBvbmVudDogaURpYWxvZ0NvbXBvbmVudCwgXG4gICAgY29udGVudENvbXBvbmVudDogaURpYWxvZ0NvbnRlbnRDb21wb25lbnRcbiAgKTogdm9pZCB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChkaWFsb2dDb21wb25lbnQuY29udGVudEVsZW1lbnRJZClcbiAgICAgIC5hcHBlbmRDaGlsZCg8YW55PmNvbnRlbnRDb21wb25lbnQpXG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbnRlbnRDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgICBjb250ZW50Q29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudFxuICApOiB2b2lkIHtcbiAgICBsZXQgYWN0aW9uID0gdGhpcy5idWlsZExhdW5jaEFjdGlvbihkaWFsb2dDb21wb25lbnQpXG4gICAgbGV0IGV2ZW50ID0gPGlEaWFsb2dBY3Rpb25FdmVudD57XG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH1cbiAgICBkaWFsb2dDb21wb25lbnQuZGF0YS5hY3Rpb25zJC5uZXh0KDxpRGlhbG9nQWN0aW9uRXZlbnQ+ZXZlbnQpXG4gIH1cblxuXG4gIHByaXZhdGUgYnVpbGRMYXVuY2hBY3Rpb24oXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgKTogaURpYWxvZ0FjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdsYXVuY2gnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBkaWFsb2dSZWY6IGRpYWxvZ0NvbXBvbmVudC5kaWFsb2dSZWZcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==