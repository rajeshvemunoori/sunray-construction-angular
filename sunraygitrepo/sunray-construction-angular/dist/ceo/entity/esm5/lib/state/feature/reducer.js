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
            var existingFeatures = state.features;
            /** @type {?} */
            var newFeature = action.payload;
            /** @type {?} */
            var featuresDelta = {};
            featuresDelta[newFeature.name] = newFeature;
            /** @type {?} */
            var newFeatures = Object.assign({}, existingFeatures, featuresDelta);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2ZlYXR1cmUvcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7OztBQVUzQixNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUFvQixFQUNwQixNQUEyQjs7UUFHdkIsVUFBVSxHQUFHLG1CQUFNLEVBQUUsRUFBQTtJQUV6QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyw2QkFBNkI7O2dCQUU1QixnQkFBZ0IsR0FBRyxLQUFLLENBQUMsUUFBUTs7Z0JBQ2pDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTzs7Z0JBRTNCLGFBQWEsR0FBRyxFQUFFO1lBQ3RCLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFBOztnQkFDdkMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUVwRSxVQUFVLEdBQUcsbUJBQU07Z0JBQ2pCLFFBQVEsRUFBRSxXQUFXO2FBQ3RCLEVBQUEsQ0FBQTtZQUVELE1BQUs7UUFFUCxLQUFLLG9DQUFvQztZQUN2QyxVQUFVLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUNoRCxDQUFBO1lBRUQsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtZQUVoRCxNQUFLO1FBRVAsS0FBSywrQ0FBK0M7WUFDbEQsVUFBVSxHQUFHO2dCQUNYLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDaEQsQ0FBQTtZQUVELFVBQVUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtZQUU1RCxNQUFLO1FBRVA7WUFDRSxNQUFLO0tBQ1I7SUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVBY3Rpb25zVW5pb24sXG59IGZyb20gJy4vYWN0aW9ucy9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUZlYXR1cmVTdGF0ZVxufSBmcm9tICcuL3N0YXRlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZVJlZHVjZXIoXG4gIHN0YXRlOiBpRmVhdHVyZVN0YXRlLFxuICBhY3Rpb246IEZlYXR1cmVBY3Rpb25zVW5pb25cbik6IGlGZWF0dXJlU3RhdGUge1xuXG4gIHZhciBzdGF0ZURlbHRhID0gPGFueT4ge31cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnW0VudGl0eUZlYXR1cmVdIEFERF9GRUFUVVJFJzpcblxuICAgICAgbGV0IGV4aXN0aW5nRmVhdHVyZXMgPSBzdGF0ZS5mZWF0dXJlc1xuICAgICAgbGV0IG5ld0ZlYXR1cmUgPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICBsZXQgZmVhdHVyZXNEZWx0YSA9IHt9XG4gICAgICBmZWF0dXJlc0RlbHRhW25ld0ZlYXR1cmUubmFtZV0gPSBuZXdGZWF0dXJlXG4gICAgICBsZXQgbmV3RmVhdHVyZXMgPSBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZ0ZlYXR1cmVzLCBmZWF0dXJlc0RlbHRhKVxuXG4gICAgICBzdGF0ZURlbHRhID0gPGFueT4ge1xuICAgICAgICBmZWF0dXJlczogbmV3RmVhdHVyZXNcbiAgICAgIH1cblxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ1tFbnRpdHlGZWF0dXJlXSBTRVRfUFJJTUFSWV9FTlRJVFknOlxuICAgICAgc3RhdGVEZWx0YSA9IHtcbiAgICAgICAgcHJpbWFyeUVudGl0eTogXy5jbG9uZURlZXAoc3RhdGUucHJpbWFyeUVudGl0eSlcbiAgICAgIH1cblxuICAgICAgc3RhdGVEZWx0YS5wcmltYXJ5RW50aXR5LmVudGl0eSA9IGFjdGlvbi5wYXlsb2FkXG5cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdbRW50aXR5RmVhdHVyZV0gU0VUX1BSSU1BUllfRU5USVRZX0lERU5USUZJRVInOlxuICAgICAgc3RhdGVEZWx0YSA9IHtcbiAgICAgICAgcHJpbWFyeUVudGl0eTogXy5jbG9uZURlZXAoc3RhdGUucHJpbWFyeUVudGl0eSlcbiAgICAgIH1cblxuICAgICAgc3RhdGVEZWx0YS5wcmltYXJ5RW50aXR5LnJlc291cmNlSWRlbnRpZmllciA9IGFjdGlvbi5wYXlsb2FkXG4gICAgIFxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBzdGF0ZURlbHRhKVxufVxuIl19