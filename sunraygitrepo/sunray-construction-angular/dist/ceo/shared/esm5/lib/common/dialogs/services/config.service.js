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
var ConfigService = /** @class */ (function () {
    function ConfigService(customElementManager, dialogsConfig) {
        this.customElementManager = customElementManager;
        this.dialogsConfig = dialogsConfig;
    }
    /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    ConfigService.prototype.provide = /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    function (dialogElement, config) {
        /** @type {?} */
        var component = this.getComponent(dialogElement);
        config = this.getDialogConfig(dialogElement, config);
        /** @type {?} */
        var configActions = this.dialogConfigActions(component);
        return _.defaultsDeep(config, configActions, this.defaults);
    };
    Object.defineProperty(ConfigService.prototype, "dialogs", {
        get: /**
         * @return {?}
         */
        function () {
            return _.reduce(_.map(this.dialogsConfig, 'dialogs'), _.merge);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "defaults", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaults = this.defaultConfig.defaults;
            /** @type {?} */
            var others = {
                componentType: DialogComponent,
            };
            return _.merge(defaults, others);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "defaultConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (_.find(this.dialogsConfig, { isDefault: true })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    ConfigService.prototype.getDialogConfig = /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    function (dialogElement, config) {
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
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ConfigService.prototype.dialogConfigActions = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        if (component.dialogActions$) {
            return {
                actions$: component.dialogActions$
            };
        }
        return {};
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ConfigService.prototype.getComponent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var component = element;
        if (this.customElementManager.isCustomElement(element)) {
            component = this.customElementManager.getNgComponent(element);
        }
        return (/** @type {?} */ (component));
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: CustomElementManager },
        { type: undefined, decorators: [{ type: Inject, args: [DIALOGS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.Manager), i0.inject(i2.DIALOGS_CONFIG)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.customElementManager;
    /** @type {?} */
    ConfigService.prototype.dialogsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxHQUNuQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsb0JBQW9CLEdBQ3JCLE1BQU0sMEJBQTBCLENBQUE7QUFFakMsT0FBTyxFQUNMLGVBQWUsRUFDaEIsTUFBTSx1Q0FBdUMsQ0FBQTtBQVU5QyxPQUFPLEVBQ0wsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUE7Ozs7QUFFeEI7SUFJRSx1QkFDVSxvQkFBMEMsRUFDbkIsYUFBYTtRQURwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFBO0lBQzNDLENBQUM7Ozs7OztJQUVKLCtCQUFPOzs7OztJQUFQLFVBQ0UsYUFBaUMsRUFDakMsTUFBOEI7O1lBRzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUVoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7O1lBRWhELGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBRXZELE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsc0JBQUksa0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVE7Ozs7UUFBWjs7Z0JBQ00sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTs7Z0JBQ3RDLE1BQU0sR0FBRztnQkFDWCxhQUFhLEVBQUUsZUFBZTthQUMvQjtZQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sbUJBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQWtCLENBQUE7UUFDMUUsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFTyx1Q0FBZTs7Ozs7O0lBQXZCLFVBQ0UsYUFBYSxFQUNiLE1BQThCOztZQUcxQixVQUFVO1FBQ2QsSUFBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzNELFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFBO1NBQ3JDO1FBQ0QsSUFBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLFVBQVUsR0FBRyxNQUFNLENBQUE7U0FDcEI7UUFFRCxJQUFHLFVBQVUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDdEQ7YUFDSTtZQUNILE9BQU8sTUFBTSxDQUFBO1NBQ2Q7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQ0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFNBQWtDO1FBQzVELElBQUcsU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUMzQixPQUFPO2dCQUNMLFFBQVEsRUFBRSxTQUFTLENBQUMsY0FBYzthQUNuQyxDQUFBO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Ozs7OztJQUVPLG9DQUFZOzs7OztJQUFwQixVQUFxQixPQUEyQjs7WUFDMUMsU0FBUyxHQUFHLE9BQU87UUFFdkIsSUFBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JELFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzlEO1FBRUQsT0FBTyxtQkFBQSxTQUFTLEVBQTJCLENBQUE7SUFDN0MsQ0FBQzs7Z0JBN0VGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBckJDLG9CQUFvQjtnREF5QmpCLE1BQU0sU0FBQyxjQUFjOzs7d0JBdEMxQjtDQThHQyxBQTlFRCxJQThFQztTQTNFWSxhQUFhOzs7Ozs7SUFFdEIsNkNBQWtEOztJQUNsRCxzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXJ2aWNlIHRvIGNyZWF0ZSBjdXN0b20gZWxlbWVudHMuXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIEluamVjdGFibGUsIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQ3VzdG9tRWxlbWVudE1hbmFnZXIsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRGlhbG9nQ29tcG9uZW50XG59IGZyb20gJy4uL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb21wb25lbnQsXG4gIGlEaWFsb2dDb25maWcsXG4gIGlEaWFsb2dzQ29uZmlnLFxuICBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgaURpYWxvZ0h0bWxFbGVtZW50LFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBESUFMT0dTX0NPTkZJRyxcbn0gZnJvbSAnLi4vdG9rZW5zL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXN0b21FbGVtZW50TWFuYWdlcjogQ3VzdG9tRWxlbWVudE1hbmFnZXIsXG4gICAgQEluamVjdChESUFMT0dTX0NPTkZJRykgcHVibGljIGRpYWxvZ3NDb25maWcsXG4gICkge31cblxuICBwcm92aWRlKFxuICAgIGRpYWxvZ0VsZW1lbnQ6IGlEaWFsb2dIdG1sRWxlbWVudCxcbiAgICBjb25maWc6IGlEaWFsb2dDb25maWcgfCBzdHJpbmcsXG4gICk6IGlEaWFsb2dDb25maWcge1xuXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KGRpYWxvZ0VsZW1lbnQpXG5cbiAgICBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZyhkaWFsb2dFbGVtZW50LCBjb25maWcpXG5cbiAgICBsZXQgY29uZmlnQWN0aW9ucyA9IHRoaXMuZGlhbG9nQ29uZmlnQWN0aW9ucyhjb21wb25lbnQpXG5cbiAgICByZXR1cm4gXy5kZWZhdWx0c0RlZXAoY29uZmlnLCBjb25maWdBY3Rpb25zLCB0aGlzLmRlZmF1bHRzKVxuICB9XG5cbiAgZ2V0IGRpYWxvZ3MoKSB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKF8ubWFwKHRoaXMuZGlhbG9nc0NvbmZpZywgJ2RpYWxvZ3MnKSwgXy5tZXJnZSlcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRDb25maWcuZGVmYXVsdHNcbiAgICBsZXQgb3RoZXJzID0ge1xuICAgICAgY29tcG9uZW50VHlwZTogRGlhbG9nQ29tcG9uZW50LFxuICAgIH1cbiAgICByZXR1cm4gXy5tZXJnZShkZWZhdWx0cywgb3RoZXJzKVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmRpYWxvZ3NDb25maWcsIHsgaXNEZWZhdWx0OiB0cnVlIH0pIGFzIGlEaWFsb2dzQ29uZmlnXG4gIH1cblxuICBwcml2YXRlIGdldERpYWxvZ0NvbmZpZyhcbiAgICBkaWFsb2dFbGVtZW50LFxuICAgIGNvbmZpZzogaURpYWxvZ0NvbmZpZyB8IHN0cmluZ1xuICApIHtcblxuICAgIHZhciBkaWFsb2dOYW1lXG4gICAgaWYodGhpcy5jdXN0b21FbGVtZW50TWFuYWdlci5pc0N1c3RvbUVsZW1lbnQoZGlhbG9nRWxlbWVudCkpIHtcbiAgICAgIGRpYWxvZ05hbWUgPSBkaWFsb2dFbGVtZW50LmxvY2FsTmFtZVxuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgIGRpYWxvZ05hbWUgPSBjb25maWdcbiAgICB9XG5cbiAgICBpZihkaWFsb2dOYW1lKSB7XG4gICAgICByZXR1cm4gXy5nZXQodGhpcy5kaWFsb2dzLCBkaWFsb2dOYW1lLCB0aGlzLmRlZmF1bHRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRpYWxvZ0NvbmZpZ0FjdGlvbnMoY29tcG9uZW50OiBpRGlhbG9nQ29udGVudENvbXBvbmVudCkge1xuICAgIGlmKGNvbXBvbmVudC5kaWFsb2dBY3Rpb25zJCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aW9ucyQ6IGNvbXBvbmVudC5kaWFsb2dBY3Rpb25zJFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50KGVsZW1lbnQ6IGlEaWFsb2dIdG1sRWxlbWVudCk6IGlEaWFsb2dDb250ZW50Q29tcG9uZW50IHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudFxuXG4gICAgaWYodGhpcy5jdXN0b21FbGVtZW50TWFuYWdlci5pc0N1c3RvbUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIGNvbXBvbmVudCA9IHRoaXMuY3VzdG9tRWxlbWVudE1hbmFnZXIuZ2V0TmdDb21wb25lbnQoZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50IGFzIGlEaWFsb2dDb250ZW50Q29tcG9uZW50XG4gIH1cbn1cbiJdfQ==