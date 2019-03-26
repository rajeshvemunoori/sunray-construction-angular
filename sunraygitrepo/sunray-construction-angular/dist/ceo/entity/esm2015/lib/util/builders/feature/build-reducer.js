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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvZmVhdHVyZS9idWlsZC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUszQixPQUFPLEVBTUwsZUFBZSxHQUNoQixNQUFNLGFBQWEsQ0FBQTtBQVNwQixPQUFPLEVBQ0wsb0JBQW9CLEdBQ3JCLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUNMLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFJTCxvQkFBb0IsR0FDckIsTUFBTSxvQkFBb0IsQ0FBQTs7Ozs7Ozs7QUFFM0IsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxhQUFhLEVBQ2IsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixvQkFBb0I7O1FBR2hCLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQzs7UUFDakQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRO0lBRXJDLG9CQUFvQixDQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQ3JCLENBQUE7O1FBRUcsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDOztRQUU1RSxjQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBRXJGLGtDQUFrQzs7OztRQUM5QixzQkFBc0IsR0FBRyxDQUFDLEtBQTRCLEVBQUUsTUFBVyxFQUFFLEVBQUU7O1lBQ3JFLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSztRQUU1QixJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLEVBQUU7O2dCQUNwRCxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2pELFVBQVUsR0FBRyxFQUFFO1lBQ25CLElBQUcsZUFBZSxFQUFFO2dCQUNsQixVQUFVLENBQUMsZUFBZSxDQUFDO29CQUN6QixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2FBQ2xFO1lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7U0FDNUM7YUFDSTtZQUNILE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDOztRQUVHLFFBQVEsR0FBRztRQUNiLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsUUFBUSxFQUFFLHNCQUFzQjtLQUNqQztJQUVELE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ2xDLENBQUM7O0lBRUcsa0JBQWtCLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFOztRQUN6QyxPQUFPLEdBQUcsRUFBRTs7UUFDWixHQUFHLEdBQUcsaUJBQWlCLENBQUMsU0FBUztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFBO0lBQ3hDLE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgcGlwZSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHtcbiAgc2VsZWN0LFxuICBjcmVhdGVTZWxlY3RvcixcbiAgY29tcG9zZSxcbiAgQWN0aW9uUmVkdWNlcixcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjb21iaW5lUmVkdWNlcnMsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5U3RhdGUsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxuICBpRW50aXR5Q29uZmlnXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmltcG9ydCB7XG4gIEVudGl0eUFkYXB0ZXJGYWN0b3J5LFxufSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzJ1xuXG5pbXBvcnQge1xuICBlbnRpdHlDb25maWdSZWR1Y2VyLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSdcblxuaW1wb3J0IHtcbiAgYnVpbGRFbnRpdHlTZWxlY3RvcnMsXG4gIGJ1aWxkUm9vdFNlbGVjdG9yLFxuICBidWlsZFNsaWNlU2VsZWN0b3IsXG4gIGJ1aWxkRmVhdHVyZVNlbGVjdG9yLFxufSBmcm9tICcuLi9zZWxlY3RvcnMvaW5kZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZlYXR1cmVSZWR1Y2VyKFxuICBmZWF0dXJlQ29uZmlnLFxuICBzZWxlY3RvclNlcnZpY2UsXG4gIHNlbGVjdG9yTmFtZVNlcnZpY2UsXG4gIGJ1aWxkQ3VzdG9tU2VsZWN0b3JzLFxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcblxuICBsZXQgZmFjdG9yeSA9IG5ldyBFbnRpdHlBZGFwdGVyRmFjdG9yeShmZWF0dXJlQ29uZmlnKVxuICBsZXQgZW50aXR5QWRhcHRlcnMgPSBmYWN0b3J5LmFkYXB0ZXJzXG5cbiAgYnVpbGRGZWF0dXJlU2VsZWN0b3IoXG4gICAgZmVhdHVyZUNvbmZpZyxcbiAgICBlbnRpdHlBZGFwdGVycyxcbiAgICBzZWxlY3RvclNlcnZpY2UsXG4gICAgc2VsZWN0b3JOYW1lU2VydmljZSxcbiAgICBidWlsZEN1c3RvbVNlbGVjdG9ycyxcbiAgKVxuXG4gIHZhciBmZWF0dXJlRW50aXRpZXNSZWR1Y2VyUHJlZml4ID0gXy5qb2luKFtmZWF0dXJlQ29uZmlnLm5hbWUsICdlbnRpdGllcyddLCAnLicpXG5cbiAgdmFyIGVudGl0eVJlZHVjZXJzID0gXy5yZWR1Y2UoXy5tYXAoZW50aXR5QWRhcHRlcnMsIGJ1aWxkRW50aXR5UmVkdWNlciksIF8ubWVyZ2UsIHt9KVxuXG4gIC8vIEBMdWlzOiBhY3Rpb24gc2hvdWxkIG5vdCBiZSBhbnlcbiAgbGV0IGZlYXR1cmVFbnRpdGllc1JlZHVjZXIgPSAoc3RhdGU6IGlFbnRpdHlTdGF0ZTxpRW50aXR5PiwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBsZXQgc2xpY2VOYW1lID0gYWN0aW9uLnNsaWNlXG5cbiAgICBpZihfLnN0YXJ0c1dpdGgoc2xpY2VOYW1lLCBmZWF0dXJlRW50aXRpZXNSZWR1Y2VyUHJlZml4KSkge1xuICAgICAgbGV0IGVudGl0eVNsaWNlTmFtZSA9IF8ubGFzdChfLnNwbGl0KHNsaWNlTmFtZSwgJy4nKSlcbiAgICAgIGxldCBzdGF0ZURlbHRhID0ge31cbiAgICAgIGlmKGVudGl0eVNsaWNlTmFtZSkge1xuICAgICAgICBzdGF0ZURlbHRhW2VudGl0eVNsaWNlTmFtZV0gPSBcbiAgICAgICAgICBlbnRpdHlSZWR1Y2Vyc1tlbnRpdHlTbGljZU5hbWVdKHN0YXRlW2VudGl0eVNsaWNlTmFtZV0sIGFjdGlvbilcbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgc3RhdGVEZWx0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cblxuICBsZXQgcmVkdWNlcnMgPSB7XG4gICAgY29uZmlnOiBlbnRpdHlDb25maWdSZWR1Y2VyLFxuICAgIGVudGl0aWVzOiBmZWF0dXJlRW50aXRpZXNSZWR1Y2VyLFxuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycylcbn1cblxubGV0IGJ1aWxkRW50aXR5UmVkdWNlciA9IChlbnRpdHlUeXBlQWRhcHRlcikgPT4ge1xuICBsZXQgcmVkdWNlciA9IHt9XG4gIGxldCBrZXkgPSBlbnRpdHlUeXBlQWRhcHRlci5zbGljZU5hbWVcbiAgcmVkdWNlcltrZXldID0gZW50aXR5VHlwZUFkYXB0ZXIucmVkdWNlclxuICByZXR1cm4gcmVkdWNlclxufVxuIl19