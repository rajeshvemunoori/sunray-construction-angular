/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { FormItemFactory } from './form-item-factory.service';
import { FormGroupFactory } from './form-group-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-item-factory.service";
import * as i2 from "./form-group-factory.service";
/**
 * @record
 */
function iFormMemberFactory() { }
var FormMemberFactory = /** @class */ (function () {
    function FormMemberFactory(formItemFactory, formGroupFactory) {
        this.formItemFactory = formItemFactory;
        this.formGroupFactory = formGroupFactory;
        this.factories = [
            formItemFactory,
            formGroupFactory
        ];
        this.defaultMemberFactory = formItemFactory;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FormMemberFactory.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var factory = this.resolveMemberFactory(params);
        return factory.build(params);
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    FormMemberFactory.prototype.resolveMemberFactory = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var typeFactory = _.find(this.factories, { type: params.type });
        return (/** @type {?} */ (_.defaultTo(typeFactory, this.defaultMemberFactory)));
    };
    FormMemberFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormMemberFactory.ctorParameters = function () { return [
        { type: FormItemFactory },
        { type: FormGroupFactory }
    ]; };
    /** @nocollapse */ FormMemberFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(i0.inject(i1.FormItemFactory), i0.inject(i2.FormGroupFactory)); }, token: FormMemberFactory, providedIn: "root" });
    return FormMemberFactory;
}());
export { FormMemberFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.factories;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.defaultMemberFactory;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formItemFactory;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL3NlcnZpY2VzL2Zvcm0tbWVtYmVyLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVExQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQVEsNkJBQTZCLENBQUE7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU8sOEJBQThCLENBQUE7Ozs7Ozs7QUFFaEUsaUNBQXVGO0FBRXZGO0lBU0UsMkJBQ1UsZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixlQUFlO1lBQ2YsZ0JBQWdCO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFBO0lBQzdDLENBQUM7Ozs7O0lBRUQsaUNBQUs7Ozs7SUFBTCxVQUFNLE1BQWdDOztZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sZ0RBQW9COzs7OztJQUE1QixVQUNFLE1BQWdDOztZQUc1QixXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvRCxPQUFPLG1CQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBQSxDQUFBO0lBQ2hGLENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLGVBQWU7Z0JBQ2YsZ0JBQWdCOzs7NEJBWHpCO0NBZ0RDLEFBakNELElBaUNDO1NBOUJZLGlCQUFpQjs7Ozs7O0lBRzVCLHNDQUFvRTs7Ozs7SUFDcEUsaURBQTZFOzs7OztJQUczRSw0Q0FBd0M7Ozs7O0lBQ3hDLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgaUZhY3RvcnksXG4gIGlGb3JtTWVtYmVyLFxuICBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1JdGVtRmFjdG9yeSB9ICAgZnJvbSAnLi9mb3JtLWl0ZW0tZmFjdG9yeS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRm9ybUdyb3VwRmFjdG9yeSB9ICBmcm9tICcuL2Zvcm0tZ3JvdXAtZmFjdG9yeS5zZXJ2aWNlJ1xuXG5pbnRlcmZhY2UgaUZvcm1NZW1iZXJGYWN0b3J5IGV4dGVuZHMgaUZhY3Rvcnk8aUZvcm1NZW1iZXIsIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4ge31cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1lbWJlckZhY3RvcnlcbiAgaW1wbGVtZW50cyBpRmFjdG9yeTxpRm9ybU1lbWJlciwgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPiB7XG5cbiAgcHJpdmF0ZSBmYWN0b3JpZXM6IGlGYWN0b3J5PGlGb3JtTWVtYmVyLCBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+W11cbiAgcHJpdmF0ZSBkZWZhdWx0TWVtYmVyRmFjdG9yeTogaUZhY3Rvcnk8aUZvcm1NZW1iZXIsIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1JdGVtRmFjdG9yeTogRm9ybUl0ZW1GYWN0b3J5LFxuICAgIHByaXZhdGUgZm9ybUdyb3VwRmFjdG9yeTogRm9ybUdyb3VwRmFjdG9yeSxcbiAgKSB7XG4gICAgdGhpcy5mYWN0b3JpZXMgPSBbXG4gICAgICBmb3JtSXRlbUZhY3RvcnksXG4gICAgICBmb3JtR3JvdXBGYWN0b3J5XG4gICAgXVxuICAgIHRoaXMuZGVmYXVsdE1lbWJlckZhY3RvcnkgPSBmb3JtSXRlbUZhY3RvcnlcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtczogaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zKTogaUZvcm1NZW1iZXIge1xuICAgIGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlTWVtYmVyRmFjdG9yeShwYXJhbXMpXG4gICAgcmV0dXJuIGZhY3RvcnkuYnVpbGQocGFyYW1zKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTWVtYmVyRmFjdG9yeShcbiAgICBwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtc1xuICApOiBpRmFjdG9yeTxpRm9ybU1lbWJlciwgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPiB7XG5cbiAgICBsZXQgdHlwZUZhY3RvcnkgPSBfLmZpbmQodGhpcy5mYWN0b3JpZXMsIHsgdHlwZTogcGFyYW1zLnR5cGUgfSlcblxuICAgIHJldHVybiA8aUZvcm1NZW1iZXJGYWN0b3J5Pl8uZGVmYXVsdFRvKHR5cGVGYWN0b3J5LCB0aGlzLmRlZmF1bHRNZW1iZXJGYWN0b3J5KVxuICB9XG59XG4iXX0=