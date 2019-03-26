/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import * as i0 from "@angular/core";
var CustomElementService = /** @class */ (function () {
    function CustomElementService() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CustomElementService.prototype.build = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (!this.elementExists(config.elementName)) {
            var /** @type {?} */ customElement = this.buildCustomElement(config);
            customElements.define(config.elementName, customElement);
        }
    };
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    CustomElementService.prototype.buildInstance = /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    function (elementName, inputs) {
        var /** @type {?} */ element = this.getElement(elementName, inputs);
        this.launchElement(element);
        return element;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CustomElementService.prototype.launchElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        document
            .getElementById("custom-elements-wrap")
            .appendChild(/** @type {?} */ (element));
    };
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    CustomElementService.prototype.getElement = /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    function (elementName, inputs) {
        if (this.elementExists(elementName)) {
            var /** @type {?} */ element = this.buildElementInstance(elementName);
            return this.configureElementInstance(element, inputs);
        }
        else {
            return null;
        }
    };
    /**
     * @param {?} elementName
     * @return {?}
     */
    CustomElementService.prototype.buildElementInstance = /**
     * @param {?} elementName
     * @return {?}
     */
    function (elementName) {
        return /** @type {?} */ (document.createElement(elementName));
    };
    /**
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    CustomElementService.prototype.configureElementInstance = /**
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    function (element, inputs) {
        var /** @type {?} */ onClosed = function () {
            return document.body.removeChild(element);
        };
        element.addEventListener('closed', onClosed);
        var /** @type {?} */ setInput = function (value, prop) {
            element[prop] = value;
        };
        _.forEach(inputs, setInput);
        return element;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    CustomElementService.prototype.buildCustomElement = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return createCustomElement(config.ctor, config.opts);
    };
    /**
     * @param {?} elementName
     * @return {?}
     */
    CustomElementService.prototype.elementExists = /**
     * @param {?} elementName
     * @return {?}
     */
    function (elementName) {
        return customElements.get(elementName) != null;
    };
    CustomElementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ CustomElementService.ngInjectableDef = i0.defineInjectable({ factory: function CustomElementService_Factory() { return new CustomElementService(); }, token: CustomElementService, providedIn: "root" });
    return CustomElementService;
}());
export { CustomElementService };
function CustomElementService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CustomElementService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CustomElementService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9jdXN0b20tZWxlbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBYSxNQUFNLG1CQUFtQixDQUFBOzs7Ozs7Ozs7SUFXaEUsb0NBQUs7Ozs7SUFBTCxVQUFNLE1BQTRCO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1NBQ3pEO0tBQ0Y7Ozs7OztJQUVELDRDQUFhOzs7OztJQUFiLFVBQWMsV0FBbUIsRUFBRSxNQUFXO1FBQzVDLHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUE7S0FDZjs7Ozs7SUFFTyw0Q0FBYTs7OztjQUFDLE9BQU87UUFDM0IsUUFBUTthQUNMLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQzthQUN0QyxXQUFXLG1CQUFNLE9BQU8sRUFBQyxDQUFBOzs7Ozs7O0lBR3RCLHlDQUFVOzs7OztjQUFDLFdBQW1CLEVBQUUsTUFBVztRQUNqRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxxQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFBO1NBQ1o7Ozs7OztJQUdLLG1EQUFvQjs7OztjQUFDLFdBQW1CO1FBQzlDLE1BQU0sbUJBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQWMsRUFBQTs7Ozs7OztJQUdqRCx1REFBd0I7Ozs7O2NBQUMsT0FBTyxFQUFFLE1BQU07UUFDOUMscUJBQUksUUFBUSxHQUFHO1lBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzFDLENBQUE7UUFDRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRzVDLHFCQUFJLFFBQVEsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBSSxLQUFLLENBQUE7U0FDdkIsQ0FBQTtRQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUE7Ozs7OztJQUdSLGlEQUFrQjs7OztjQUFDLE1BQU07UUFDL0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzs7Ozs7SUFHOUMsNENBQWE7Ozs7Y0FBQyxXQUFtQjtRQUN2QyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUE7OztnQkExRGpELFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsrQkFaRDs7U0FhYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQsIE5nRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQge1xuICBpQ3VzdG9tRWxlbWVudENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRWxlbWVudFNlcnZpY2Uge1xuXG4gIGJ1aWxkKGNvbmZpZzogaUN1c3RvbUVsZW1lbnRDb25maWcpIHtcbiAgICBpZighdGhpcy5lbGVtZW50RXhpc3RzKGNvbmZpZy5lbGVtZW50TmFtZSkpIHtcbiAgICAgIGxldCBjdXN0b21FbGVtZW50ID0gdGhpcy5idWlsZEN1c3RvbUVsZW1lbnQoY29uZmlnKVxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGNvbmZpZy5lbGVtZW50TmFtZSwgY3VzdG9tRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBidWlsZEluc3RhbmNlKGVsZW1lbnROYW1lOiBzdHJpbmcsIGlucHV0czogYW55KTogTmdFbGVtZW50IHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50TmFtZSwgaW5wdXRzKVxuICAgIHRoaXMubGF1bmNoRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b20tZWxlbWVudHMtd3JhcFwiKVxuICAgICAgLmFwcGVuZENoaWxkKDxhbnk+ZWxlbWVudClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgaWYodGhpcy5lbGVtZW50RXhpc3RzKGVsZW1lbnROYW1lKSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmJ1aWxkRWxlbWVudEluc3RhbmNlKGVsZW1lbnROYW1lKVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlRWxlbWVudEluc3RhbmNlKGVsZW1lbnQsIGlucHV0cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKSBhcyBOZ0VsZW1lbnQgXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUVsZW1lbnRJbnN0YW5jZShlbGVtZW50LCBpbnB1dHMpIHtcbiAgICBsZXQgb25DbG9zZWQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIH1cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlZCcsIG9uQ2xvc2VkKVxuXG5cbiAgICBsZXQgc2V0SW5wdXQgPSAodmFsdWUsIHByb3ApID0+IHtcbiAgICAgIGVsZW1lbnRbcHJvcF0gID0gdmFsdWVcbiAgICB9XG4gICAgXy5mb3JFYWNoKGlucHV0cywgc2V0SW5wdXQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEN1c3RvbUVsZW1lbnQoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29uZmlnLmN0b3IsIGNvbmZpZy5vcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBlbGVtZW50RXhpc3RzKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKSAhPSBudWxsXG4gIH1cbn1cbiJdfQ==