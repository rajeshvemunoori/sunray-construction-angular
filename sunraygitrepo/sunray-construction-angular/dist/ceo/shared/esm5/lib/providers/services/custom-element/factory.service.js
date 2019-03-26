/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service to create custom elements.
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Manager } from './manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./manager.service";
var Factory = /** @class */ (function () {
    function Factory(manager) {
        this.manager = manager;
    }
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    Factory.prototype.build = /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    function (elementName, inputs) {
        /** @type {?} */
        var element = this.getElement(elementName, inputs);
        this.launchElement(element);
        return element;
    };
    //Private methods
    //Private methods
    /**
     * @private
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    Factory.prototype.getElement = 
    //Private methods
    /**
     * @private
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    function (elementName, inputs) {
        if (this.manager.elementExists(elementName)) {
            /** @type {?} */
            var element = this.buildElementInstance(elementName);
            return this.configureElementInstance(element, inputs);
        }
        else {
            return this.defaultElement;
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Factory.prototype.launchElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        document
            .getElementById("custom-elements-wrap")
            .appendChild((/** @type {?} */ (element)));
    };
    /**
     * @private
     * @param {?} elementName
     * @return {?}
     */
    Factory.prototype.buildElementInstance = /**
     * @private
     * @param {?} elementName
     * @return {?}
     */
    function (elementName) {
        return (/** @type {?} */ (document.createElement(elementName)));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    Factory.prototype.configureElementInstance = /**
     * @private
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    function (element, inputs) {
        /** @type {?} */
        var onClosed = function () {
            return document.body.removeChild(element);
        };
        element.addEventListener('closed', onClosed);
        /** @type {?} */
        var setInput = function (value, prop) {
            element[prop] = value;
        };
        _.forEach(inputs, setInput);
        return element;
    };
    Factory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Factory.ctorParameters = function () { return [
        { type: Manager }
    ]; };
    /** @nocollapse */ Factory.ngInjectableDef = i0.defineInjectable({ factory: function Factory_Factory() { return new Factory(i0.inject(i1.Manager)); }, token: Factory, providedIn: "root" });
    return Factory;
}());
export { Factory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Factory.prototype.defaultElement;
    /** @type {?} */
    Factory.prototype.manager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2N1c3RvbS1lbGVtZW50L2ZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFRMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFBOzs7QUFFM0M7SUFNRSxpQkFDUyxPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3RCLENBQUM7Ozs7OztJQUVKLHVCQUFLOzs7OztJQUFMLFVBQU0sV0FBOEIsRUFBRSxNQUFXOztZQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0IsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVELGlCQUFpQjs7Ozs7Ozs7SUFFVCw0QkFBVTs7Ozs7Ozs7SUFBbEIsVUFBbUIsV0FBOEIsRUFBRSxNQUFXO1FBQzVELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7O2dCQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztZQUNwRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FDdEQ7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtTQUMzQjtJQUNILENBQUM7Ozs7OztJQUVPLCtCQUFhOzs7OztJQUFyQixVQUFzQixPQUFPO1FBQzNCLFFBQVE7YUFDTCxjQUFjLENBQUMsc0JBQXNCLENBQUM7YUFDdEMsV0FBVyxDQUFDLG1CQUFLLE9BQU8sRUFBQSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBR08sc0NBQW9COzs7OztJQUE1QixVQUE2QixXQUE4QjtRQUN6RCxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQTtJQUN6RCxDQUFDOzs7Ozs7O0lBRU8sMENBQXdCOzs7Ozs7SUFBaEMsVUFBaUMsT0FBTyxFQUFFLE1BQU07O1lBQzFDLFFBQVEsR0FBRztZQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7O1lBR3hDLFFBQVEsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBSSxLQUFLLENBQUE7UUFDeEIsQ0FBQztRQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRTNCLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLE9BQU87OztrQkFaaEI7Q0FtRUMsQUFyREQsSUFxREM7U0FsRFksT0FBTzs7Ozs7O0lBQ2xCLGlDQUE0Qjs7SUFHMUIsMEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IE5nRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQge1xuICBDdXN0b21FbGVtZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgTWFuYWdlciB9IGZyb20gJy4vbWFuYWdlci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJpdmF0ZSBkZWZhdWx0RWxlbWVudDogbnVsbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYW5hZ2VyOiBNYW5hZ2VyLFxuICApIHt9XG5cbiAgYnVpbGQoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoZWxlbWVudE5hbWUsIGlucHV0cylcbiAgICB0aGlzLmxhdW5jaEVsZW1lbnQoZWxlbWVudClcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy9Qcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIGdldEVsZW1lbnQoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgaWYodGhpcy5tYW5hZ2VyLmVsZW1lbnRFeGlzdHMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVFbGVtZW50SW5zdGFuY2UoZWxlbWVudCwgaW5wdXRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRFbGVtZW50XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tLWVsZW1lbnRzLXdyYXBcIilcbiAgICAgIC5hcHBlbmRDaGlsZCg8YW55PmVsZW1lbnQpXG4gIH1cblxuXG4gIHByaXZhdGUgYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpIGFzIE5nRWxlbWVudCBcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlRWxlbWVudEluc3RhbmNlKGVsZW1lbnQsIGlucHV0cykge1xuICAgIGxldCBvbkNsb3NlZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2VkJywgb25DbG9zZWQpXG5cblxuICAgIGxldCBzZXRJbnB1dCA9ICh2YWx1ZSwgcHJvcCkgPT4ge1xuICAgICAgZWxlbWVudFtwcm9wXSAgPSB2YWx1ZVxuICAgIH1cbiAgICBfLmZvckVhY2goaW5wdXRzLCBzZXRJbnB1dClcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbn1cbiJdfQ==