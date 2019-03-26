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
var Manager = /** @class */ (function () {
    function Manager(_config) {
        this._config = _config;
        this.ngComponentPath = 'ngElementStrategy.componentRef.instance';
    }
    Object.defineProperty(Manager.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return _.reduce(this._config, _.merge);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    Manager.prototype.define = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (!this.elementExists(config.elementName)) {
            /** @type {?} */
            var customElement = this.buildCustomElement(this.elementConfig(config));
            this.defineNativeCustomElement(config.elementName, customElement);
        }
    };
    /**
     * @param {?} elementName
     * @return {?}
     */
    Manager.prototype.elementExists = /**
     * @param {?} elementName
     * @return {?}
     */
    function (elementName) {
        return customElements.get(elementName) != null;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Manager.prototype.isCustomElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return this.hasNgComponent(element);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Manager.prototype.getNgComponent = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return _.get(element, this.ngComponentPath);
    };
    //Private methods
    //Private methods
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Manager.prototype.hasNgComponent = 
    //Private methods
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return _.has(element, this.ngComponentPath);
    };
    /**
     * @private
     * @param {?} elementName
     * @param {?} element
     * @return {?}
     */
    Manager.prototype.defineNativeCustomElement = /**
     * @private
     * @param {?} elementName
     * @param {?} element
     * @return {?}
     */
    function (elementName, element) {
        customElements.define(elementName, element);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    Manager.prototype.buildCustomElement = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return createCustomElement(config.ctor, config.opts);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    Manager.prototype.elementConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var defaultConfig = _.get(this.config, config.elementName, {});
        return _.merge(defaultConfig, config);
    };
    Manager.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Manager.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ELEMENTS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ Manager.ngInjectableDef = i0.defineInjectable({ factory: function Manager_Factory() { return new Manager(i0.inject(i1.CUSTOM_ELEMENTS_CONFIG)); }, token: Manager, providedIn: "root" });
    return Manager;
}());
export { Manager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2N1c3RvbS1lbGVtZW50L21hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxHQUNuQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQU92RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUE7OztBQUUzQjtJQU1FLGlCQUMwQyxPQUFPO1FBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUh6QyxvQkFBZSxHQUFXLHlDQUF5QyxDQUFBO0lBSXhFLENBQUM7SUFFSixzQkFBSSwyQkFBTTs7OztRQUFWO1lBQ0UsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLENBQUM7OztPQUFBOzs7OztJQUVELHdCQUFNOzs7O0lBQU4sVUFBTyxNQUE0QjtRQUNqQyxJQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7O2dCQUN0QyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUE7U0FDbEU7SUFDSCxDQUFDOzs7OztJQUVGLCtCQUFhOzs7O0lBQWIsVUFBYyxXQUFtQjtRQUM5QixPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFBO0lBQ2hELENBQUM7Ozs7O0lBRUQsaUNBQWU7Ozs7SUFBZixVQUFnQixPQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQyxDQUFDOzs7OztJQUVELGdDQUFjOzs7O0lBQWQsVUFBZSxPQUFZO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxpQkFBaUI7Ozs7Ozs7SUFFVCxnQ0FBYzs7Ozs7OztJQUF0QixVQUF1QixPQUFZO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Ozs7Ozs7SUFFTywyQ0FBeUI7Ozs7OztJQUFqQyxVQUNFLFdBQThCLEVBQzlCLE9BQVk7UUFFWixjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7Ozs7SUFFTyxvQ0FBa0I7Ozs7O0lBQTFCLFVBQTJCLE1BQU07UUFDL0IsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0RCxDQUFDOzs7Ozs7SUFFTywrQkFBYTs7Ozs7SUFBckIsVUFBc0IsTUFBTTs7WUFDdEIsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUM5RCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7O2dCQXJERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUtJLE1BQU0sU0FBQyxzQkFBc0I7OztrQkExQmxDO0NBeUVDLEFBdERELElBc0RDO1NBbkRZLE9BQU87Ozs7OztJQUNsQixrQ0FBMkU7Ozs7O0lBR3pFLDBCQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZpY2UgdG8gY3JlYXRlIGN1c3RvbSBlbGVtZW50cy5cblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEluamVjdGFibGUsIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQge1xuICBpQ3VzdG9tRWxlbWVudENvbmZpZyxcbiAgQ3VzdG9tRWxlbWVudE5hbWUsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIENVU1RPTV9FTEVNRU5UU19DT05GSUdcbn0gZnJvbSAnLi4vLi4vdG9rZW5zL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBuZ0NvbXBvbmVudFBhdGg6IHN0cmluZyA9ICduZ0VsZW1lbnRTdHJhdGVneS5jb21wb25lbnRSZWYuaW5zdGFuY2UnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRUxFTUVOVFNfQ09ORklHKSBwcml2YXRlIF9jb25maWcsXG4gICkge31cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiBfLnJlZHVjZSh0aGlzLl9jb25maWcsIF8ubWVyZ2UpXG4gIH1cblxuICBkZWZpbmUoY29uZmlnOiBpQ3VzdG9tRWxlbWVudENvbmZpZykge1xuICAgIGlmKCF0aGlzLmVsZW1lbnRFeGlzdHMoY29uZmlnLmVsZW1lbnROYW1lKSkge1xuICAgICAgbGV0IGN1c3RvbUVsZW1lbnQgPSB0aGlzLmJ1aWxkQ3VzdG9tRWxlbWVudCh0aGlzLmVsZW1lbnRDb25maWcoY29uZmlnKSlcbiAgICAgIHRoaXMuZGVmaW5lTmF0aXZlQ3VzdG9tRWxlbWVudChjb25maWcuZWxlbWVudE5hbWUsIGN1c3RvbUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiBlbGVtZW50RXhpc3RzKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKSAhPSBudWxsXG4gIH1cblxuICBpc0N1c3RvbUVsZW1lbnQoZWxlbWVudDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTmdDb21wb25lbnQoZWxlbWVudClcbiAgfVxuXG4gIGdldE5nQ29tcG9uZW50KGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiBfLmdldChlbGVtZW50LCB0aGlzLm5nQ29tcG9uZW50UGF0aClcbiAgfVxuXG4gIC8vUHJpdmF0ZSBtZXRob2RzXG5cbiAgcHJpdmF0ZSBoYXNOZ0NvbXBvbmVudChlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5oYXMoZWxlbWVudCwgdGhpcy5uZ0NvbXBvbmVudFBhdGgpXG4gIH1cblxuICBwcml2YXRlIGRlZmluZU5hdGl2ZUN1c3RvbUVsZW1lbnQoXG4gICAgZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lLFxuICAgIGVsZW1lbnQ6IGFueVxuICApIHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoZWxlbWVudE5hbWUsIGVsZW1lbnQpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ3VzdG9tRWxlbWVudChjb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlQ3VzdG9tRWxlbWVudChjb25maWcuY3RvciwgY29uZmlnLm9wdHMpXG4gIH1cblxuICBwcml2YXRlIGVsZW1lbnRDb25maWcoY29uZmlnKSB7XG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSBfLmdldCh0aGlzLmNvbmZpZywgY29uZmlnLmVsZW1lbnROYW1lLCB7fSlcbiAgICByZXR1cm4gXy5tZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gIH1cbn1cbiJdfQ==