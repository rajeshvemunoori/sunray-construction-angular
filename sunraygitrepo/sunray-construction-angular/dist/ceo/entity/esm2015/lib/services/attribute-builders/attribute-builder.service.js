/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AttributeBuilder {
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: _.omit(params, ['id', 'feature'])
        };
    }
}
AttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function AttributeBuilder_Factory() { return new AttributeBuilder(); }, token: AttributeBuilder, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F0dHJpYnV0ZS1idWlsZGVycy9hdHRyaWJ1dGUtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQVUxQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixLQUFLLENBQUMsTUFBVztRQUNmLE9BQU87WUFDTCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNiLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5QyxDQUFBO0lBQ0gsQ0FBQzs7O1lBWEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5QXR0cmlidXRlQnVpbGRlcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVCdWlsZGVyIGltcGxlbWVudHMgaUVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIge1xuICBidWlsZChwYXJhbXM6IGFueSk6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlYXR1cmU6IHBhcmFtcy5mZWF0dXJlLFxuICAgICAgdHlwZTogcGFyYW1zLnR5cGUsXG4gICAgICBpZDogcGFyYW1zLmlkLFxuICAgICAgYXR0cmlidXRlczogXy5vbWl0KHBhcmFtcywgWydpZCcsICdmZWF0dXJlJ10pXG4gICAgfVxuICB9XG59XG4iXX0=