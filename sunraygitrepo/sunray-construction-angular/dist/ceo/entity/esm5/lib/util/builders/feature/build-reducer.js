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
    var factory = new EntityAdapterFactory(featureConfig);
    /** @type {?} */
    var entityAdapters = factory.adapters;
    buildFeatureSelector(featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors);
    /** @type {?} */
    var featureEntitiesReducerPrefix = _.join([featureConfig.name, 'entities'], '.');
    /** @type {?} */
    var entityReducers = _.reduce(_.map(entityAdapters, buildEntityReducer), _.merge, {})
    // @Luis: action should not be any
    ;
    // @Luis: action should not be any
    /** @type {?} */
    var featureEntitiesReducer = function (state, action) {
        /** @type {?} */
        var sliceName = action.slice;
        if (_.startsWith(sliceName, featureEntitiesReducerPrefix)) {
            /** @type {?} */
            var entitySliceName = _.last(_.split(sliceName, '.'));
            /** @type {?} */
            var stateDelta = {};
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
    var reducers = {
        config: entityConfigReducer,
        entities: featureEntitiesReducer,
    };
    return combineReducers(reducers);
}
/** @type {?} */
var buildEntityReducer = function (entityTypeAdapter) {
    /** @type {?} */
    var reducer = {};
    /** @type {?} */
    var key = entityTypeAdapter.sliceName;
    reducer[key] = entityTypeAdapter.reducer;
    return reducer;
};
var ɵ0 = buildEntityReducer;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvZmVhdHVyZS9idWlsZC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUszQixPQUFPLEVBTUwsZUFBZSxHQUNoQixNQUFNLGFBQWEsQ0FBQTtBQVNwQixPQUFPLEVBQ0wsb0JBQW9CLEdBQ3JCLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUNMLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFJTCxvQkFBb0IsR0FDckIsTUFBTSxvQkFBb0IsQ0FBQTs7Ozs7Ozs7QUFFM0IsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxhQUFhLEVBQ2IsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixvQkFBb0I7O1FBR2hCLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQzs7UUFDakQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRO0lBRXJDLG9CQUFvQixDQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQ3JCLENBQUE7O1FBRUcsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDOztRQUU1RSxjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBRXJGLGtDQUFrQzs7OztRQUM5QixzQkFBc0IsR0FBRyxVQUFDLEtBQTRCLEVBQUUsTUFBVzs7WUFDakUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLO1FBRTVCLElBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsRUFBRTs7Z0JBQ3BELGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztnQkFDakQsVUFBVSxHQUFHLEVBQUU7WUFDbkIsSUFBRyxlQUFlLEVBQUU7Z0JBQ2xCLFVBQVUsQ0FBQyxlQUFlLENBQUM7b0JBQ3pCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFDbEU7WUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtTQUM1QzthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7O1FBRUcsUUFBUSxHQUFHO1FBQ2IsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixRQUFRLEVBQUUsc0JBQXNCO0tBQ2pDO0lBRUQsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDbEMsQ0FBQzs7SUFFRyxrQkFBa0IsR0FBRyxVQUFDLGlCQUFpQjs7UUFDckMsT0FBTyxHQUFHLEVBQUU7O1FBQ1osR0FBRyxHQUFHLGlCQUFpQixDQUFDLFNBQVM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtJQUN4QyxPQUFPLE9BQU8sQ0FBQTtBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IHBpcGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNvbXBvc2UsXG4gIEFjdGlvblJlZHVjZXIsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eVN0YXRlLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgaUVudGl0eUNvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlBZGFwdGVyRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vLi4vY2xhc3NlcydcblxuaW1wb3J0IHtcbiAgZW50aXR5Q29uZmlnUmVkdWNlcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnXG5cbmltcG9ydCB7XG4gIGJ1aWxkRW50aXR5U2VsZWN0b3JzLFxuICBidWlsZFJvb3RTZWxlY3RvcixcbiAgYnVpbGRTbGljZVNlbGVjdG9yLFxuICBidWlsZEZlYXR1cmVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL2luZGV4J1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGZWF0dXJlUmVkdWNlcihcbiAgZmVhdHVyZUNvbmZpZyxcbiAgc2VsZWN0b3JTZXJ2aWNlLFxuICBzZWxlY3Rvck5hbWVTZXJ2aWNlLFxuICBidWlsZEN1c3RvbVNlbGVjdG9ycyxcbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG5cbiAgbGV0IGZhY3RvcnkgPSBuZXcgRW50aXR5QWRhcHRlckZhY3RvcnkoZmVhdHVyZUNvbmZpZylcbiAgbGV0IGVudGl0eUFkYXB0ZXJzID0gZmFjdG9yeS5hZGFwdGVyc1xuXG4gIGJ1aWxkRmVhdHVyZVNlbGVjdG9yKFxuICAgIGZlYXR1cmVDb25maWcsXG4gICAgZW50aXR5QWRhcHRlcnMsXG4gICAgc2VsZWN0b3JTZXJ2aWNlLFxuICAgIHNlbGVjdG9yTmFtZVNlcnZpY2UsXG4gICAgYnVpbGRDdXN0b21TZWxlY3RvcnMsXG4gIClcblxuICB2YXIgZmVhdHVyZUVudGl0aWVzUmVkdWNlclByZWZpeCA9IF8uam9pbihbZmVhdHVyZUNvbmZpZy5uYW1lLCAnZW50aXRpZXMnXSwgJy4nKVxuXG4gIHZhciBlbnRpdHlSZWR1Y2VycyA9IF8ucmVkdWNlKF8ubWFwKGVudGl0eUFkYXB0ZXJzLCBidWlsZEVudGl0eVJlZHVjZXIpLCBfLm1lcmdlLCB7fSlcblxuICAvLyBATHVpczogYWN0aW9uIHNob3VsZCBub3QgYmUgYW55XG4gIGxldCBmZWF0dXJlRW50aXRpZXNSZWR1Y2VyID0gKHN0YXRlOiBpRW50aXR5U3RhdGU8aUVudGl0eT4sIGFjdGlvbjogYW55KSA9PiB7XG4gICAgbGV0IHNsaWNlTmFtZSA9IGFjdGlvbi5zbGljZVxuXG4gICAgaWYoXy5zdGFydHNXaXRoKHNsaWNlTmFtZSwgZmVhdHVyZUVudGl0aWVzUmVkdWNlclByZWZpeCkpIHtcbiAgICAgIGxldCBlbnRpdHlTbGljZU5hbWUgPSBfLmxhc3QoXy5zcGxpdChzbGljZU5hbWUsICcuJykpXG4gICAgICBsZXQgc3RhdGVEZWx0YSA9IHt9XG4gICAgICBpZihlbnRpdHlTbGljZU5hbWUpIHtcbiAgICAgICAgc3RhdGVEZWx0YVtlbnRpdHlTbGljZU5hbWVdID0gXG4gICAgICAgICAgZW50aXR5UmVkdWNlcnNbZW50aXR5U2xpY2VOYW1lXShzdGF0ZVtlbnRpdHlTbGljZU5hbWVdLCBhY3Rpb24pXG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHN0YXRlRGVsdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG5cbiAgbGV0IHJlZHVjZXJzID0ge1xuICAgIGNvbmZpZzogZW50aXR5Q29uZmlnUmVkdWNlcixcbiAgICBlbnRpdGllczogZmVhdHVyZUVudGl0aWVzUmVkdWNlcixcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpXG59XG5cbmxldCBidWlsZEVudGl0eVJlZHVjZXIgPSAoZW50aXR5VHlwZUFkYXB0ZXIpID0+IHtcbiAgbGV0IHJlZHVjZXIgPSB7fVxuICBsZXQga2V5ID0gZW50aXR5VHlwZUFkYXB0ZXIuc2xpY2VOYW1lXG4gIHJlZHVjZXJba2V5XSA9IGVudGl0eVR5cGVBZGFwdGVyLnJlZHVjZXJcbiAgcmV0dXJuIHJlZHVjZXJcbn1cbiJdfQ==