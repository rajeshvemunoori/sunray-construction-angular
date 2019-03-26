/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormItem, LabelElement, } from '../classes/index';
import { FormControlFactory } from './form-control-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-control-factory.service";
var FormItemFactory = /** @class */ (function () {
    function FormItemFactory(formControlFactory) {
        this.formControlFactory = formControlFactory;
        this.type = 'form-item';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FormItemFactory.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var label = this.buildLabel(params);
        /** @type {?} */
        var control = this.buildControl(params);
        return this.buildItem(label, control);
    };
    /**
     * @private
     * @param {?} label
     * @param {?} control
     * @return {?}
     */
    FormItemFactory.prototype.buildItem = /**
     * @private
     * @param {?} label
     * @param {?} control
     * @return {?}
     */
    function (label, control) {
        /** @type {?} */
        var itemParams = {
            label: label,
            control: control
        };
        return new FormItem(itemParams);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    FormItemFactory.prototype.buildLabel = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var props = (/** @type {?} */ (params.data));
        return new LabelElement(props.label);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    FormItemFactory.prototype.buildControl = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var props = (/** @type {?} */ (params.data));
        return this.formControlFactory.build(props.control);
    };
    FormItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormItemFactory.ctorParameters = function () { return [
        { type: FormControlFactory }
    ]; };
    /** @nocollapse */ FormItemFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormItemFactory_Factory() { return new FormItemFactory(i0.inject(i1.FormControlFactory)); }, token: FormItemFactory, providedIn: "root" });
    return FormItemFactory;
}());
export { FormItemFactory };
if (false) {
    /** @type {?} */
    FormItemFactory.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormItemFactory.prototype.formControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9mb3JtLWl0ZW0tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7OztBQUVuRTtJQVFFLHlCQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSGhELFNBQUksR0FBbUIsV0FBVyxDQUFBO0lBSTlCLENBQUM7Ozs7O0lBRUwsK0JBQUs7Ozs7SUFBTCxVQUFNLE1BQWdDOztZQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7O1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFTyxtQ0FBUzs7Ozs7O0lBQWpCLFVBQWtCLEtBQW9CLEVBQUUsT0FBcUI7O1lBQ3ZELFVBQVUsR0FBRztZQUNmLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE1BQWdDOztZQUNyQyxLQUFLLEdBQUcsbUJBQWdCLE1BQU0sQ0FBQyxJQUFJLEVBQUE7UUFDdkMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBWTs7OztJQUFaLFVBQWEsTUFBZ0M7O1lBQ3ZDLEtBQUssR0FBRyxtQkFBZ0IsTUFBTSxDQUFDLElBQUksRUFBQTtRQUN2QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JELENBQUM7O2dCQWxDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLGtCQUFrQjs7OzBCQWpCM0I7Q0FzREMsQUFuQ0QsSUFtQ0M7U0FoQ1ksZUFBZTs7O0lBRzFCLCtCQUFrQzs7Ozs7SUFHaEMsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyVHlwZSxcbiAgaUZhY3RvcnksXG4gIGlGb3JtQ29udHJvbCxcbiAgaUZvcm1JdGVtLFxuICBpRm9ybUl0ZW1Qcm9wcyxcbiAgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zLFxuICBpTGFiZWxFbGVtZW50LFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtSXRlbSxcbiAgTGFiZWxFbGVtZW50LFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbEZhY3RvcnkgfSBmcm9tICcuL2Zvcm0tY29udHJvbC1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1JdGVtRmFjdG9yeVxuICBpbXBsZW1lbnRzIGlGYWN0b3J5PGlGb3JtSXRlbSwgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPiB7XG5cbiAgdHlwZTogRm9ybU1lbWJlclR5cGUgPSAnZm9ybS1pdGVtJ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUNvbnRyb2xGYWN0b3J5OiBGb3JtQ29udHJvbEZhY3RvcnksXG4gICkgeyB9XG5cbiAgYnVpbGQocGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMpOiBpRm9ybUl0ZW0ge1xuICAgIGxldCBsYWJlbCA9IHRoaXMuYnVpbGRMYWJlbChwYXJhbXMpXG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmJ1aWxkQ29udHJvbChwYXJhbXMpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRJdGVtKGxhYmVsLCBjb250cm9sKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEl0ZW0obGFiZWw6IGlMYWJlbEVsZW1lbnQsIGNvbnRyb2w6IGlGb3JtQ29udHJvbCk6IGlGb3JtSXRlbSB7XG4gICAgbGV0IGl0ZW1QYXJhbXMgPSB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfVxuICAgIHJldHVybiBuZXcgRm9ybUl0ZW0oaXRlbVBhcmFtcylcbiAgfVxuXG4gIGJ1aWxkTGFiZWwocGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMpOiBpTGFiZWxFbGVtZW50IHtcbiAgICBsZXQgcHJvcHMgPSA8aUZvcm1JdGVtUHJvcHM+cGFyYW1zLmRhdGFcbiAgICByZXR1cm4gbmV3IExhYmVsRWxlbWVudChwcm9wcy5sYWJlbClcbiAgfVxuXG4gIGJ1aWxkQ29udHJvbChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlGb3JtQ29udHJvbCB7XG4gICAgbGV0IHByb3BzID0gPGlGb3JtSXRlbVByb3BzPnBhcmFtcy5kYXRhXG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xGYWN0b3J5LmJ1aWxkKHByb3BzLmNvbnRyb2wpXG4gIH1cbn1cbiJdfQ==