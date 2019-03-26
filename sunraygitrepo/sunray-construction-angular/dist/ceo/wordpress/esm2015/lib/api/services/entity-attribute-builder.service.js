/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class EntityAttributeBuilder {
    constructor() {
        this.omittedAttributes = ["id", "type"];
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: this.buildAttributes(params)
        };
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildAttributes(params) {
        return _.omit(params, this.omittedAttributes);
    }
}
EntityAttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ EntityAttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function EntityAttributeBuilder_Factory() { return new EntityAttributeBuilder(); }, token: EntityAttributeBuilder, providedIn: "root" });
if (false) {
    /** @type {?} */
    EntityAttributeBuilder.prototype.omittedAttributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWF0dHJpYnV0ZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvc2VydmljZXMvZW50aXR5LWF0dHJpYnV0ZS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBUzFDLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFJRSxzQkFBaUIsR0FBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtLQWMxQzs7Ozs7SUFaQyxLQUFLLENBQUMsTUFBVztRQUNmLE9BQU87WUFDTCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBTTtRQUNwQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9DLENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5QXR0cmlidXRlcyxcbn0gZnJvbSAnQGNlby9lbnRpdHknXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIge1xuICBvbWl0dGVkQXR0cmlidXRlczogYW55W10gPSBbXCJpZFwiLCBcInR5cGVcIl1cblxuICBidWlsZChwYXJhbXM6IGFueSk6IGlFbnRpdHlBdHRyaWJ1dGVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVhdHVyZTogcGFyYW1zLmZlYXR1cmUsXG4gICAgICB0eXBlOiBwYXJhbXMudHlwZSxcbiAgICAgIGlkOiBwYXJhbXMuaWQsXG4gICAgICBhdHRyaWJ1dGVzOiB0aGlzLmJ1aWxkQXR0cmlidXRlcyhwYXJhbXMpXG4gICAgfVxuICB9XG5cbiAgYnVpbGRBdHRyaWJ1dGVzKHBhcmFtcykge1xuICAgIHJldHVybiBfLm9taXQocGFyYW1zLCB0aGlzLm9taXR0ZWRBdHRyaWJ1dGVzKVxuICB9XG59XG4iXX0=