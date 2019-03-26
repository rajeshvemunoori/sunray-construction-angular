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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9hdHRyaWJ1dGUtYnVpbGRlcnMvYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFPMUM7SUFBQTtLQVlDOzs7OztJQVJDLGdDQUFLOzs7O0lBQUwsVUFBTSxNQUFXO1FBQ2YsT0FBTztZQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2IsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzlDLENBQUE7SUFDSCxDQUFDOztnQkFYRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBWEQ7Q0FxQkMsQUFaRCxJQVlDO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5QXR0cmlidXRlQnVpbGRlcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVCdWlsZGVyIGltcGxlbWVudHMgaUVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIge1xuICBidWlsZChwYXJhbXM6IGFueSk6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlYXR1cmU6IHBhcmFtcy5mZWF0dXJlLFxuICAgICAgdHlwZTogcGFyYW1zLnR5cGUsXG4gICAgICBpZDogcGFyYW1zLmlkLFxuICAgICAgYXR0cmlidXRlczogXy5vbWl0KHBhcmFtcywgWydpZCcsICdmZWF0dXJlJ10pXG4gICAgfVxuICB9XG59XG4iXX0=