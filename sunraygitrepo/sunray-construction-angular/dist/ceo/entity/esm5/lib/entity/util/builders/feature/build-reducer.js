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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL2ZlYXR1cmUvYnVpbGQtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFLM0IsT0FBTyxFQU1MLGVBQWUsR0FDaEIsTUFBTSxhQUFhLENBQUE7QUFTcEIsT0FBTyxFQUNMLG9CQUFvQixHQUNyQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFDTCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBSUwsb0JBQW9CLEdBQ3JCLE1BQU0sb0JBQW9CLENBQUE7Ozs7Ozs7O0FBRTNCLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsb0JBQW9COztRQUdoQixPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7O1FBQ2pELGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUTtJQUVyQyxvQkFBb0IsQ0FDbEIsYUFBYSxFQUNiLGNBQWMsRUFDZCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUNyQixDQUFBOztRQUVHLDRCQUE0QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7UUFFNUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUVyRixrQ0FBa0M7Ozs7UUFDOUIsc0JBQXNCLEdBQUcsVUFBQyxLQUE0QixFQUFFLE1BQVc7O1lBQ2pFLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSztRQUU1QixJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLEVBQUU7O2dCQUNwRCxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2pELFVBQVUsR0FBRyxFQUFFO1lBQ25CLElBQUcsZUFBZSxFQUFFO2dCQUNsQixVQUFVLENBQUMsZUFBZSxDQUFDO29CQUN6QixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2FBQ2xFO1lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7U0FDNUM7YUFDSTtZQUNILE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDOztRQUVHLFFBQVEsR0FBRztRQUNiLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsUUFBUSxFQUFFLHNCQUFzQjtLQUNqQztJQUVELE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ2xDLENBQUM7O0lBRUcsa0JBQWtCLEdBQUcsVUFBQyxpQkFBaUI7O1FBQ3JDLE9BQU8sR0FBRyxFQUFFOztRQUNaLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUE7SUFDeEMsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQge1xuICBzZWxlY3QsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjb21wb3NlLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNvbWJpbmVSZWR1Y2Vycyxcbn0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIGlFbnRpdHlDb25maWdcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuaW1wb3J0IHtcbiAgRW50aXR5QWRhcHRlckZhY3RvcnksXG59IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMnXG5cbmltcG9ydCB7XG4gIGVudGl0eUNvbmZpZ1JlZHVjZXIsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJ1xuXG5pbXBvcnQge1xuICBidWlsZEVudGl0eVNlbGVjdG9ycyxcbiAgYnVpbGRSb290U2VsZWN0b3IsXG4gIGJ1aWxkU2xpY2VTZWxlY3RvcixcbiAgYnVpbGRGZWF0dXJlU2VsZWN0b3IsXG59IGZyb20gJy4uL3NlbGVjdG9ycy9pbmRleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmVhdHVyZVJlZHVjZXIoXG4gIGZlYXR1cmVDb25maWcsXG4gIHNlbGVjdG9yU2VydmljZSxcbiAgc2VsZWN0b3JOYW1lU2VydmljZSxcbiAgYnVpbGRDdXN0b21TZWxlY3RvcnMsXG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuXG4gIGxldCBmYWN0b3J5ID0gbmV3IEVudGl0eUFkYXB0ZXJGYWN0b3J5KGZlYXR1cmVDb25maWcpXG4gIGxldCBlbnRpdHlBZGFwdGVycyA9IGZhY3RvcnkuYWRhcHRlcnNcblxuICBidWlsZEZlYXR1cmVTZWxlY3RvcihcbiAgICBmZWF0dXJlQ29uZmlnLFxuICAgIGVudGl0eUFkYXB0ZXJzLFxuICAgIHNlbGVjdG9yU2VydmljZSxcbiAgICBzZWxlY3Rvck5hbWVTZXJ2aWNlLFxuICAgIGJ1aWxkQ3VzdG9tU2VsZWN0b3JzLFxuICApXG5cbiAgdmFyIGZlYXR1cmVFbnRpdGllc1JlZHVjZXJQcmVmaXggPSBfLmpvaW4oW2ZlYXR1cmVDb25maWcubmFtZSwgJ2VudGl0aWVzJ10sICcuJylcblxuICB2YXIgZW50aXR5UmVkdWNlcnMgPSBfLnJlZHVjZShfLm1hcChlbnRpdHlBZGFwdGVycywgYnVpbGRFbnRpdHlSZWR1Y2VyKSwgXy5tZXJnZSwge30pXG5cbiAgLy8gQEx1aXM6IGFjdGlvbiBzaG91bGQgbm90IGJlIGFueVxuICBsZXQgZmVhdHVyZUVudGl0aWVzUmVkdWNlciA9IChzdGF0ZTogaUVudGl0eVN0YXRlPGlFbnRpdHk+LCBhY3Rpb246IGFueSkgPT4ge1xuICAgIGxldCBzbGljZU5hbWUgPSBhY3Rpb24uc2xpY2VcblxuICAgIGlmKF8uc3RhcnRzV2l0aChzbGljZU5hbWUsIGZlYXR1cmVFbnRpdGllc1JlZHVjZXJQcmVmaXgpKSB7XG4gICAgICBsZXQgZW50aXR5U2xpY2VOYW1lID0gXy5sYXN0KF8uc3BsaXQoc2xpY2VOYW1lLCAnLicpKVxuICAgICAgbGV0IHN0YXRlRGVsdGEgPSB7fVxuICAgICAgaWYoZW50aXR5U2xpY2VOYW1lKSB7XG4gICAgICAgIHN0YXRlRGVsdGFbZW50aXR5U2xpY2VOYW1lXSA9IFxuICAgICAgICAgIGVudGl0eVJlZHVjZXJzW2VudGl0eVNsaWNlTmFtZV0oc3RhdGVbZW50aXR5U2xpY2VOYW1lXSwgYWN0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBzdGF0ZURlbHRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxuXG4gIGxldCByZWR1Y2VycyA9IHtcbiAgICBjb25maWc6IGVudGl0eUNvbmZpZ1JlZHVjZXIsXG4gICAgZW50aXRpZXM6IGZlYXR1cmVFbnRpdGllc1JlZHVjZXIsXG4gIH1cblxuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKVxufVxuXG5sZXQgYnVpbGRFbnRpdHlSZWR1Y2VyID0gKGVudGl0eVR5cGVBZGFwdGVyKSA9PiB7XG4gIGxldCByZWR1Y2VyID0ge31cbiAgbGV0IGtleSA9IGVudGl0eVR5cGVBZGFwdGVyLnNsaWNlTmFtZVxuICByZWR1Y2VyW2tleV0gPSBlbnRpdHlUeXBlQWRhcHRlci5yZWR1Y2VyXG4gIHJldHVybiByZWR1Y2VyXG59XG4iXX0=