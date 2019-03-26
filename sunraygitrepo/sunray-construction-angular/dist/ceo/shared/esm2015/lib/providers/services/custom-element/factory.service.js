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
export class Factory {
    /**
     * @param {?} manager
     */
    constructor(manager) {
        this.manager = manager;
    }
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    build(elementName, inputs) {
        /** @type {?} */
        let element = this.getElement(elementName, inputs);
        this.launchElement(element);
        return element;
    }
    //Private methods
    /**
     * @private
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    getElement(elementName, inputs) {
        if (this.manager.elementExists(elementName)) {
            /** @type {?} */
            let element = this.buildElementInstance(elementName);
            return this.configureElementInstance(element, inputs);
        }
        else {
            return this.defaultElement;
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    launchElement(element) {
        document
            .getElementById("custom-elements-wrap")
            .appendChild((/** @type {?} */ (element)));
    }
    /**
     * @private
     * @param {?} elementName
     * @return {?}
     */
    buildElementInstance(elementName) {
        return (/** @type {?} */ (document.createElement(elementName)));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    configureElementInstance(element, inputs) {
        /** @type {?} */
        let onClosed = () => {
            return document.body.removeChild(element);
        };
        element.addEventListener('closed', onClosed);
        /** @type {?} */
        let setInput = (value, prop) => {
            element[prop] = value;
        };
        _.forEach(inputs, setInput);
        return element;
    }
}
Factory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Factory.ctorParameters = () => [
    { type: Manager }
];
/** @nocollapse */ Factory.ngInjectableDef = i0.defineInjectable({ factory: function Factory_Factory() { return new Factory(i0.inject(i1.Manager)); }, token: Factory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Factory.prototype.defaultElement;
    /** @type {?} */
    Factory.prototype.manager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2N1c3RvbS1lbGVtZW50L2ZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFRMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFBOzs7QUFLM0MsTUFBTSxPQUFPLE9BQU87Ozs7SUFHbEIsWUFDUyxPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ3RCLENBQUM7Ozs7OztJQUVKLEtBQUssQ0FBQyxXQUE4QixFQUFFLE1BQVc7O1lBQzNDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzQixPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDOzs7Ozs7OztJQUlPLFVBQVUsQ0FBQyxXQUE4QixFQUFFLE1BQVc7UUFDNUQsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTs7Z0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUN0RDthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE9BQU87UUFDM0IsUUFBUTthQUNMLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQzthQUN0QyxXQUFXLENBQUMsbUJBQUssT0FBTyxFQUFBLENBQUMsQ0FBQTtJQUM5QixDQUFDOzs7Ozs7SUFHTyxvQkFBb0IsQ0FBQyxXQUE4QjtRQUN6RCxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQTtJQUN6RCxDQUFDOzs7Ozs7O0lBRU8sd0JBQXdCLENBQUMsT0FBTyxFQUFFLE1BQU07O1lBQzFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTs7WUFHeEMsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBSSxLQUFLLENBQUE7UUFDeEIsQ0FBQztRQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRTNCLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7OztZQXBERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxPQUFPOzs7Ozs7OztJQU1kLGlDQUE0Qjs7SUFHMUIsMEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IE5nRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQge1xuICBDdXN0b21FbGVtZW50TmFtZSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgTWFuYWdlciB9IGZyb20gJy4vbWFuYWdlci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJpdmF0ZSBkZWZhdWx0RWxlbWVudDogbnVsbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYW5hZ2VyOiBNYW5hZ2VyLFxuICApIHt9XG5cbiAgYnVpbGQoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoZWxlbWVudE5hbWUsIGlucHV0cylcbiAgICB0aGlzLmxhdW5jaEVsZW1lbnQoZWxlbWVudClcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy9Qcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIGdldEVsZW1lbnQoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lLCBpbnB1dHM6IGFueSk6IE5nRWxlbWVudCB7XG4gICAgaWYodGhpcy5tYW5hZ2VyLmVsZW1lbnRFeGlzdHMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVFbGVtZW50SW5zdGFuY2UoZWxlbWVudCwgaW5wdXRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRFbGVtZW50XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tLWVsZW1lbnRzLXdyYXBcIilcbiAgICAgIC5hcHBlbmRDaGlsZCg8YW55PmVsZW1lbnQpXG4gIH1cblxuXG4gIHByaXZhdGUgYnVpbGRFbGVtZW50SW5zdGFuY2UoZWxlbWVudE5hbWU6IEN1c3RvbUVsZW1lbnROYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpIGFzIE5nRWxlbWVudCBcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlRWxlbWVudEluc3RhbmNlKGVsZW1lbnQsIGlucHV0cykge1xuICAgIGxldCBvbkNsb3NlZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2VkJywgb25DbG9zZWQpXG5cblxuICAgIGxldCBzZXRJbnB1dCA9ICh2YWx1ZSwgcHJvcCkgPT4ge1xuICAgICAgZWxlbWVudFtwcm9wXSAgPSB2YWx1ZVxuICAgIH1cbiAgICBfLmZvckVhY2goaW5wdXRzLCBzZXRJbnB1dClcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbn1cbiJdfQ==