/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { FeatureConfig, } from '../../../classes/index';
import { buildEntityInitialState } from '../entity/index';
/**
 * @param {?} config
 * @return {?}
 */
export function buildFeatureInitialState(config) {
    /** @type {?} */
    var featureConfig = new FeatureConfig(config);
    /** @type {?} */
    var entityTypes = featureConfig.entityTypes;
    /** @type {?} */
    var entityStates = _.reduce(_.map(entityTypes, buildEntityInitialState), _.merge, {});
    return {
        entities: entityStates
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtaW5pdGlhbC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL2ZlYXR1cmUvYnVpbGQtaW5pdGlhbC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLHdCQUF3QixDQUFBO0FBRS9CLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlCQUFpQixDQUFBOzs7OztBQUV6RCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBTTs7UUFDekMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQzs7UUFFekMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXOztRQUN2QyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLENBQUMsRUFDM0MsQ0FBQyxDQUFDLEtBQUssRUFDUCxFQUFFLENBQ0g7SUFFRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgYnVpbGRFbnRpdHlJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9lbnRpdHkvaW5kZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZlYXR1cmVJbml0aWFsU3RhdGUoY29uZmlnKTogYW55IHtcbiAgbGV0IGZlYXR1cmVDb25maWcgPSBuZXcgRmVhdHVyZUNvbmZpZyhjb25maWcpXG5cbiAgbGV0IGVudGl0eVR5cGVzID0gZmVhdHVyZUNvbmZpZy5lbnRpdHlUeXBlcztcbiAgbGV0IGVudGl0eVN0YXRlcyA9IF8ucmVkdWNlKFxuICAgIF8ubWFwKGVudGl0eVR5cGVzLCBidWlsZEVudGl0eUluaXRpYWxTdGF0ZSksXG4gICAgXy5tZXJnZSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IGVudGl0eVN0YXRlc1xuICB9XG59XG4iXX0=