/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { map, mergeMap, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FormMemberFactory, FormFactory as BaseFormFactory, } from '@ceo/shared';
import { FormMemberFactoryParamsService, } from './form-fields/index';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/shared";
import * as i2 from "./form-fields/form-member-factory-params.service";
var FormFactory = /** @class */ (function () {
    function FormFactory(formMemberFactory, formMemberFactoryParamsService, formFactory) {
        this.formMemberFactory = formMemberFactory;
        this.formMemberFactoryParamsService = formMemberFactoryParamsService;
        this.formFactory = formFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    FormFactory.prototype.build$ = /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    function (resourceConfiguration, form) {
        return this.buildFormGroup$(resourceConfiguration, form, null);
    };
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    FormFactory.prototype.buildFormGroup$ = /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    function (resourceConfiguration, form, resourceType) {
        var _this = this;
        return (/** @type {?} */ (form.formFields$.pipe(mergeMap(function (formFields) {
            return _this.buildFormMembersParams$(resourceConfiguration, formFields);
        }), map(function (params) {
            return _this.buildFormMembers(params);
        }), map(function (formMembers) {
            return _this.buildForm(formMembers, resourceType);
        }))));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    FormFactory.prototype.buildFormMembersParams$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    function (resourceConfiguration, formFields) {
        /** @type {?} */
        var buildFormMemberParams$ = _.partial(_.bind(this.buildFormMemberParams$, this), resourceConfiguration);
        /** @type {?} */
        var formMemberParams$ = _.map(formFields.entities, buildFormMemberParams$);
        return combineLatest.apply(void 0, tslib_1.__spread(formMemberParams$)).pipe(map(function (formMembersParams) {
            /** @type {?} */
            var mergedParams = _.merge.apply(_, tslib_1.__spread([{}], formMembersParams));
            return (/** @type {?} */ (mergedParams));
        }));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormFactory.prototype.buildFormMemberParams$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        return this.formMemberFactoryParamsService.provide$(resourceConfiguration, formFieldEntity).pipe(map(function (params) {
            /** @type {?} */
            var pair = [formFieldEntity.inputName, params];
            return (/** @type {?} */ (_.fromPairs([pair])));
        }));
    };
    /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    FormFactory.prototype.buildFormMembers = /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    function (paramsSet) {
        var _this = this;
        /** @type {?} */
        var buildFormMember = function (params) {
            return _this.formMemberFactory.build(params);
        };
        /** @type {?} */
        var formMembers = _.mapValues(paramsSet, buildFormMember);
        return formMembers;
    };
    /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    FormFactory.prototype.buildForm = /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    function (formMembers, resourceType) {
        /** @type {?} */
        var formParams;
        if (resourceType) {
            /** @type {?} */
            var pair = [resourceType, formMembers];
            formParams = _.fromPairs([pair]);
        }
        else {
            formParams = formMembers;
        }
        return this.formFactory.build(formParams);
    };
    FormFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormFactory.ctorParameters = function () { return [
        { type: FormMemberFactory },
        { type: FormMemberFactoryParamsService },
        { type: BaseFormFactory }
    ]; };
    /** @nocollapse */ FormFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(i0.inject(i1.FormMemberFactory), i0.inject(i2.FormMemberFactoryParamsService), i0.inject(i1.FormFactory)); }, token: FormFactory, providedIn: "root" });
    return FormFactory;
}());
export { FormFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormFactory.prototype.formMemberFactory;
    /**
     * @type {?}
     * @private
     */
    FormFactory.prototype.formMemberFactoryParamsService;
    /**
     * @type {?}
     * @private
     */
    FormFactory.prototype.formFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9mb3JtLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFHQSxhQUFhLEdBRW5CLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUVMLEdBQUcsRUFBRSxRQUFRLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFNTCxpQkFBaUIsRUFDakIsV0FBVyxJQUFJLGVBQWUsR0FDL0IsTUFBTSxhQUFhLENBQUE7QUFXcEIsT0FBTyxFQUNMLDhCQUE4QixHQUMvQixNQUFNLHFCQUFxQixDQUFBOzs7O0FBRTVCO0lBSUUscUJBQ1UsaUJBQW9DLEVBQ3BDLDhCQUE4RCxFQUM5RCxXQUE0QjtRQUY1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUQsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7OztJQUVKLDRCQUFNOzs7OztJQUFOLFVBQ0UscUJBQThCLEVBQzlCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEUsQ0FBQzs7Ozs7OztJQUVELHFDQUFlOzs7Ozs7SUFBZixVQUNFLHFCQUE4QixFQUM5QixJQUFpQixFQUNqQixZQUFZO1FBSGQsaUJBb0JDO1FBZEMsT0FBTyxtQkFBc0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2hELFFBQVEsQ0FBQyxVQUFBLFVBQVU7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bmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgemlwLCBjb21iaW5lTGF0ZXN0LFxuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIGZpcnN0LCB0YXAsIHRha2UsXG4gIG1hcCwgbWVyZ2VNYXAsIHNraXBXaGlsZSxcbiAgc3RhcnRXaXRoLCBmaWx0ZXIsXG4gIHNoYXJlLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlGb3JtR3JvdXAsXG4gIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyxcbiAgaUZvcm1NZW1iZXIsXG4gIGlNYXAsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybU1lbWJlckZhY3RvcnksXG4gIEZvcm1GYWN0b3J5IGFzIEJhc2VGb3JtRmFjdG9yeSxcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyRmFjdG9yeVBhcmFtc1NlcnZpY2UsXG59IGZyb20gJy4vZm9ybS1maWVsZHMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtTWVtYmVyRmFjdG9yeTogRm9ybU1lbWJlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBmb3JtTWVtYmVyRmFjdG9yeVBhcmFtc1NlcnZpY2U6IEZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1GYWN0b3J5OiBCYXNlRm9ybUZhY3RvcnksXG4gICkge31cblxuICBidWlsZCQoXG4gICAgcmVzb3VyY2VDb25maWd1cmF0aW9uOiBpRW50aXR5LFxuICAgIGZvcm06IGlGb3JtRW50aXR5LFxuICApOiBCZWhhdmlvclN1YmplY3Q8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRGb3JtR3JvdXAkKHJlc291cmNlQ29uZmlndXJhdGlvbiwgZm9ybSwgbnVsbClcbiAgfVxuXG4gIGJ1aWxkRm9ybUdyb3VwJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb246IGlFbnRpdHksXG4gICAgZm9ybTogaUZvcm1FbnRpdHksXG4gICAgcmVzb3VyY2VUeXBlLFxuICApOiBCZWhhdmlvclN1YmplY3Q8YW55PiB7XG5cbiAgICByZXR1cm4gPEJlaGF2aW9yU3ViamVjdDxhbnk+PmZvcm0uZm9ybUZpZWxkcyQucGlwZShcbiAgICAgIG1lcmdlTWFwKGZvcm1GaWVsZHMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEZvcm1NZW1iZXJzUGFyYW1zJChcbiAgICAgICAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgZm9ybUZpZWxkcyxcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtczogaU1hcDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRm9ybU1lbWJlcnMocGFyYW1zKVxuICAgICAgfSksXG4gICAgICBtYXAoKGZvcm1NZW1iZXJzOiBpTWFwPGlGb3JtTWVtYmVyPikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEZvcm0oZm9ybU1lbWJlcnMsIHJlc291cmNlVHlwZSlcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtTWVtYmVyc1BhcmFtcyQoXG4gICAgcmVzb3VyY2VDb25maWd1cmF0aW9uOiBpRW50aXR5LFxuICAgIGZvcm1GaWVsZHM6IGlFbnRpdHlDb2xsZWN0aW9uLFxuICApOiBPYnNlcnZhYmxlPGlNYXA8aUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPj4ge1xuXG4gICAgbGV0IGJ1aWxkRm9ybU1lbWJlclBhcmFtcyQgPSBfLnBhcnRpYWwoXG4gICAgICBfLmJpbmQodGhpcy5idWlsZEZvcm1NZW1iZXJQYXJhbXMkLCB0aGlzKSxcbiAgICAgIHJlc291cmNlQ29uZmlndXJhdGlvblxuICAgIClcblxuICAgIGxldCBmb3JtTWVtYmVyUGFyYW1zJCA9XG4gICAgICBfLm1hcChmb3JtRmllbGRzLmVudGl0aWVzLCBidWlsZEZvcm1NZW1iZXJQYXJhbXMkKVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoLi4uZm9ybU1lbWJlclBhcmFtcyQpLnBpcGUoXG4gICAgICBtYXAoZm9ybU1lbWJlcnNQYXJhbXMgPT4ge1xuICAgICAgICBsZXQgbWVyZ2VkUGFyYW1zID0gXy5tZXJnZSh7fSwgLi4uZm9ybU1lbWJlcnNQYXJhbXMpXG4gICAgICAgIHJldHVybiBtZXJnZWRQYXJhbXMgYXMgaU1hcDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtTWVtYmVyUGFyYW1zJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgZm9ybUZpZWxkRW50aXR5LFxuICApOiBPYnNlcnZhYmxlPGlNYXA8aUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPj4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zU2VydmljZS5wcm92aWRlJChcbiAgICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICAgIGZvcm1GaWVsZEVudGl0eSxcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtczogaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gW2Zvcm1GaWVsZEVudGl0eS5pbnB1dE5hbWUsIHBhcmFtc11cbiAgICAgICAgcmV0dXJuIF8uZnJvbVBhaXJzKFtwYWlyXSkgYXMgaU1hcDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+XG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybU1lbWJlcnMoXG4gICAgcGFyYW1zU2V0OiBpTWFwPGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4sXG4gICk6IGlNYXA8aUZvcm1NZW1iZXI+IHtcblxuICAgIGxldCBidWlsZEZvcm1NZW1iZXIgPSAocGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1NZW1iZXJGYWN0b3J5LmJ1aWxkKHBhcmFtcylcbiAgICB9XG4gICAgbGV0IGZvcm1NZW1iZXJzID0gXy5tYXBWYWx1ZXMocGFyYW1zU2V0LCBidWlsZEZvcm1NZW1iZXIpXG4gICAgcmV0dXJuIGZvcm1NZW1iZXJzXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybShcbiAgICBmb3JtTWVtYmVyczogaU1hcDxpRm9ybU1lbWJlcj4sXG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcsXG4gICkge1xuXG4gICAgdmFyIGZvcm1QYXJhbXNcbiAgICBpZihyZXNvdXJjZVR5cGUpIHtcbiAgICAgIGxldCBwYWlyID0gW3Jlc291cmNlVHlwZSwgZm9ybU1lbWJlcnNdXG4gICAgICBmb3JtUGFyYW1zID0gXy5mcm9tUGFpcnMoW3BhaXJdKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcm1QYXJhbXMgPSBmb3JtTWVtYmVyc1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcm1GYWN0b3J5LmJ1aWxkKGZvcm1QYXJhbXMpXG4gIH1cbn1cbiJdfQ==