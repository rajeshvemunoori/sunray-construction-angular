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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9hdHRyaWJ1dGUtYnVpbGRlcnMvanNvbi1hcGktYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFPMUM7SUFBQTtLQVFDOzs7OztJQUpDLHVDQUFLOzs7O0lBQUwsVUFBTSxNQUFXOztZQUNYLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7UUFDeEUsT0FBTyxtQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUEsQ0FBQTtJQUM1RCxDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7a0NBWEQ7Q0FpQkMsQUFSRCxJQVFDO1NBTFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uQXBpQXR0cmlidXRlQnVpbGRlciBpbXBsZW1lbnRzIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyIHtcbiAgYnVpbGQocGFyYW1zOiBhbnkpOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuICAgIGxldCBwcm9wTmFtZXMgPSBbJ2ZlYXR1cmUnLCAndHlwZScsICdpZCcsICdhdHRyaWJ1dGVzJywgJ3JlbGF0aW9uc2hpcHMnXVxuICAgIHJldHVybiA8aUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zPl8ucGljayhwYXJhbXMsIHByb3BOYW1lcylcbiAgfVxufVxuIl19