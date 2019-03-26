/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var EntityAttributeBuilder = /** @class */ (function () {
    function EntityAttributeBuilder() {
        this.omittedAttributes = ["id", "type"];
    }
    /**
     * @param {?} params
     * @return {?}
     */
    EntityAttributeBuilder.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: this.buildAttributes(params)
        };
    };
    /**
     * @param {?} params
     * @return {?}
     */
    EntityAttributeBuilder.prototype.buildAttributes = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return _.omit(params, this.omittedAttributes);
    };
    EntityAttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ EntityAttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function EntityAttributeBuilder_Factory() { return new EntityAttributeBuilder(); }, token: EntityAttributeBuilder, providedIn: "root" });
    return EntityAttributeBuilder;
}());
export { EntityAttributeBuilder };
if (false) {
    /** @type {?} */
    EntityAttributeBuilder.prototype.omittedAttributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWF0dHJpYnV0ZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvc2VydmljZXMvZW50aXR5LWF0dHJpYnV0ZS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBTTFDO0lBQUE7UUFJRSxzQkFBaUIsR0FBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtLQWMxQzs7Ozs7SUFaQyxzQ0FBSzs7OztJQUFMLFVBQU0sTUFBVztRQUNmLE9BQU87WUFDTCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnREFBZTs7OztJQUFmLFVBQWdCLE1BQU07UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUMvQyxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2lDQVZEO0NBMEJDLEFBbEJELElBa0JDO1NBZlksc0JBQXNCOzs7SUFDakMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5QXR0cmlidXRlcyxcbn0gZnJvbSAnQGNlby9lbnRpdHknXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIge1xuICBvbWl0dGVkQXR0cmlidXRlczogYW55W10gPSBbXCJpZFwiLCBcInR5cGVcIl1cblxuICBidWlsZChwYXJhbXM6IGFueSk6IGlFbnRpdHlBdHRyaWJ1dGVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVhdHVyZTogcGFyYW1zLmZlYXR1cmUsXG4gICAgICB0eXBlOiBwYXJhbXMudHlwZSxcbiAgICAgIGlkOiBwYXJhbXMuaWQsXG4gICAgICBhdHRyaWJ1dGVzOiB0aGlzLmJ1aWxkQXR0cmlidXRlcyhwYXJhbXMpXG4gICAgfVxuICB9XG5cbiAgYnVpbGRBdHRyaWJ1dGVzKHBhcmFtcykge1xuICAgIHJldHVybiBfLm9taXQocGFyYW1zLCB0aGlzLm9taXR0ZWRBdHRyaWJ1dGVzKVxuICB9XG59XG4iXX0=