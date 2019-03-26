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
export class FormMemberFactory {
    /**
     * @param {?} formControlFactory
     * @param {?} formMemberDataFactory
     */
    constructor(formControlFactory, formMemberDataFactory) {
        this.formControlFactory = formControlFactory;
        this.formMemberDataFactory = formMemberDataFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    build$(resourceConfiguration, formFieldEntity) {
        /** @type {?} */
        let data$ = this.formMemberDataFactory.provide$(resourceConfiguration, formFieldEntity);
        return data$.pipe(map(data => this.buildFormMember(data)));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    buildFormMember(data) {
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
    }
}
FormMemberFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormMemberFactory.ctorParameters = () => [
    { type: FormControlFactory },
    { type: FormMemberDataFactory }
];
/** @nocollapse */ FormMemberFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(i0.inject(i1.FormControlFactory), i0.inject(i2.FormMemberDataFactory)); }, token: FormMemberFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZm9ybS1maWVsZHMvZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQTtBQVFwQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTs7OztBQUsxRSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUNVLGtCQUFzQyxFQUN0QyxxQkFBNEM7UUFENUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ25ELENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FDSixxQkFBcUIsRUFDckIsZUFBZTs7WUFFWCxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FDN0MscUJBQXFCLEVBQ3JCLGVBQWUsQ0FDaEI7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLElBQUk7UUFDMUIsUUFBTyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RCLEtBQUssY0FBYyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMzQztZQUNELEtBQUssWUFBWSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDM0I7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDM0M7U0FDRjtJQUNILENBQUM7OztZQW5DRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiQyxrQkFBa0I7WUFTWCxxQkFBcUI7Ozs7Ozs7O0lBTzFCLCtDQUE4Qzs7Ozs7SUFDOUMsa0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbEZhY3RvcnksXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7IFJlbGF0aW9uc2hpcHNQcm92aWRlciB9IGZyb20gJy4uL3JlbGF0aW9uc2hpcHMvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1NZW1iZXJEYXRhRmFjdG9yeSB9IGZyb20gJy4vZm9ybS1tZW1iZXItZGF0YS1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1NZW1iZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbEZhY3Rvcnk6IEZvcm1Db250cm9sRmFjdG9yeSxcbiAgICBwcml2YXRlIGZvcm1NZW1iZXJEYXRhRmFjdG9yeTogRm9ybU1lbWJlckRhdGFGYWN0b3J5LFxuICApIHt9XG5cbiAgYnVpbGQkKFxuICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICBmb3JtRmllbGRFbnRpdHksXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGRhdGEkID0gdGhpcy5mb3JtTWVtYmVyRGF0YUZhY3RvcnkucHJvdmlkZSQoXG4gICAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgICBmb3JtRmllbGRFbnRpdHksXG4gICAgKVxuXG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB0aGlzLmJ1aWxkRm9ybU1lbWJlcihkYXRhKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1NZW1iZXIoZGF0YSkge1xuICAgIHN3aXRjaChkYXRhLm1lbWJlclR5cGUpIHtcbiAgICAgIGNhc2UgXCJmb3JtLWNvbnRyb2xcIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbEZhY3RvcnkuYnVpbGQoZGF0YSlcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJmb3JtLWdyb3VwXCI6IHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoZGF0YSlcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xGYWN0b3J5LmJ1aWxkKGRhdGEpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=