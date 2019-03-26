/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Builds Entity instances from raw (usually server-side) data.
import { map, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EntityTypeProviderService } from './entity-type-provider.service';
import { EntityRelationshipProvider } from './entity-relationship-provider.service';
export class EntityFactory {
    /**
     * @param {?} entityTypeProvider
     * @param {?} relationshipProvider
     */
    constructor(entityTypeProvider, relationshipProvider) {
        this.entityTypeProvider = entityTypeProvider;
        this.relationshipProvider = relationshipProvider;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    build$(entityData) {
        return this.getEntityType$(entityData).pipe(map(entityType => new entityType(entityData)));
    }
    /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    getEntityType$(entityData) {
        return this.entityTypeProvider.provide$(entityData);
    }
}
EntityFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityFactory.ctorParameters = () => [
    { type: EntityTypeProviderService },
    { type: EntityRelationshipProvider }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9lbnRpdHktZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsT0FBTyxFQUNMLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUE7QUFVbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU8sZ0NBQWdDLENBQUE7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFJbkYsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFlBQ1Usa0JBQTZDLEVBQzdDLG9CQUFnRDtRQURoRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBQzdDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEI7SUFDdkQsQ0FBQzs7Ozs7SUFFSixNQUFNLENBQ0osVUFBb0M7UUFFcEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDOUMsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FDcEIsVUFBb0M7UUFFcEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7OztZQW5CRixVQUFVOzs7O1lBSkYseUJBQXlCO1lBQ3pCLDBCQUEwQjs7Ozs7OztJQU0vQiwyQ0FBcUQ7Ozs7O0lBQ3JELDZDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJ1aWxkcyBFbnRpdHkgaW5zdGFuY2VzIGZyb20gcmF3ICh1c3VhbGx5IHNlcnZlci1zaWRlKSBkYXRhLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUlkZW50aWZpZXIsXG4gIGlFbnRpdHksXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlUeXBlUHJvdmlkZXJTZXJ2aWNlIH0gIGZyb20gJy4vZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZSdcbmltcG9ydCB7IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyIH0gZnJvbSAnLi9lbnRpdHktcmVsYXRpb25zaGlwLXByb3ZpZGVyLnNlcnZpY2UnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVudGl0eVR5cGVQcm92aWRlcjogRW50aXR5VHlwZVByb3ZpZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlbGF0aW9uc2hpcFByb3ZpZGVyOiBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlcixcbiAgKSB7fVxuXG4gIGJ1aWxkJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLmdldEVudGl0eVR5cGUkKGVudGl0eURhdGEpLnBpcGUoXG4gICAgICBtYXAoZW50aXR5VHlwZSA9PiBuZXcgZW50aXR5VHlwZShlbnRpdHlEYXRhKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlUeXBlJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eUNvbnN0cnVjdG9yPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5VHlwZVByb3ZpZGVyLnByb3ZpZGUkKGVudGl0eURhdGEpXG4gIH1cbn1cbiJdfQ==