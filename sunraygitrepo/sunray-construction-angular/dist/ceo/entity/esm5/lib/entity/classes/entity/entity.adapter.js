/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createEntityAdapter as ngrxCreateEntityAdapter } from '@ngrx/entity';
import { buildEntityTypeSelectors, } from '../../util/builders/selectors/build-entity-type-selectors';
import { entityReducer } from './reducer/index';
import { EntityCollection } from './entity.collection';
var EntityAdapter = /** @class */ (function () {
    function EntityAdapter(entityOpts) {
        this.featureName = entityOpts.featureName;
        this.entityType = entityOpts.entityType;
        this.entityConfig = this.entityType.config;
        this.entityName = this.entityType.sliceName;
        this.sliceName = this.entityName;
    }
    Object.defineProperty(EntityAdapter.prototype, "entityCollectionType", {
        get: /**
         * @return {?}
         */
        function () {
            return EntityCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "reducer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_reducer', 'buildReducer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "selectors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_selectors', 'buildSelectors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "initialState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_initialState', 'buildInitialState');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "ngrxEntityAdapter", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._ngrxEntityAdapter) {
                this._ngrxEntityAdapter = this.buildNgrxEntityAdapter();
            }
            return this._ngrxEntityAdapter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "scopes", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultScopes = {};
            return _.get(this.entityConfig, 'initialState.scopes', defaultScopes);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildReducer = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var adapter = this.ngrxEntityAdapter;
        /** @type {?} */
        var featureName = this.featureEntitySliceName(this.featureName);
        /** @type {?} */
        var sliceName = this.sliceName;
        /** @type {?} */
        var initialState = this.initialState;
        /** @type {?} */
        var customReducer = this.entityConfig.reducer;
        /** @type {?} */
        var baseReducer = function (state, action) {
            if (state === void 0) { state = initialState; }
            if (customReducer) {
                state = customReducer(state, action);
            }
            state = entityReducer(action, featureName, sliceName, adapter, state);
            return state;
        };
        return baseReducer;
    };
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    EntityAdapter.prototype.featureEntitySliceName = /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    function (featureName) {
        return _.join([featureName, 'entities'], '.');
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildSelectors = /**
     * @private
     * @return {?}
     */
    function () {
        return buildEntityTypeSelectors(this);
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildInitialState = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var entityTypeInitialState = {
            selectedEntityId: null,
        };
        /** @type {?} */
        var initialState = _.merge(entityTypeInitialState, this.entityType.initialState);
        return this.ngrxEntityAdapter.getInitialState(initialState);
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildNgrxEntityAdapter = /**
     * @private
     * @return {?}
     */
    function () {
        return ngrxCreateEntityAdapter();
    };
    /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    EntityAdapter.prototype.getterWithBuilder = /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    function (propName, builder) {
        if (!this[propName]) {
            this[propName] = this[builder]();
        }
        return this[propName];
    };
    return EntityAdapter;
}());
export { EntityAdapter };
if (false) {
    /** @type {?} */
    EntityAdapter.prototype.featureName;
    /** @type {?} */
    EntityAdapter.prototype.entityType;
    /** @type {?} */
    EntityAdapter.prototype.entityConfig;
    /** @type {?} */
    EntityAdapter.prototype.entityName;
    /** @type {?} */
    EntityAdapter.prototype.sliceName;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._initialState;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._ngrxEntityAdapter;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._selectors;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._stateInterface;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._reducer;
    /**
     * @type {?}
     * @private
     */
    EntityAdapter.prototype._entityCollectionType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSx1QkFBdUIsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQVE3RSxPQUFPLEVBQ0wsd0JBQXdCLEdBQ3pCLE1BQU0sMkRBQTJELENBQUE7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFjLGlCQUFpQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFXLHFCQUFxQixDQUFBO0FBRzNEO0lBY0UsdUJBQVksVUFBZTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDbEMsQ0FBQztJQUdELHNCQUFJLCtDQUFvQjs7OztRQUF4QjtZQUNFLE9BQU8sZ0JBQWdCLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQzNELENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxn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SUFDdkIsd0NBQTRCOzs7OztJQUM1QixpQ0FBcUI7Ozs7O0lBQ3JCLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyIGFzIG5ncnhDcmVhdGVFbnRpdHlBZGFwdGVyIH0gZnJvbSAnQG5ncngvZW50aXR5J1xuXG5pbXBvcnQge1xuICBpRW50aXR5U3RhdGUsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlBZGFwdGVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBcbiAgYnVpbGRFbnRpdHlUeXBlU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1lbnRpdHktdHlwZS1zZWxlY3RvcnMnXG5cbmltcG9ydCB7IGVudGl0eVJlZHVjZXIgfSAgICAgICAgIGZyb20gJy4vcmVkdWNlci9pbmRleCdcbmltcG9ydCB7IEVudGl0eUNvbGxlY3Rpb24gfSAgICAgIGZyb20gJy4vZW50aXR5LmNvbGxlY3Rpb24nXG5cblxuZXhwb3J0IGNsYXNzIEVudGl0eUFkYXB0ZXIgaW1wbGVtZW50cyBpRW50aXR5QWRhcHRlciB7XG4gIGZlYXR1cmVOYW1lOiBhbnlcbiAgZW50aXR5VHlwZTogYW55XG4gIGVudGl0eUNvbmZpZzogYW55XG4gIGVudGl0eU5hbWU6IGFueVxuICBzbGljZU5hbWU6IGFueVxuXG4gIHByaXZhdGUgX2luaXRpYWxTdGF0ZTogYW55XG4gIHByaXZhdGUgX25ncnhFbnRpdHlBZGFwdGVyOiBhbnlcbiAgcHJpdmF0ZSBfc2VsZWN0b3JzOiBhbnlcbiAgcHJpdmF0ZSBfc3RhdGVJbnRlcmZhY2U6IGFueVxuICBwcml2YXRlIF9yZWR1Y2VyOiBhbnlcbiAgcHJpdmF0ZSBfZW50aXR5Q29sbGVjdGlvblR5cGU6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGVudGl0eU9wdHM6IGFueSkge1xuICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBlbnRpdHlPcHRzLmZlYXR1cmVOYW1lXG4gICAgdGhpcy5lbnRpdHlUeXBlID0gZW50aXR5T3B0cy5lbnRpdHlUeXBlXG4gICAgdGhpcy5lbnRpdHlDb25maWcgPSB0aGlzLmVudGl0eVR5cGUuY29uZmlnXG5cbiAgICB0aGlzLmVudGl0eU5hbWUgPSB0aGlzLmVudGl0eVR5cGUuc2xpY2VOYW1lXG4gICAgdGhpcy5zbGljZU5hbWUgPSB0aGlzLmVudGl0eU5hbWVcbiAgfVxuXG5cbiAgZ2V0IGVudGl0eUNvbGxlY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiBFbnRpdHlDb2xsZWN0aW9uXG4gIH1cblxuICBnZXQgcmVkdWNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXR0ZXJXaXRoQnVpbGRlcignX3JlZHVjZXInLCAnYnVpbGRSZWR1Y2VyJylcbiAgfVxuXG4gIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0dGVyV2l0aEJ1aWxkZXIoJ19zZWxlY3RvcnMnLCAnYnVpbGRTZWxlY3RvcnMnKVxuICB9XG5cbiAgZ2V0IGluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXR0ZXJXaXRoQnVpbGRlcignX2luaXRpYWxTdGF0ZScsICdidWlsZEluaXRpYWxTdGF0ZScpXG4gIH1cblxuICBnZXQgbmdyeEVudGl0eUFkYXB0ZXIoKSB7XG4gICAgaWYoISB0aGlzLl9uZ3J4RW50aXR5QWRhcHRlcikge1xuICAgICAgdGhpcy5fbmdyeEVudGl0eUFkYXB0ZXIgPSB0aGlzLmJ1aWxkTmdyeEVudGl0eUFkYXB0ZXIoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9uZ3J4RW50aXR5QWRhcHRlclxuICB9XG5cbiAgZ2V0IHNjb3BlcygpIHtcbiAgICBsZXQgZGVmYXVsdFNjb3BlcyA9IHt9XG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuZW50aXR5Q29uZmlnLCAnaW5pdGlhbFN0YXRlLnNjb3BlcycsIGRlZmF1bHRTY29wZXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVkdWNlcigpIHtcbiAgICB2YXIgYWRhcHRlciA9IHRoaXMubmdyeEVudGl0eUFkYXB0ZXJcbiAgICB2YXIgZmVhdHVyZU5hbWUgPSB0aGlzLmZlYXR1cmVFbnRpdHlTbGljZU5hbWUodGhpcy5mZWF0dXJlTmFtZSlcbiAgICB2YXIgc2xpY2VOYW1lID0gdGhpcy5zbGljZU5hbWVcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGVcbiAgICB2YXIgY3VzdG9tUmVkdWNlciA9IHRoaXMuZW50aXR5Q29uZmlnLnJlZHVjZXJcblxuICAgIGxldCBiYXNlUmVkdWNlciA9IChzdGF0ZTogaUVudGl0eVN0YXRlPGlFbnRpdHk+ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuXG4gICAgICBpZihjdXN0b21SZWR1Y2VyKSB7XG4gICAgICAgIHN0YXRlID0gY3VzdG9tUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgfVxuXG4gICAgICBzdGF0ZSA9IGVudGl0eVJlZHVjZXIoXG4gICAgICAgIGFjdGlvbiwgXG4gICAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgICBzbGljZU5hbWUsXG4gICAgICAgIGFkYXB0ZXIsXG4gICAgICAgIHN0YXRlLFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVJlZHVjZXJcbiAgfVxuICBcbiAgcHJpdmF0ZSBmZWF0dXJlRW50aXR5U2xpY2VOYW1lKGZlYXR1cmVOYW1lKSB7XG4gICAgcmV0dXJuIF8uam9pbihbZmVhdHVyZU5hbWUsICdlbnRpdGllcyddLCAnLicpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VsZWN0b3JzKCkge1xuICAgIHJldHVybiBidWlsZEVudGl0eVR5cGVTZWxlY3RvcnModGhpcylcbiAgfSBcblxuICBwcml2YXRlIGJ1aWxkSW5pdGlhbFN0YXRlKCkge1xuICAgIGxldCBlbnRpdHlUeXBlSW5pdGlhbFN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRFbnRpdHlJZDogbnVsbCxcbiAgICB9XG5cbiAgICBsZXQgaW5pdGlhbFN0YXRlID0gXy5tZXJnZShcbiAgICAgIGVudGl0eVR5cGVJbml0aWFsU3RhdGUsXG4gICAgICB0aGlzLmVudGl0eVR5cGUuaW5pdGlhbFN0YXRlXG4gICAgKVxuXG4gICAgcmV0dXJuIHRoaXMubmdyeEVudGl0eUFkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROZ3J4RW50aXR5QWRhcHRlcigpIHtcbiAgICByZXR1cm4gbmdyeENyZWF0ZUVudGl0eUFkYXB0ZXI8YW55PigpIFxuICB9XG5cbiAgcHJpdmF0ZSBnZXR0ZXJXaXRoQnVpbGRlcihwcm9wTmFtZSwgYnVpbGRlcikge1xuICAgIGlmKCF0aGlzW3Byb3BOYW1lXSkge1xuICAgICAgdGhpc1twcm9wTmFtZV0gPSB0aGlzW2J1aWxkZXJdKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1twcm9wTmFtZV1cbiAgfVxuXG59XG4iXX0=