/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Validators as NgValidators, } from '@angular/forms';
import { DropdownFactory as SelectFactory } from './dropdown-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown-factory.service";
var FormControlDataFactory = /** @class */ (function () {
    function FormControlDataFactory(selectFactory) {
        this.selectFactory = selectFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            type: FormControlDataFactory.formMemberType,
            data: {
                label: this.labelParams(entity),
                control: this.controlParams(entity)
            }
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.labelParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            text: entity.displayName,
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.controlParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var params = {
            controlType: this.controlType(entity),
            placeholder: entity.displayName,
            key: entity.name,
            validators: this.buildEntityValidators(entity),
            displayName: entity.displayName,
        };
        /** @type {?} */
        var controlTypeParams = this.controlTypeData(entity, this.controlType(entity));
        return _.defaults(params, controlTypeParams);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.controlType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (entity.name.includes("_id")) {
            return (/** @type {?} */ ('select'));
        }
        if (entity.dataType == 'boolean') {
            return (/** @type {?} */ ('checkbox'));
        }
        return FormControlDataFactory.defaultControlType;
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} controlType
     * @return {?}
     */
    FormControlDataFactory.prototype.controlTypeData = /**
     * @private
     * @param {?} entity
     * @param {?} controlType
     * @return {?}
     */
    function (entity, controlType) {
        switch (controlType) {
            case "select": {
                return this.selectControlTypeData(entity);
            }
            case "input": {
                return this.inputControlTypeData(entity);
            }
            default: {
                return {};
            }
        }
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.selectControlTypeData = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            options: this.selectFactory.build(entity)
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.inputControlTypeData = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            required: true,
            inputType: this.inputType(entity),
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.inputType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var inputType = 'text';
        if (entity.name == 'email') {
            inputType = 'email';
        }
        if (entity.name == 'password') {
            inputType = 'password';
        }
        return (/** @type {?} */ (inputType));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.buildEntityValidators = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var validators = [NgValidators.required];
        if (entity.name == 'email') {
            validators.push(NgValidators.email);
        }
        return validators;
    };
    FormControlDataFactory.defaultControlType = 'input';
    FormControlDataFactory.formMemberType = 'form-item';
    FormControlDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormControlDataFactory.ctorParameters = function () { return [
        { type: SelectFactory }
    ]; };
    /** @nocollapse */ FormControlDataFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlDataFactory_Factory() { return new FormControlDataFactory(i0.inject(i1.DropdownFactory)); }, token: FormControlDataFactory, providedIn: "root" });
    return FormControlDataFactory;
}());
export { FormControlDataFactory };
if (false) {
    /** @type {?} */
    FormControlDataFactory.defaultControlType;
    /** @type {?} */
    FormControlDataFactory.formMemberType;
    /**
     * @type {?}
     * @private
     */
    FormControlDataFactory.prototype.selectFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZGF0YS1mYWN0b3JpZXMvZm9ybS1jb250cm9sLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVEzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxVQUFVLElBQUksWUFBWSxHQUMzQixNQUFNLGdCQUFnQixDQUFBO0FBY3ZCLE9BQU8sRUFBRSxlQUFlLElBQUksYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUE7OztBQUU3RTtJQU9FLGdDQUNVLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2xDLENBQUM7Ozs7O0lBRUwsc0NBQUs7Ozs7SUFBTCxVQUNFLE1BQWU7UUFHZixPQUFPO1lBQ0wsSUFBSSxFQUFFLHNCQUFzQixDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLDRDQUFXOzs7OztJQUFuQixVQUFvQixNQUFlO1FBQ2pDLE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLFdBQVc7U0FDekIsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLDhDQUFhOzs7OztJQUFyQixVQUFzQixNQUFlOztZQUMvQixNQUFNLEdBQUc7WUFDWCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDckMsV0FBVyxF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c2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBWYWxpZGF0b3JzIGFzIE5nVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xUeXBlLFxuICBGb3JtTWVtYmVyVHlwZSxcbiAgSW5wdXRUeXBlQXR0cmlidXRlLFxuICBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7IERyb3Bkb3duRmFjdG9yeSBhcyBTZWxlY3RGYWN0b3J5IH0gZnJvbSAnLi9kcm9wZG93bi1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sRGF0YUZhY3Rvcnkge1xuICBzdGF0aWMgZGVmYXVsdENvbnRyb2xUeXBlOiBGb3JtQ29udHJvbFR5cGUgPSAnaW5wdXQnXG4gIHN0YXRpYyBmb3JtTWVtYmVyVHlwZTogRm9ybU1lbWJlclR5cGUgPSAnZm9ybS1pdGVtJ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VsZWN0RmFjdG9yeTogU2VsZWN0RmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICk6IFBhcnRpYWw8aUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRm9ybUNvbnRyb2xEYXRhRmFjdG9yeS5mb3JtTWVtYmVyVHlwZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWxQYXJhbXMoZW50aXR5KSxcbiAgICAgICAgY29udHJvbDogdGhpcy5jb250cm9sUGFyYW1zKGVudGl0eSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxhYmVsUGFyYW1zKGVudGl0eTogaUVudGl0eSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBlbnRpdHkuZGlzcGxheU5hbWUsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb250cm9sUGFyYW1zKGVudGl0eTogaUVudGl0eSkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb250cm9sVHlwZTogdGhpcy5jb250cm9sVHlwZShlbnRpdHkpLFxuICAgICAgcGxhY2Vob2xkZXI6IGVudGl0eS5kaXNwbGF5TmFtZSxcbiAgICAgIGtleTogZW50aXR5Lm5hbWUsXG4gICAgICB2YWxpZGF0b3JzOiB0aGlzLmJ1aWxkRW50aXR5VmFsaWRhdG9ycyhlbnRpdHkpLFxuICAgICAgZGlzcGxheU5hbWU6IGVudGl0eS5kaXNwbGF5TmFtZSxcbiAgICB9XG5cbiAgICBsZXQgY29udHJvbFR5cGVQYXJhbXMgPVxuICAgICAgdGhpcy5jb250cm9sVHlwZURhdGEoZW50aXR5LCB0aGlzLmNvbnRyb2xUeXBlKGVudGl0eSkpXG5cbiAgICByZXR1cm4gXy5kZWZhdWx0cyhwYXJhbXMsIGNvbnRyb2xUeXBlUGFyYW1zKVxuICB9XG5cbiAgcHJpdmF0ZSBjb250cm9sVHlwZShlbnRpdHkpOiBGb3JtQ29udHJvbFR5cGUge1xuICAgIGlmKGVudGl0eS5uYW1lLmluY2x1ZGVzKFwiX2lkXCIpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdCcgYXMgRm9ybUNvbnRyb2xUeXBlXG4gICAgfVxuXG4gICAgaWYoZW50aXR5LmRhdGFUeXBlID09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuICdjaGVja2JveCcgYXMgRm9ybUNvbnRyb2xUeXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIEZvcm1Db250cm9sRGF0YUZhY3RvcnkuZGVmYXVsdENvbnRyb2xUeXBlXG4gIH1cblxuICBwcml2YXRlIGNvbnRyb2xUeXBlRGF0YShlbnRpdHk6IGlFbnRpdHksIGNvbnRyb2xUeXBlOiBGb3JtQ29udHJvbFR5cGUpIHtcbiAgICBzd2l0Y2goY29udHJvbFR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RDb250cm9sVHlwZURhdGEoZW50aXR5KVxuICAgICAgfVxuICAgICAgY2FzZSBcImlucHV0XCI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRDb250cm9sVHlwZURhdGEoZW50aXR5KVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdENvbnRyb2xUeXBlRGF0YShlbnRpdHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0aW9uczogdGhpcy5zZWxlY3RGYWN0b3J5LmJ1aWxkKGVudGl0eSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlucHV0Q29udHJvbFR5cGVEYXRhKGVudGl0eSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGlucHV0VHlwZTogdGhpcy5pbnB1dFR5cGUoZW50aXR5KSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlucHV0VHlwZShlbnRpdHk6IGlFbnRpdHkpOiBJbnB1dFR5cGVBdHRyaWJ1dGUge1xuICAgIHZhciBpbnB1dFR5cGUgPSAndGV4dCdcbiAgICBpZihlbnRpdHkubmFtZSA9PSAnZW1haWwnKSB7XG4gICAgICBpbnB1dFR5cGUgPSAnZW1haWwnXG4gICAgfVxuICAgIGlmKGVudGl0eS5uYW1lID09ICdwYXNzd29yZCcpIHtcbiAgICAgIGlucHV0VHlwZSA9ICdwYXNzd29yZCdcbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXRUeXBlIGFzIElucHV0VHlwZUF0dHJpYnV0ZVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eVZhbGlkYXRvcnMoZW50aXR5OiBpRW50aXR5KSB7XG4gICAgbGV0IHZhbGlkYXRvcnMgPSBbTmdWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXG4gICAgaWYoZW50aXR5Lm5hbWUgPT0gJ2VtYWlsJykge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKE5nVmFsaWRhdG9ycy5lbWFpbClcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRvcnNcbiAgfVxufVxuIl19