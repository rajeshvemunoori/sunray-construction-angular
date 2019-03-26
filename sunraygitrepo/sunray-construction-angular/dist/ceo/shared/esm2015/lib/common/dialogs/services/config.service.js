/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service to create custom elements.
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { CustomElementManager, } from '../../../providers/index';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DIALOGS_CONFIG, } from '../tokens/index';
import * as i0 from "@angular/core";
import * as i1 from "../../../providers/services/custom-element/manager.service";
import * as i2 from "../tokens/dialogs-config";
export class ConfigService {
    /**
     * @param {?} customElementManager
     * @param {?} dialogsConfig
     */
    constructor(customElementManager, dialogsConfig) {
        this.customElementManager = customElementManager;
        this.dialogsConfig = dialogsConfig;
    }
    /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    provide(dialogElement, config) {
        /** @type {?} */
        let component = this.getComponent(dialogElement);
        config = this.getDialogConfig(dialogElement, config);
        /** @type {?} */
        let configActions = this.dialogConfigActions(component);
        return _.defaultsDeep(config, configActions, this.defaults);
    }
    /**
     * @return {?}
     */
    get dialogs() {
        return _.reduce(_.map(this.dialogsConfig, 'dialogs'), _.merge);
    }
    /**
     * @return {?}
     */
    get defaults() {
        /** @type {?} */
        let defaults = this.defaultConfig.defaults;
        /** @type {?} */
        let others = {
            componentType: DialogComponent,
        };
        return _.merge(defaults, others);
    }
    /**
     * @return {?}
     */
    get defaultConfig() {
        return (/** @type {?} */ (_.find(this.dialogsConfig, { isDefault: true })));
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    getDialogConfig(dialogElement, config) {
        /** @type {?} */
        var dialogName;
        if (this.customElementManager.isCustomElement(dialogElement)) {
            dialogName = dialogElement.localName;
        }
        if (_.isString(config)) {
            dialogName = config;
        }
        if (dialogName) {
            return _.get(this.dialogs, dialogName, this.defaults);
        }
        else {
            return config;
        }
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    dialogConfigActions(component) {
        if (component.dialogActions$) {
            return {
                actions$: component.dialogActions$
            };
        }
        return {};
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getComponent(element) {
        /** @type {?} */
        let component = element;
        if (this.customElementManager.isCustomElement(element)) {
            component = this.customElementManager.getNgComponent(element);
        }
        return (/** @type {?} */ (component));
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: CustomElementManager },
    { type: undefined, decorators: [{ type: Inject, args: [DIALOGS_CONFIG,] }] }
];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.Manager), i0.inject(i2.DIALOGS_CONFIG)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.customElementManager;
    /** @type {?} */
    ConfigService.prototype.dialogsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxHQUNuQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsb0JBQW9CLEdBQ3JCLE1BQU0sMEJBQTBCLENBQUE7QUFFakMsT0FBTyxFQUNMLGVBQWUsRUFDaEIsTUFBTSx1Q0FBdUMsQ0FBQTtBQVU5QyxPQUFPLEVBQ0wsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUE7Ozs7QUFLeEIsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFlBQ1Usb0JBQTBDLEVBQ25CLGFBQWE7UUFEcEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUMzQyxDQUFDOzs7Ozs7SUFFSixPQUFPLENBQ0wsYUFBaUMsRUFDakMsTUFBOEI7O1lBRzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUVoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7O1lBRWhELGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBRXZELE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM3RCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsQ0FBQzs7OztJQUVELElBQUksUUFBUTs7WUFDTixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFROztZQUN0QyxNQUFNLEdBQUc7WUFDWCxhQUFhLEVBQUUsZUFBZTtTQUMvQjtRQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sbUJBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQWtCLENBQUE7SUFDMUUsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FDckIsYUFBYSxFQUNiLE1BQThCOztZQUcxQixVQUFVO1FBQ2QsSUFBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzNELFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFBO1NBQ3JDO1FBQ0QsSUFBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLFVBQVUsR0FBRyxNQUFNLENBQUE7U0FDcEI7UUFFRCxJQUFHLFVBQVUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDdEQ7YUFDSTtZQUNILE9BQU8sTUFBTSxDQUFBO1NBQ2Q7SUFDSCxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxTQUFrQztRQUM1RCxJQUFHLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsT0FBTztnQkFDTCxRQUFRLEVBQUUsU0FBUyxDQUFDLGNBQWM7YUFDbkMsQ0FBQTtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsT0FBMkI7O1lBQzFDLFNBQVMsR0FBRyxPQUFPO1FBRXZCLElBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyRCxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM5RDtRQUVELE9BQU8sbUJBQUEsU0FBUyxFQUEyQixDQUFBO0lBQzdDLENBQUM7OztZQTdFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQkMsb0JBQW9COzRDQXlCakIsTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7O0lBRHRCLDZDQUFrRDs7SUFDbEQsc0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBJbmplY3RhYmxlLCBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEN1c3RvbUVsZW1lbnRNYW5hZ2VyLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIERpYWxvZ0NvbXBvbmVudFxufSBmcm9tICcuLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBpRGlhbG9nQ29tcG9uZW50LFxuICBpRGlhbG9nQ29uZmlnLFxuICBpRGlhbG9nc0NvbmZpZyxcbiAgaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gIGlEaWFsb2dIdG1sRWxlbWVudCxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRElBTE9HU19DT05GSUcsXG59IGZyb20gJy4uL3Rva2Vucy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VzdG9tRWxlbWVudE1hbmFnZXI6IEN1c3RvbUVsZW1lbnRNYW5hZ2VyLFxuICAgIEBJbmplY3QoRElBTE9HU19DT05GSUcpIHB1YmxpYyBkaWFsb2dzQ29uZmlnLFxuICApIHt9XG5cbiAgcHJvdmlkZShcbiAgICBkaWFsb2dFbGVtZW50OiBpRGlhbG9nSHRtbEVsZW1lbnQsXG4gICAgY29uZmlnOiBpRGlhbG9nQ29uZmlnIHwgc3RyaW5nLFxuICApOiBpRGlhbG9nQ29uZmlnIHtcblxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChkaWFsb2dFbGVtZW50KVxuXG4gICAgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoZGlhbG9nRWxlbWVudCwgY29uZmlnKVxuXG4gICAgbGV0IGNvbmZpZ0FjdGlvbnMgPSB0aGlzLmRpYWxvZ0NvbmZpZ0FjdGlvbnMoY29tcG9uZW50KVxuXG4gICAgcmV0dXJuIF8uZGVmYXVsdHNEZWVwKGNvbmZpZywgY29uZmlnQWN0aW9ucywgdGhpcy5kZWZhdWx0cylcbiAgfVxuXG4gIGdldCBkaWFsb2dzKCkge1xuICAgIHJldHVybiBfLnJlZHVjZShfLm1hcCh0aGlzLmRpYWxvZ3NDb25maWcsICdkaWFsb2dzJyksIF8ubWVyZ2UpXG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0Q29uZmlnLmRlZmF1bHRzXG4gICAgbGV0IG90aGVycyA9IHtcbiAgICAgIGNvbXBvbmVudFR5cGU6IERpYWxvZ0NvbXBvbmVudCxcbiAgICB9XG4gICAgcmV0dXJuIF8ubWVyZ2UoZGVmYXVsdHMsIG90aGVycylcbiAgfVxuXG4gIGdldCBkZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiBfLmZpbmQodGhpcy5kaWFsb2dzQ29uZmlnLCB7IGlzRGVmYXVsdDogdHJ1ZSB9KSBhcyBpRGlhbG9nc0NvbmZpZ1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaWFsb2dDb25maWcoXG4gICAgZGlhbG9nRWxlbWVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcgfCBzdHJpbmdcbiAgKSB7XG5cbiAgICB2YXIgZGlhbG9nTmFtZVxuICAgIGlmKHRoaXMuY3VzdG9tRWxlbWVudE1hbmFnZXIuaXNDdXN0b21FbGVtZW50KGRpYWxvZ0VsZW1lbnQpKSB7XG4gICAgICBkaWFsb2dOYW1lID0gZGlhbG9nRWxlbWVudC5sb2NhbE5hbWVcbiAgICB9XG4gICAgaWYoXy5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICBkaWFsb2dOYW1lID0gY29uZmlnXG4gICAgfVxuXG4gICAgaWYoZGlhbG9nTmFtZSkge1xuICAgICAgcmV0dXJuIF8uZ2V0KHRoaXMuZGlhbG9ncywgZGlhbG9nTmFtZSwgdGhpcy5kZWZhdWx0cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaWFsb2dDb25maWdBY3Rpb25zKGNvbXBvbmVudDogaURpYWxvZ0NvbnRlbnRDb21wb25lbnQpIHtcbiAgICBpZihjb21wb25lbnQuZGlhbG9nQWN0aW9ucyQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnMkOiBjb21wb25lbnQuZGlhbG9nQWN0aW9ucyRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudChlbGVtZW50OiBpRGlhbG9nSHRtbEVsZW1lbnQpOiBpRGlhbG9nQ29udGVudENvbXBvbmVudCB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRcblxuICAgIGlmKHRoaXMuY3VzdG9tRWxlbWVudE1hbmFnZXIuaXNDdXN0b21FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICBjb21wb25lbnQgPSB0aGlzLmN1c3RvbUVsZW1lbnRNYW5hZ2VyLmdldE5nQ29tcG9uZW50KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudCBhcyBpRGlhbG9nQ29udGVudENvbXBvbmVudFxuICB9XG59XG4iXX0=