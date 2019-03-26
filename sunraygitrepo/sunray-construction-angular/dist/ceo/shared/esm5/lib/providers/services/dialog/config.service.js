/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service to create custom elements.
import * as _ from 'lodash';
import { BehaviorSubject, } from 'rxjs';
import { Injectable, Inject, } from '@angular/core';
import { ModalComponent } from '../../../declarables/components/modal/modal.component';
import { DIALOG_CONFIGS, } from '../../tokens/index';
import * as i0 from "@angular/core";
import * as i1 from "../../tokens/dialog-configs";
var ConfigService = /** @class */ (function () {
    function ConfigService(dialogConfigs) {
        this.dialogConfigs = dialogConfigs;
        this._defaultConfig = {
            actions$: new BehaviorSubject(0),
            componentType: ModalComponent,
            width: '500px',
            header: {
                show: false,
            },
            footer: {
                show: false,
            },
        };
    }
    /**
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    ConfigService.prototype.provide = /**
     * @param {?} component
     * @param {?} config
     * @return {?}
     */
    function (component, config) {
        if (_.isString(config)) {
            config = _.get(this.dialogConfigs, config, this.defaultConfig);
        }
        /** @type {?} */
        var actions$ = this.getContentComponentActions(component);
        if (actions$) {
            /** @type {?} */
            var componentActionSubject = {
                actions$: actions$
            };
            config = _.defaultsDeep(config, componentActionSubject);
        }
        return _.defaultsDeep(config, this.defaultConfig);
    };
    Object.defineProperty(ConfigService.prototype, "defaultConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ConfigService.prototype.getContentComponentActions = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return _.get(component, 'ngElementStrategy.componentRef.instance.dialogActions$');
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DIALOG_CONFIGS,] }] }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.DIALOG_CONFIGS)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._defaultConfig;
    /** @type {?} */
    ConfigService.prototype.dialogConfigs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxNQUFNLENBQUE7QUFHYixPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sR0FDbkIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLGNBQWMsRUFDZixNQUFNLHVEQUF1RCxDQUFBO0FBTzlELE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxvQkFBb0IsQ0FBQTs7O0FBRTNCO0lBZ0JFLHVCQUNpQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7UUFidEMsbUJBQWMsR0FBRztZQUN2QixRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLGFBQWEsRUFBRSxjQUFjO1lBQzdCLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLEtBQUs7YUFDWjtTQUNGLENBQUE7SUFJRSxDQUFDOzs7Ozs7SUFFSiwrQkFBTzs7Ozs7SUFBUCxVQUNFLFNBQWtDLEVBQ2xDLE1BQXFCO1FBR3JCLElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDL0Q7O1lBRUcsUUFBUSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBRyxRQUFRLEVBQUU7O2dCQUNQLHNCQUFzQixHQUFHO2dCQUMzQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUVELE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO1NBQ3hEO1FBRUQsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELHNCQUFJLHdDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO1FBQzVCLENBQUM7OztPQUFBOzs7Ozs7SUFFTyxrREFBMEI7Ozs7O0lBQWxDLFVBQW1DLFNBQVM7UUFDMUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUNSLFNBQVMsRUFDVCx3REFBd0QsQ0FDekQsQ0FBQTtJQUNMLENBQUM7O2dCQWxERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQWVJLE1BQU0sU0FBQyxjQUFjOzs7d0JBM0MxQjtDQTZFQyxBQW5ERCxJQW1EQztTQWhEWSxhQUFhOzs7Ozs7SUFDeEIsdUNBVUM7O0lBR0Msc0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5cbmltcG9ydCB7XG4gIEluamVjdGFibGUsIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgTW9kYWxDb21wb25lbnRcbn0gZnJvbSAnLi4vLi4vLi4vZGVjbGFyYWJsZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb25maWcsXG4gIGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBESUFMT0dfQ09ORklHUyxcbn0gZnJvbSAnLi4vLi4vdG9rZW5zL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdENvbmZpZyA9IHtcbiAgICBhY3Rpb25zJDogbmV3IEJlaGF2aW9yU3ViamVjdCgwKSxcbiAgICBjb21wb25lbnRUeXBlOiBNb2RhbENvbXBvbmVudCxcbiAgICB3aWR0aDogJzUwMHB4JyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChESUFMT0dfQ09ORklHUykgcHVibGljIGRpYWxvZ0NvbmZpZ3MsXG4gICkge31cblxuICBwcm92aWRlKFxuICAgIGNvbXBvbmVudDogaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgY29uZmlnOiBpRGlhbG9nQ29uZmlnLFxuICApOiBpRGlhbG9nQ29uZmlnIHtcblxuICAgIGlmKF8uaXNTdHJpbmcoY29uZmlnKSkge1xuICAgICAgY29uZmlnID0gXy5nZXQodGhpcy5kaWFsb2dDb25maWdzLCBjb25maWcsIHRoaXMuZGVmYXVsdENvbmZpZylcbiAgICB9XG5cbiAgICBsZXQgYWN0aW9ucyQgPSB0aGlzLmdldENvbnRlbnRDb21wb25lbnRBY3Rpb25zKGNvbXBvbmVudClcbiAgICBpZihhY3Rpb25zJCkge1xuICAgICAgbGV0IGNvbXBvbmVudEFjdGlvblN1YmplY3QgPSB7XG4gICAgICAgIGFjdGlvbnMkOiBhY3Rpb25zJFxuICAgICAgfVxuXG4gICAgICBjb25maWcgPSBfLmRlZmF1bHRzRGVlcChjb25maWcsIGNvbXBvbmVudEFjdGlvblN1YmplY3QpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZGVmYXVsdHNEZWVwKGNvbmZpZywgdGhpcy5kZWZhdWx0Q29uZmlnKVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRDb25maWcoKTogaURpYWxvZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDb25maWdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGVudENvbXBvbmVudEFjdGlvbnMoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF8uZ2V0KFxuICAgICAgICBjb21wb25lbnQsIFxuICAgICAgICAnbmdFbGVtZW50U3RyYXRlZ3kuY29tcG9uZW50UmVmLmluc3RhbmNlLmRpYWxvZ0FjdGlvbnMkJ1xuICAgICAgKVxuICB9XG59XG4iXX0=