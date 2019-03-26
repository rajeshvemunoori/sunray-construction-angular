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
export class FormGroupFactory {
    /**
     * @param {?} formControlFactory
     */
    constructor(formControlFactory) {
        this.formControlFactory = formControlFactory;
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    build(formGroup) {
        return this.buildNgFormGroup(formGroup);
    }
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    buildNgFormGroup(formGroup) {
        /** @type {?} */
        let ngControls = this.buildNgControls(formGroup.members);
        return new NgFormGroup(ngControls);
    }
    /**
     * @private
     * @param {?} members
     * @return {?}
     */
    buildNgControls(members) {
        /** @type {?} */
        let getNgControl = (member) => {
            return this.getNgControl(member);
        };
        return _.mapValues(members, getNgControl);
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    getNgControl(member) {
        if (!member.ngControl) {
            /** @type {?} */
            let control = this.buildNgControl(member);
            member.ngControl = control;
        }
        return member.ngControl;
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    buildNgControl(member) {
        /** @type {?} */
        let factory = (/** @type {?} */ (this.resolveControlFactory(member)));
        /** @type {?} */
        let ngControl = factory.build(member);
        return ngControl;
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    resolveControlFactory(member) {
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
    }
}
FormGroupFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormGroupFactory.ctorParameters = () => [
    { type: FormControlFactory }
];
/** @nocollapse */ FormGroupFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(i0.inject(i1.FormControlFactory)); }, token: FormGroupFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormGroupFactory.prototype.formControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvbmctZm9ybXMvZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLFNBQVMsSUFBSSxXQUFXLEdBRXpCLE1BQU0sZ0JBQWdCLENBQUE7QUFZdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7OztBQUtuRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDN0MsQ0FBQzs7Ozs7SUFFSixLQUFLLENBQUMsU0FBcUI7UUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsU0FBcUI7O1lBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBMEI7O1lBQzVDLFlBQVksR0FBRyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQW1CO1FBQ3RDLElBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFOztnQkFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1NBQzNCO1FBRUQsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFtQjs7WUFDcEMsT0FBTyxHQUFHLG1CQUFzQixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUE7O1lBQ2xFLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUFtQjtRQUMvQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7YUFDL0I7WUFDRCxLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksQ0FBQTthQUNaO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7YUFDL0I7U0FDRjtJQUNILENBQUM7OztZQXBERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxrQkFBa0I7Ozs7Ozs7O0lBT3ZCLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRm9ybUdyb3VwIGFzIE5nRm9ybUdyb3VwLFxuICBBYnN0cmFjdENvbnRyb2wgYXMgTmdBYnN0cmFjdENvbnRyb2wsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBpTWFwLFxufSBmcm9tICcuLi8uLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtR3JvdXAsXG4gIGlGb3JtTWVtYmVyLFxuICBpTmdGb3JtTWVtYmVyRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLWNvbnRyb2wtZmFjdG9yeS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbEZhY3Rvcnk6IEZvcm1Db250cm9sRmFjdG9yeVxuICApIHt9XG5cbiAgYnVpbGQoZm9ybUdyb3VwOiBpRm9ybUdyb3VwKTogTmdGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkTmdGb3JtR3JvdXAoZm9ybUdyb3VwKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5nRm9ybUdyb3VwKGZvcm1Hcm91cDogaUZvcm1Hcm91cCk6IE5nRm9ybUdyb3VwIHtcbiAgICBsZXQgbmdDb250cm9scyA9IHRoaXMuYnVpbGROZ0NvbnRyb2xzKGZvcm1Hcm91cC5tZW1iZXJzKVxuICAgIHJldHVybiBuZXcgTmdGb3JtR3JvdXAobmdDb250cm9scylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROZ0NvbnRyb2xzKG1lbWJlcnM6IGlNYXA8aUZvcm1NZW1iZXI+KTogaU1hcDxOZ0Fic3RyYWN0Q29udHJvbD4ge1xuICAgIGxldCBnZXROZ0NvbnRyb2wgPSAobWVtYmVyOiBpRm9ybU1lbWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmdDb250cm9sKG1lbWJlcilcbiAgICB9XG5cbiAgICByZXR1cm4gXy5tYXBWYWx1ZXMobWVtYmVycywgZ2V0TmdDb250cm9sKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZ0NvbnRyb2wobWVtYmVyOiBpRm9ybU1lbWJlcik6IE5nQWJzdHJhY3RDb250cm9sIHtcbiAgICBpZighbWVtYmVyLm5nQ29udHJvbCkge1xuICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmJ1aWxkTmdDb250cm9sKG1lbWJlcilcbiAgICAgIG1lbWJlci5uZ0NvbnRyb2wgPSBjb250cm9sXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbWJlci5uZ0NvbnRyb2xcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROZ0NvbnRyb2wobWVtYmVyOiBpRm9ybU1lbWJlcik6IE5nQWJzdHJhY3RDb250cm9sIHtcbiAgICBsZXQgZmFjdG9yeSA9IDxpTmdGb3JtTWVtYmVyRmFjdG9yeT50aGlzLnJlc29sdmVDb250cm9sRmFjdG9yeShtZW1iZXIpXG4gICAgbGV0IG5nQ29udHJvbCA9IGZhY3RvcnkuYnVpbGQobWVtYmVyKVxuICAgIHJldHVybiBuZ0NvbnRyb2xcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbnRyb2xGYWN0b3J5KG1lbWJlcjogaUZvcm1NZW1iZXIpIHtcbiAgICBzd2l0Y2gobWVtYmVyLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJmb3JtLWl0ZW1cIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbEZhY3RvcnlcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJmb3JtLWdyb3VwXCI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xGYWN0b3J5XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=