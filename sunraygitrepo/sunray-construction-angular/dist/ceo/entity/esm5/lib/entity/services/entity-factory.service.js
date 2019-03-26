/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Builds Entity instances from raw (usually server-side) data.
import { map, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EntityTypeProviderService } from './entity-type-provider.service';
import { EntityRelationshipProvider } from './entity-relationship-provider.service';
var EntityFactory = /** @class */ (function () {
    function EntityFactory(entityTypeProvider, relationshipProvider) {
        this.entityTypeProvider = entityTypeProvider;
        this.relationshipProvider = relationshipProvider;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityFactory.prototype.build$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.getEntityType$(entityData).pipe(map(function (entityType) { return new entityType(entityData); }));
    };
    /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    EntityFactory.prototype.getEntityType$ = /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.entityTypeProvider.provide$(entityData);
    };
    EntityFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityFactory.ctorParameters = function () { return [
        { type: EntityTypeProviderService },
        { type: EntityRelationshipProvider }
    ]; };
    return EntityFactory;
}());
export { EntityFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityFactory.prototype.entityTypeProvider;
    /**
     * @type {?}
     * @private
     */
    EntityFactory.prototype.relationshipProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9lbnRpdHktZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsT0FBTyxFQUNMLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUE7QUFVbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU8sZ0NBQWdDLENBQUE7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFHbkY7SUFFRSx1QkFDVSxrQkFBNkMsRUFDN0Msb0JBQWdEO1FBRGhELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE0QjtJQUN2RCxDQUFDOzs7OztJQUVKLDhCQUFNOzs7O0lBQU4sVUFDRSxVQUFvQztRQUVwQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUM5QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sc0NBQWM7Ozs7O0lBQXRCLFVBQ0UsVUFBb0M7UUFFcEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7O2dCQW5CRixVQUFVOzs7O2dCQUpGLHlCQUF5QjtnQkFDekIsMEJBQTBCOztJQXVCbkMsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSxhQUFhOzs7Ozs7SUFFdEIsMkNBQXFEOzs7OztJQUNyRCw2Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZHMgRW50aXR5IGluc3RhbmNlcyBmcm9tIHJhdyAodXN1YWxseSBzZXJ2ZXItc2lkZSkgZGF0YS5cblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVJZGVudGlmaWVyLFxuICBpRW50aXR5LFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlDb25zdHJ1Y3Rvcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRW50aXR5VHlwZVByb3ZpZGVyU2VydmljZSB9ICBmcm9tICcuL2VudGl0eS10eXBlLXByb3ZpZGVyLnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlciB9IGZyb20gJy4vZW50aXR5LXJlbGF0aW9uc2hpcC1wcm92aWRlci5zZXJ2aWNlJ1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbnRpdHlUeXBlUHJvdmlkZXI6IEVudGl0eVR5cGVQcm92aWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWxhdGlvbnNoaXBQcm92aWRlcjogRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIsXG4gICkge31cblxuICBidWlsZCQoXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlUeXBlJChlbnRpdHlEYXRhKS5waXBlKFxuICAgICAgbWFwKGVudGl0eVR5cGUgPT4gbmV3IGVudGl0eVR5cGUoZW50aXR5RGF0YSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW50aXR5VHlwZSQoXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHlDb25zdHJ1Y3Rvcj4ge1xuICAgIHJldHVybiB0aGlzLmVudGl0eVR5cGVQcm92aWRlci5wcm92aWRlJChlbnRpdHlEYXRhKVxuICB9XG59XG4iXX0=