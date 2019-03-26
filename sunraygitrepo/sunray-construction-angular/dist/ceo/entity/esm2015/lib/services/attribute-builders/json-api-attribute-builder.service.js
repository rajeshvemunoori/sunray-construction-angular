/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class JsonApiAttributeBuilder {
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let propNames = ['feature', 'type', 'id', 'attributes', 'relationships'];
        return (/** @type {?} */ (_.pick(params, propNames)));
    }
}
JsonApiAttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ JsonApiAttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function JsonApiAttributeBuilder_Factory() { return new JsonApiAttributeBuilder(); }, token: JsonApiAttributeBuilder, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F0dHJpYnV0ZS1idWlsZGVycy9qc29uLWFwaS1hdHRyaWJ1dGUtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQVUxQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxLQUFLLENBQUMsTUFBVzs7WUFDWCxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3hFLE9BQU8sbUJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFBLENBQUE7SUFDNUQsQ0FBQzs7O1lBUEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uQXBpQXR0cmlidXRlQnVpbGRlciBpbXBsZW1lbnRzIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyIHtcbiAgYnVpbGQocGFyYW1zOiBhbnkpOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuICAgIGxldCBwcm9wTmFtZXMgPSBbJ2ZlYXR1cmUnLCAndHlwZScsICdpZCcsICdhdHRyaWJ1dGVzJywgJ3JlbGF0aW9uc2hpcHMnXVxuICAgIHJldHVybiA8aUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zPl8ucGljayhwYXJhbXMsIHByb3BOYW1lcylcbiAgfVxufVxuIl19