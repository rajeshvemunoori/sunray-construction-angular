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
    let featureConfig = new FeatureConfig(config);
    /** @type {?} */
    let entityTypes = featureConfig.entityTypes;
    /** @type {?} */
    let entityStates = _.reduce(_.map(entityTypes, buildEntityInitialState), _.merge, {});
    return {
        entities: entityStates
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtaW5pdGlhbC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvZmVhdHVyZS9idWlsZC1pbml0aWFsLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0sd0JBQXdCLENBQUE7QUFFL0IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUE7Ozs7O0FBRXpELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUFNOztRQUN6QyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDOztRQUV6QyxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVc7O1FBQ3ZDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUN6QixDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxFQUMzQyxDQUFDLENBQUMsS0FBSyxFQUNQLEVBQUUsQ0FDSDtJQUVELE9BQU87UUFDTCxRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlQ29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBidWlsZEVudGl0eUluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL2VudGl0eS9pbmRleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmVhdHVyZUluaXRpYWxTdGF0ZShjb25maWcpOiBhbnkge1xuICBsZXQgZmVhdHVyZUNvbmZpZyA9IG5ldyBGZWF0dXJlQ29uZmlnKGNvbmZpZylcblxuICBsZXQgZW50aXR5VHlwZXMgPSBmZWF0dXJlQ29uZmlnLmVudGl0eVR5cGVzO1xuICBsZXQgZW50aXR5U3RhdGVzID0gXy5yZWR1Y2UoXG4gICAgXy5tYXAoZW50aXR5VHlwZXMsIGJ1aWxkRW50aXR5SW5pdGlhbFN0YXRlKSxcbiAgICBfLm1lcmdlLFxuICAgIHt9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogZW50aXR5U3RhdGVzXG4gIH1cbn1cbiJdfQ==