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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9hdHRyaWJ1dGUtYnVpbGRlcnMvYXR0cmlidXRlLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFVMUMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsS0FBSyxDQUFDLE1BQVc7UUFDZixPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUMsQ0FBQTtJQUNILENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQnVpbGRlciBpbXBsZW1lbnRzIGlFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyIHtcbiAgYnVpbGQocGFyYW1zOiBhbnkpOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuICAgIHJldHVybiB7XG4gICAgICBmZWF0dXJlOiBwYXJhbXMuZmVhdHVyZSxcbiAgICAgIHR5cGU6IHBhcmFtcy50eXBlLFxuICAgICAgaWQ6IHBhcmFtcy5pZCxcbiAgICAgIGF0dHJpYnV0ZXM6IF8ub21pdChwYXJhbXMsIFsnaWQnLCAnZmVhdHVyZSddKVxuICAgIH1cbiAgfVxufVxuIl19