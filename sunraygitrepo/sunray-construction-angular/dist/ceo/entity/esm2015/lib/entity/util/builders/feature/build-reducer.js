/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { combineReducers, } from '@ngrx/store';
import { EntityAdapterFactory, } from '../../../classes';
import { entityConfigReducer, } from '../../../state';
import { buildFeatureSelector, } from '../selectors/index';
/**
 * @param {?} featureConfig
 * @param {?} selectorService
 * @param {?} selectorNameService
 * @param {?} buildCustomSelectors
 * @return {?}
 */
export function buildFeatureReducer(featureConfig, selectorService, selectorNameService, buildCustomSelectors) {
    /** @type {?} */
    let factory = new EntityAdapterFactory(featureConfig);
    /** @type {?} */
    let entityAdapters = factory.adapters;
    buildFeatureSelector(featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors);
    /** @type {?} */
    var featureEntitiesReducerPrefix = _.join([featureConfig.name, 'entities'], '.');
    /** @type {?} */
    var entityReducers = _.reduce(_.map(entityAdapters, buildEntityReducer), _.merge, {})
    // @Luis: action should not be any
    ;
    // @Luis: action should not be any
    /** @type {?} */
    let featureEntitiesReducer = (state, action) => {
        /** @type {?} */
        let sliceName = action.slice;
        if (_.startsWith(sliceName, featureEntitiesReducerPrefix)) {
            /** @type {?} */
            let entitySliceName = _.last(_.split(sliceName, '.'));
            /** @type {?} */
            let stateDelta = {};
            if (entitySliceName) {
                stateDelta[entitySliceName] =
                    entityReducers[entitySliceName](state[entitySliceName], action);
            }
            return Object.assign({}, state, stateDelta);
        }
        else {
            return state;
        }
    };
    /** @type {?} */
    let reducers = {
        config: entityConfigReducer,
        entities: featureEntitiesReducer,
    };
    return combineReducers(reducers);
}
/** @type {?} */
let buildEntityReducer = (entityTypeAdapter) => {
    /** @type {?} */
    let reducer = {};
    /** @type {?} */
    let key = entityTypeAdapter.sliceName;
    reducer[key] = entityTypeAdapter.reducer;
    return reducer;
};
const ɵ0 = buildEntityReducer;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL2ZlYXR1cmUvYnVpbGQtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFLM0IsT0FBTyxFQU1MLGVBQWUsR0FDaEIsTUFBTSxhQUFhLENBQUE7QUFTcEIsT0FBTyxFQUNMLG9CQUFvQixHQUNyQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFDTCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBSUwsb0JBQW9CLEdBQ3JCLE1BQU0sb0JBQW9CLENBQUE7Ozs7Ozs7O0FBRTNCLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsb0JBQW9COztRQUdoQixPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7O1FBQ2pELGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUTtJQUVyQyxvQkFBb0IsQ0FDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUNyQixDQUFBOztRQUVHLDRCQUE0QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7UUFFNUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUVyRixrQ0FBa0M7Ozs7UUFDOUIsc0JBQXNCLEdBQUcsQ0FBQyxLQUE0QixFQUFFLE1BQVcsRUFBRSxFQUFFOztZQUNyRSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUs7UUFFNUIsSUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxFQUFFOztnQkFDcEQsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7O2dCQUNqRCxVQUFVLEdBQUcsRUFBRTtZQUNuQixJQUFHLGVBQWUsRUFBRTtnQkFDbEIsVUFBVSxDQUFDLGVBQWUsQ0FBQztvQkFDekIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTthQUNsRTtZQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1NBQzVDO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQzs7UUFFRyxRQUFRLEdBQUc7UUFDYixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLFFBQVEsRUFBRSxzQkFBc0I7S0FDakM7SUFFRCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNsQyxDQUFDOztJQUVHLGtCQUFrQixHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRTs7UUFDekMsT0FBTyxHQUFHLEVBQUU7O1FBQ1osR0FBRyxHQUFHLGlCQUFpQixDQUFDLFNBQVM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtJQUN4QyxPQUFPLE9BQU8sQ0FBQTtBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IHBpcGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNvbXBvc2UsXG4gIEFjdGlvblJlZHVjZXIsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eVN0YXRlLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgaUVudGl0eUNvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlBZGFwdGVyRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vLi4vY2xhc3NlcydcblxuaW1wb3J0IHtcbiAgZW50aXR5Q29uZmlnUmVkdWNlcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnXG5cbmltcG9ydCB7XG4gIGJ1aWxkRW50aXR5U2VsZWN0b3JzLFxuICBidWlsZFJvb3RTZWxlY3RvcixcbiAgYnVpbGRTbGljZVNlbGVjdG9yLFxuICBidWlsZEZlYXR1cmVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL2luZGV4J1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGZWF0dXJlUmVkdWNlcihcbiAgZmVhdHVyZUNvbmZpZyxcbiAgc2VsZWN0b3JTZXJ2aWNlLFxuICBzZWxlY3Rvck5hbWVTZXJ2aWNlLFxuICBidWlsZEN1c3RvbVNlbGVjdG9ycyxcbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG5cbiAgbGV0IGZhY3RvcnkgPSBuZXcgRW50aXR5QWRhcHRlckZhY3RvcnkoZmVhdHVyZUNvbmZpZylcbiAgbGV0IGVudGl0eUFkYXB0ZXJzID0gZmFjdG9yeS5hZGFwdGVyc1xuXG4gIGJ1aWxkRmVhdHVyZVNlbGVjdG9yKFxuICAgIGZlYXR1cmVDb25maWcsXG4gICAgZW50aXR5QWRhcHRlcnMsXG4gICAgc2VsZWN0b3JTZXJ2aWNlLFxuICAgIHNlbGVjdG9yTmFtZVNlcnZpY2UsXG4gICAgYnVpbGRDdXN0b21TZWxlY3RvcnMsXG4gIClcblxuICB2YXIgZmVhdHVyZUVudGl0aWVzUmVkdWNlclByZWZpeCA9IF8uam9pbihbZmVhdHVyZUNvbmZpZy5uYW1lLCAnZW50aXRpZXMnXSwgJy4nKVxuXG4gIHZhciBlbnRpdHlSZWR1Y2VycyA9IF8ucmVkdWNlKF8ubWFwKGVudGl0eUFkYXB0ZXJzLCBidWlsZEVudGl0eVJlZHVjZXIpLCBfLm1lcmdlLCB7fSlcblxuICAvLyBATHVpczogYWN0aW9uIHNob3VsZCBub3QgYmUgYW55XG4gIGxldCBmZWF0dXJlRW50aXRpZXNSZWR1Y2VyID0gKHN0YXRlOiBpRW50aXR5U3RhdGU8aUVudGl0eT4sIGFjdGlvbjogYW55KSA9PiB7XG4gICAgbGV0IHNsaWNlTmFtZSA9IGFjdGlvbi5zbGljZVxuXG4gICAgaWYoXy5zdGFydHNXaXRoKHNsaWNlTmFtZSwgZmVhdHVyZUVudGl0aWVzUmVkdWNlclByZWZpeCkpIHtcbiAgICAgIGxldCBlbnRpdHlTbGljZU5hbWUgPSBfLmxhc3QoXy5zcGxpdChzbGljZU5hbWUsICcuJykpXG4gICAgICBsZXQgc3RhdGVEZWx0YSA9IHt9XG4gICAgICBpZihlbnRpdHlTbGljZU5hbWUpIHtcbiAgICAgICAgc3RhdGVEZWx0YVtlbnRpdHlTbGljZU5hbWVdID0gXG4gICAgICAgICAgZW50aXR5UmVkdWNlcnNbZW50aXR5U2xpY2VOYW1lXShzdGF0ZVtlbnRpdHlTbGljZU5hbWVdLCBhY3Rpb24pXG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHN0YXRlRGVsdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG5cbiAgbGV0IHJlZHVjZXJzID0ge1xuICAgIGNvbmZpZzogZW50aXR5Q29uZmlnUmVkdWNlcixcbiAgICBlbnRpdGllczogZmVhdHVyZUVudGl0aWVzUmVkdWNlcixcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpXG59XG5cbmxldCBidWlsZEVudGl0eVJlZHVjZXIgPSAoZW50aXR5VHlwZUFkYXB0ZXIpID0+IHtcbiAgbGV0IHJlZHVjZXIgPSB7fVxuICBsZXQga2V5ID0gZW50aXR5VHlwZUFkYXB0ZXIuc2xpY2VOYW1lXG4gIHJlZHVjZXJba2V5XSA9IGVudGl0eVR5cGVBZGFwdGVyLnJlZHVjZXJcbiAgcmV0dXJuIHJlZHVjZXJcbn1cbiJdfQ==