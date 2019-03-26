/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createEntityAdapter as ngrxCreateEntityAdapter } from '@ngrx/entity';
import { buildEntityTypeSelectors, } from '../../util/builders/selectors/build-entity-type-selectors';
import { entityReducer } from './reducer/index';
import { EntityCollection } from './entity.collection';
export class EntityAdapter {
    /**
     * @param {?} entityOpts
     */
    constructor(entityOpts) {
        this.featureName = entityOpts.featureName;
        this.entityType = entityOpts.entityType;
        this.entityConfig = this.entityType.config;
        this.entityName = this.entityType.sliceName;
        this.sliceName = this.entityName;
    }
    /**
     * @return {?}
     */
    get entityCollectionType() {
        return EntityCollection;
    }
    /**
     * @return {?}
     */
    get reducer() {
        return this.getterWithBuilder('_reducer', 'buildReducer');
    }
    /**
     * @return {?}
     */
    get selectors() {
        return this.getterWithBuilder('_selectors', 'buildSelectors');
    }
    /**
     * @return {?}
     */
    get initialState() {
        return this.getterWithBuilder('_initialState', 'buildInitialState');
    }
    /**
     * @return {?}
     */
    get ngrxEntityAdapter() {
        if (!this._ngrxEntityAdapter) {
            this._ngrxEntityAdapter = this.buildNgrxEntityAdapter();
        }
        return this._ngrxEntityAdapter;
    }
    /**
     * @return {?}
     */
    get scopes() {
        /** @type {?} */
        let defaultScopes = {};
        return _.get(this.entityConfig, 'initialState.scopes', defaultScopes);
    }
    /**
     * @private
     * @return {?}
     */
    buildReducer() {
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
        let baseReducer = (state = initialState, action) => {
            if (customReducer) {
                state = customReducer(state, action);
            }
            state = entityReducer(action, featureName, sliceName, adapter, state);
            return state;
        };
        return baseReducer;
    }
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    featureEntitySliceName(featureName) {
        return _.join([featureName, 'entities'], '.');
    }
    /**
     * @private
     * @return {?}
     */
    buildSelectors() {
        return buildEntityTypeSelectors(this);
    }
    /**
     * @private
     * @return {?}
     */
    buildInitialState() {
        /** @type {?} */
        let entityTypeInitialState = {
            selectedEntityId: null,
        };
        /** @type {?} */
        let initialState = _.merge(entityTypeInitialState, this.entityType.initialState);
        return this.ngrxEntityAdapter.getInitialState(initialState);
    }
    /**
     * @private
     * @return {?}
     */
    buildNgrxEntityAdapter() {
        return ngrxCreateEntityAdapter();
    }
    /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    getterWithBuilder(propName, builder) {
        if (!this[propName]) {
            this[propName] = this[builder]();
        }
        return this[propName];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSx1QkFBdUIsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQVE3RSxPQUFPLEVBQ0wsd0JBQXdCLEdBQ3pCLE1BQU0sMkRBQTJELENBQUE7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFjLGlCQUFpQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFXLHFCQUFxQixDQUFBO0FBRzNELE1BQU0sT0FBTyxhQUFhOzs7O0lBY3hCLFlBQVksVUFBZTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDbEMsQ0FBQzs7OztJQUdELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sZ0JBQWdCLENBQUE7SUFDekIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDL0QsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixJQUFHLENBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtTQUN4RDtRQUVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFBO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07O1lBQ0osYUFBYSxHQUFHLEVBQUU7UUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDdkUsQ0FBQzs7Ozs7SUFFTyxZQUFZOztZQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCOztZQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1lBQzNELFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUzs7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZOztZQUNoQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOztZQUV6QyxXQUFXLEdBQUcsQ0FBQyxRQUErQixZQUFZLEVBQUUsTUFBVyxFQUFFLEVBQUU7WUFFN0UsSUFBRyxhQUFhLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2FBQ3JDO1lBRUQsS0FBSyxHQUFHLGFBQWEsQ0FDbkIsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsT0FBTyxFQUNQLEtBQUssQ0FDTixDQUFBO1lBRUQsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsV0FBVztRQUN4QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O1lBQ25CLHNCQUFzQixHQUFHO1lBQzNCLGdCQUFnQixFQUFFLElBQUk7U0FDdkI7O1lBRUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQ3hCLHNCQUFzQixFQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0QsQ0FBQzs7Ozs7SUFFTyxzQkFBc0I7UUFDNUIsT0FBTyx1QkFBdUIsRUFBTyxDQUFBO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsT0FBTztRQUN6QyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FFRjs7O0lBaEhDLG9DQUFnQjs7SUFDaEIsbUNBQWU7O0lBQ2YscUNBQWlCOztJQUNqQixtQ0FBZTs7SUFDZixrQ0FBYzs7Ozs7SUFFZCxzQ0FBMEI7Ozs7O0lBQzFCLDJDQUErQjs7Ozs7SUFDL0IsbUNBQXVCOzs7OztJQUN2Qix3Q0FBNEI7Ozs7O0lBQzVCLGlDQUFxQjs7Ozs7SUFDckIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGNyZWF0ZUVudGl0eUFkYXB0ZXIgYXMgbmdyeENyZWF0ZUVudGl0eUFkYXB0ZXIgfSBmcm9tICdAbmdyeC9lbnRpdHknXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUFkYXB0ZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IFxuICBidWlsZEVudGl0eVR5cGVTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWVudGl0eS10eXBlLXNlbGVjdG9ycydcblxuaW1wb3J0IHsgZW50aXR5UmVkdWNlciB9ICAgICAgICAgZnJvbSAnLi9yZWR1Y2VyL2luZGV4J1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvbiB9ICAgICAgZnJvbSAnLi9lbnRpdHkuY29sbGVjdGlvbidcblxuXG5leHBvcnQgY2xhc3MgRW50aXR5QWRhcHRlciBpbXBsZW1lbnRzIGlFbnRpdHlBZGFwdGVyIHtcbiAgZmVhdHVyZU5hbWU6IGFueVxuICBlbnRpdHlUeXBlOiBhbnlcbiAgZW50aXR5Q29uZmlnOiBhbnlcbiAgZW50aXR5TmFtZTogYW55XG4gIHNsaWNlTmFtZTogYW55XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbFN0YXRlOiBhbnlcbiAgcHJpdmF0ZSBfbmdyeEVudGl0eUFkYXB0ZXI6IGFueVxuICBwcml2YXRlIF9zZWxlY3RvcnM6IGFueVxuICBwcml2YXRlIF9zdGF0ZUludGVyZmFjZTogYW55XG4gIHByaXZhdGUgX3JlZHVjZXI6IGFueVxuICBwcml2YXRlIF9lbnRpdHlDb2xsZWN0aW9uVHlwZTogYW55XG5cbiAgY29uc3RydWN0b3IoZW50aXR5T3B0czogYW55KSB7XG4gICAgdGhpcy5mZWF0dXJlTmFtZSA9IGVudGl0eU9wdHMuZmVhdHVyZU5hbWVcbiAgICB0aGlzLmVudGl0eVR5cGUgPSBlbnRpdHlPcHRzLmVudGl0eVR5cGVcbiAgICB0aGlzLmVudGl0eUNvbmZpZyA9IHRoaXMuZW50aXR5VHlwZS5jb25maWdcblxuICAgIHRoaXMuZW50aXR5TmFtZSA9IHRoaXMuZW50aXR5VHlwZS5zbGljZU5hbWVcbiAgICB0aGlzLnNsaWNlTmFtZSA9IHRoaXMuZW50aXR5TmFtZVxuICB9XG5cblxuICBnZXQgZW50aXR5Q29sbGVjdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIEVudGl0eUNvbGxlY3Rpb25cbiAgfVxuXG4gIGdldCByZWR1Y2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldHRlcldpdGhCdWlsZGVyKCdfcmVkdWNlcicsICdidWlsZFJlZHVjZXInKVxuICB9XG5cbiAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXR0ZXJXaXRoQnVpbGRlcignX3NlbGVjdG9ycycsICdidWlsZFNlbGVjdG9ycycpXG4gIH1cblxuICBnZXQgaW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldHRlcldpdGhCdWlsZGVyKCdfaW5pdGlhbFN0YXRlJywgJ2J1aWxkSW5pdGlhbFN0YXRlJylcbiAgfVxuXG4gIGdldCBuZ3J4RW50aXR5QWRhcHRlcigpIHtcbiAgICBpZighIHRoaXMuX25ncnhFbnRpdHlBZGFwdGVyKSB7XG4gICAgICB0aGlzLl9uZ3J4RW50aXR5QWRhcHRlciA9IHRoaXMuYnVpbGROZ3J4RW50aXR5QWRhcHRlcigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25ncnhFbnRpdHlBZGFwdGVyXG4gIH1cblxuICBnZXQgc2NvcGVzKCkge1xuICAgIGxldCBkZWZhdWx0U2NvcGVzID0ge31cbiAgICByZXR1cm4gXy5nZXQodGhpcy5lbnRpdHlDb25maWcsICdpbml0aWFsU3RhdGUuc2NvcGVzJywgZGVmYXVsdFNjb3BlcylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZWR1Y2VyKCkge1xuICAgIHZhciBhZGFwdGVyID0gdGhpcy5uZ3J4RW50aXR5QWRhcHRlclxuICAgIHZhciBmZWF0dXJlTmFtZSA9IHRoaXMuZmVhdHVyZUVudGl0eVNsaWNlTmFtZSh0aGlzLmZlYXR1cmVOYW1lKVxuICAgIHZhciBzbGljZU5hbWUgPSB0aGlzLnNsaWNlTmFtZVxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZVxuICAgIHZhciBjdXN0b21SZWR1Y2VyID0gdGhpcy5lbnRpdHlDb25maWcucmVkdWNlclxuXG4gICAgbGV0IGJhc2VSZWR1Y2VyID0gKHN0YXRlOiBpRW50aXR5U3RhdGU8aUVudGl0eT4gPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG5cbiAgICAgIGlmKGN1c3RvbVJlZHVjZXIpIHtcbiAgICAgICAgc3RhdGUgPSBjdXN0b21SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG4gICAgICB9XG5cbiAgICAgIHN0YXRlID0gZW50aXR5UmVkdWNlcihcbiAgICAgICAgYWN0aW9uLCBcbiAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgIHNsaWNlTmFtZSxcbiAgICAgICAgYWRhcHRlcixcbiAgICAgICAgc3RhdGUsXG4gICAgICApXG5cbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cblxuICAgIHJldHVybiBiYXNlUmVkdWNlclxuICB9XG4gIFxuICBwcml2YXRlIGZlYXR1cmVFbnRpdHlTbGljZU5hbWUoZmVhdHVyZU5hbWUpIHtcbiAgICByZXR1cm4gXy5qb2luKFtmZWF0dXJlTmFtZSwgJ2VudGl0aWVzJ10sICcuJylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIGJ1aWxkRW50aXR5VHlwZVNlbGVjdG9ycyh0aGlzKVxuICB9IFxuXG4gIHByaXZhdGUgYnVpbGRJbml0aWFsU3RhdGUoKSB7XG4gICAgbGV0IGVudGl0eVR5cGVJbml0aWFsU3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEVudGl0eUlkOiBudWxsLFxuICAgIH1cblxuICAgIGxldCBpbml0aWFsU3RhdGUgPSBfLm1lcmdlKFxuICAgICAgZW50aXR5VHlwZUluaXRpYWxTdGF0ZSxcbiAgICAgIHRoaXMuZW50aXR5VHlwZS5pbml0aWFsU3RhdGVcbiAgICApXG5cbiAgICByZXR1cm4gdGhpcy5uZ3J4RW50aXR5QWRhcHRlci5nZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5ncnhFbnRpdHlBZGFwdGVyKCkge1xuICAgIHJldHVybiBuZ3J4Q3JlYXRlRW50aXR5QWRhcHRlcjxhbnk+KCkgXG4gIH1cblxuICBwcml2YXRlIGdldHRlcldpdGhCdWlsZGVyKHByb3BOYW1lLCBidWlsZGVyKSB7XG4gICAgaWYoIXRoaXNbcHJvcE5hbWVdKSB7XG4gICAgICB0aGlzW3Byb3BOYW1lXSA9IHRoaXNbYnVpbGRlcl0oKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzW3Byb3BOYW1lXVxuICB9XG5cbn1cbiJdfQ==