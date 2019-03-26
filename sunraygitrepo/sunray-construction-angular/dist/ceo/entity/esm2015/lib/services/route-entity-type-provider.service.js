/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { mergeMap, map, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InflectionService, } from '@ceo/core';
import { JsonApiEntity, EntityCollection, } from '../classes/index';
import { entityFeatureSelectors, } from '../state/feature/selectors';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./data.service";
import * as i3 from "@ceo/core";
export class RouteEntityTypeProvider {
    /**
     * @param {?} store
     * @param {?} dataService
     * @param {?} inflectionService
     */
    constructor(store, dataService, inflectionService) {
        this.store = store;
        this.dataService = dataService;
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    handleRouterNavigation$(routerState) {
        return this.features$.pipe(mergeMap(features => this.featureRoutableEntities$(features)), map(collection => {
            return this.resourceIdentifierFromRouterState(collection, routerState);
        }));
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierFromRouterState(collection, routerState) {
        /** @type {?} */
        let entityTypeSlug = this.entityTypeSlugFromRouterState(routerState);
        if (entityTypeSlug) {
            /** @type {?} */
            let entity = collection.findByAttr('urlSlug', entityTypeSlug);
            if (entity) {
                /** @type {?} */
                let routerStateOpts = this.resourceIdentifierOptsFromRouterState(entity, routerState);
                return _.merge({}, entity.resourceIdentifier, routerStateOpts);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierOptsFromRouterState(entity, routerState) {
        /** @type {?} */
        let params = routerState.params;
        /** @type {?} */
        let ri = (/** @type {?} */ ({}));
        /** @type {?} */
        let isPrimaryKey = (value, prop) => {
            return _.includes(entity.primaryKeys, prop);
        };
        /** @type {?} */
        let idKey = _.pickBy(params, isPrimaryKey);
        if (idKey) {
            ri.id = _.head(_.values(idKey));
        }
        /** @type {?} */
        let filter = _.omit(params, _.keys(idKey));
        if (!_.isEmpty(filter)) {
            ri.filter = filter;
        }
        return ri;
    }
    /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    entityTypeSlugFromRouterState(routerState) {
        /** @type {?} */
        let segments = _.map(routerState.segments, 'path');
        if (_.head(segments) == 'app') {
            segments = _.drop(segments);
        }
        /** @type {?} */
        let params = _.values(routerState.params);
        /** @type {?} */
        let segmentsWithoutParam = (segments, param) => {
            if (_.last(segments) == param) {
                return _.dropRight(segments);
            }
            else {
                return segments;
            }
        };
        /** @type {?} */
        let finalSegments = _.reduce(params, segmentsWithoutParam, segments);
        return finalSegments[0];
    }
    /**
     * @private
     * @param {?} features
     * @return {?}
     */
    featureRoutableEntities$(features) {
        /** @type {?} */
        let getRoutableEntities = _.bind(this.getRoutableEntities, this);
        /** @type {?} */
        let routableEntities = _.map(features, getRoutableEntities);
        return combineLatest(routableEntities).pipe(map(routableEntityCollections => {
            /** @type {?} */
            let entities = _.flatten(_.map(routableEntityCollections, 'entities'));
            return new EntityCollection(entities);
        }));
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    getRoutableEntities(feature, featureName) {
        return this.resourceConfigurations$(feature).pipe(map(collection => this.routableResourceConfigurations(collection)), map(collection => this.buildResourceIdentifiers(feature, collection)));
    }
    /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    routableResourceConfigurations(collection) {
        return collection.where({ isRoutable: true });
    }
    /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    resourceConfigurations$(feature) {
        /** @type {?} */
        let ri = {
            feature: feature.name,
            type: 'resource-configurations',
        };
        /** @type {?} */
        let dataOpts = {
            syncWithApi: false,
        };
        return this.dataService.get$(ri, dataOpts);
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    buildResourceIdentifiers(feature, collection) {
        /** @type {?} */
        let buildResourceIdentifier = (entity) => {
            /** @type {?} */
            let ri = {
                feature: feature.name,
                type: entity.resourceType,
            };
            /** @type {?} */
            let attributes = {
                resourceIdentifier: ri,
                urlSlug: entity.displaySlug,
                primaryKeys: entity.primaryKeys
            };
            /** @type {?} */
            let data = {
                id: entity.id,
                type: 'resource-identifiers',
                attributes: attributes,
            };
            return new JsonApiEntity(data);
        };
        /** @type {?} */
        let entities = _.map(collection.entities, buildResourceIdentifier);
        return new EntityCollection(entities);
    }
    /**
     * @private
     * @return {?}
     */
    get features$() {
        if (!this._features$) {
            this._features$ = this.getFeatures$();
        }
        return this._features$;
    }
    /**
     * @private
     * @return {?}
     */
    getFeatures$() {
        return (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
    }
}
RouteEntityTypeProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RouteEntityTypeProvider.ctorParameters = () => [
    { type: Store },
    { type: DataService },
    { type: InflectionService }
];
/** @nocollapse */ RouteEntityTypeProvider.ngInjectableDef = i0.defineInjectable({ factory: function RouteEntityTypeProvider_Factory() { return new RouteEntityTypeProvider(i0.inject(i1.Store), i0.inject(i2.DataService), i0.inject(i3.InflectionService)); }, token: RouteEntityTypeProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouteEntityTypeProvider.prototype._features$;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JvdXRlLWVudGl0eS10eXBlLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFHTCxhQUFhLEdBQ2QsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsUUFBUSxFQUNSLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUVuQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sV0FBVyxDQUFBO0FBVWxCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEdBQ2pCLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUNMLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFBO0FBVW5DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7Ozs7QUFLNUMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBR2xDLFlBQ1ksS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDOzs7OztJQUVKLHVCQUF1QixDQUNyQixXQUE0QjtRQUc1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDN0QsR0FB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Qiw2Q0FBMkM7Ozs7O0lBR3pDLHdDQUEyQjs7Ozs7SUFDM0IsOENBQWtDOzs7OztJQUNsQyxvREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBjb21iaW5lTGF0ZXN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBtZXJnZU1hcCxcbiAgbWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIEluZmxlY3Rpb25TZXJ2aWNlLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlSb3V0ZXJTdGF0ZVVybCxcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHtcbiAgVXJsU2x1Zyxcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cbmltcG9ydCB7XG4gIEpzb25BcGlFbnRpdHksXG4gIEVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxuICBpRmVhdHVyZSxcbiAgaUZlYXR1cmVNYXAsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlRW50aXR5VHlwZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBfZmVhdHVyZXMkOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uJChcbiAgICByb3V0ZXJTdGF0ZTogaVJvdXRlclN0YXRlVXJsXG4gICk6IE9ic2VydmFibGU8aVJlc291cmNlSWRlbnRpZmllcj4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMkLnBpcGUoXG4gICAgICBtZXJnZU1hcChmZWF0dXJlcyA9PiB0aGlzLmZlYXR1cmVSb3V0YWJsZUVudGl0aWVzJChmZWF0dXJlcykpLFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUlkZW50aWZpZXJGcm9tUm91dGVyU3RhdGUoY29sbGVjdGlvbiwgcm91dGVyU3RhdGUpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHJlc291cmNlSWRlbnRpZmllckZyb21Sb3V0ZXJTdGF0ZShcbiAgICBjb2xsZWN0aW9uOiBhbnksXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBpUmVzb3VyY2VJZGVudGlmaWVyIHtcblxuICAgIGxldCBlbnRpdHlUeXBlU2x1ZyA9IHRoaXMuZW50aXR5VHlwZVNsdWdGcm9tUm91dGVyU3RhdGUocm91dGVyU3RhdGUpXG4gICAgaWYoZW50aXR5VHlwZVNsdWcpIHtcblxuICAgICAgbGV0IGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZEJ5QXR0cigndXJsU2x1ZycsIGVudGl0eVR5cGVTbHVnKVxuICAgICAgaWYoZW50aXR5KSB7XG5cbiAgICAgICAgbGV0IHJvdXRlclN0YXRlT3B0cyA9XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZUlkZW50aWZpZXJPcHRzRnJvbVJvdXRlclN0YXRlKGVudGl0eSwgcm91dGVyU3RhdGUpXG5cbiAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIGVudGl0eS5yZXNvdXJjZUlkZW50aWZpZXIsIHJvdXRlclN0YXRlT3B0cylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvdXJjZUlkZW50aWZpZXJPcHRzRnJvbVJvdXRlclN0YXRlKGVudGl0eSwgcm91dGVyU3RhdGUpIHtcbiAgICBsZXQgcGFyYW1zID0gcm91dGVyU3RhdGUucGFyYW1zXG4gICAgbGV0IHJpID0gPGlSZXNvdXJjZUlkZW50aWZpZXI+e31cblxuICAgIGxldCBpc1ByaW1hcnlLZXkgPSAodmFsdWUsIHByb3ApID0+IHtcbiAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eS5wcmltYXJ5S2V5cywgcHJvcClcbiAgICB9XG5cbiAgICBsZXQgaWRLZXkgPSBfLnBpY2tCeShwYXJhbXMsIGlzUHJpbWFyeUtleSkgXG4gICAgaWYoaWRLZXkpIHtcbiAgICAgIHJpLmlkID0gXy5oZWFkKF8udmFsdWVzKGlkS2V5KSlcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyID0gXy5vbWl0KHBhcmFtcywgXy5rZXlzKGlkS2V5KSlcbiAgICBpZighXy5pc0VtcHR5KGZpbHRlcikpIHtcbiAgICAgIHJpLmZpbHRlciA9IGZpbHRlclxuICAgIH1cblxuICAgIHJldHVybiByaVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlUeXBlU2x1Z0Zyb21Sb3V0ZXJTdGF0ZShcbiAgICByb3V0ZXJTdGF0ZTogaVJvdXRlclN0YXRlVXJsXG4gICk6IFVybFNsdWcge1xuICAgIGxldCBzZWdtZW50cyA9IF8ubWFwKHJvdXRlclN0YXRlLnNlZ21lbnRzLCAncGF0aCcpXG5cbiAgICBpZihfLmhlYWQoc2VnbWVudHMpID09ICdhcHAnKSB7XG4gICAgICBzZWdtZW50cyA9IF8uZHJvcChzZWdtZW50cylcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0gXy52YWx1ZXMocm91dGVyU3RhdGUucGFyYW1zKVxuXG5cbiAgICBsZXQgc2VnbWVudHNXaXRob3V0UGFyYW0gPSAoc2VnbWVudHMsIHBhcmFtKSA9PiB7XG4gICAgICBpZihfLmxhc3Qoc2VnbWVudHMpID09IHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBfLmRyb3BSaWdodChzZWdtZW50cylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VnbWVudHNcbiAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgZmluYWxTZWdtZW50cyA9IF8ucmVkdWNlKHBhcmFtcywgc2VnbWVudHNXaXRob3V0UGFyYW0sIHNlZ21lbnRzKVxuXG4gICAgcmV0dXJuIGZpbmFsU2VnbWVudHNbMF1cbiAgfVxuXG4gIHByaXZhdGUgZmVhdHVyZVJvdXRhYmxlRW50aXRpZXMkKGZlYXR1cmVzKSB7XG4gICAgbGV0IGdldFJvdXRhYmxlRW50aXRpZXMgPSBfLmJpbmQodGhpcy5nZXRSb3V0YWJsZUVudGl0aWVzLCB0aGlzKVxuICAgIGxldCByb3V0YWJsZUVudGl0aWVzID0gXy5tYXAoZmVhdHVyZXMsIGdldFJvdXRhYmxlRW50aXRpZXMpXG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChyb3V0YWJsZUVudGl0aWVzKS5waXBlKFxuICAgICAgbWFwKHJvdXRhYmxlRW50aXR5Q29sbGVjdGlvbnMgPT4ge1xuICAgICAgICBsZXQgZW50aXRpZXMgPSBfLmZsYXR0ZW4oXy5tYXAocm91dGFibGVFbnRpdHlDb2xsZWN0aW9ucywgJ2VudGl0aWVzJykpXG4gICAgICAgIHJldHVybiBuZXcgRW50aXR5Q29sbGVjdGlvbihlbnRpdGllcylcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGFibGVFbnRpdGllcyhmZWF0dXJlLCBmZWF0dXJlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlQ29uZmlndXJhdGlvbnMkKGZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoY29sbGVjdGlvbiA9PiB0aGlzLnJvdXRhYmxlUmVzb3VyY2VDb25maWd1cmF0aW9ucyhjb2xsZWN0aW9uKSksXG4gICAgICBtYXAoY29sbGVjdGlvbiA9PiB0aGlzLmJ1aWxkUmVzb3VyY2VJZGVudGlmaWVycyhmZWF0dXJlLCBjb2xsZWN0aW9uKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSByb3V0YWJsZVJlc291cmNlQ29uZmlndXJhdGlvbnMoXG4gICAgY29sbGVjdGlvbjogaUVudGl0eUNvbGxlY3Rpb25cbiAgKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHJldHVybiBjb2xsZWN0aW9uLndoZXJlKHtpc1JvdXRhYmxlOiB0cnVlfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VDb25maWd1cmF0aW9ucyQoZmVhdHVyZSkge1xuICAgIGxldCByaSA9IHtcbiAgICAgIGZlYXR1cmU6IGZlYXR1cmUubmFtZSxcbiAgICAgIHR5cGU6ICdyZXNvdXJjZS1jb25maWd1cmF0aW9ucycsXG4gICAgfVxuICAgIGxldCBkYXRhT3B0cyA9IHtcbiAgICAgIHN5bmNXaXRoQXBpOiBmYWxzZSxcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXQkKHJpLCBkYXRhT3B0cylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXJzKGZlYXR1cmUsIGNvbGxlY3Rpb24pIHtcbiAgICBsZXQgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBsZXQgcmkgPSB7XG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmUubmFtZSxcbiAgICAgICAgdHlwZTogZW50aXR5LnJlc291cmNlVHlwZSxcbiAgICAgIH1cblxuICAgICAgbGV0IGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHJlc291cmNlSWRlbnRpZmllcjogcmksXG4gICAgICAgIHVybFNsdWc6IGVudGl0eS5kaXNwbGF5U2x1ZyxcbiAgICAgICAgcHJpbWFyeUtleXM6IGVudGl0eS5wcmltYXJ5S2V5c1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGVudGl0eS5pZCxcbiAgICAgICAgdHlwZTogJ3Jlc291cmNlLWlkZW50aWZpZXJzJyxcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgSnNvbkFwaUVudGl0eShkYXRhKVxuICAgIH1cbiAgICBsZXQgZW50aXRpZXMgPSBfLm1hcChjb2xsZWN0aW9uLmVudGl0aWVzLCBidWlsZFJlc291cmNlSWRlbnRpZmllcilcbiAgICByZXR1cm4gbmV3IEVudGl0eUNvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBwcml2YXRlIGdldCBmZWF0dXJlcyQoKTogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4ge1xuICAgIGlmKCF0aGlzLl9mZWF0dXJlcyQpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVzJCA9IHRoaXMuZ2V0RmVhdHVyZXMkKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZXMkXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgcmV0dXJuIDxPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPj50aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICB9XG5cblxufVxuIl19