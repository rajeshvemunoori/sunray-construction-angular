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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9lbnRpdHkuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLG1CQUFtQixJQUFJLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBUTdFLE9BQU8sRUFDTCx3QkFBd0IsR0FDekIsTUFBTSwyREFBMkQsQ0FBQTtBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQWMsaUJBQWlCLENBQUE7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQVcscUJBQXFCLENBQUE7QUFHM0QsTUFBTSxPQUFPLGFBQWE7Ozs7SUFjeEIsWUFBWSxVQUFlO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQTtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQTtRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBR0QsSUFBSSxvQkFBb0I7UUFDdEIsT0FBTyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQzNELENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUMvRCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUE7SUFDckUsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLElBQUcsQ0FBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1NBQ3hEO1FBRUQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksTUFBTTs7WUFDSixhQUFhLEdBQUcsRUFBRTtRQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUN2RSxDQUFDOzs7OztJQUVPLFlBQVk7O1lBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7O1lBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7WUFDM0QsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTOztZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7O1lBQ2hDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87O1lBRXpDLFdBQVcsR0FBRyxDQUFDLFFBQStCLFlBQVksRUFBRSxNQUFXLEVBQUUsRUFBRTtZQUU3RSxJQUFHLGFBQWEsRUFBRTtnQkFDaEIsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFDckM7WUFFRCxLQUFLLEdBQUcsYUFBYSxDQUNuQixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsS0FBSyxDQUNOLENBQUE7WUFFRCxPQUFPLEtBQUssQ0FBQTtRQUNkLENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxXQUFXO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMvQyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsT0FBTyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVPLGlCQUFpQjs7WUFDbkIsc0JBQXNCLEdBQUc7WUFDM0IsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2Qjs7WUFFRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDeEIsc0JBQXNCLEVBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3RCxDQUFDOzs7OztJQUVPLHNCQUFzQjtRQUM1QixPQUFPLHVCQUF1QixFQUFPLENBQUE7SUFDdkMsQ0FBQzs7Ozs7OztJQUVPLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxPQUFPO1FBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQztDQUVGOzs7SUFoSEMsb0NBQWdCOztJQUNoQixtQ0FBZTs7SUFDZixxQ0FBaUI7O0lBQ2pCLG1DQUFlOztJQUNmLGtDQUFjOzs7OztJQUVkLHNDQUEwQjs7Ozs7SUFDMUIsMkNBQStCOzs7OztJQUMvQixtQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUE0Qjs7Ozs7SUFDNUIsaUNBQXFCOzs7OztJQUNyQiw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgY3JlYXRlRW50aXR5QWRhcHRlciBhcyBuZ3J4Q3JlYXRlRW50aXR5QWRhcHRlciB9IGZyb20gJ0BuZ3J4L2VudGl0eSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eVN0YXRlLFxuICBpRW50aXR5LFxuICBpRW50aXR5QWRhcHRlcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgXG4gIGJ1aWxkRW50aXR5VHlwZVNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvYnVpbGQtZW50aXR5LXR5cGUtc2VsZWN0b3JzJ1xuXG5pbXBvcnQgeyBlbnRpdHlSZWR1Y2VyIH0gICAgICAgICBmcm9tICcuL3JlZHVjZXIvaW5kZXgnXG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uIH0gICAgICBmcm9tICcuL2VudGl0eS5jb2xsZWN0aW9uJ1xuXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlBZGFwdGVyIGltcGxlbWVudHMgaUVudGl0eUFkYXB0ZXIge1xuICBmZWF0dXJlTmFtZTogYW55XG4gIGVudGl0eVR5cGU6IGFueVxuICBlbnRpdHlDb25maWc6IGFueVxuICBlbnRpdHlOYW1lOiBhbnlcbiAgc2xpY2VOYW1lOiBhbnlcblxuICBwcml2YXRlIF9pbml0aWFsU3RhdGU6IGFueVxuICBwcml2YXRlIF9uZ3J4RW50aXR5QWRhcHRlcjogYW55XG4gIHByaXZhdGUgX3NlbGVjdG9yczogYW55XG4gIHByaXZhdGUgX3N0YXRlSW50ZXJmYWNlOiBhbnlcbiAgcHJpdmF0ZSBfcmVkdWNlcjogYW55XG4gIHByaXZhdGUgX2VudGl0eUNvbGxlY3Rpb25UeXBlOiBhbnlcblxuICBjb25zdHJ1Y3RvcihlbnRpdHlPcHRzOiBhbnkpIHtcbiAgICB0aGlzLmZlYXR1cmVOYW1lID0gZW50aXR5T3B0cy5mZWF0dXJlTmFtZVxuICAgIHRoaXMuZW50aXR5VHlwZSA9IGVudGl0eU9wdHMuZW50aXR5VHlwZVxuICAgIHRoaXMuZW50aXR5Q29uZmlnID0gdGhpcy5lbnRpdHlUeXBlLmNvbmZpZ1xuXG4gICAgdGhpcy5lbnRpdHlOYW1lID0gdGhpcy5lbnRpdHlUeXBlLnNsaWNlTmFtZVxuICAgIHRoaXMuc2xpY2VOYW1lID0gdGhpcy5lbnRpdHlOYW1lXG4gIH1cblxuXG4gIGdldCBlbnRpdHlDb2xsZWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gRW50aXR5Q29sbGVjdGlvblxuICB9XG5cbiAgZ2V0IHJlZHVjZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0dGVyV2l0aEJ1aWxkZXIoJ19yZWR1Y2VyJywgJ2J1aWxkUmVkdWNlcicpXG4gIH1cblxuICBnZXQgc2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLmdldHRlcldpdGhCdWlsZGVyKCdfc2VsZWN0b3JzJywgJ2J1aWxkU2VsZWN0b3JzJylcbiAgfVxuXG4gIGdldCBpbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0dGVyV2l0aEJ1aWxkZXIoJ19pbml0aWFsU3RhdGUnLCAnYnVpbGRJbml0aWFsU3RhdGUnKVxuICB9XG5cbiAgZ2V0IG5ncnhFbnRpdHlBZGFwdGVyKCkge1xuICAgIGlmKCEgdGhpcy5fbmdyeEVudGl0eUFkYXB0ZXIpIHtcbiAgICAgIHRoaXMuX25ncnhFbnRpdHlBZGFwdGVyID0gdGhpcy5idWlsZE5ncnhFbnRpdHlBZGFwdGVyKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbmdyeEVudGl0eUFkYXB0ZXJcbiAgfVxuXG4gIGdldCBzY29wZXMoKSB7XG4gICAgbGV0IGRlZmF1bHRTY29wZXMgPSB7fVxuICAgIHJldHVybiBfLmdldCh0aGlzLmVudGl0eUNvbmZpZywgJ2luaXRpYWxTdGF0ZS5zY29wZXMnLCBkZWZhdWx0U2NvcGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlZHVjZXIoKSB7XG4gICAgdmFyIGFkYXB0ZXIgPSB0aGlzLm5ncnhFbnRpdHlBZGFwdGVyXG4gICAgdmFyIGZlYXR1cmVOYW1lID0gdGhpcy5mZWF0dXJlRW50aXR5U2xpY2VOYW1lKHRoaXMuZmVhdHVyZU5hbWUpXG4gICAgdmFyIHNsaWNlTmFtZSA9IHRoaXMuc2xpY2VOYW1lXG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlXG4gICAgdmFyIGN1c3RvbVJlZHVjZXIgPSB0aGlzLmVudGl0eUNvbmZpZy5yZWR1Y2VyXG5cbiAgICBsZXQgYmFzZVJlZHVjZXIgPSAoc3RhdGU6IGlFbnRpdHlTdGF0ZTxpRW50aXR5PiA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcblxuICAgICAgaWYoY3VzdG9tUmVkdWNlcikge1xuICAgICAgICBzdGF0ZSA9IGN1c3RvbVJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbiAgICAgIH1cblxuICAgICAgc3RhdGUgPSBlbnRpdHlSZWR1Y2VyKFxuICAgICAgICBhY3Rpb24sIFxuICAgICAgICBmZWF0dXJlTmFtZSxcbiAgICAgICAgc2xpY2VOYW1lLFxuICAgICAgICBhZGFwdGVyLFxuICAgICAgICBzdGF0ZSxcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VSZWR1Y2VyXG4gIH1cbiAgXG4gIHByaXZhdGUgZmVhdHVyZUVudGl0eVNsaWNlTmFtZShmZWF0dXJlTmFtZSkge1xuICAgIHJldHVybiBfLmpvaW4oW2ZlYXR1cmVOYW1lLCAnZW50aXRpZXMnXSwgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gYnVpbGRFbnRpdHlUeXBlU2VsZWN0b3JzKHRoaXMpXG4gIH0gXG5cbiAgcHJpdmF0ZSBidWlsZEluaXRpYWxTdGF0ZSgpIHtcbiAgICBsZXQgZW50aXR5VHlwZUluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkRW50aXR5SWQ6IG51bGwsXG4gICAgfVxuXG4gICAgbGV0IGluaXRpYWxTdGF0ZSA9IF8ubWVyZ2UoXG4gICAgICBlbnRpdHlUeXBlSW5pdGlhbFN0YXRlLFxuICAgICAgdGhpcy5lbnRpdHlUeXBlLmluaXRpYWxTdGF0ZVxuICAgIClcblxuICAgIHJldHVybiB0aGlzLm5ncnhFbnRpdHlBZGFwdGVyLmdldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTmdyeEVudGl0eUFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIG5ncnhDcmVhdGVFbnRpdHlBZGFwdGVyPGFueT4oKSBcbiAgfVxuXG4gIHByaXZhdGUgZ2V0dGVyV2l0aEJ1aWxkZXIocHJvcE5hbWUsIGJ1aWxkZXIpIHtcbiAgICBpZighdGhpc1twcm9wTmFtZV0pIHtcbiAgICAgIHRoaXNbcHJvcE5hbWVdID0gdGhpc1tidWlsZGVyXSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbcHJvcE5hbWVdXG4gIH1cblxufVxuIl19