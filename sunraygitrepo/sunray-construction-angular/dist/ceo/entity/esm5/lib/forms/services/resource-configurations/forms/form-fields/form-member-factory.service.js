/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FormGroup, FormControlFactory, } from '@ceo/shared';
import { FormMemberDataFactory } from './form-member-data-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/shared";
import * as i2 from "./form-member-data-factory.service";
var FormMemberFactory = /** @class */ (function () {
    function FormMemberFactory(formControlFactory, formMemberDataFactory) {
        this.formControlFactory = formControlFactory;
        this.formMemberDataFactory = formMemberDataFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormMemberFactory.prototype.build$ = /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        var _this = this;
        /** @type {?} */
        var data$ = this.formMemberDataFactory.provide$(resourceConfiguration, formFieldEntity);
        return data$.pipe(map(function (data) { return _this.buildFormMember(data); }));
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    FormMemberFactory.prototype.buildFormMember = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        switch (data.memberType) {
            case "form-control": {
                return this.formControlFactory.build(data);
            }
            case "form-group": {
                return new FormGroup(data);
            }
            default: {
                return this.formControlFactory.build(data);
            }
        }
    };
    FormMemberFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormMemberFactory.ctorParameters = function () { return [
        { type: FormControlFactory },
        { type: FormMemberDataFactory }
    ]; };
    /** @nocollapse */ FormMemberFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(i0.inject(i1.FormControlFactory), i0.inject(i2.FormMemberDataFactory)); }, token: FormMemberFactory, providedIn: "root" });
    return FormMemberFactory;
}());
export { FormMemberFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formControlFactory;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formMemberDataFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZm9ybS1maWVsZHMvZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQTtBQVFwQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTs7OztBQUUxRTtJQUlFLDJCQUNVLGtCQUFzQyxFQUN0QyxxQkFBNEM7UUFENUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ25ELENBQUM7Ozs7OztJQUVKLGtDQUFNOzs7OztJQUFOLFVBQ0UscUJBQXFCLEVBQ3JCLGVBQWU7UUFGakIsaUJBWUM7O1lBUkssS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQzdDLHFCQUFxQixFQUNyQixlQUFlLENBQ2hCO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FDeEMsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLDJDQUFlOzs7OztJQUF2QixVQUF3QixJQUFJO1FBQzFCLFFBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QixLQUFLLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDM0M7WUFDRCxLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNDO1NBQ0Y7SUFDSCxDQUFDOztnQkFuQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiQyxrQkFBa0I7Z0JBU1gscUJBQXFCOzs7NEJBckI5QjtDQTJEQyxBQXBDRCxJQW9DQztTQWpDWSxpQkFBaUI7Ozs7OztJQUUxQiwrQ0FBOEM7Ozs7O0lBQzlDLGtEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbiAgRm9ybUNvbnRyb2xGYWN0b3J5LFxufSBmcm9tICdAY2VvL3NoYXJlZCdcblxuaW1wb3J0IHtcbiAgRW50aXR5RGF0YSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZW50aXR5L2luZGV4J1xuXG5pbXBvcnQgeyBSZWxhdGlvbnNoaXBzUHJvdmlkZXIgfSBmcm9tICcuLi9yZWxhdGlvbnNoaXBzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtTWVtYmVyRGF0YUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0tbWVtYmVyLWRhdGEtZmFjdG9yeS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtTWVtYmVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUNvbnRyb2xGYWN0b3J5OiBGb3JtQ29udHJvbEZhY3RvcnksXG4gICAgcHJpdmF0ZSBmb3JtTWVtYmVyRGF0YUZhY3Rvcnk6IEZvcm1NZW1iZXJEYXRhRmFjdG9yeSxcbiAgKSB7fVxuXG4gIGJ1aWxkJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgZm9ybUZpZWxkRW50aXR5LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBkYXRhJCA9IHRoaXMuZm9ybU1lbWJlckRhdGFGYWN0b3J5LnByb3ZpZGUkKFxuICAgICAgcmVzb3VyY2VDb25maWd1cmF0aW9uLFxuICAgICAgZm9ybUZpZWxkRW50aXR5LFxuICAgIClcblxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4gdGhpcy5idWlsZEZvcm1NZW1iZXIoZGF0YSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtTWVtYmVyKGRhdGEpIHtcbiAgICBzd2l0Y2goZGF0YS5tZW1iZXJUeXBlKSB7XG4gICAgICBjYXNlIFwiZm9ybS1jb250cm9sXCI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xGYWN0b3J5LmJ1aWxkKGRhdGEpXG4gICAgICB9XG4gICAgICBjYXNlIFwiZm9ybS1ncm91cFwiOiB7XG4gICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGRhdGEpXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sRmFjdG9yeS5idWlsZChkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19