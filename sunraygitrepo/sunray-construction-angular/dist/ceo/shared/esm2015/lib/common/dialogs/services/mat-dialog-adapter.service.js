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
     * @param {?} contentElement
     * @param {?} dialogConfig
     * @return {?}
     */
    open(contentElement, dialogConfig) {
        /** @type {?} */
        let config = this.buildAdapterDialogConfig(dialogConfig);
        /** @type {?} */
        let dialogComponentType = dialogConfig.componentType;
        /** @type {?} */
        let matDialogComponent = this.getMatDialog(dialogComponentType, config);
        /** @type {?} */
        let dialogComponent = this.getDialogComponent(matDialogComponent);
        return this.configuredDialogComponent(dialogComponent, contentElement);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.dialog.closeAll();
    }
    /**
     * @private
     * @param {?} dialogComponentType
     * @param {?} config
     * @return {?}
     */
    getMatDialog(dialogComponentType, config) {
        return this.dialog.open(dialogComponentType, config);
    }
    /**
     * @private
     * @param {?} matDialog
     * @return {?}
     */
    getDialogComponent(matDialog) {
        /** @type {?} */
        let dialogComponent = (/** @type {?} */ (matDialog.componentInstance));
        this.connectDialogs(matDialog, dialogComponent);
        return dialogComponent;
    }
    /**
     * @private
     * @param {?} matDialog
     * @param {?} dialogComponent
     * @return {?}
     */
    connectDialogs(matDialog, dialogComponent) {
        /*
        //Gets an observable that is notified when the dialog is finished opening.
        afterOpened
    
        //Gets an observable that emits when the overlay's backdrop has been clicked.
        backdropClick
    
        //Gets an observable that is notified when the dialog has started closing.
        beforeClosed
    
        //Gets an observable that emits when keydown events are targeted on the overlay.
        keydownEvents
        */
        /*
            //Gets an observable that is notified when the dialog is finished opening.
            afterOpened
        
            //Gets an observable that emits when the overlay's backdrop has been clicked.
            backdropClick
        
            //Gets an observable that is notified when the dialog has started closing.
            beforeClosed
        
            //Gets an observable that emits when keydown events are targeted on the overlay.
            keydownEvents
            */
        /** @type {?} */
        let matDialogEventNames = [
            'afterClosed', 'afterOpened', 'backdropClick',
            'beforeClosed', 'keydownEvents'
        ];
        /** @type {?} */
        let attachMatDialogEvent = (eventName) => {
            matDialog[eventName]().subscribe(event => {
                /** @type {?} */
                let action = {
                    name: eventName,
                    payload: dialogComponent,
                };
                dialogComponent.data.actions$.next(action);
            });
        };
        _.forEach(matDialogEventNames, attachMatDialogEvent);
        dialogComponent.data.actions$.subscribe(action => {
            if (action.name == 'close') {
                matDialog.close(action);
            }
        });
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
     * @param {?} contentElement
     * @return {?}
     */
    configuredDialogComponent(dialogComponent, contentElement) {
        this.addContentComponent(dialogComponent, contentElement);
        return (/** @type {?} */ (dialogComponent));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentElement
     * @return {?}
     */
    addContentComponent(dialogComponent, contentElement) {
        this.showContentComponent(dialogComponent, contentElement);
        this.launchContentComponent(dialogComponent);
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentElement
     * @return {?}
     */
    showContentComponent(dialogComponent, contentElement) {
        document
            .getElementById(dialogComponent.contentElementId)
            .appendChild((/** @type {?} */ (contentElement)));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @return {?}
     */
    launchContentComponent(dialogComponent) {
        /** @type {?} */
        let action = this.buildLaunchAction(dialogComponent);
        dialogComponent.data.actions$.next((/** @type {?} */ (action)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9zZXJ2aWNlcy9tYXQtZGlhbG9nLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUNWLE1BQU0sbUJBQW1CLENBQUM7OztBQWdCM0IsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVFsQyxZQUNVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFSbkIsNEJBQXVCLEdBQVU7WUFDdkMsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQTtRQUNPLHNCQUFpQixHQUFVO1lBQ2pDLGVBQWU7U0FDaEIsQ0FBQTtJQUlFLENBQUM7Ozs7OztJQUVKLElBQUksQ0FDRixjQUFrQyxFQUNsQyxZQUEyQjs7WUFHdkIsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7O1lBRXBELG1CQUFtQixHQUFHLFlBQVksQ0FBQyxhQUFhOztZQUNoRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQzs7WUFDbkUsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDeEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQ2xCLG1CQUF3QyxFQUN4QyxNQUFNO1FBRU4sT0FBTyxJQUFJLENBQUMs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QUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUUsZUFBZSxDQUFDLFNBQVM7YUFDckM7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7O1lBckpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWhCQyxTQUFTOzs7Ozs7OztJQWtCVCwwREFFQzs7Ozs7SUFDRCxvREFFQzs7Ozs7SUFHQyx5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEFcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQge1xuICBEaWFsb2dDb21wb25lbnRUeXBlLFxuICBpRGlhbG9nQWN0aW9uLFxuICBpRGlhbG9nQWN0aW9uRXZlbnQsXG4gIGlEaWFsb2dDb21wb25lbnQsXG4gIGlEaWFsb2dDb25maWcsXG4gIGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICBpRGlhbG9nSHRtbEVsZW1lbnQsXG4gIGlNYXREaWFsb2dDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hdERpYWxvZ0FkYXB0ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhZGFwdGVyQ29uZmlnUHJvcGVydGllczogYW55W10gPSBbXG4gICAgJ3dpZHRoJywgJ2hlaWdodCcsXG4gIF1cbiAgcHJpdmF0ZSBub25EYXRhUHJvcGVydGllczogYW55W10gPSBbXG4gICAgJ2NvbXBvbmVudFR5cGUnLFxuICBdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xuICApIHt9XG5cbiAgb3BlbihcbiAgICBjb250ZW50RWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICAgIGRpYWxvZ0NvbmZpZzogaURpYWxvZ0NvbmZpZyxcbiAgKTogaURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgICBsZXQgY29uZmlnID0gdGhpcy5idWlsZEFkYXB0ZXJEaWFsb2dDb25maWcoZGlhbG9nQ29uZmlnKVxuXG4gICAgbGV0IGRpYWxvZ0NvbXBvbmVudFR5cGUgPSBkaWFsb2dDb25maWcuY29tcG9uZW50VHlwZVxuICAgIGxldCBtYXREaWFsb2dDb21wb25lbnQgPSB0aGlzLmdldE1hdERpYWxvZyhkaWFsb2dDb21wb25lbnRUeXBlLCBjb25maWcpXG4gICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuZ2V0RGlhbG9nQ29tcG9uZW50KG1hdERpYWxvZ0NvbXBvbmVudClcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmVkRGlhbG9nQ29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudCwgY29udGVudEVsZW1lbnQpXG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpXG4gIH1cblxuICBwcml2YXRlIGdldE1hdERpYWxvZyhcbiAgICBkaWFsb2dDb21wb25lbnRUeXBlOiBEaWFsb2dDb21wb25lbnRUeXBlLFxuICAgIGNvbmZpZ1xuICApOiBNYXREaWFsb2dSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oZGlhbG9nQ29tcG9uZW50VHlwZSwgY29uZmlnKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREaWFsb2dDb21wb25lbnQobWF0RGlhbG9nOiBNYXREaWFsb2dSZWY8YW55Pik6IGlEaWFsb2dDb21wb25lbnQge1xuICAgIGxldCBkaWFsb2dDb21wb25lbnQgPSA8aURpYWxvZ0NvbXBvbmVudD5tYXREaWFsb2cuY29tcG9uZW50SW5zdGFuY2VcbiAgICB0aGlzLmNvbm5lY3REaWFsb2dzKG1hdERpYWxvZywgZGlhbG9nQ29tcG9uZW50KVxuICAgIHJldHVybiBkaWFsb2dDb21wb25lbnRcbiAgfVxuXG4gIHByaXZhdGUgY29ubmVjdERpYWxvZ3MoXG4gICAgbWF0RGlhbG9nOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBkaWFsb2dDb21wb25lbnQ6IGlEaWFsb2dDb21wb25lbnRcbiAgKSB7XG5cbiAgICAvKlxuICAgIC8vR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGZpbmlzaGVkIG9wZW5pbmcuXG4gICAgYWZ0ZXJPcGVuZWRcblxuICAgIC8vR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgb3ZlcmxheSdzIGJhY2tkcm9wIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAgYmFja2Ryb3BDbGlja1xuXG4gICAgLy9HZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBkaWFsb2cgaGFzIHN0YXJ0ZWQgY2xvc2luZy5cbiAgICBiZWZvcmVDbG9zZWRcblxuICAgIC8vR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiBrZXlkb3duIGV2ZW50cyBhcmUgdGFyZ2V0ZWQgb24gdGhlIG92ZXJsYXkuXG4gICAga2V5ZG93bkV2ZW50c1xuICAgICovXG5cbiAgICBsZXQgbWF0RGlhbG9nRXZlbnROYW1lcyA9IFtcbiAgICAgICdhZnRlckNsb3NlZCcsICdhZnRlck9wZW5lZCcsICdiYWNrZHJvcENsaWNrJyxcbiAgICAgICdiZWZvcmVDbG9zZWQnLCAna2V5ZG93bkV2ZW50cydcbiAgICBdXG5cbiAgICBsZXQgYXR0YWNoTWF0RGlhbG9nRXZlbnQgPSAoZXZlbnROYW1lKSA9PiB7XG4gICAgICBtYXREaWFsb2dbZXZlbnROYW1lXSgpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIGxldCBhY3Rpb24gPSB7XG4gICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgIHBheWxvYWQ6IGRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgfVxuICAgICAgICBkaWFsb2dDb21wb25lbnQuZGF0YS5hY3Rpb25zJC5uZXh0KGFjdGlvbilcbiAgICAgIH0pXG4gICAgfVxuICAgIF8uZm9yRWFjaChtYXREaWFsb2dFdmVudE5hbWVzLCBhdHRhY2hNYXREaWFsb2dFdmVudClcblxuICAgIGRpYWxvZ0NvbXBvbmVudC5kYXRhLmFjdGlvbnMkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgaWYoYWN0aW9uLm5hbWUgPT0gJ2Nsb3NlJykge1xuICAgICAgICBtYXREaWFsb2cuY2xvc2UoYWN0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIHByaXZhdGUgYnVpbGRBZGFwdGVyRGlhbG9nQ29uZmlnKFxuICAgIGRpYWxvZ0NvbmZpZzogaURpYWxvZ0NvbmZpZ1xuICApOiBpTWF0RGlhbG9nQ29uZmlnIHtcblxuICAgIGxldCBkaWFsb2dDb21wb25lbnREYXRhID0ge1xuICAgICAgZGF0YTogdGhpcy5idWlsZENvbXBvbmVudERhdGEoZGlhbG9nQ29uZmlnKVxuICAgIH1cblxuICAgIGxldCBhZGFwdGVyRGlhbG9nQ29uZmlnID0gXy5waWNrKFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICAgdGhpcy5hZGFwdGVyQ29uZmlnUHJvcGVydGllc1xuICAgIClcblxuICAgIHJldHVybiBfLm1lcmdlKGFkYXB0ZXJEaWFsb2dDb25maWcsIGRpYWxvZ0NvbXBvbmVudERhdGEpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29tcG9uZW50RGF0YShkaWFsb2dDb25maWc6IGlEaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZWREaWFsb2dDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgICBjb250ZW50RWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICApOiBpRGlhbG9nQ29tcG9uZW50IHtcbiAgICB0aGlzLmFkZENvbnRlbnRDb21wb25lbnQoZGlhbG9nQ29tcG9uZW50LCBjb250ZW50RWxlbWVudClcbiAgICByZXR1cm4gPGlEaWFsb2dDb21wb25lbnQ+ZGlhbG9nQ29tcG9uZW50XG4gIH1cblxuICBwcml2YXRlIGFkZENvbnRlbnRDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgICBjb250ZW50RWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnNob3dDb250ZW50Q29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudCwgY29udGVudEVsZW1lbnQpXG4gICAgdGhpcy5sYXVuY2hDb250ZW50Q29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudClcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0NvbnRlbnRDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgICBjb250ZW50RWxlbWVudDogaURpYWxvZ0h0bWxFbGVtZW50LFxuICApOiB2b2lkIHtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKGRpYWxvZ0NvbXBvbmVudC5jb250ZW50RWxlbWVudElkKVxuICAgICAgLmFwcGVuZENoaWxkKDxhbnk+Y29udGVudEVsZW1lbnQpXG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbnRlbnRDb21wb25lbnQoXG4gICAgZGlhbG9nQ29tcG9uZW50OiBpRGlhbG9nQ29tcG9uZW50LCBcbiAgKTogdm9pZCB7XG4gICAgbGV0IGFjdGlvbiA9IHRoaXMuYnVpbGRMYXVuY2hBY3Rpb24oZGlhbG9nQ29tcG9uZW50KVxuICAgIGRpYWxvZ0NvbXBvbmVudC5kYXRhLmFjdGlvbnMkLm5leHQoPGlEaWFsb2dBY3Rpb24+YWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZExhdW5jaEFjdGlvbihcbiAgICBkaWFsb2dDb21wb25lbnQ6IGlEaWFsb2dDb21wb25lbnQsIFxuICApOiBpRGlhbG9nQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ2xhdW5jaCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGRpYWxvZ1JlZjogZGlhbG9nQ29tcG9uZW50LmRpYWxvZ1JlZlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19