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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VudGl0eS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQTtBQVVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTyxnQ0FBZ0MsQ0FBQTtBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUduRjtJQUVFLHVCQUNVLGtCQUE2QyxFQUM3QyxvQkFBZ0Q7UUFEaEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO0lBQ3ZELENBQUM7Ozs7O0lBRUosOEJBQU07Ozs7SUFBTixVQUNFLFVBQW9DO1FBRXBDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQzlDLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzQ0FBYzs7Ozs7SUFBdEIsVUFDRSxVQUFvQztRQUVwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7Z0JBbkJGLFVBQVU7Ozs7Z0JBSkYseUJBQXlCO2dCQUN6QiwwQkFBMEI7O0lBdUJuQyxvQkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLGFBQWE7Ozs7OztJQUV0QiwyQ0FBcUQ7Ozs7O0lBQ3JELDZDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJ1aWxkcyBFbnRpdHkgaW5zdGFuY2VzIGZyb20gcmF3ICh1c3VhbGx5IHNlcnZlci1zaWRlKSBkYXRhLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUlkZW50aWZpZXIsXG4gIGlFbnRpdHksXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlUeXBlUHJvdmlkZXJTZXJ2aWNlIH0gIGZyb20gJy4vZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZSdcbmltcG9ydCB7IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyIH0gZnJvbSAnLi9lbnRpdHktcmVsYXRpb25zaGlwLXByb3ZpZGVyLnNlcnZpY2UnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVudGl0eVR5cGVQcm92aWRlcjogRW50aXR5VHlwZVByb3ZpZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlbGF0aW9uc2hpcFByb3ZpZGVyOiBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlcixcbiAgKSB7fVxuXG4gIGJ1aWxkJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLmdldEVudGl0eVR5cGUkKGVudGl0eURhdGEpLnBpcGUoXG4gICAgICBtYXAoZW50aXR5VHlwZSA9PiBuZXcgZW50aXR5VHlwZShlbnRpdHlEYXRhKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlUeXBlJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eUNvbnN0cnVjdG9yPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5VHlwZVByb3ZpZGVyLnByb3ZpZGUkKGVudGl0eURhdGEpXG4gIH1cbn1cbiJdfQ==