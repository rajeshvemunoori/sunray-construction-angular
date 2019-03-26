/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AttributeBuilder = /** @class */ (function () {
    function AttributeBuilder() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    AttributeBuilder.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: _.omit(params, ['id', 'feature'])
        };
    };
    AttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ AttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function AttributeBuilder_Factory() { return new AttributeBuilder(); }, token: AttributeBuilder, providedIn: "root" });
    return AttributeBuilder;
}());
export { AttributeBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F0dHJpYnV0ZS1idWlsZGVycy9hdHRyaWJ1dGUtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQU8xQztJQUFBO0tBWUM7Ozs7O0lBUkMsZ0NBQUs7Ozs7SUFBTCxVQUFNLE1BQVc7UUFDZixPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUMsQ0FBQTtJQUNILENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsyQkFYRDtDQXFCQyxBQVpELElBWUM7U0FUWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUJ1aWxkZXIgaW1wbGVtZW50cyBpRW50aXR5QXR0cmlidXRlQnVpbGRlciB7XG4gIGJ1aWxkKHBhcmFtczogYW55KTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVhdHVyZTogcGFyYW1zLmZlYXR1cmUsXG4gICAgICB0eXBlOiBwYXJhbXMudHlwZSxcbiAgICAgIGlkOiBwYXJhbXMuaWQsXG4gICAgICBhdHRyaWJ1dGVzOiBfLm9taXQocGFyYW1zLCBbJ2lkJywgJ2ZlYXR1cmUnXSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==