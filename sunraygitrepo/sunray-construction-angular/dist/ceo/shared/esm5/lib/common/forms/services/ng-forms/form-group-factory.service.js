/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { FormGroup as NgFormGroup, } from '@angular/forms';
import { FormControlFactory } from './form-control-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-control-factory.service";
var FormGroupFactory = /** @class */ (function () {
    function FormGroupFactory(formControlFactory) {
        this.formControlFactory = formControlFactory;
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    FormGroupFactory.prototype.build = /**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        return this.buildNgFormGroup(formGroup);
    };
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    FormGroupFactory.prototype.buildNgFormGroup = /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        /** @type {?} */
        var ngControls = this.buildNgControls(formGroup.members);
        return new NgFormGroup(ngControls);
    };
    /**
     * @private
     * @param {?} members
     * @return {?}
     */
    FormGroupFactory.prototype.buildNgControls = /**
     * @private
     * @param {?} members
     * @return {?}
     */
    function (members) {
        var _this = this;
        /** @type {?} */
        var getNgControl = function (member) {
            return _this.getNgControl(member);
        };
        return _.mapValues(members, getNgControl);
    };
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    FormGroupFactory.prototype.getNgControl = /**
     * @private
     * @param {?} member
     * @return {?}
     */
    function (member) {
        if (!member.ngControl) {
            /** @type {?} */
            var control = this.buildNgControl(member);
            member.ngControl = control;
        }
        return member.ngControl;
    };
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    FormGroupFactory.prototype.buildNgControl = /**
     * @private
     * @param {?} member
     * @return {?}
     */
    function (member) {
        /** @type {?} */
        var factory = (/** @type {?} */ (this.resolveControlFactory(member)));
        /** @type {?} */
        var ngControl = factory.build(member);
        return ngControl;
    };
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    FormGroupFactory.prototype.resolveControlFactory = /**
     * @private
     * @param {?} member
     * @return {?}
     */
    function (member) {
        switch (member.type) {
            case "form-item": {
                return this.formControlFactory;
            }
            case "form-group": {
                return this;
            }
            default: {
                return this.formControlFactory;
            }
        }
    };
    FormGroupFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormGroupFactory.ctorParameters = function () { return [
        { type: FormControlFactory }
    ]; };
    /** @nocollapse */ FormGroupFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(i0.inject(i1.FormControlFactory)); }, token: FormGroupFactory, providedIn: "root" });
    return FormGroupFactory;
}());
export { FormGroupFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormGroupFactory.prototype.formControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvbmctZm9ybXMvZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLFNBQVMsSUFBSSxXQUFXLEdBRXpCLE1BQU0sZ0JBQWdCLENBQUE7QUFZdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7OztBQUVuRTtJQUlFLDBCQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzdDLENBQUM7Ozs7O0lBRUosZ0NBQUs7Ozs7SUFBTCxVQUFNLFNBQXFCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7OztJQUVPLDJDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsU0FBcUI7O1lBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7Ozs7SUFFTywwQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBMEI7UUFBbEQsaUJBTUM7O1lBTEssWUFBWSxHQUFHLFVBQUMsTUFBbUI7WUFDckMsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2xDLENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7OztJQUVPLHVDQUFZOzs7OztJQUFwQixVQUFxQixNQUFtQjtRQUN0QyxJQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2hCLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtTQUMzQjtRQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDOzs7Ozs7SUFFTyx5Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBbUI7O1lBQ3BDLE9BQU8sR0FBRyxtQkFBc0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFBOztZQUNsRSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckMsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8sZ0RBQXFCOzs7OztJQUE3QixVQUE4QixNQUFtQjtRQUMvQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7YUFDL0I7WUFDRCxLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksQ0FBQTthQUNaO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7YUFDL0I7U0FDRjtJQUNILENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLGtCQUFrQjs7OzJCQW5CM0I7Q0EwRUMsQUFyREQsSUFxREM7U0FsRFksZ0JBQWdCOzs7Ozs7SUFFekIsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBGb3JtR3JvdXAgYXMgTmdGb3JtR3JvdXAsXG4gIEFic3RyYWN0Q29udHJvbCBhcyBOZ0Fic3RyYWN0Q29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIGlNYXAsXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUZvcm1Hcm91cCxcbiAgaUZvcm1NZW1iZXIsXG4gIGlOZ0Zvcm1NZW1iZXJGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbEZhY3RvcnkgfSBmcm9tICcuL2Zvcm0tY29udHJvbC1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Db250cm9sRmFjdG9yeTogRm9ybUNvbnRyb2xGYWN0b3J5XG4gICkge31cblxuICBidWlsZChmb3JtR3JvdXA6IGlGb3JtR3JvdXApOiBOZ0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGROZ0Zvcm1Hcm91cChmb3JtR3JvdXApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTmdGb3JtR3JvdXAoZm9ybUdyb3VwOiBpRm9ybUdyb3VwKTogTmdGb3JtR3JvdXAge1xuICAgIGxldCBuZ0NvbnRyb2xzID0gdGhpcy5idWlsZE5nQ29udHJvbHMoZm9ybUdyb3VwLm1lbWJlcnMpXG4gICAgcmV0dXJuIG5ldyBOZ0Zvcm1Hcm91cChuZ0NvbnRyb2xzKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5nQ29udHJvbHMobWVtYmVyczogaU1hcDxpRm9ybU1lbWJlcj4pOiBpTWFwPE5nQWJzdHJhY3RDb250cm9sPiB7XG4gICAgbGV0IGdldE5nQ29udHJvbCA9IChtZW1iZXI6IGlGb3JtTWVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXROZ0NvbnRyb2wobWVtYmVyKVxuICAgIH1cblxuICAgIHJldHVybiBfLm1hcFZhbHVlcyhtZW1iZXJzLCBnZXROZ0NvbnRyb2wpXG4gIH1cblxuICBwcml2YXRlIGdldE5nQ29udHJvbChtZW1iZXI6IGlGb3JtTWVtYmVyKTogTmdBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmKCFtZW1iZXIubmdDb250cm9sKSB7XG4gICAgICBsZXQgY29udHJvbCA9IHRoaXMuYnVpbGROZ0NvbnRyb2wobWVtYmVyKVxuICAgICAgbWVtYmVyLm5nQ29udHJvbCA9IGNvbnRyb2xcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtYmVyLm5nQ29udHJvbFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5nQ29udHJvbChtZW1iZXI6IGlGb3JtTWVtYmVyKTogTmdBYnN0cmFjdENvbnRyb2wge1xuICAgIGxldCBmYWN0b3J5ID0gPGlOZ0Zvcm1NZW1iZXJGYWN0b3J5PnRoaXMucmVzb2x2ZUNvbnRyb2xGYWN0b3J5KG1lbWJlcilcbiAgICBsZXQgbmdDb250cm9sID0gZmFjdG9yeS5idWlsZChtZW1iZXIpXG4gICAgcmV0dXJuIG5nQ29udHJvbFxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ29udHJvbEZhY3RvcnkobWVtYmVyOiBpRm9ybU1lbWJlcikge1xuICAgIHN3aXRjaChtZW1iZXIudHlwZSkge1xuICAgICAgY2FzZSBcImZvcm0taXRlbVwiOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sRmFjdG9yeVxuICAgICAgfVxuICAgICAgY2FzZSBcImZvcm0tZ3JvdXBcIjoge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbEZhY3RvcnlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==