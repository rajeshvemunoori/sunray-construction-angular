/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function featureReducer(state, action) {
    /** @type {?} */
    var stateDelta = (/** @type {?} */ ({}));
    switch (action.type) {
        case '[EntityFeature] ADD_FEATURE':
            /** @type {?} */
            let existingFeatures = state.features;
            /** @type {?} */
            let newFeature = action.payload;
            /** @type {?} */
            let featuresDelta = {};
            featuresDelta[newFeature.name] = newFeature;
            /** @type {?} */
            let newFeatures = Object.assign({}, existingFeatures, featuresDelta);
            stateDelta = (/** @type {?} */ ({
                features: newFeatures
            }));
            break;
        case '[EntityFeature] SET_PRIMARY_ENTITY':
            stateDelta = {
                primaryEntity: _.cloneDeep(state.primaryEntity)
            };
            stateDelta.primaryEntity.entity = action.payload;
            break;
        case '[EntityFeature] SET_PRIMARY_ENTITY_IDENTIFIER':
            stateDelta = {
                primaryEntity: _.cloneDeep(state.primaryEntity)
            };
            stateDelta.primaryEntity.resourceIdentifier = action.payload;
            break;
        default:
            break;
    }
    return Object.assign({}, state, stateDelta);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9mZWF0dXJlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7QUFVM0IsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsS0FBb0IsRUFDcEIsTUFBMkI7O1FBR3ZCLFVBQVUsR0FBRyxtQkFBTSxFQUFFLEVBQUE7SUFFekIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssNkJBQTZCOztnQkFFNUIsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFFBQVE7O2dCQUNqQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU87O2dCQUUzQixhQUFhLEdBQUcsRUFBRTtZQUN0QixhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQTs7Z0JBQ3ZDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7WUFFcEUsVUFBVSxHQUFHLG1CQUFNO2dCQUNqQixRQUFRLEVBQUUsV0FBVzthQUN0QixFQUFBLENBQUE7WUFFRCxNQUFLO1FBRVAsS0FBSyxvQ0FBb0M7WUFDdkMsVUFBVSxHQUFHO2dCQUNYLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDaEQsQ0FBQTtZQUVELFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7WUFFaEQsTUFBSztRQUVQLEtBQUssK0NBQStDO1lBQ2xELFVBQVUsR0FBRztnQkFDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ2hELENBQUE7WUFFRCxVQUFVLENBQUMsYUFBYSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7WUFFNUQsTUFBSztRQUVQO1lBQ0UsTUFBSztLQUNSO0lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlQWN0aW9uc1VuaW9uLFxufSBmcm9tICcuL2FjdGlvbnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGZWF0dXJlU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGZlYXR1cmVSZWR1Y2VyKFxuICBzdGF0ZTogaUZlYXR1cmVTdGF0ZSxcbiAgYWN0aW9uOiBGZWF0dXJlQWN0aW9uc1VuaW9uXG4pOiBpRmVhdHVyZVN0YXRlIHtcblxuICB2YXIgc3RhdGVEZWx0YSA9IDxhbnk+IHt9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1tFbnRpdHlGZWF0dXJlXSBBRERfRkVBVFVSRSc6XG5cbiAgICAgIGxldCBleGlzdGluZ0ZlYXR1cmVzID0gc3RhdGUuZmVhdHVyZXNcbiAgICAgIGxldCBuZXdGZWF0dXJlID0gYWN0aW9uLnBheWxvYWRcblxuICAgICAgbGV0IGZlYXR1cmVzRGVsdGEgPSB7fVxuICAgICAgZmVhdHVyZXNEZWx0YVtuZXdGZWF0dXJlLm5hbWVdID0gbmV3RmVhdHVyZVxuICAgICAgbGV0IG5ld0ZlYXR1cmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmdGZWF0dXJlcywgZmVhdHVyZXNEZWx0YSlcblxuICAgICAgc3RhdGVEZWx0YSA9IDxhbnk+IHtcbiAgICAgICAgZmVhdHVyZXM6IG5ld0ZlYXR1cmVzXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdbRW50aXR5RmVhdHVyZV0gU0VUX1BSSU1BUllfRU5USVRZJzpcbiAgICAgIHN0YXRlRGVsdGEgPSB7XG4gICAgICAgIHByaW1hcnlFbnRpdHk6IF8uY2xvbmVEZWVwKHN0YXRlLnByaW1hcnlFbnRpdHkpXG4gICAgICB9XG5cbiAgICAgIHN0YXRlRGVsdGEucHJpbWFyeUVudGl0eS5lbnRpdHkgPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAnW0VudGl0eUZlYXR1cmVdIFNFVF9QUklNQVJZX0VOVElUWV9JREVOVElGSUVSJzpcbiAgICAgIHN0YXRlRGVsdGEgPSB7XG4gICAgICAgIHByaW1hcnlFbnRpdHk6IF8uY2xvbmVEZWVwKHN0YXRlLnByaW1hcnlFbnRpdHkpXG4gICAgICB9XG5cbiAgICAgIHN0YXRlRGVsdGEucHJpbWFyeUVudGl0eS5yZXNvdXJjZUlkZW50aWZpZXIgPSBhY3Rpb24ucGF5bG9hZFxuICAgICBcbiAgICAgIGJyZWFrXG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgc3RhdGVEZWx0YSlcbn1cbiJdfQ==