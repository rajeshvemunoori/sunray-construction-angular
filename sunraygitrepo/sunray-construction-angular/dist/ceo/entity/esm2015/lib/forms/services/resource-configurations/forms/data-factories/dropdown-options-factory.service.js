/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownOptionsFactory {
    /**
     * @param {?} data$
     * @param {?} entityKey
     * @return {?}
     */
    build(data$, entityKey) {
        /** @type {?} */
        var dropdownData$ = data$.pipe(map(entityCollection => {
            /** @type {?} */
            var getOptions = (entity) => {
                return this.getOptions(entityKey, entity);
            };
            return _.map(entityCollection.entities, getOptions);
        }));
        return dropdownData$;
    }
    /**
     * @param {?} key
     * @param {?} entity
     * @return {?}
     */
    getOptions(key, entity) {
        return {
            key: entity.id,
            value: entity.attributes[key]
        };
    }
}
DropdownOptionsFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DropdownOptionsFactory.ngInjectableDef = i0.defineInjectable({ factory: function DropdownOptionsFactory_Factory() { return new DropdownOptionsFactory(); }, token: DropdownOptionsFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9kYXRhLWZhY3Rvcmllcy9kcm9wZG93bi1vcHRpb25zLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFPM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFhLGdCQUFnQixDQUFBO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBVTFDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUNqQyxLQUFLLENBQUMsS0FBb0MsRUFBRSxTQUFTOztZQUMvQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs7Z0JBQ2hELFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzNDLENBQUM7WUFDRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUE7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNO1FBQ3BCLE9BQU87WUFDTCxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDOUIsQ0FBQTtJQUNILENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IG1hcCB9ICAgICAgICBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb2xsZWN0aW9uXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2VudGl0eS9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bk9wdGlvbnNGYWN0b3J5IHtcbiAgYnVpbGQoZGF0YSQ6IE9ic2VydmFibGU8aUVudGl0eUNvbGxlY3Rpb24+LCBlbnRpdHlLZXkpIHtcbiAgICB2YXIgZHJvcGRvd25EYXRhJCA9IGRhdGEkLnBpcGUobWFwKGVudGl0eUNvbGxlY3Rpb24gPT57XG4gICAgICB2YXIgZ2V0T3B0aW9ucyA9IChlbnRpdHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9ucyhlbnRpdHlLZXksIGVudGl0eSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBfLm1hcChlbnRpdHlDb2xsZWN0aW9uLmVudGl0aWVzLCBnZXRPcHRpb25zKVxuICAgIH0pKVxuICAgIHJldHVybiBkcm9wZG93bkRhdGEkXG4gIH1cblxuICBnZXRPcHRpb25zKGtleSwgZW50aXR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZW50aXR5LmlkLFxuICAgICAgdmFsdWU6IGVudGl0eS5hdHRyaWJ1dGVzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuIl19