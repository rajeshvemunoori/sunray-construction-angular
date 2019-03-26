/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//  Loads and constructs relations for an entity, using the entity's
//  relationship data.
import * as _ from 'lodash';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EntityHasOneRelationshipType, EntityHasManyRelationshipType, } from '../interfaces/index';
import * as i0 from "@angular/core";
var EntityRelationshipProvider = /** @class */ (function () {
    function EntityRelationshipProvider() {
        this.defaultDataServiceOpts = {
            syncWithApi: false,
        };
    }
    /**
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.provide$ = /**
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, relationshipIdentifier, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var relationship = this.relationshipData(entity, relationshipIdentifier);
        if (!relationship) {
            return of((/** @type {?} */ (null)));
        }
        /** @type {?} */
        var relationshipType = this.relationshipType(relationship);
        if (!relationshipType) {
            return of((/** @type {?} */ (null)));
        }
        return this.loadRelationshipData$(dataService, entity, relationship, relationshipType, opts);
    };
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationship
     * @param {?} relationshipType
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.loadRelationshipData$ = /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationship
     * @param {?} relationshipType
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, relationship, relationshipType, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var resourceType = '';
        /** @type {?} */
        var prepareRelationship;
        if (relationshipType == EntityHasOneRelationshipType) {
            resourceType = ((/** @type {?} */ (relationship))).type;
            prepareRelationship = this.prepareHasOne;
        }
        if (relationshipType == EntityHasManyRelationshipType) {
            if (_.isEmpty(relationship)) {
                resourceType = this.defaultRelationResourceType(entity);
            }
            else {
                /** @type {?} */
                var firstRelationship = relationship[0];
                resourceType = (firstRelationship).type || 'entity';
            }
            prepareRelationship = this.prepareHasMany;
        }
        return this.loadResourceTypeData$(dataService, entity, resourceType, opts).pipe(map(function (entities) { return prepareRelationship(relationship, entities); }));
    };
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    EntityRelationshipProvider.prototype.prepareHasMany = /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    function (relationship, entities) {
        /** @type {?} */
        var ids = _.map(relationship, 'id');
        return entities.where({ id: ids });
    };
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    EntityRelationshipProvider.prototype.prepareHasOne = /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    function (relationship, entities) {
        return entities.find(((/** @type {?} */ (relationship))).id);
    };
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} resourceType
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.loadResourceTypeData$ = /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} resourceType
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, resourceType, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var resourceOpts = {
            feature: entity.feature,
            type: resourceType,
        };
        return dataService.get$(resourceOpts, this.buildDataServiceOpts(opts));
    };
    /**
     * @private
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.buildDataServiceOpts = /**
     * @private
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        return _.defaults(opts, this.defaultDataServiceOpts);
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @return {?}
     */
    EntityRelationshipProvider.prototype.relationshipData = /**
     * @private
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @return {?}
     */
    function (entity, relationshipIdentifier) {
        if (entity && entity.relationships) {
            /** @type {?} */
            var wrappedData = entity.relationships[relationshipIdentifier];
            if (wrappedData) {
                return wrappedData.data;
            }
            else {
                return null;
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} relationship
     * @return {?}
     */
    EntityRelationshipProvider.prototype.relationshipType = /**
     * @private
     * @param {?} relationship
     * @return {?}
     */
    function (relationship) {
        if (_.has(relationship, 'id')) {
            return EntityHasOneRelationshipType;
        }
        if (relationship instanceof Array) {
            return EntityHasManyRelationshipType;
        }
        return null;
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityRelationshipProvider.prototype.defaultRelationResourceType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.feature) {
            case 'app': {
                return 'sunray-entities';
            }
            case 'cms': {
                return 'wordpress-entities';
            }
            default: {
                return 'sunray-entities';
            }
        }
    };
    EntityRelationshipProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ EntityRelationshipProvider.ngInjectableDef = i0.defineInjectable({ factory: function EntityRelationshipProvider_Factory() { return new EntityRelationshipProvider(); }, token: EntityRelationshipProvider, providedIn: "root" });
    return EntityRelationshipProvider;
}());
export { EntityRelationshipProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityRelationshipProvider.prototype.defaultDataServiceOpts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlbGF0aW9uc2hpcC1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL2VudGl0eS1yZWxhdGlvbnNoaXAtcHJvdmlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQXFCLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUkxQyxPQUFPLEVBUUwsNEJBQTRCLEVBQzVCLDZCQUE2QixHQVE5QixNQUFNLHFCQUFxQixDQUFBOztBQU01QjtJQUFBO1FBTVUsMkJBQXNCLEdBQXFCO1lBQ2pELFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUE7S0F3SUY7Ozs7Ozs7O0lBdElDLDZDQUFROzs7Ozs7O0lBQVIsVUFDRSxXQUF5QixFQUN6QixNQUFlLEVBQ2Ysc0JBQW9ELEVBQ3BELElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7O1lBR3ZCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDO1FBRXhFLElBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsbUJBQVksSUFBSSxFQUFBLENBQUMsQ0FBQTtTQUM1Qjs7WUFFRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBRTFELElBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQyxtQkFBWSxJQUFJLEVBQUEsQ0FBQyxDQUFBO1NBQzVCO1FBRUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQy9CLFdBQVcsRUFBRSxN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Q0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzs7Ozs7SUFFTyxxREFBZ0I7Ozs7O0lBQXhCLFVBQ0UsWUFBZ0M7UUFFaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLDRCQUE0QixDQUFBO1NBQ3BDO1FBQ0QsSUFBRyxZQUFZLFlBQVksS0FBSyxFQUFFO1lBQ2hDLE9BQU8sNkJBQTZCLENBQUE7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Ozs7OztJQUVPLGdFQUEyQjs7Ozs7SUFBbkMsVUFBb0MsTUFBZTtRQUNqRCxRQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDckIsS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDVixPQUFPLGlCQUFpQixDQUFBO2FBQ3pCO1lBQ0QsS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDVixPQUFPLG9CQUFvQixDQUFBO2FBQzVCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxpQkFBaUIsQ0FBQTthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBL0lGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztxQ0FyQ0Q7Q0FtTEMsQUFoSkQsSUFnSkM7U0E3SVksMEJBQTBCOzs7Ozs7SUFHckMsNERBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgTG9hZHMgYW5kIGNvbnN0cnVjdHMgcmVsYXRpb25zIGZvciBhbiBlbnRpdHksIHVzaW5nIHRoZSBlbnRpdHknc1xuLy8gIHJlbGF0aW9uc2hpcCBkYXRhLlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHksIG9mIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgY2FtZWxDYXNlIH0gICAgICAgIGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgRW50aXR5RGF0YSxcbiAgRW50aXR5SWRlbnRpZmllcixcbiAgRW50aXR5UmVsYXRpb25zaGlwLFxuICBFbnRpdHlSZWxhdGlvbnNoaXBUeXBlLFxuICBFbnRpdHlIYXNPbmVSZWxhdGlvbnNoaXAsXG4gIEVudGl0eUhhc01hbnlSZWxhdGlvbnNoaXAsXG4gIEVudGl0eUhhc09uZVJlbGF0aW9uc2hpcFR5cGUsXG4gIEVudGl0eUhhc01hbnlSZWxhdGlvbnNoaXBUeXBlLFxuICBFbnRpdHlUeXBlSWRlbnRpZmllcixcbiAgaURhdGFTZXJ2aWNlLFxuICBpRGF0YVNlcnZpY2VPcHRzLFxuICBpRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlSZWxhdGlvbnNoaXBNYXBwaW5nLFxuICBpRW50aXR5Q29sbGVjdGlvbixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5Q29sbGVjdGlvbixcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXJcbiAgaW1wbGVtZW50cyBpRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIge1xuXG4gIHByaXZhdGUgZGVmYXVsdERhdGFTZXJ2aWNlT3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHtcbiAgICBzeW5jV2l0aEFwaTogZmFsc2UsXG4gIH1cblxuICBwcm92aWRlJChcbiAgICBkYXRhU2VydmljZTogaURhdGFTZXJ2aWNlLFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgICByZWxhdGlvbnNoaXBJZGVudGlmaWVyOiBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG5cbiAgICBsZXQgcmVsYXRpb25zaGlwID0gdGhpcy5yZWxhdGlvbnNoaXBEYXRhKGVudGl0eSwgcmVsYXRpb25zaGlwSWRlbnRpZmllcilcblxuICAgIGlmKCFyZWxhdGlvbnNoaXApIHtcbiAgICAgIHJldHVybiBvZig8RW50aXR5RGF0YT5udWxsKVxuICAgIH1cblxuICAgIGxldCByZWxhdGlvbnNoaXBUeXBlID0gdGhpcy5yZWxhdGlvbnNoaXBUeXBlKHJlbGF0aW9uc2hpcClcblxuICAgIGlmKCFyZWxhdGlvbnNoaXBUeXBlKSB7XG4gICAgICByZXR1cm4gb2YoPEVudGl0eURhdGE+bnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkUmVsYXRpb25zaGlwRGF0YSQoXG4gICAgICBkYXRhU2VydmljZSwgZW50aXR5LCByZWxhdGlvbnNoaXAsIHJlbGF0aW9uc2hpcFR5cGUsIG9wdHNcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGxvYWRSZWxhdGlvbnNoaXBEYXRhJChcbiAgICBkYXRhU2VydmljZTogaURhdGFTZXJ2aWNlLFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgICByZWxhdGlvbnNoaXA6IEVudGl0eVJlbGF0aW9uc2hpcCxcbiAgICByZWxhdGlvbnNoaXBUeXBlOiBFbnRpdHlSZWxhdGlvbnNoaXBUeXBlLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG5cbiAgICB2YXIgcmVzb3VyY2VUeXBlID0gJydcbiAgICB2YXIgcHJlcGFyZVJlbGF0aW9uc2hpcFxuXG4gICAgaWYocmVsYXRpb25zaGlwVHlwZSA9PSBFbnRpdHlIYXNPbmVSZWxhdGlvbnNoaXBUeXBlKSB7XG4gICAgICByZXNvdXJjZVR5cGUgPSAoPEVudGl0eUhhc09uZVJlbGF0aW9uc2hpcD4gcmVsYXRpb25zaGlwKS50eXBlXG4gICAgICBwcmVwYXJlUmVsYXRpb25zaGlwID0gdGhpcy5wcmVwYXJlSGFzT25lXG4gICAgfVxuXG4gICAgaWYocmVsYXRpb25zaGlwVHlwZSA9PSBFbnRpdHlIYXNNYW55UmVsYXRpb25zaGlwVHlwZSkge1xuICAgICAgaWYoXy5pc0VtcHR5KHJlbGF0aW9uc2hpcCkpIHtcbiAgICAgICAgcmVzb3VyY2VUeXBlID0gdGhpcy5kZWZhdWx0UmVsYXRpb25SZXNvdXJjZVR5cGUoZW50aXR5KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBmaXJzdFJlbGF0aW9uc2hpcCA9IHJlbGF0aW9uc2hpcFswXVxuICAgICAgICByZXNvdXJjZVR5cGUgPSAoZmlyc3RSZWxhdGlvbnNoaXApLnR5cGUgfHwgJ2VudGl0eSdcbiAgICAgIH1cblxuICAgICAgcHJlcGFyZVJlbGF0aW9uc2hpcCA9IHRoaXMucHJlcGFyZUhhc01hbnlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkUmVzb3VyY2VUeXBlRGF0YSQoZGF0YVNlcnZpY2UsIGVudGl0eSwgcmVzb3VyY2VUeXBlLCBvcHRzKS5waXBlKFxuICAgICAgbWFwKGVudGl0aWVzID0+IHByZXBhcmVSZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwLCBlbnRpdGllcykpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlSGFzTWFueShcbiAgICByZWxhdGlvbnNoaXA6IEVudGl0eVJlbGF0aW9uc2hpcCxcbiAgICBlbnRpdGllczogaUVudGl0eUNvbGxlY3Rpb25cbiAgKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuXG4gICAgbGV0IGlkcyA9IF8ubWFwKHJlbGF0aW9uc2hpcCwgJ2lkJylcbiAgICByZXR1cm4gZW50aXRpZXMud2hlcmUoe2lkOiBpZHN9KVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlSGFzT25lKFxuICAgIHJlbGF0aW9uc2hpcDogRW50aXR5UmVsYXRpb25zaGlwLFxuICAgIGVudGl0aWVzOiBpRW50aXR5Q29sbGVjdGlvblxuICApOiBpRW50aXR5IHtcbiAgICByZXR1cm4gZW50aXRpZXMuZmluZCgoPEVudGl0eUhhc09uZVJlbGF0aW9uc2hpcD4gcmVsYXRpb25zaGlwKS5pZClcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFJlc291cmNlVHlwZURhdGEkKFxuICAgIGRhdGFTZXJ2aWNlOiBpRGF0YVNlcnZpY2UsXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIHJlc291cmNlVHlwZTogRW50aXR5VHlwZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHlDb2xsZWN0aW9uPiB7XG5cbiAgICBsZXQgcmVzb3VyY2VPcHRzID0ge1xuICAgICAgZmVhdHVyZTogZW50aXR5LmZlYXR1cmUsXG4gICAgICB0eXBlOiByZXNvdXJjZVR5cGUsXG4gICAgfVxuICAgIHJldHVybiBkYXRhU2VydmljZS5nZXQkKHJlc291cmNlT3B0cywgdGhpcy5idWlsZERhdGFTZXJ2aWNlT3B0cyhvcHRzKSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREYXRhU2VydmljZU9wdHMoXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9LFxuICApIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyhvcHRzLCB0aGlzLmRlZmF1bHREYXRhU2VydmljZU9wdHMpXG4gIH1cblxuICBwcml2YXRlIHJlbGF0aW9uc2hpcERhdGEoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIHJlbGF0aW9uc2hpcElkZW50aWZpZXI6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXJcbiAgKTogRW50aXR5UmVsYXRpb25zaGlwIHtcbiAgICBpZihlbnRpdHkgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHMpe1xuICAgICAgbGV0IHdyYXBwZWREYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwSWRlbnRpZmllcl1cbiAgICAgIGlmKHdyYXBwZWREYXRhKSB7XG4gICAgICAgIHJldHVybiB3cmFwcGVkRGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgcmVsYXRpb25zaGlwVHlwZShcbiAgICByZWxhdGlvbnNoaXA6IEVudGl0eVJlbGF0aW9uc2hpcFxuICApOiBFbnRpdHlSZWxhdGlvbnNoaXBUeXBlICB8IG51bGwge1xuICAgIGlmKF8uaGFzKHJlbGF0aW9uc2hpcCwgJ2lkJykpIHtcbiAgICAgIHJldHVybiBFbnRpdHlIYXNPbmVSZWxhdGlvbnNoaXBUeXBlXG4gICAgfVxuICAgIGlmKHJlbGF0aW9uc2hpcCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gRW50aXR5SGFzTWFueVJlbGF0aW9uc2hpcFR5cGVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdFJlbGF0aW9uUmVzb3VyY2VUeXBlKGVudGl0eTogaUVudGl0eSkge1xuICAgIHN3aXRjaChlbnRpdHkuZmVhdHVyZSkgeyBcbiAgICAgIGNhc2UgJ2FwcCc6IHtcbiAgICAgICAgcmV0dXJuICdzdW5yYXktZW50aXRpZXMnXG4gICAgICB9XG4gICAgICBjYXNlICdjbXMnOiB7XG4gICAgICAgIHJldHVybiAnd29yZHByZXNzLWVudGl0aWVzJ1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogeyBcbiAgICAgICAgcmV0dXJuICdzdW5yYXktZW50aXRpZXMnXG4gICAgICB9XG4gICAgfVxuICB9XG59IFxuIl19