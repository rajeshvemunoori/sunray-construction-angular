/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
export class EntityCloner {
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    clone(entity, dataService = null) {
        /** @type {?} */
        let entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    constructorParams(entity) {
        /** @type {?} */
        let paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (_.pick(entity, paramNames)));
    }
}
EntityCloner.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNsb25lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL2VudGl0eS1jbG9uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVMxQyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBQ3ZCLEtBQUssQ0FDSCxNQUFlLEVBQ2YsY0FBNEIsSUFBSTs7WUFFNUIsVUFBVSxHQUFTLE1BQU0sQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUN2QixNQUFlOztZQUdYLFVBQVUsR0FBRztZQUNmLElBQUk7WUFDSixTQUFTO1lBQ1QsTUFBTTtZQUNOLFlBQVk7WUFDWixlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxtQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUEsQ0FBQTtJQUU3RCxDQUFDOzs7WUF2QkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgaURhdGFTZXJ2aWNlLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlDbG9uZXIge1xuICBjbG9uZShcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICAgZGF0YVNlcnZpY2U6IGlEYXRhU2VydmljZSA9IG51bGwsXG4gICk6IGlFbnRpdHkge1xuICAgIGxldCBlbnRpdHlDdG9yIDogYW55ID0gZW50aXR5LmNvbnN0cnVjdG9yXG4gICAgcmV0dXJuIG5ldyBlbnRpdHlDdG9yKHRoaXMuY29uc3RydWN0b3JQYXJhbXMoZW50aXR5KSwgZGF0YVNlcnZpY2UpXG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yUGFyYW1zKFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgKTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zIHtcblxuICAgIGxldCBwYXJhbU5hbWVzID0gW1xuICAgICAgJ2lkJyxcbiAgICAgICdmZWF0dXJlJyxcbiAgICAgICd0eXBlJyxcbiAgICAgICdhdHRyaWJ1dGVzJyxcbiAgICAgICdyZWxhdGlvbnNoaXBzJyxcbiAgICBdXG4gICAgcmV0dXJuIDxpRW50aXR5Q29uc3RydWN0b3JQYXJhbXM+Xy5waWNrKGVudGl0eSwgcGFyYW1OYW1lcylcblxuICB9XG59XG4iXX0=