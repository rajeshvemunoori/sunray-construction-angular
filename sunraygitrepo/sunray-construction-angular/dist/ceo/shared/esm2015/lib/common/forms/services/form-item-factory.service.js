/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormItem, LabelElement, } from '../classes/index';
import { FormControlFactory } from './form-control-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-control-factory.service";
export class FormItemFactory {
    /**
     * @param {?} formControlFactory
     */
    constructor(formControlFactory) {
        this.formControlFactory = formControlFactory;
        this.type = 'form-item';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let label = this.buildLabel(params);
        /** @type {?} */
        let control = this.buildControl(params);
        return this.buildItem(label, control);
    }
    /**
     * @private
     * @param {?} label
     * @param {?} control
     * @return {?}
     */
    buildItem(label, control) {
        /** @type {?} */
        let itemParams = {
            label: label,
            control: control
        };
        return new FormItem(itemParams);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildLabel(params) {
        /** @type {?} */
        let props = (/** @type {?} */ (params.data));
        return new LabelElement(props.label);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildControl(params) {
        /** @type {?} */
        let props = (/** @type {?} */ (params.data));
        return this.formControlFactory.build(props.control);
    }
}
FormItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormItemFactory.ctorParameters = () => [
    { type: FormControlFactory }
];
/** @nocollapse */ FormItemFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormItemFactory_Factory() { return new FormItemFactory(i0.inject(i1.FormControlFactory)); }, token: FormItemFactory, providedIn: "root" });
if (false) {
    /** @type {?} */
    FormItemFactory.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormItemFactory.prototype.formControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9mb3JtLWl0ZW0tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7OztBQUtuRSxNQUFNLE9BQU8sZUFBZTs7OztJQUsxQixZQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSGhELFNBQUksR0FBbUIsV0FBVyxDQUFBO0lBSTlCLENBQUM7Ozs7O0lBRUwsS0FBSyxDQUFDLE1BQWdDOztZQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7O1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsS0FBb0IsRUFBRSxPQUFxQjs7WUFDdkQsVUFBVSxHQUFHO1lBQ2YsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztTQUNqQjtRQUNELE9BQU8sSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBZ0M7O1lBQ3JDLEtBQUssR0FBRyxtQkFBZ0IsTUFBTSxDQUFDLElBQUksRUFBQTtRQUN2QyxPQUFPLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFnQzs7WUFDdkMsS0FBSyxHQUFHLG1CQUFnQixNQUFNLENBQUMsSUFBSSxFQUFBO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGtCQUFrQjs7Ozs7SUFRekIsK0JBQWtDOzs7OztJQUdoQyw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJUeXBlLFxuICBpRmFjdG9yeSxcbiAgaUZvcm1Db250cm9sLFxuICBpRm9ybUl0ZW0sXG4gIGlGb3JtSXRlbVByb3BzLFxuICBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMsXG4gIGlMYWJlbEVsZW1lbnQsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1JdGVtLFxuICBMYWJlbEVsZW1lbnQsXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1Db250cm9sRmFjdG9yeSB9IGZyb20gJy4vZm9ybS1jb250cm9sLWZhY3Rvcnkuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUl0ZW1GYWN0b3J5XG4gIGltcGxlbWVudHMgaUZhY3Rvcnk8aUZvcm1JdGVtLCBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+IHtcblxuICB0eXBlOiBGb3JtTWVtYmVyVHlwZSA9ICdmb3JtLWl0ZW0nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbEZhY3Rvcnk6IEZvcm1Db250cm9sRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlGb3JtSXRlbSB7XG4gICAgbGV0IGxhYmVsID0gdGhpcy5idWlsZExhYmVsKHBhcmFtcylcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuYnVpbGRDb250cm9sKHBhcmFtcylcbiAgICByZXR1cm4gdGhpcy5idWlsZEl0ZW0obGFiZWwsIGNvbnRyb2wpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkSXRlbShsYWJlbDogaUxhYmVsRWxlbWVudCwgY29udHJvbDogaUZvcm1Db250cm9sKTogaUZvcm1JdGVtIHtcbiAgICBsZXQgaXRlbVBhcmFtcyA9IHtcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGb3JtSXRlbShpdGVtUGFyYW1zKVxuICB9XG5cbiAgYnVpbGRMYWJlbChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlMYWJlbEVsZW1lbnQge1xuICAgIGxldCBwcm9wcyA9IDxpRm9ybUl0ZW1Qcm9wcz5wYXJhbXMuZGF0YVxuICAgIHJldHVybiBuZXcgTGFiZWxFbGVtZW50KHByb3BzLmxhYmVsKVxuICB9XG5cbiAgYnVpbGRDb250cm9sKHBhcmFtczogaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zKTogaUZvcm1Db250cm9sIHtcbiAgICBsZXQgcHJvcHMgPSA8aUZvcm1JdGVtUHJvcHM+cGFyYW1zLmRhdGFcbiAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbEZhY3RvcnkuYnVpbGQocHJvcHMuY29udHJvbClcbiAgfVxufVxuIl19