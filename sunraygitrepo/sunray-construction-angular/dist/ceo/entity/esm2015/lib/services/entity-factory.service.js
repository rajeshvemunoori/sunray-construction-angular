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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VudGl0eS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQTtBQVVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTyxnQ0FBZ0MsQ0FBQTtBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUluRixNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsWUFDVSxrQkFBNkMsRUFDN0Msb0JBQWdEO1FBRGhELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE0QjtJQUN2RCxDQUFDOzs7OztJQUVKLE1BQU0sQ0FDSixVQUFvQztRQUVwQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUM5QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUNwQixVQUFvQztRQUVwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7WUFKRix5QkFBeUI7WUFDekIsMEJBQTBCOzs7Ozs7O0lBTS9CLDJDQUFxRDs7Ozs7SUFDckQsNkNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQnVpbGRzIEVudGl0eSBpbnN0YW5jZXMgZnJvbSByYXcgKHVzdWFsbHkgc2VydmVyLXNpZGUpIGRhdGEuXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBtYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlSWRlbnRpZmllcixcbiAgaUVudGl0eSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eVR5cGVQcm92aWRlclNlcnZpY2UgfSAgZnJvbSAnLi9lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlJ1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIgfSBmcm9tICcuL2VudGl0eS1yZWxhdGlvbnNoaXAtcHJvdmlkZXIuc2VydmljZSdcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZW50aXR5VHlwZVByb3ZpZGVyOiBFbnRpdHlUeXBlUHJvdmlkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVsYXRpb25zaGlwUHJvdmlkZXI6IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyLFxuICApIHt9XG5cbiAgYnVpbGQkKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5VHlwZSQoZW50aXR5RGF0YSkucGlwZShcbiAgICAgIG1hcChlbnRpdHlUeXBlID0+IG5ldyBlbnRpdHlUeXBlKGVudGl0eURhdGEpKSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGdldEVudGl0eVR5cGUkKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5Q29uc3RydWN0b3I+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlUeXBlUHJvdmlkZXIucHJvdmlkZSQoZW50aXR5RGF0YSlcbiAgfVxufVxuIl19