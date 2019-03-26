/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service to create custom elements.
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_CONFIG } from '../../tokens/index';
import * as i0 from "@angular/core";
import * as i1 from "../../tokens/custom-elements-config";
export class Manager {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.ngComponentPath = 'ngElementStrategy.componentRef.instance';
    }
    /**
     * @return {?}
     */
    get config() {
        return _.reduce(this._config, _.merge);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    define(config) {
        if (!this.elementExists(config.elementName)) {
            /** @type {?} */
            let customElement = this.buildCustomElement(this.elementConfig(config));
            this.defineNativeCustomElement(config.elementName, customElement);
        }
    }
    /**
     * @param {?} elementName
     * @return {?}
     */
    elementExists(elementName) {
        return customElements.get(elementName) != null;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isCustomElement(element) {
        return this.hasNgComponent(element);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getNgComponent(element) {
        return _.get(element, this.ngComponentPath);
    }
    //Private methods
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    hasNgComponent(element) {
        return _.has(element, this.ngComponentPath);
    }
    /**
     * @private
     * @param {?} elementName
     * @param {?} element
     * @return {?}
     */
    defineNativeCustomElement(elementName, element) {
        customElements.define(elementName, element);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    buildCustomElement(config) {
        return createCustomElement(config.ctor, config.opts);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    elementConfig(config) {
        /** @type {?} */
        let defaultConfig = _.get(this.config, config.elementName, {});
        return _.merge(defaultConfig, config);
    }
}
Manager.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Manager.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ELEMENTS_CONFIG,] }] }
];
/** @nocollapse */ Manager.ngInjectableDef = i0.defineInjectable({ factory: function Manager_Factory() { return new Manager(i0.inject(i1.CUSTOM_ELEMENTS_CONFIG)); }, token: Manager, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Manager.prototype.ngComponentPath;
    /**
     * @type {?}
     * @private
     */
    Manager.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2N1c3RvbS1lbGVtZW50L21hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxHQUNuQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQU92RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUE7OztBQUszQixNQUFNLE9BQU8sT0FBTzs7OztJQUdsQixZQUMwQyxPQUFPO1FBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUh6QyxvQkFBZSxHQUFXLHlDQUF5QyxDQUFBO0lBSXhFLENBQUM7Ozs7SUFFSixJQUFJLE1BQU07UUFDUixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBNEI7UUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFOztnQkFDdEMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1NBQ2xFO0lBQ0gsQ0FBQzs7Ozs7SUFFRixhQUFhLENBQUMsV0FBbUI7UUFDOUIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQTtJQUNoRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFZO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Ozs7Ozs7SUFJTyxjQUFjLENBQUMsT0FBWTtRQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7Ozs7O0lBRU8seUJBQXlCLENBQy9CLFdBQThCLEVBQzlCLE9BQVk7UUFFWixjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxNQUFNO1FBQy9CLE9BQU8sbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQU07O1lBQ3RCLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDOUQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7WUFyREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUtJLE1BQU0sU0FBQyxzQkFBc0I7Ozs7Ozs7O0lBSGhDLGtDQUEyRTs7Ozs7SUFHekUsMEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSwgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnXG5cbmltcG9ydCB7XG4gIGlDdXN0b21FbGVtZW50Q29uZmlnLFxuICBDdXN0b21FbGVtZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgQ1VTVE9NX0VMRU1FTlRTX0NPTkZJR1xufSBmcm9tICcuLi8uLi90b2tlbnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hbmFnZXIge1xuICBwcml2YXRlIG5nQ29tcG9uZW50UGF0aDogc3RyaW5nID0gJ25nRWxlbWVudFN0cmF0ZWd5LmNvbXBvbmVudFJlZi5pbnN0YW5jZSdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENVU1RPTV9FTEVNRU5UU19DT05GSUcpIHByaXZhdGUgX2NvbmZpZyxcbiAgKSB7fVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKHRoaXMuX2NvbmZpZywgXy5tZXJnZSlcbiAgfVxuXG4gIGRlZmluZShjb25maWc6IGlDdXN0b21FbGVtZW50Q29uZmlnKSB7XG4gICAgaWYoIXRoaXMuZWxlbWVudEV4aXN0cyhjb25maWcuZWxlbWVudE5hbWUpKSB7XG4gICAgICBsZXQgY3VzdG9tRWxlbWVudCA9IHRoaXMuYnVpbGRDdXN0b21FbGVtZW50KHRoaXMuZWxlbWVudENvbmZpZyhjb25maWcpKVxuICAgICAgdGhpcy5kZWZpbmVOYXRpdmVDdXN0b21FbGVtZW50KGNvbmZpZy5lbGVtZW50TmFtZSwgY3VzdG9tRWxlbWVudClcbiAgICB9XG4gIH1cblxuIGVsZW1lbnRFeGlzdHMoZWxlbWVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudE5hbWUpICE9IG51bGxcbiAgfVxuXG4gIGlzQ3VzdG9tRWxlbWVudChlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNOZ0NvbXBvbmVudChlbGVtZW50KVxuICB9XG5cbiAgZ2V0TmdDb21wb25lbnQoZWxlbWVudDogYW55KSB7XG4gICAgcmV0dXJuIF8uZ2V0KGVsZW1lbnQsIHRoaXMubmdDb21wb25lbnRQYXRoKVxuICB9XG5cbiAgLy9Qcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIGhhc05nQ29tcG9uZW50KGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmhhcyhlbGVtZW50LCB0aGlzLm5nQ29tcG9uZW50UGF0aClcbiAgfVxuXG4gIHByaXZhdGUgZGVmaW5lTmF0aXZlQ3VzdG9tRWxlbWVudChcbiAgICBlbGVtZW50TmFtZTogQ3VzdG9tRWxlbWVudE5hbWUsXG4gICAgZWxlbWVudDogYW55XG4gICkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShlbGVtZW50TmFtZSwgZWxlbWVudClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDdXN0b21FbGVtZW50KGNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVDdXN0b21FbGVtZW50KGNvbmZpZy5jdG9yLCBjb25maWcub3B0cylcbiAgfVxuXG4gIHByaXZhdGUgZWxlbWVudENvbmZpZyhjb25maWcpIHtcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IF8uZ2V0KHRoaXMuY29uZmlnLCBjb25maWcuZWxlbWVudE5hbWUsIHt9KVxuICAgIHJldHVybiBfLm1lcmdlKGRlZmF1bHRDb25maWcsIGNvbmZpZylcbiAgfVxufVxuIl19