/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var JsonApiAttributeBuilder = /** @class */ (function () {
    function JsonApiAttributeBuilder() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    JsonApiAttributeBuilder.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var propNames = ['feature', 'type', 'id', 'attributes', 'relationships'];
        return (/** @type {?} */ (_.pick(params, propNames)));
    };
    JsonApiAttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ JsonApiAttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function JsonApiAttributeBuilder_Factory() { return new JsonApiAttributeBuilder(); }, token: JsonApiAttributeBuilder, providedIn: "root" });
    return JsonApiAttributeBuilder;
}());
export { JsonApiAttributeBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F0dHJpYnV0ZS1idWlsZGVycy9qc29uLWFwaS1hdHRyaWJ1dGUtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQU8xQztJQUFBO0tBUUM7Ozs7O0lBSkMsdUNBQUs7Ozs7SUFBTCxVQUFNLE1BQVc7O1lBQ1gsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUN4RSxPQUFPLG1CQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBQSxDQUFBO0lBQzVELENBQUM7O2dCQVBGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztrQ0FYRDtDQWlCQyxBQVJELElBUUM7U0FMWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25BcGlBdHRyaWJ1dGVCdWlsZGVyIGltcGxlbWVudHMgaUVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIge1xuICBidWlsZChwYXJhbXM6IGFueSk6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyB7XG4gICAgbGV0IHByb3BOYW1lcyA9IFsnZmVhdHVyZScsICd0eXBlJywgJ2lkJywgJ2F0dHJpYnV0ZXMnLCAncmVsYXRpb25zaGlwcyddXG4gICAgcmV0dXJuIDxpRW50aXR5Q29uc3RydWN0b3JQYXJhbXM+Xy5waWNrKHBhcmFtcywgcHJvcE5hbWVzKVxuICB9XG59XG4iXX0=