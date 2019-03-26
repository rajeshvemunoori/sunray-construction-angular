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
var EntityEffects = /** @class */ (function () {
    function EntityEffects(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap(function (action) {
            /** @type {?} */
            var registerFeatureAction = new FeatureActions.RegisterFeature(_this.featureConfig);
            /** @type {?} */
            var loadSeedAction = new EntityActions.LoadSeedData(_this.featureName, _this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap(function (action) {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            var seeds = action.payload.seedEntities;
            /** @type {?} */
            var buildLoadAction = function (ri) {
                /** @type {?} */
                var sliceName = _this.getFeatureEntitySlice(feature.name, ri.type);
                return new EntityActions.Load(sliceName, ri);
            };
            return _.map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("LOAD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.get$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("ADD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.create$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("UPDATE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.update$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map(function (action) {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: _this.groupedEntities(action.payload),
            };
        }), switchMap(function (payload) {
            return _this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("DELETE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.delete$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.DeleteSuccess(_this.getEntitySlice(payload.resourceIdentifier.type), payload.resourceIdentifier.payload);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(function () {
            return _this.store.select(applicationConfigSelectors.resourceById);
        }), filter(function (payload) { return _this.isValidPayload(payload); }), mergeMap(function (payload) {
            return _this.entityService.get$(payload);
        }), filter(function (payload) { return _this.isValidResource(payload); }), map(function (payload) {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnIdentifyEffects = /**
     * @return {?}
     */
    function () {
        return this.featureName;
    };
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnInitEffects = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initFeatureAction = new EntityActions.Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    };
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
    EntityEffects.prototype.buildAddToStoreActions = /*
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
    function (payload) {
        /** @type {?} */
        var actions = [];
        /** @type {?} */
        var addActions = _.map(payload.data, _.bind(this.buildAddEntitiesAction, this));
        actions = actions.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            var scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions = actions.concat([scopeAction]);
        }
        return _.flatten(actions);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return new EntityActions.AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddScopeEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var ri = payload.resourceIdentifier;
        /** @type {?} */
        var scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        var hasEntityType = function (payload) {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        var sliceNamePayload = _.find(payload.data, hasEntityType);
        /** @type {?} */
        var entities = sliceNamePayload.entities;
        /** @type {?} */
        var actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new EntityActions.SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.groupedEntities = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var entities = payload.data;
        /** @type {?} */
        var groupedBySlice = function (entityTypeMap, entity) {
            /** @type {?} */
            var sliceName = entity.constructor.sliceName;
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
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidPayload = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return _.has(payload, 'feature') &&
            _.has(payload, 'type') &&
            _.has(payload, 'id');
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidResource = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload;
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    EntityEffects.prototype.buildResourceOpts = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        /** @type {?} */
        var ri = {
            type: _.last(_.split(action.slice, "."))
        };
        ri = _.merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: _.last(_.split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.featureAction = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var featureName = this.featureConfig.name;
        return typeFor(featureName, EntityActionsMap[actionName]);
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.sliceActions = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var buildActionType = function (sliceName) {
            return typeFor(sliceName, EntityActionsMap[actionName]);
        };
        /** @type {?} */
        var sliceActions = _.map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions;
    };
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    EntityEffects.prototype.getSliceName = /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    function (resourceOpts) {
        return _.join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    };
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getEntitySlice = /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    function (sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    };
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getFeatureEntitySlice = /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    function (featureName, sliceName) {
        return _.join([featureName, 'entities', sliceName], '.');
    };
    EntityEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions },
        { type: EntityService },
        { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
        { type: ResourceIdentifierService }
    ]; };
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
    return EntityEffects;
}());
export { EntityEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbnRpdHkuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEdBSVgsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsU0FBUyxFQUNHLEdBQUcsRUFBRSxRQUFRLEVBQ2hCLE1BQU0sR0FFaEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFnQixhQUFhLENBQUE7QUFDckQsT0FBTyxFQUNMLE9BQU8sRUFBRSxNQUFNLEVBQ2YsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsMEJBQTBCLEVBQUUsd0JBQXdCLEdBRXJELE1BQU0sWUFBWSxDQUFBO0FBRW5CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBNEIsa0JBQWtCLENBQUE7QUFFdEUsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEdBQ2pCLE1BQU0sa0JBQWtCLENBQUE7QUFlekIsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRXpFO0lBTUUsdUJBQ1ksS0FBaUIsRUFDakIsUUFBc0IsRUFDdEIsYUFBNEIsRUFDSixhQUFhLEVBQ3JDLHlCQUFvRDtRQUxoRSxpQkFRQztRQVBXLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUN0QixrQkFBYSxHQUFiLGFB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QUEsQUExUkQsSUEwUkM7U0F6UlksYUFBYTs7O0lBR3hCLG9DQUErQjs7SUFZL0IsOEJBVUs7O0lBRUwsOEJBZ0JLOztJQUVMLDhCQVlJOztJQUVKLDZCQVlLOztJQUVMLGdDQVlLOztJQUVMLHNDQWNLOztJQUVMLGdDQWVLOztJQUVMLGlEQWdCSzs7Ozs7SUFsSUgsOEJBQTJCOzs7OztJQUMzQixpQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFzQzs7Ozs7SUFDdEMsc0NBQStDOzs7OztJQUMvQyxrREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBkZWZlcixcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgc3dpdGNoTWFwLFxuICBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLFxuICBmbGF0TWFwLCBmaWx0ZXIsIHRhcCxcbiAgZXhoYXVzdE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbi8vIEBuZ3J4IGltcG9ydHNcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSAgICAgICAgICAgZnJvbSAnQG5ncngvc3RvcmUnXG5pbXBvcnQge1xuICBBY3Rpb25zLCBFZmZlY3QsXG4gIG9mVHlwZSwgT25JZGVudGlmeUVmZmVjdHMsXG4gIE9uSW5pdEVmZmVjdHMsIE9uUnVuRWZmZWN0cyxcbiAgRWZmZWN0Tm90aWZpY2F0aW9uLFxufSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICB0eXBlRm9yLCBQYXlsb2FkQWN0aW9uLFxuICBhcHBsaWNhdGlvbkNvbmZpZ1NlbGVjdG9ycywgQXBwbGljYXRpb25Db25maWdBY3Rpb25zLFxuICBzeXN0ZW1Db21wb25lbnRzU2VsZWN0b3JzLCBTeXN0ZW1Db21wb25lbnRzQWN0aW9ucyxcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2VudGl0eS5zZXJ2aWNlJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlQWN0aW9ucyxcbn0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEVudGl0eUFjdGlvbnMsXG4gIEVudGl0eUFjdGlvbnNNYXAsXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEVudGl0eUNvbmZpZ0FjdGlvbnMsXG59IGZyb20gJy4uL3N0YXRlL2luZGV4J1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlBcGlSZXNwb25zZSxcbiAgaUVudGl0eVNsaWNlTmFtZVBheWxvYWQsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxuICBpRW50aXR5TWFwLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBGRUFUVVJFX0NPTkZJRyxcbn0gZnJvbSAnLi4vdXRpbC90b2tlbnMnXG5cbmltcG9ydCB7IFJlc291cmNlSWRlbnRpZmllclNlcnZpY2UgfSBmcm9tICcuL3Jlc291cmNlLWlkZW50aWZpZXIuc2VydmljZSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUVmZmVjdHNcbiAgaW1wbGVtZW50cyBPbklkZW50aWZ5RWZmZWN0cywgT25Jbml0RWZmZWN0cyB7XG5cbiAgZmVhdHVyZU5hbWU6IHN0cmluZyA9ICdGZWF0dXJlJ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcm90ZWN0ZWQgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PixcbiAgICBwcm90ZWN0ZWQgZW50aXR5U2VydmljZTogRW50aXR5U2VydmljZSxcbiAgICBASW5qZWN0KEZFQVRVUkVfQ09ORklHKSBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VJZGVudGlmaWVyU2VydmljZTogUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZVxuICApIHtcbiAgICB0aGlzLmZlYXR1cmVOYW1lID0gZmVhdHVyZUNvbmZpZy5uYW1lXG4gIH1cblxuICBARWZmZWN0KClcbiAgaW5pdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSh0aGlzLmZlYXR1cmVBY3Rpb24oXCJJTklUXCIpKSxcbiAgICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmVnaXN0ZXJGZWF0dXJlQWN0aW9uID0gbmV3IEZlYXR1cmVBY3Rpb25zLlJlZ2lzdGVyRmVhdHVyZSh0aGlzLmZlYXR1cmVDb25maWcpXG4gICAgICAgICAgbGV0IGxvYWRTZWVkQWN0aW9uID0gbmV3IEVudGl0eUFjdGlvbnMuTG9hZFNlZWREYXRhKHRoaXMuZmVhdHVyZU5hbWUsIHRoaXMuZmVhdHVyZUNvbmZpZylcbiAgICAgICAgICByZXR1cm4gW3JlZ2lzdGVyRmVhdHVyZUFjdGlvbiwgbG9hZFNlZWRBY3Rpb25dXG4gICAgICAgIH0pLFxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBzZWVkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKHRoaXMuZmVhdHVyZUFjdGlvbihcIkxPQURfU0VFRF9EQVRBXCIpKSxcbiAgICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICB2YXIgZmVhdHVyZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgbGV0IHNlZWRzID0gYWN0aW9uLnBheWxvYWQuc2VlZEVudGl0aWVzXG5cbiAgICAgICAgICBsZXQgYnVpbGRMb2FkQWN0aW9uID0gKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2xpY2VOYW1lID0gdGhpcy5nZXRGZWF0dXJlRW50aXR5U2xpY2UoZmVhdHVyZS5uYW1lLCByaS50eXBlKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkxvYWQoc2xpY2VOYW1lLCByaSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gXy5tYXAoc2VlZHMsIGJ1aWxkTG9hZEFjdGlvbilcbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGxvYWQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgLnBpcGUoXG4gICAgICAgb2ZUeXBlKC4uLnRoaXMuc2xpY2VBY3Rpb25zKFwiTE9BRFwiKSksXG4gICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5nZXQkKHJlc291cmNlT3B0cylcbiAgICAgICB9KSxcbiAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkFzeW5jU3VjY2Vzcyh0aGlzLmZlYXR1cmVOYW1lLCBwYXlsb2FkKVxuICAgICAgIH0pXG4gICAgIClcblxuICBARWZmZWN0KClcbiAgYWRkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKC4uLnRoaXMuc2xpY2VBY3Rpb25zKFwiQUREXCIpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZXNvdXJjZU9wdHMgPSB0aGlzLmJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLmNyZWF0ZSQocmVzb3VyY2VPcHRzKVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBpQXBpUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQXN5bmNTdWNjZXNzKHRoaXMuZmVhdHVyZU5hbWUsIHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSguLi50aGlzLnNsaWNlQWN0aW9ucyhcIlVQREFURVwiKSksXG4gICAgICAgIG1lcmdlTWFwKChhY3Rpb246IFBheWxvYWRBY3Rpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmVzb3VyY2VPcHRzID0gdGhpcy5idWlsZFJlc291cmNlT3B0cyhhY3Rpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS51cGRhdGUkKHJlc291cmNlT3B0cylcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgocGF5bG9hZDogaUFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkFzeW5jU3VjY2Vzcyh0aGlzLmZlYXR1cmVOYW1lLCBwYXlsb2FkKVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgYXN5bmNTdWNjZXNzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKHRoaXMuZmVhdHVyZUFjdGlvbihcIkFTWU5DX1NVQ0NFU1NcIikpLFxuICAgICAgICBtYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNvdXJjZUlkZW50aWZpZXI6IGFjdGlvbi5wYXlsb2FkLnJlc291cmNlSWRlbnRpZmllcixcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZ3JvdXBlZEVudGl0aWVzKGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAoKHBheWxvYWQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQWRkVG9TdG9yZUFjdGlvbnMocGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgZGVsZXRlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKC4uLnRoaXMuc2xpY2VBY3Rpb25zKFwiREVMRVRFXCIpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZXNvdXJjZU9wdHMgPSB0aGlzLmJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLmRlbGV0ZSQocmVzb3VyY2VPcHRzKVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBpQXBpUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuRGVsZXRlU3VjY2VzcyhcbiAgICAgICAgICAgIHRoaXMuZ2V0RW50aXR5U2xpY2UocGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIudHlwZSksXG4gICAgICAgICAgICBwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllci5wYXlsb2FkXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkQXBwbGljYXRpb25SZXNvdXJjZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSgnW0FwcGxpY2F0aW9uQ29uZmlnXSBMT0FEX1JFU09VUkNFX0JZX0lEJyksXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoYXBwbGljYXRpb25Db25maWdTZWxlY3RvcnMucmVzb3VyY2VCeUlkKVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChwYXlsb2FkKSA9PiB0aGlzLmlzVmFsaWRQYXlsb2FkKHBheWxvYWQpKSxcbiAgICAgICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLmdldCQocGF5bG9hZClcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigocGF5bG9hZCkgPT4gdGhpcy5pc1ZhbGlkUmVzb3VyY2UocGF5bG9hZCkpLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQXBwbGljYXRpb25Db25maWdBY3Rpb25zLlNldFByaW1hcnlFbnRpdHkocGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgIClcblxuXG4gIG5ncnhPbklkZW50aWZ5RWZmZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlTmFtZVxuICB9XG5cbiAgbmdyeE9uSW5pdEVmZmVjdHMoKTogQWN0aW9uIHtcbiAgICBsZXQgaW5pdEZlYXR1cmVBY3Rpb24gPSBuZXcgRW50aXR5QWN0aW9ucy5Jbml0KHRoaXMuZmVhdHVyZU5hbWUsIHRoaXMuZmVhdHVyZUNvbmZpZylcbiAgICByZXR1cm4gaW5pdEZlYXR1cmVBY3Rpb25cbiAgfVxuXG5cblxuICAvKlxuICBuZ3J4T25SdW5FZmZlY3RzKHJlc29sdmVkRWZmZWN0cyQ6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPikge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICB0YXAoYWN0aW9uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBPblJ1bkVmZmVjdHMsIGFjdGlvbjogXCIsIGFjdGlvbi50eXBlLCBcIiwgZmVhdHVyZTogXCIsIHRoaXMuZmVhdHVyZU5hbWUpXG4gICAgICB9KSxcbiAgICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZU5hbWUgPSB0aGlzLmZlYXR1cmVOYW1lXG4gICAgICAgIHJldHVybiByZXNvbHZlZEVmZmVjdHMkXG4gICAgICB9KVxuICAgIClcbiAgfVxuICAqL1xuXG5cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG5cbiAgcHJpdmF0ZSBidWlsZEFkZFRvU3RvcmVBY3Rpb25zKHBheWxvYWQpIHtcbiAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgbGV0IGFkZEFjdGlvbnMgPSBfLm1hcChwYXlsb2FkLmRhdGEsIF8uYmluZCh0aGlzLmJ1aWxkQWRkRW50aXRpZXNBY3Rpb24sIHRoaXMpKVxuICAgIGFjdGlvbnMgPSBhY3Rpb25zLmNvbmNhdChhZGRBY3Rpb25zKVxuXG4gICAgaWYodGhpcy5yZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLmlzU2NvcGUocGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpKSB7XG4gICAgICBsZXQgc2NvcGVBY3Rpb24gPSB0aGlzLmJ1aWxkQWRkU2NvcGVFbnRpdGllc0FjdGlvbihwYXlsb2FkKVxuICAgICAgYWN0aW9ucyA9IGFjdGlvbnMuY29uY2F0KFtzY29wZUFjdGlvbl0pXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmxhdHRlbihhY3Rpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFkZEVudGl0aWVzQWN0aW9uKHBheWxvYWQ6IGlFbnRpdHlTbGljZU5hbWVQYXlsb2FkKSB7XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLkFkZFN0b3JlRW50aXRpZXMoXG4gICAgICB0aGlzLmdldEVudGl0eVNsaWNlKHBheWxvYWQuc2xpY2VOYW1lKSxcbiAgICAgIHBheWxvYWQuZW50aXRpZXMsXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFkZFNjb3BlRW50aXRpZXNBY3Rpb24ocGF5bG9hZDogYW55KSB7XG4gICAgbGV0IHJpID0gcGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXJcbiAgICBsZXQgc2NvcGVOYW1lID0gdGhpcy5yZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLnNjb3BlTmFtZShyaSlcblxuICAgIHZhciBzbGljZU5hbWUgPSByaS50eXBlXG4gICAgbGV0IGhhc0VudGl0eVR5cGUgPSAocGF5bG9hZDogaUVudGl0eVNsaWNlTmFtZVBheWxvYWQpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiBwYXlsb2FkLnNsaWNlTmFtZSA9PSBzbGljZU5hbWVcbiAgICB9XG5cbiAgICBsZXQgc2xpY2VOYW1lUGF5bG9hZCA9IF8uZmluZChwYXlsb2FkLmRhdGEsIGhhc0VudGl0eVR5cGUpXG4gICAgbGV0IGVudGl0aWVzID0gc2xpY2VOYW1lUGF5bG9hZC5lbnRpdGllc1xuXG4gICAgbGV0IGFjdGlvblBheWxvYWQgPSB7XG4gICAgICBzY29wZTogc2NvcGVOYW1lLFxuICAgICAgZW50aXRpZXM6IGVudGl0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFbnRpdHlBY3Rpb25zLlNldFNjb3BlRW50aXRpZXMoXG4gICAgICB0aGlzLmdldEVudGl0eVNsaWNlKHNsaWNlTmFtZSksXG4gICAgICBhY3Rpb25QYXlsb2FkLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ3JvdXBlZEVudGl0aWVzKHBheWxvYWQ6IGlBcGlSZXNwb25zZSk6IGlFbnRpdHlTbGljZU5hbWVQYXlsb2FkW10ge1xuICAgIGxldCBlbnRpdGllcyA9IHBheWxvYWQuZGF0YVxuXG4gICAgbGV0IGdyb3VwZWRCeVNsaWNlID0gKGVudGl0eVR5cGVNYXAsIGVudGl0eSkgPT4ge1xuICAgICAgbGV0IHNsaWNlTmFtZSA9IGVudGl0eS5jb25zdHJ1Y3Rvci5zbGljZU5hbWVcbiAgICAgIHZhciBlbnRpdGllcyA9IFtdXG4gICAgICBpZihlbnRpdHlUeXBlTWFwW3NsaWNlTmFtZV0pIHtcbiAgICAgICAgZW50aXRpZXMgPSBlbnRpdHlUeXBlTWFwW3NsaWNlTmFtZV0uZW50aXRpZXNcbiAgICAgIH1cbiAgICAgIGVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgZW50aXR5VHlwZU1hcFtzbGljZU5hbWVdID0ge1xuICAgICAgICBzbGljZU5hbWU6IHNsaWNlTmFtZSxcbiAgICAgICAgZW50aXRpZXM6IGVudGl0aWVzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbnRpdHlUeXBlTWFwXG4gICAgfVxuXG4gICAgcmV0dXJuICBfLnZhbHVlcyhfLnJlZHVjZShlbnRpdGllcywgZ3JvdXBlZEJ5U2xpY2UsIHt9KSlcbiAgfVxuXG5cbiAgcHJpdmF0ZSBpc1ZhbGlkUGF5bG9hZChwYXlsb2FkKSB7XG4gICAgLy9UT0RPOiBARGVlcGFrICAtIGl0IHNob3VsZCBlbnN1cmUgdGhlIHBheWxvYWQgaXMgZm9yIFRISVMgZmVhdHVyZVxuICAgIHJldHVybiBfLmhhcyhwYXlsb2FkLCAnZmVhdHVyZScpICYmXG4gICAgXy5oYXMocGF5bG9hZCwgJ3R5cGUnKSAmJlxuICAgIF8uaGFzKHBheWxvYWQsICdpZCcpXG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRSZXNvdXJjZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHBheWxvYWRcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKSB7XG4gICAgbGV0IHJpID0ge1xuICAgICAgdHlwZTogXy5sYXN0KF8uc3BsaXQoYWN0aW9uLnNsaWNlLCBcIi5cIikpXG4gICAgfVxuICAgIHJpID0gXy5tZXJnZSh7fSwgcmksIGFjdGlvbi5wYXlsb2FkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgdHlwZTogXy5sYXN0KF8uc3BsaXQoYWN0aW9uLnNsaWNlLCBcIi5cIikpLFxuICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgIHJlc291cmNlSWRlbnRpZmllcjogcmksXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmZWF0dXJlQWN0aW9uKGFjdGlvbk5hbWUpIHtcbiAgICBsZXQgZmVhdHVyZU5hbWUgPSB0aGlzLmZlYXR1cmVDb25maWcubmFtZVxuICAgIHJldHVybiB0eXBlRm9yKGZlYXR1cmVOYW1lLCBFbnRpdHlBY3Rpb25zTWFwW2FjdGlvbk5hbWVdKVxuICB9XG5cbiAgcHJpdmF0ZSBzbGljZUFjdGlvbnMoYWN0aW9uTmFtZSkge1xuICAgIGxldCBidWlsZEFjdGlvblR5cGUgPSAoc2xpY2VOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gdHlwZUZvcihzbGljZU5hbWUsIEVudGl0eUFjdGlvbnNNYXBbYWN0aW9uTmFtZV0pXG4gICAgfVxuICAgIGxldCBzbGljZUFjdGlvbnMgPSBfLm1hcCh0aGlzLmZlYXR1cmVDb25maWcuc2xpY2VOYW1lcywgYnVpbGRBY3Rpb25UeXBlKVxuICAgIHJldHVybiBzbGljZUFjdGlvbnNcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpY2VOYW1lKHJlc291cmNlT3B0cykge1xuICAgIHJldHVybiBfLmpvaW4oW3Jlc291cmNlT3B0cy5mZWF0dXJlLCAnZW50aXRpZXMnLCByZXNvdXJjZU9wdHMudHlwZV0sICcuJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW50aXR5U2xpY2Uoc2xpY2VOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmVhdHVyZUVudGl0eVNsaWNlKHRoaXMuZmVhdHVyZU5hbWUsIHNsaWNlTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUVudGl0eVNsaWNlKGZlYXR1cmVOYW1lLCBzbGljZU5hbWUpIHtcbiAgICByZXR1cm4gXy5qb2luKFtmZWF0dXJlTmFtZSwnZW50aXRpZXMnLCBzbGljZU5hbWVdLCAnLicpXG4gIH1cbn1cbiJdfQ==