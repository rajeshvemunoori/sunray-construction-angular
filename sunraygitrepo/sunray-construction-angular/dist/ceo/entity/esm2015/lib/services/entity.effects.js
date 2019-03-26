/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable, } from 'rxjs';
import { switchMap, map, mergeMap, filter, } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
// @ngrx imports
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { typeFor, applicationConfigSelectors, ApplicationConfigActions, } from '@ceo/state';
import { EntityService } from './entity.service';
import { FeatureActions, } from '../state/index';
import { EntityActions, EntityActionsMap, } from '../classes/index';
import { FEATURE_CONFIG, } from '../util/tokens';
import { ResourceIdentifierService } from './resource-identifier.service';
export class EntityEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} entityService
     * @param {?} featureConfig
     * @param {?} resourceIdentifierService
     */
    constructor(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap((action) => {
            /** @type {?} */
            let registerFeatureAction = new FeatureActions.RegisterFeature(this.featureConfig);
            /** @type {?} */
            let loadSeedAction = new EntityActions.LoadSeedData(this.featureName, this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap((action) => {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            let seeds = action.payload.seedEntities;
            /** @type {?} */
            let buildLoadAction = (ri) => {
                /** @type {?} */
                let sliceName = this.getFeatureEntitySlice(feature.name, ri.type);
                return new EntityActions.Load(sliceName, ri);
            };
            return _.map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType(...this.sliceActions("LOAD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.get$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType(...this.sliceActions("ADD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.create$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType(...this.sliceActions("UPDATE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.update$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map((action) => {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: this.groupedEntities(action.payload),
            };
        }), switchMap((payload) => {
            return this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType(...this.sliceActions("DELETE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.delete$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.DeleteSuccess(this.getEntitySlice(payload.resourceIdentifier.type), payload.resourceIdentifier.payload);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(() => {
            return this.store.select(applicationConfigSelectors.resourceById);
        }), filter((payload) => this.isValidPayload(payload)), mergeMap((payload) => {
            return this.entityService.get$(payload);
        }), filter((payload) => this.isValidResource(payload)), map((payload) => {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    ngrxOnIdentifyEffects() {
        return this.featureName;
    }
    /**
     * @return {?}
     */
    ngrxOnInitEffects() {
        /** @type {?} */
        let initFeatureAction = new EntityActions.Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    }
    /*
      ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
        return this.actions$.pipe(
          tap(action => {
            console.log("in OnRunEffects, action: ", action.type, ", feature: ", this.featureName)
          }),
          exhaustMap(() => {
            let featureName = this.featureName
            return resolvedEffects$
          })
        )
      }
      */
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddToStoreActions(payload) {
        /** @type {?} */
        let actions = [];
        /** @type {?} */
        let addActions = _.map(payload.data, _.bind(this.buildAddEntitiesAction, this));
        actions = actions.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            let scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions = actions.concat([scopeAction]);
        }
        return _.flatten(actions);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddEntitiesAction(payload) {
        return new EntityActions.AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddScopeEntitiesAction(payload) {
        /** @type {?} */
        let ri = payload.resourceIdentifier;
        /** @type {?} */
        let scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        let hasEntityType = (payload) => {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        let sliceNamePayload = _.find(payload.data, hasEntityType);
        /** @type {?} */
        let entities = sliceNamePayload.entities;
        /** @type {?} */
        let actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new EntityActions.SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    groupedEntities(payload) {
        /** @type {?} */
        let entities = payload.data;
        /** @type {?} */
        let groupedBySlice = (entityTypeMap, entity) => {
            /** @type {?} */
            let sliceName = entity.constructor.sliceName;
            /** @type {?} */
            var entities = [];
            if (entityTypeMap[sliceName]) {
                entities = entityTypeMap[sliceName].entities;
            }
            entities.push(entity);
            entityTypeMap[sliceName] = {
                sliceName: sliceName,
                entities: entities
            };
            return entityTypeMap;
        };
        return _.values(_.reduce(entities, groupedBySlice, {}));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidPayload(payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return _.has(payload, 'feature') &&
            _.has(payload, 'type') &&
            _.has(payload, 'id');
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidResource(payload) {
        return payload;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    buildResourceOpts(action) {
        /** @type {?} */
        let ri = {
            type: _.last(_.split(action.slice, "."))
        };
        ri = _.merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: _.last(_.split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    featureAction(actionName) {
        /** @type {?} */
        let featureName = this.featureConfig.name;
        return typeFor(featureName, EntityActionsMap[actionName]);
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    sliceActions(actionName) {
        /** @type {?} */
        let buildActionType = (sliceName) => {
            return typeFor(sliceName, EntityActionsMap[actionName]);
        };
        /** @type {?} */
        let sliceActions = _.map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions;
    }
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    getSliceName(resourceOpts) {
        return _.join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    }
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    getEntitySlice(sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    }
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    getFeatureEntitySlice(featureName, sliceName) {
        return _.join([featureName, 'entities', sliceName], '.');
    }
}
EntityEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: EntityService },
    { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
    { type: ResourceIdentifierService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "init$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "seed$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "load$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "add$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "update$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "asyncSuccess$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "delete$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "loadApplicationResource$", void 0);
if (false) {
    /** @type {?} */
    EntityEffects.prototype.featureName;
    /** @type {?} */
    EntityEffects.prototype.init$;
    /** @type {?} */
    EntityEffects.prototype.seed$;
    /** @type {?} */
    EntityEffects.prototype.load$;
    /** @type {?} */
    EntityEffects.prototype.add$;
    /** @type {?} */
    EntityEffects.prototype.update$;
    /** @type {?} */
    EntityEffects.prototype.asyncSuccess$;
    /** @type {?} */
    EntityEffects.prototype.delete$;
    /** @type {?} */
    EntityEffects.prototype.loadApplicationResource$;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.actions$;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.entityService;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.featureConfig;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.resourceIdentifierService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbnRpdHkuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEdBSVgsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsU0FBUyxFQUNHLEdBQUcsRUFBRSxRQUFRLEVBQ2hCLE1BQU0sR0FFaEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFnQixhQUFhLENBQUE7QUFDckQsT0FBTyxFQUNMLE9BQU8sRUFBRSxNQUFNLEVBQ2YsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsMEJBQTBCLEVBQUUsd0JBQXdCLEdBRXJELE1BQU0sWUFBWSxDQUFBO0FBRW5CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBNEIsa0JBQWtCLENBQUE7QUFFdEUsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEdBQ2pCLE1BQU0sa0JBQWtCLENBQUE7QUFlekIsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBR3pFLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQUt4QixZQUNZLEtBQWlCLEVBQ2pCLFFBQXNCLEVBQ3RCLGFBQTRCLEVBQ0osYUFBYSxFQUNyQyx5QkFBb0Q7UUFKcEQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQ3RCLGtC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REFlL0I7OztJQXJJTCxvQ0FBK0I7O0lBWS9CLDhCQVVLOztJQUVMLDhCQWdCSzs7SUFFTCw4QkFZSTs7SUFFSiw2QkFZSzs7SUFFTCxnQ0FZSzs7SUFFTCxzQ0FjSzs7SUFFTCxnQ0FlSzs7SUFFTCxpREFnQks7Ozs7O0lBbElILDhCQUEyQjs7Ozs7SUFDM0IsaUNBQWdDOzs7OztJQUNoQyxzQ0FBc0M7Ozs7O0lBQ3RDLHNDQUErQzs7Ozs7SUFDL0Msa0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgZGVmZXIsXG4gIGNvbWJpbmVMYXRlc3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIHN3aXRjaE1hcCxcbiAgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCxcbiAgZmxhdE1hcCwgZmlsdGVyLCB0YXAsXG4gIGV4aGF1c3RNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG4vLyBAbmdyeCBpbXBvcnRzXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHtcbiAgQWN0aW9ucywgRWZmZWN0LFxuICBvZlR5cGUsIE9uSWRlbnRpZnlFZmZlY3RzLFxuICBPbkluaXRFZmZlY3RzLCBPblJ1bkVmZmVjdHMsXG4gIEVmZmVjdE5vdGlmaWNhdGlvbixcbn0gZnJvbSAnQG5ncngvZWZmZWN0cydcblxuaW1wb3J0IHtcbiAgdHlwZUZvciwgUGF5bG9hZEFjdGlvbixcbiAgYXBwbGljYXRpb25Db25maWdTZWxlY3RvcnMsIEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9ucyxcbiAgc3lzdGVtQ29tcG9uZW50c1NlbGVjdG9ycywgU3lzdGVtQ29tcG9uZW50c0FjdGlvbnMsXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9lbnRpdHkuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUFjdGlvbnMsXG59IGZyb20gJy4uL3N0YXRlL2luZGV4J1xuXG5pbXBvcnQge1xuICBFbnRpdHlBY3Rpb25zLFxuICBFbnRpdHlBY3Rpb25zTWFwLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBFbnRpdHlDb25maWdBY3Rpb25zLFxufSBmcm9tICcuLi9zdGF0ZS9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpQXBpUmVzcG9uc2UsXG4gIGlFbnRpdHlTbGljZU5hbWVQYXlsb2FkLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgaUVudGl0eU1hcCxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRkVBVFVSRV9DT05GSUcsXG59IGZyb20gJy4uL3V0aWwvdG9rZW5zJ1xuXG5pbXBvcnQgeyBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZXNvdXJjZS1pZGVudGlmaWVyLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlFZmZlY3RzXG4gIGltcGxlbWVudHMgT25JZGVudGlmeUVmZmVjdHMsIE9uSW5pdEVmZmVjdHMge1xuXG4gIGZlYXR1cmVOYW1lOiBzdHJpbmcgPSAnRmVhdHVyZSdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICAgcHJvdGVjdGVkIGVudGl0eVNlcnZpY2U6IEVudGl0eVNlcnZpY2UsXG4gICAgQEluamVjdChGRUFUVVJFX0NPTkZJRykgcHJvdGVjdGVkIGZlYXR1cmVDb25maWcsXG4gICAgcHJvdGVjdGVkIHJlc291cmNlSWRlbnRpZmllclNlcnZpY2U6IFJlc291cmNlSWRlbnRpZmllclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5mZWF0dXJlTmFtZSA9IGZlYXR1cmVDb25maWcubmFtZVxuICB9XG5cbiAgQEVmZmVjdCgpXG4gIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUodGhpcy5mZWF0dXJlQWN0aW9uKFwiSU5JVFwiKSksXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlZ2lzdGVyRmVhdHVyZUFjdGlvbiA9IG5ldyBGZWF0dXJlQWN0aW9ucy5SZWdpc3RlckZlYXR1cmUodGhpcy5mZWF0dXJlQ29uZmlnKVxuICAgICAgICAgIGxldCBsb2FkU2VlZEFjdGlvbiA9IG5ldyBFbnRpdHlBY3Rpb25zLkxvYWRTZWVkRGF0YSh0aGlzLmZlYXR1cmVOYW1lLCB0aGlzLmZlYXR1cmVDb25maWcpXG4gICAgICAgICAgcmV0dXJuIFtyZWdpc3RlckZlYXR1cmVBY3Rpb24sIGxvYWRTZWVkQWN0aW9uXVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgc2VlZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSh0aGlzLmZlYXR1cmVBY3Rpb24oXCJMT0FEX1NFRURfREFUQVwiKSksXG4gICAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgdmFyIGZlYXR1cmUgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgIGxldCBzZWVkcyA9IGFjdGlvbi5wYXlsb2FkLnNlZWRFbnRpdGllc1xuXG4gICAgICAgICAgbGV0IGJ1aWxkTG9hZEFjdGlvbiA9IChyaTogaVJlc291cmNlSWRlbnRpZmllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHNsaWNlTmFtZSA9IHRoaXMuZ2V0RmVhdHVyZUVudGl0eVNsaWNlKGZlYXR1cmUubmFtZSwgcmkudHlwZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5Mb2FkKHNsaWNlTmFtZSwgcmkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF8ubWFwKHNlZWRzLCBidWlsZExvYWRBY3Rpb24pXG4gICAgICAgIH0pLFxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgIC5waXBlKFxuICAgICAgIG9mVHlwZSguLi50aGlzLnNsaWNlQWN0aW9ucyhcIkxPQURcIikpLFxuICAgICAgIG1lcmdlTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgIGxldCByZXNvdXJjZU9wdHMgPSB0aGlzLmJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbilcbiAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UuZ2V0JChyZXNvdXJjZU9wdHMpXG4gICAgICAgfSksXG4gICAgICAgbWFwKChwYXlsb2FkOiBpQXBpUmVzcG9uc2UpID0+IHtcbiAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5Bc3luY1N1Y2Nlc3ModGhpcy5mZWF0dXJlTmFtZSwgcGF5bG9hZClcbiAgICAgICB9KVxuICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGFkZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSguLi50aGlzLnNsaWNlQWN0aW9ucyhcIkFERFwiKSksXG4gICAgICAgIG1lcmdlTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmVzb3VyY2VPcHRzID0gdGhpcy5idWlsZFJlc291cmNlT3B0cyhhY3Rpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5jcmVhdGUkKHJlc291cmNlT3B0cylcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgocGF5bG9hZDogaUFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkFzeW5jU3VjY2Vzcyh0aGlzLmZlYXR1cmVOYW1lLCBwYXlsb2FkKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGUkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJVUERBVEVcIikpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UudXBkYXRlJChyZXNvdXJjZU9wdHMpXG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5Bc3luY1N1Y2Nlc3ModGhpcy5mZWF0dXJlTmFtZSwgcGF5bG9hZClcbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGFzeW5jU3VjY2VzcyQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSh0aGlzLmZlYXR1cmVBY3Rpb24oXCJBU1lOQ19TVUNDRVNTXCIpKSxcbiAgICAgICAgbWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzb3VyY2VJZGVudGlmaWVyOiBhY3Rpb24ucGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmdyb3VwZWRFbnRpdGllcyhhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc3dpdGNoTWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEFkZFRvU3RvcmVBY3Rpb25zKHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSguLi50aGlzLnNsaWNlQWN0aW9ucyhcIkRFTEVURVwiKSksXG4gICAgICAgIG1lcmdlTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmVzb3VyY2VPcHRzID0gdGhpcy5idWlsZFJlc291cmNlT3B0cyhhY3Rpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5kZWxldGUkKHJlc291cmNlT3B0cylcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgocGF5bG9hZDogaUFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkRlbGV0ZVN1Y2Nlc3MoXG4gICAgICAgICAgICB0aGlzLmdldEVudGl0eVNsaWNlKHBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyLnR5cGUpLFxuICAgICAgICAgICAgcGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIucGF5bG9hZFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgbG9hZEFwcGxpY2F0aW9uUmVzb3VyY2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoJ1tBcHBsaWNhdGlvbkNvbmZpZ10gTE9BRF9SRVNPVVJDRV9CWV9JRCcpLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGFwcGxpY2F0aW9uQ29uZmlnU2VsZWN0b3JzLnJlc291cmNlQnlJZClcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigocGF5bG9hZCkgPT4gdGhpcy5pc1ZhbGlkUGF5bG9hZChwYXlsb2FkKSksXG4gICAgICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5nZXQkKHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKHBheWxvYWQpID0+IHRoaXMuaXNWYWxpZFJlc291cmNlKHBheWxvYWQpKSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9ucy5TZXRQcmltYXJ5RW50aXR5KHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cblxuICBuZ3J4T25JZGVudGlmeUVmZmVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU5hbWVcbiAgfVxuXG4gIG5ncnhPbkluaXRFZmZlY3RzKCk6IEFjdGlvbiB7XG4gICAgbGV0IGluaXRGZWF0dXJlQWN0aW9uID0gbmV3IEVudGl0eUFjdGlvbnMuSW5pdCh0aGlzLmZlYXR1cmVOYW1lLCB0aGlzLmZlYXR1cmVDb25maWcpXG4gICAgcmV0dXJuIGluaXRGZWF0dXJlQWN0aW9uXG4gIH1cblxuXG5cbiAgLypcbiAgbmdyeE9uUnVuRWZmZWN0cyhyZXNvbHZlZEVmZmVjdHMkOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj4pIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgdGFwKGFjdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gT25SdW5FZmZlY3RzLCBhY3Rpb246IFwiLCBhY3Rpb24udHlwZSwgXCIsIGZlYXR1cmU6IFwiLCB0aGlzLmZlYXR1cmVOYW1lKVxuICAgICAgfSksXG4gICAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgICAgbGV0IGZlYXR1cmVOYW1lID0gdGhpcy5mZWF0dXJlTmFtZVxuICAgICAgICByZXR1cm4gcmVzb2x2ZWRFZmZlY3RzJFxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgKi9cblxuXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuXG4gIHByaXZhdGUgYnVpbGRBZGRUb1N0b3JlQWN0aW9ucyhwYXlsb2FkKSB7XG4gICAgbGV0IGFjdGlvbnMgPSBbXVxuICAgIGxldCBhZGRBY3Rpb25zID0gXy5tYXAocGF5bG9hZC5kYXRhLCBfLmJpbmQodGhpcy5idWlsZEFkZEVudGl0aWVzQWN0aW9uLCB0aGlzKSlcbiAgICBhY3Rpb25zID0gYWN0aW9ucy5jb25jYXQoYWRkQWN0aW9ucylcblxuICAgIGlmKHRoaXMucmVzb3VyY2VJZGVudGlmaWVyU2VydmljZS5pc1Njb3BlKHBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyKSkge1xuICAgICAgbGV0IHNjb3BlQWN0aW9uID0gdGhpcy5idWlsZEFkZFNjb3BlRW50aXRpZXNBY3Rpb24ocGF5bG9hZClcbiAgICAgIGFjdGlvbnMgPSBhY3Rpb25zLmNvbmNhdChbc2NvcGVBY3Rpb25dKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZsYXR0ZW4oYWN0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZGRFbnRpdGllc0FjdGlvbihwYXlsb2FkOiBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZCkge1xuICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5BZGRTdG9yZUVudGl0aWVzKFxuICAgICAgdGhpcy5nZXRFbnRpdHlTbGljZShwYXlsb2FkLnNsaWNlTmFtZSksXG4gICAgICBwYXlsb2FkLmVudGl0aWVzLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZGRTY29wZUVudGl0aWVzQWN0aW9uKHBheWxvYWQ6IGFueSkge1xuICAgIGxldCByaSA9IHBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyXG4gICAgbGV0IHNjb3BlTmFtZSA9IHRoaXMucmVzb3VyY2VJZGVudGlmaWVyU2VydmljZS5zY29wZU5hbWUocmkpXG5cbiAgICB2YXIgc2xpY2VOYW1lID0gcmkudHlwZVxuICAgIGxldCBoYXNFbnRpdHlUeXBlID0gKHBheWxvYWQ6IGlFbnRpdHlTbGljZU5hbWVQYXlsb2FkKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gcGF5bG9hZC5zbGljZU5hbWUgPT0gc2xpY2VOYW1lXG4gICAgfVxuXG4gICAgbGV0IHNsaWNlTmFtZVBheWxvYWQgPSBfLmZpbmQocGF5bG9hZC5kYXRhLCBoYXNFbnRpdHlUeXBlKVxuICAgIGxldCBlbnRpdGllcyA9IHNsaWNlTmFtZVBheWxvYWQuZW50aXRpZXNcblxuICAgIGxldCBhY3Rpb25QYXlsb2FkID0ge1xuICAgICAgc2NvcGU6IHNjb3BlTmFtZSxcbiAgICAgIGVudGl0aWVzOiBlbnRpdGllc1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5TZXRTY29wZUVudGl0aWVzKFxuICAgICAgdGhpcy5nZXRFbnRpdHlTbGljZShzbGljZU5hbWUpLFxuICAgICAgYWN0aW9uUGF5bG9hZCxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGdyb3VwZWRFbnRpdGllcyhwYXlsb2FkOiBpQXBpUmVzcG9uc2UpOiBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZFtdIHtcbiAgICBsZXQgZW50aXRpZXMgPSBwYXlsb2FkLmRhdGFcblxuICAgIGxldCBncm91cGVkQnlTbGljZSA9IChlbnRpdHlUeXBlTWFwLCBlbnRpdHkpID0+IHtcbiAgICAgIGxldCBzbGljZU5hbWUgPSBlbnRpdHkuY29uc3RydWN0b3Iuc2xpY2VOYW1lXG4gICAgICB2YXIgZW50aXRpZXMgPSBbXVxuICAgICAgaWYoZW50aXR5VHlwZU1hcFtzbGljZU5hbWVdKSB7XG4gICAgICAgIGVudGl0aWVzID0gZW50aXR5VHlwZU1hcFtzbGljZU5hbWVdLmVudGl0aWVzXG4gICAgICB9XG4gICAgICBlbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgICAgIGVudGl0eVR5cGVNYXBbc2xpY2VOYW1lXSA9IHtcbiAgICAgICAgc2xpY2VOYW1lOiBzbGljZU5hbWUsXG4gICAgICAgIGVudGl0aWVzOiBlbnRpdGllc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW50aXR5VHlwZU1hcFxuICAgIH1cblxuICAgIHJldHVybiAgXy52YWx1ZXMoXy5yZWR1Y2UoZW50aXRpZXMsIGdyb3VwZWRCeVNsaWNlLCB7fSkpXG4gIH1cblxuXG4gIHByaXZhdGUgaXNWYWxpZFBheWxvYWQocGF5bG9hZCkge1xuICAgIC8vVE9ETzogQERlZXBhayAgLSBpdCBzaG91bGQgZW5zdXJlIHRoZSBwYXlsb2FkIGlzIGZvciBUSElTIGZlYXR1cmVcbiAgICByZXR1cm4gXy5oYXMocGF5bG9hZCwgJ2ZlYXR1cmUnKSAmJlxuICAgIF8uaGFzKHBheWxvYWQsICd0eXBlJykgJiZcbiAgICBfLmhhcyhwYXlsb2FkLCAnaWQnKVxuICB9XG5cbiAgcHJpdmF0ZSBpc1ZhbGlkUmVzb3VyY2UocGF5bG9hZCkge1xuICAgIHJldHVybiBwYXlsb2FkXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbikge1xuICAgIGxldCByaSA9IHtcbiAgICAgIHR5cGU6IF8ubGFzdChfLnNwbGl0KGFjdGlvbi5zbGljZSwgXCIuXCIpKVxuICAgIH1cbiAgICByaSA9IF8ubWVyZ2Uoe30sIHJpLCBhY3Rpb24ucGF5bG9hZClcblxuICAgIHJldHVybiB7XG4gICAgICBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIHR5cGU6IF8ubGFzdChfLnNwbGl0KGFjdGlvbi5zbGljZSwgXCIuXCIpKSxcbiAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICByZXNvdXJjZUlkZW50aWZpZXI6IHJpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmVhdHVyZUFjdGlvbihhY3Rpb25OYW1lKSB7XG4gICAgbGV0IGZlYXR1cmVOYW1lID0gdGhpcy5mZWF0dXJlQ29uZmlnLm5hbWVcbiAgICByZXR1cm4gdHlwZUZvcihmZWF0dXJlTmFtZSwgRW50aXR5QWN0aW9uc01hcFthY3Rpb25OYW1lXSlcbiAgfVxuXG4gIHByaXZhdGUgc2xpY2VBY3Rpb25zKGFjdGlvbk5hbWUpIHtcbiAgICBsZXQgYnVpbGRBY3Rpb25UeXBlID0gKHNsaWNlTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHR5cGVGb3Ioc2xpY2VOYW1lLCBFbnRpdHlBY3Rpb25zTWFwW2FjdGlvbk5hbWVdKVxuICAgIH1cbiAgICBsZXQgc2xpY2VBY3Rpb25zID0gXy5tYXAodGhpcy5mZWF0dXJlQ29uZmlnLnNsaWNlTmFtZXMsIGJ1aWxkQWN0aW9uVHlwZSlcbiAgICByZXR1cm4gc2xpY2VBY3Rpb25zXG4gIH1cblxuICBwcml2YXRlIGdldFNsaWNlTmFtZShyZXNvdXJjZU9wdHMpIHtcbiAgICByZXR1cm4gXy5qb2luKFtyZXNvdXJjZU9wdHMuZmVhdHVyZSwgJ2VudGl0aWVzJywgcmVzb3VyY2VPcHRzLnR5cGVdLCAnLicpXG4gIH1cblxuICBwcml2YXRlIGdldEVudGl0eVNsaWNlKHNsaWNlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmVFbnRpdHlTbGljZSh0aGlzLmZlYXR1cmVOYW1lLCBzbGljZU5hbWUpXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVFbnRpdHlTbGljZShmZWF0dXJlTmFtZSwgc2xpY2VOYW1lKSB7XG4gICAgcmV0dXJuIF8uam9pbihbZmVhdHVyZU5hbWUsJ2VudGl0aWVzJywgc2xpY2VOYW1lXSwgJy4nKVxuICB9XG59XG4iXX0=