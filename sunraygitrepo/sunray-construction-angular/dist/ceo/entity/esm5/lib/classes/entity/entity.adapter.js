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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9lbnRpdHkuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLG1CQUFtQixJQUFJLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBUTdFLE9BQU8sRUFDTCx3QkFBd0IsR0FDekIsTUFBTSwyREFBMkQsQ0FBQTtBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQWMsaUJBQWlCLENBQUE7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQVcscUJBQXFCLENBQUE7QUFHM0Q7SUFjRSx1QkFBWSxVQUFlO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQTtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQTtRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBR0Qsc0JBQUksK0NBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxnQkFBZ0IsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDM0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixD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Q0FBNEI7Ozs7O0lBQzVCLGlDQUFxQjs7Ozs7SUFDckIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGNyZWF0ZUVudGl0eUFkYXB0ZXIgYXMgbmdyeENyZWF0ZUVudGl0eUFkYXB0ZXIgfSBmcm9tICdAbmdyeC9lbnRpdHknXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUFkYXB0ZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IFxuICBidWlsZEVudGl0eVR5cGVTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWVudGl0eS10eXBlLXNlbGVjdG9ycydcblxuaW1wb3J0IHsgZW50aXR5UmVkdWNlciB9ICAgICAgICAgZnJvbSAnLi9yZWR1Y2VyL2luZGV4J1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvbiB9ICAgICAgZnJvbSAnLi9lbnRpdHkuY29sbGVjdGlvbidcblxuXG5leHBvcnQgY2xhc3MgRW50aXR5QWRhcHRlciBpbXBsZW1lbnRzIGlFbnRpdHlBZGFwdGVyIHtcbiAgZmVhdHVyZU5hbWU6IGFueVxuICBlbnRpdHlUeXBlOiBhbnlcbiAgZW50aXR5Q29uZmlnOiBhbnlcbiAgZW50aXR5TmFtZTogYW55XG4gIHNsaWNlTmFtZTogYW55XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFN0YXRlOiBhbnlcbiAgcHJpdmF0ZSBfbmdyeEVudGl0eUFkYXB0ZXI6IGFueVxuICBwcml2YXRlIF9zZWxlY3RvcnM6IGFueVxuICBwcml2YXRlIF9zdGF0ZUludGVyZmFjZTogYW55XG4gIHByaXZhdGUgX3JlZHVjZXI6IGFueVxuICBwcml2YXRlIF9lbnRpdHlDb2xsZWN0aW9uVHlwZTogYW55XG5cbiAgY29uc3RydWN0b3IoZW50aXR5T3B0czogYW55KSB7XG4gICAgdGhpcy5mZWF0dXJlTmFtZSA9IGVudGl0eU9wdHMuZmVhdHVyZU5hbWVcbiAgICB0aGlzLmVudGl0eVR5cGUgPSBlbnRpdHlPcHRzLmVudGl0eVR5cGVcbiAgICB0aGlzLmVudGl0eUNvbmZpZyA9IHRoaXMuZW50aXR5VHlwZS5jb25maWdcblxuICAgIHRoaXMuZW50aXR5TmFtZSA9IHRoaXMuZW50aXR5VHlwZS5zbGljZU5hbWVcbiAgICB0aGlzLnNsaWNlTmFtZSA9IHRoaXMuZW50aXR5TmFtZVxuICB9XG5cblxuICBnZXQgZW50aXR5Q29sbGVjdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIEVudGl0eUNvbGxlY3Rpb25cbiAgfVxuXG4gIGdldCByZWR1Y2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldHRlcldpdGhCdWlsZGVyKCdfcmVkdWNlcicsICdidWlsZFJlZHVjZXInKVxuICB9XG5cbiAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXR0ZXJXaXRoQnVpbGRlcignX3NlbGVjdG9ycycsICdidWlsZFNlbGVjdG9ycycpXG4gIH1cblxuICBnZXQgaW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldHRlcldpdGhCdWlsZGVyKCdfaW5pdGlhbFN0YXRlJywgJ2J1aWxkSW5pdGlhbFN0YXRlJylcbiAgfVxuXG4gIGdldCBuZ3J4RW50aXR5QWRhcHRlcigpIHtcbiAgICBpZighIHRoaXMuX25ncnhFbnRpdHlBZGFwdGVyKSB7XG4gICAgICB0aGlzLl9uZ3J4RW50aXR5QWRhcHRlciA9IHRoaXMuYnVpbGROZ3J4RW50aXR5QWRhcHRlcigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25ncnhFbnRpdHlBZGFwdGVyXG4gIH1cblxuICBnZXQgc2NvcGVzKCkge1xuICAgIGxldCBkZWZhdWx0U2NvcGVzID0ge31cbiAgICByZXR1cm4gXy5nZXQodGhpcy5lbnRpdHlDb25maWcsICdpbml0aWFsU3RhdGUuc2NvcGVzJywgZGVmYXVsdFNjb3BlcylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZWR1Y2VyKCkge1xuICAgIHZhciBhZGFwdGVyID0gdGhpcy5uZ3J4RW50aXR5QWRhcHRlclxuICAgIHZhciBmZWF0dXJlTmFtZSA9IHRoaXMuZmVhdHVyZUVudGl0eVNsaWNlTmFtZSh0aGlzLmZlYXR1cmVOYW1lKVxuICAgIHZhciBzbGljZU5hbWUgPSB0aGlzLnNsaWNlTmFtZVxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZVxuICAgIHZhciBjdXN0b21SZWR1Y2VyID0gdGhpcy5lbnRpdHlDb25maWcucmVkdWNlclxuXG4gICAgbGV0IGJhc2VSZWR1Y2VyID0gKHN0YXRlOiBpRW50aXR5U3RhdGU8aUVudGl0eT4gPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG5cbiAgICAgIGlmKGN1c3RvbVJlZHVjZXIpIHtcbiAgICAgICAgc3RhdGUgPSBjdXN0b21SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG4gICAgICB9XG5cbiAgICAgIHN0YXRlID0gZW50aXR5UmVkdWNlcihcbiAgICAgICAgYWN0aW9uLCBcbiAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgIHNsaWNlTmFtZSxcbiAgICAgICAgYWRhcHRlcixcbiAgICAgICAgc3RhdGUsXG4gICAgICApXG5cbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cblxuICAgIHJldHVybiBiYXNlUmVkdWNlclxuICB9XG4gIFxuICBwcml2YXRlIGZlYXR1cmVFbnRpdHlTbGljZU5hbWUoZmVhdHVyZU5hbWUpIHtcbiAgICByZXR1cm4gXy5qb2luKFtmZWF0dXJlTmFtZSwgJ2VudGl0aWVzJ10sICcuJylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIGJ1aWxkRW50aXR5VHlwZVNlbGVjdG9ycyh0aGlzKVxuICB9IFxuXG4gIHByaXZhdGUgYnVpbGRJbml0aWFsU3RhdGUoKSB7XG4gICAgbGV0IGVudGl0eVR5cGVJbml0aWFsU3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEVudGl0eUlkOiBudWxsLFxuICAgIH1cblxuICAgIGxldCBpbml0aWFsU3RhdGUgPSBfLm1lcmdlKFxuICAgICAgZW50aXR5VHlwZUluaXRpYWxTdGF0ZSxcbiAgICAgIHRoaXMuZW50aXR5VHlwZS5pbml0aWFsU3RhdGVcbiAgICApXG5cbiAgICByZXR1cm4gdGhpcy5uZ3J4RW50aXR5QWRhcHRlci5nZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5ncnhFbnRpdHlBZGFwdGVyKCkge1xuICAgIHJldHVybiBuZ3J4Q3JlYXRlRW50aXR5QWRhcHRlcjxhbnk+KCkgXG4gIH1cblxuICBwcml2YXRlIGdldHRlcldpdGhCdWlsZGVyKHByb3BOYW1lLCBidWlsZGVyKSB7XG4gICAgaWYoIXRoaXNbcHJvcE5hbWVdKSB7XG4gICAgICB0aGlzW3Byb3BOYW1lXSA9IHRoaXNbYnVpbGRlcl0oKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzW3Byb3BOYW1lXVxuICB9XG5cbn1cbiJdfQ==