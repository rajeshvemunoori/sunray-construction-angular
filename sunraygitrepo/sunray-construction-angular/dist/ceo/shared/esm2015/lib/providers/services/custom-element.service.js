/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import * as i0 from "@angular/core";
export class CustomElementService {
    /**
     * @param {?} config
     * @return {?}
     */
    build(config) {
        if (!this.elementExists(config.elementName)) {
            let /** @type {?} */ customElement = this.buildCustomElement(config);
            customElements.define(config.elementName, customElement);
        }
    }
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    buildInstance(elementName, inputs) {
        let /** @type {?} */ element = this.getElement(elementName, inputs);
        this.launchElement(element);
        return element;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    launchElement(element) {
        document
            .getElementById("custom-elements-wrap")
            .appendChild(/** @type {?} */ (element));
    }
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    getElement(elementName, inputs) {
        if (this.elementExists(elementName)) {
            let /** @type {?} */ element = this.buildElementInstance(elementName);
            return this.configureElementInstance(element, inputs);
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} elementName
     * @return {?}
     */
    buildElementInstance(elementName) {
        return /** @type {?} */ (document.createElement(elementName));
    }
    /**
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    configureElementInstance(element, inputs) {
        let /** @type {?} */ onClosed = () => {
            return document.body.removeChild(element);
        };
        element.addEventListener('closed', onClosed);
        let /** @type {?} */ setInput = (value, prop) => {
            element[prop] = value;
        };
        _.forEach(inputs, setInput);
        return element;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    buildCustomElement(config) {
        return createCustomElement(config.ctor, config.opts);
    }
    /**
     * @param {?} elementName
     * @return {?}
     */
    elementExists(elementName) {
        return customElements.get(elementName) != null;
    }
}
CustomElementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ CustomElementService.ngInjectableDef = i0.defineInjectable({ factory: function CustomElementService_Factory() { return new CustomElementService(); }, token: CustomElementService, providedIn: "root" });
function CustomElementService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CustomElementService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CustomElementService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9jdXN0b20tZWxlbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBYSxNQUFNLG1CQUFtQixDQUFBOztBQVNsRSxNQUFNOzs7OztJQUVKLEtBQUssQ0FBQyxNQUE0QjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxxQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25ELGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUN6RDtLQUNGOzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBbUIsRUFBRSxNQUFXO1FBQzVDLHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUE7S0FDZjs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBTztRQUMzQixRQUFRO2FBQ0wsY0FBYyxDQUFDLHNCQUFzQixDQUFDO2FBQ3RDLFdBQVcsbUJBQU0sT0FBTyxFQUFDLENBQUE7Ozs7Ozs7SUFHdEIsVUFBVSxDQUFDLFdBQW1CLEVBQUUsTUFBVztRQUNqRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxxQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFBO1NBQ1o7Ozs7OztJQUdLLG9CQUFvQixDQUFDLFdBQW1CO1FBQzlDLE1BQU0sbUJBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQWMsRUFBQTs7Ozs7OztJQUdqRCx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUM5QyxxQkFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMxQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUc1QyxxQkFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFJLEtBQUssQ0FBQTtTQUN2QixDQUFBO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFFM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQTs7Ozs7O0lBR1Isa0JBQWtCLENBQUMsTUFBTTtRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7OztJQUc5QyxhQUFhLENBQUMsV0FBbUI7UUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFBOzs7O1lBMURqRCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQsIE5nRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQge1xuICBpQ3VzdG9tRWxlbWVudENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRWxlbWVudFNlcnZpY2Uge1xuXG4gIGJ1aWxkKGNvbmZpZzogaUN1c3RvbUVsZW1lbnRDb25maWcpIHtcbiAgICBpZighdGhpcy5lbGVtZW50RXhpc3RzKGNvbmZpZy5lbGVtZW50TmFtZSkpIHtcbiAgICAgIGxldCBjdXN0b21FbGVtZW50ID0gdGhpcy5idWlsZEN1c3RvbUVsZW1lbnQoY29uZmlnKVxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGNvbmZpZy5lbGVtZW50TmFtZSwgY3VzdG9tRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBidWlsZEluc3RhbmNlKGVsZW1lbnROYW1lOiBzdHJpbmcsIGlucHV0czogYW55KTogTmdFbGVtZW50IHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50TmFtZSwgaW5wdXRzKVxuICAgIHRoaXMubGF1bmNoRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b20tZWxlbWVudHMtd3JhcFwiKVxuICAgICAgLmFwcGVuZENoaWxkKDxhbnk+ZWxlbWVudClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgaWYodGhpcy5lbGVtZW50RXhpc3RzKGVsZW1lbnROYW1lKSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmJ1aWxkRWxlbWVudEluc3RhbmNlKGVsZW1lbnROYW1lKVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlRWxlbWVudEluc3RhbmNlKGVsZW1lbnQsIGlucHV0cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKSBhcyBOZ0VsZW1lbnQgXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUVsZW1lbnRJbnN0YW5jZShlbGVtZW50LCBpbnB1dHMpIHtcbiAgICBsZXQgb25DbG9zZWQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIH1cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlZCcsIG9uQ2xvc2VkKVxuXG5cbiAgICBsZXQgc2V0SW5wdXQgPSAodmFsdWUsIHByb3ApID0+IHtcbiAgICAgIGVsZW1lbnRbcHJvcF0gID0gdmFsdWVcbiAgICB9XG4gICAgXy5mb3JFYWNoKGlucHV0cywgc2V0SW5wdXQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEN1c3RvbUVsZW1lbnQoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29uZmlnLmN0b3IsIGNvbmZpZy5vcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBlbGVtZW50RXhpc3RzKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKSAhPSBudWxsXG4gIH1cbn1cbiJdfQ==