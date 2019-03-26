/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { map, mergeMap, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FormMemberFactory, FormFactory as BaseFormFactory, } from '@ceo/shared';
import { FormMemberFactoryParamsService, } from './form-fields/index';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/shared";
import * as i2 from "./form-fields/form-member-factory-params.service";
export class FormFactory {
    /**
     * @param {?} formMemberFactory
     * @param {?} formMemberFactoryParamsService
     * @param {?} formFactory
     */
    constructor(formMemberFactory, formMemberFactoryParamsService, formFactory) {
        this.formMemberFactory = formMemberFactory;
        this.formMemberFactoryParamsService = formMemberFactoryParamsService;
        this.formFactory = formFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    build$(resourceConfiguration, form) {
        return this.buildFormGroup$(resourceConfiguration, form, null);
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    buildFormGroup$(resourceConfiguration, form, resourceType) {
        return (/** @type {?} */ (form.formFields$.pipe(mergeMap(formFields => {
            return this.buildFormMembersParams$(resourceConfiguration, formFields);
        }), map((params) => {
            return this.buildFormMembers(params);
        }), map((formMembers) => {
            return this.buildForm(formMembers, resourceType);
        }))));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    buildFormMembersParams$(resourceConfiguration, formFields) {
        /** @type {?} */
        let buildFormMemberParams$ = _.partial(_.bind(this.buildFormMemberParams$, this), resourceConfiguration);
        /** @type {?} */
        let formMemberParams$ = _.map(formFields.entities, buildFormMemberParams$);
        return combineLatest(...formMemberParams$).pipe(map(formMembersParams => {
            /** @type {?} */
            let mergedParams = _.merge({}, ...formMembersParams);
            return (/** @type {?} */ (mergedParams));
        }));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    buildFormMemberParams$(resourceConfiguration, formFieldEntity) {
        return this.formMemberFactoryParamsService.provide$(resourceConfiguration, formFieldEntity).pipe(map((params) => {
            /** @type {?} */
            let pair = [formFieldEntity.inputName, params];
            return (/** @type {?} */ (_.fromPairs([pair])));
        }));
    }
    /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    buildFormMembers(paramsSet) {
        /** @type {?} */
        let buildFormMember = (params) => {
            return this.formMemberFactory.build(params);
        };
        /** @type {?} */
        let formMembers = _.mapValues(paramsSet, buildFormMember);
        return formMembers;
    }
    /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    buildForm(formMembers, resourceType) {
        /** @type {?} */
        var formParams;
        if (resourceType) {
            /** @type {?} */
            let pair = [resourceType, formMembers];
            formParams = _.fromPairs([pair]);
        }
        else {
            formParams = formMembers;
        }
        return this.formFactory.build(formParams);
    }
}
FormFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormFactory.ctorParameters = () => [
    { type: FormMemberFactory },
    { type: FormMemberFactoryParamsService },
    { type: BaseFormFactory }
];
/** @nocollapse */ FormFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(i0.inject(i1.FormMemberFactory), i0.inject(i2.FormMemberFactoryParamsService), i0.inject(i1.FormFactory)); }, token: FormFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9mb3JtLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUdBLGFBQWEsR0FFbkIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBRUwsR0FBRyxFQUFFLFFBQVEsR0FHZCxNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQU1MLGlCQUFpQixFQUNqQixXQUFXLElBQUksZUFBZSxHQUMvQixNQUFNLGFBQWEsQ0FBQTtBQVdwQixPQUFPLEVBQ0wsOEJBQThCLEdBQy9CLE1BQU0scUJBQXFCLENBQUE7Ozs7QUFLNUIsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUN0QixZQUNVLGlCQUFvQyxFQUNwQyw4QkFBOEQsRUFDOUQsV0FBNEI7UUFGNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlELGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUNuQyxDQUFDOzs7Ozs7SUFFSixNQUFNLENBQ0oscUJBQThCLEVBQzlCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEUsQ0FBQzs7Ozs7OztJQUVELGVBQWUsQ0FDYixxQkFBOEIsRUFDOUIsSUFBaUIsRUFDakIsWUFBWTtRQUdaLE9BQU8sbUJBQXNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNoRCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQ2pDLHFCQUFxQixFQUNyQixVQUFVLENBQ1gsQ0FBQTtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLE1BQXNDLEVBQUUsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxXQUE4QixFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FDSCxFQUFBLENBQUE7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sdUJBQXVCLENBQzdCLHFCQUE4QixFQUM5QixVQUE2Qjs7WUFHekIsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLEVBQ3pDLHFCQUFxQixDQUN0Qjs7WUFFRyxpQkFBaUIsR0FDbkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLHNCQUFzQixDQUFDO1FBRXBELE9BQU8sYUFBYSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFOztnQkFDbEIsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLENBQUM7WUFDcEQsT0FBTyxtQkFBQSxZQUFZLEVBQWtDLENBQUE7UUFDdkQsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FDNUIscUJBQXFCLEVBQ3JCLGVBQWU7UUFFZixPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQ2pELHFCQUFxQixFQUNyQixlQUFlLENBQ2hCLENBQUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRTs7Z0JBQ25DLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1lBQzlDLE9BQU8sbUJBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQWtDLENBQUE7UUFDOUQsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUN0QixTQUF5Qzs7WUFHckMsZUFBZSxHQUFHLENBQUMsTUFBZ0MsRUFBRSxFQUFFO1lBQ3pELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3QyxDQUFDOztZQUNHLFdBQVcsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDekQsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FDZixXQUE4QixFQUM5QixZQUFvQjs7WUFHaEIsVUFBVTtRQUNkLElBQUcsWUFBWSxFQUFFOztnQkFDWCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO1lBQ3RDLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUNqQzthQUNJO1lBQ0gsVUFBVSxHQUFHLFdBQVcsQ0FBQTtTQUN6QjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7O1lBckdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQW5CQyxpQkFBaUI7WUFjakIsOEJBQThCO1lBYmYsZUFBZTs7Ozs7Ozs7SUFxQjVCLHdDQUE0Qzs7Ozs7SUFDNUMscURBQXNFOzs7OztJQUN0RSxrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICB6aXAsIGNvbWJpbmVMYXRlc3QsXG4gIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgZmlyc3QsIHRhcCwgdGFrZSxcbiAgbWFwLCBtZXJnZU1hcCwgc2tpcFdoaWxlLFxuICBzdGFydFdpdGgsIGZpbHRlcixcbiAgc2hhcmUsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgaUZvcm1Hcm91cCxcbiAgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zLFxuICBpRm9ybU1lbWJlcixcbiAgaU1hcCxcbiAgRm9ybUdyb3VwLFxuICBGb3JtTWVtYmVyRmFjdG9yeSxcbiAgRm9ybUZhY3RvcnkgYXMgQmFzZUZvcm1GYWN0b3J5LFxufSBmcm9tICdAY2VvL3NoYXJlZCdcblxuaW1wb3J0IHtcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uLy4uL2VudGl0eS9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUZvcm1FbnRpdHksXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zU2VydmljZSxcbn0gZnJvbSAnLi9mb3JtLWZpZWxkcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1NZW1iZXJGYWN0b3J5OiBGb3JtTWVtYmVyRmFjdG9yeSxcbiAgICBwcml2YXRlIGZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zU2VydmljZTogRm9ybU1lbWJlckZhY3RvcnlQYXJhbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUZhY3Rvcnk6IEJhc2VGb3JtRmFjdG9yeSxcbiAgKSB7fVxuXG4gIGJ1aWxkJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb246IGlFbnRpdHksXG4gICAgZm9ybTogaUZvcm1FbnRpdHksXG4gICk6IEJlaGF2aW9yU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5idWlsZEZvcm1Hcm91cCQocmVzb3VyY2VDb25maWd1cmF0aW9uLCBmb3JtLCBudWxsKVxuICB9XG5cbiAgYnVpbGRGb3JtR3JvdXAkKFxuICAgIHJlc291cmNlQ29uZmlndXJhdGlvbjogaUVudGl0eSxcbiAgICBmb3JtOiBpRm9ybUVudGl0eSxcbiAgICByZXNvdXJjZVR5cGUsXG4gICk6IEJlaGF2aW9yU3ViamVjdDxhbnk+IHtcblxuICAgIHJldHVybiA8QmVoYXZpb3JTdWJqZWN0PGFueT4+Zm9ybS5mb3JtRmllbGRzJC5waXBlKFxuICAgICAgbWVyZ2VNYXAoZm9ybUZpZWxkcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRm9ybU1lbWJlcnNQYXJhbXMkKFxuICAgICAgICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICAgICAgICBmb3JtRmllbGRzLFxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zOiBpTWFwPGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRGb3JtTWVtYmVycyhwYXJhbXMpXG4gICAgICB9KSxcbiAgICAgIG1hcCgoZm9ybU1lbWJlcnM6IGlNYXA8aUZvcm1NZW1iZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRm9ybShmb3JtTWVtYmVycywgcmVzb3VyY2VUeXBlKVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1NZW1iZXJzUGFyYW1zJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb246IGlFbnRpdHksXG4gICAgZm9ybUZpZWxkczogaUVudGl0eUNvbGxlY3Rpb24sXG4gICk6IE9ic2VydmFibGU8aU1hcDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+PiB7XG5cbiAgICBsZXQgYnVpbGRGb3JtTWVtYmVyUGFyYW1zJCA9IF8ucGFydGlhbChcbiAgICAgIF8uYmluZCh0aGlzLmJ1aWxkRm9ybU1lbWJlclBhcmFtcyQsIHRoaXMpLFxuICAgICAgcmVzb3VyY2VDb25maWd1cmF0aW9uXG4gICAgKVxuXG4gICAgbGV0IGZvcm1NZW1iZXJQYXJhbXMkID1cbiAgICAgIF8ubWFwKGZvcm1GaWVsZHMuZW50aXRpZXMsIGJ1aWxkRm9ybU1lbWJlclBhcmFtcyQpXG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCguLi5mb3JtTWVtYmVyUGFyYW1zJCkucGlwZShcbiAgICAgIG1hcChmb3JtTWVtYmVyc1BhcmFtcyA9PiB7XG4gICAgICAgIGxldCBtZXJnZWRQYXJhbXMgPSBfLm1lcmdlKHt9LCAuLi5mb3JtTWVtYmVyc1BhcmFtcylcbiAgICAgICAgcmV0dXJuIG1lcmdlZFBhcmFtcyBhcyBpTWFwPGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz5cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1NZW1iZXJQYXJhbXMkKFxuICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICBmb3JtRmllbGRFbnRpdHksXG4gICk6IE9ic2VydmFibGU8aU1hcDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybU1lbWJlckZhY3RvcnlQYXJhbXNTZXJ2aWNlLnByb3ZpZGUkKFxuICAgICAgcmVzb3VyY2VDb25maWd1cmF0aW9uLFxuICAgICAgZm9ybUZpZWxkRW50aXR5LFxuICAgICkucGlwZShcbiAgICAgIG1hcCgocGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBbZm9ybUZpZWxkRW50aXR5LmlucHV0TmFtZSwgcGFyYW1zXVxuICAgICAgICByZXR1cm4gXy5mcm9tUGFpcnMoW3BhaXJdKSBhcyBpTWFwPGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz5cbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtTWVtYmVycyhcbiAgICBwYXJhbXNTZXQ6IGlNYXA8aUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPixcbiAgKTogaU1hcDxpRm9ybU1lbWJlcj4ge1xuXG4gICAgbGV0IGJ1aWxkRm9ybU1lbWJlciA9IChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybU1lbWJlckZhY3RvcnkuYnVpbGQocGFyYW1zKVxuICAgIH1cbiAgICBsZXQgZm9ybU1lbWJlcnMgPSBfLm1hcFZhbHVlcyhwYXJhbXNTZXQsIGJ1aWxkRm9ybU1lbWJlcilcbiAgICByZXR1cm4gZm9ybU1lbWJlcnNcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKFxuICAgIGZvcm1NZW1iZXJzOiBpTWFwPGlGb3JtTWVtYmVyPixcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyxcbiAgKSB7XG5cbiAgICB2YXIgZm9ybVBhcmFtc1xuICAgIGlmKHJlc291cmNlVHlwZSkge1xuICAgICAgbGV0IHBhaXIgPSBbcmVzb3VyY2VUeXBlLCBmb3JtTWVtYmVyc11cbiAgICAgIGZvcm1QYXJhbXMgPSBfLmZyb21QYWlycyhbcGFpcl0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9ybVBhcmFtcyA9IGZvcm1NZW1iZXJzXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9ybUZhY3RvcnkuYnVpbGQoZm9ybVBhcmFtcylcbiAgfVxufVxuIl19