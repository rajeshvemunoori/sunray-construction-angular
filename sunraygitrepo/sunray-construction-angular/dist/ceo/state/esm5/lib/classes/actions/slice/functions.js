/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function load(state, action) {
    /** @type {?} */
    var newState = _.merge({}, state, {
        hasError: false
    });
    return newState;
    // return setSliceLoading(newState, action);
}
;
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function loadFail(state, action) {
    /** @type {?} */
    var newState = _.merge({}, state, {
        hasError: true,
    });
    return newState;
    // return setSliceLoading(newState, action);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function loadSuccess(state, action) {
    /** @type {?} */
    var newState = _.merge({}, state, action.payload, {
        hasError: false,
    });
    return newState;
    // return setSliceLoading(newState, action);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function update(state, action) {
    return patchOrUpdate(state, action, true);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function patch(state, action) {
    return patchOrUpdate(state, action, false);
}
/**
 *
 * @param {?} state
 * @param {?} action contains a payload that could be a primitive value, an object or a function with argument state
 * that could return a primitive value or an object
 * @param {?} update boolean true if updating, false if patching
 * @return {?}
 */
function patchOrUpdate(state, action, update) {
    /** @type {?} */
    var obj = [state];
    /** @type {?} */
    var patch = !update;
    /** @type {?} */
    var path = action.payload.path;
    /** @type {?} */
    var hasPath = path && path.length;
    /** @type {?} */
    var pathLength = hasPath ? path.length : 0;
    /** @type {?} */
    var key = path[path.length - 1];
    /** @type {?} */
    var val = {};
    /** @type {?} */
    var pos = pathLength;
    // object
    if (typeof action.payload.val === 'object') {
        // return [val, pos];
        val = action.payload.val;
    }
    else if (typeof action.payload.val === 'function') {
        // function
        val[key] = action.payload.val(state);
        pos--;
        patch = true;
    }
    else {
        // primitive
        val[key] = action.payload.val;
        pos--;
        patch = true;
    }
    /** @type {?} */
    var i = 0;
    for (i = 0; i < pos; i++) {
        obj[i + 1] = obj[i][path[i]];
    }
    if (patch) {
        val = _.merge({}, obj[pos], val);
    }
    obj = [];
    obj[pos] = val;
    for (i = pos - 1; i >= 0; i--) {
        obj[i] = {};
        obj[i][path[i]] = obj[i + 1];
    }
    return tslib_1.__assign({}, state, obj[0]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2FjdGlvbnMvc2xpY2UvZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7OztBQWE1QixNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQVMsRUFBRSxNQUFtQjs7UUFDekMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNoQyxRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDO0lBQ0YsT0FBTyxRQUFRLENBQUM7SUFDaEIsNENBQTRDO0FBQ2hELENBQUM7QUFBQSxDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFtQjs7UUFDekMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNoQyxRQUFRLEVBQUUsSUFBSTtLQUNqQixDQUFDO0lBQ0YsT0FBTyxRQUFRLENBQUM7SUFDaEIsNENBQTRDO0FBQ2hELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU07O1FBQy9CLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNoRCxRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDO0lBQ0YsT0FBTyxRQUFRLENBQUM7SUFDaEIsNENBQTRDO0FBQ2hELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVSxFQUFFLE1BQW1CO0lBQ2xELE9BQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFVLEVBQUUsTUFBbUI7SUFDakQsT0FBTyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7Ozs7QUFTRCxTQUFTLGFBQWEsQ0FBQyxLQUFVLEVBQUUsTUFBbUIsRUFBRSxNQUFlOztRQUMvRCxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBQ2IsS0FBSyxHQUFHLENBQUMsTUFBTTs7UUFDYixJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztRQUMxQixPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNOztRQUM3QixVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztRQUM3QixHQUFHLEdBQUcsRUFBRTs7UUFDUixHQUFHLEdBQUcsVUFBVTtJQUVwQixTQUFTO0lBQ1QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN4QyxxQkFBcUI7UUFDckIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0tBQzVCO1NBQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtRQUNqRCxXQUFXO1FBQ1gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDO1FBQ04sS0FBSyxHQUFHLElBQUksQ0FBQztLQUNoQjtTQUFNO1FBQ0gsWUFBWTtRQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM5QixHQUFHLEVBQUUsQ0FBQztRQUNOLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDaEI7O1FBRUcsQ0FBQyxHQUFHLENBQUM7SUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQztJQUVELElBQUksS0FBSyxFQUFFO1FBQ1AsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNwQztJQUVELEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2YsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoQztJQUVELDRCQUFZLEtBQUssRUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUc7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBheWxvYWRBY3Rpb24gfSAgIGZyb20gJy4uL3BheWxvYWQnO1xuXG5pbXBvcnQgeyB0eXBlRm9yIH0gICAgICAgICBmcm9tICcuL3R5cGUtZm9yJztcbmltcG9ydCB7IFNsaWNlQWN0aW9uIH0gICAgIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25DbGFzc2VzICBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZChzdGF0ZToge30sIGFjdGlvbjogU2xpY2VBY3Rpb24pOiBhbnkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGFzRXJyb3I6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIC8vIHJldHVybiBzZXRTbGljZUxvYWRpbmcobmV3U3RhdGUsIGFjdGlvbik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZhaWwoc3RhdGUsIGFjdGlvbjogU2xpY2VBY3Rpb24pOiBhbnkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIC8vIHJldHVybiBzZXRTbGljZUxvYWRpbmcobmV3U3RhdGUsIGFjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTogYW55IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCwge1xuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIC8vIHJldHVybiBzZXRTbGljZUxvYWRpbmcobmV3U3RhdGUsIGFjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc3RhdGU6IGFueSwgYWN0aW9uOiBTbGljZUFjdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIHBhdGNoT3JVcGRhdGUoc3RhdGUsIGFjdGlvbiwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChzdGF0ZTogYW55LCBhY3Rpb246IFNsaWNlQWN0aW9uKTogYW55IHtcbiAgICByZXR1cm4gcGF0Y2hPclVwZGF0ZShzdGF0ZSwgYWN0aW9uLCBmYWxzZSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIGFjdGlvbiBjb250YWlucyBhIHBheWxvYWQgdGhhdCBjb3VsZCBiZSBhIHByaW1pdGl2ZSB2YWx1ZSwgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24gd2l0aCBhcmd1bWVudCBzdGF0ZVxuICogdGhhdCBjb3VsZCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUgb3IgYW4gb2JqZWN0XG4gKiBAcGFyYW0gdXBkYXRlIGJvb2xlYW4gdHJ1ZSBpZiB1cGRhdGluZywgZmFsc2UgaWYgcGF0Y2hpbmdcbiAqL1xuZnVuY3Rpb24gcGF0Y2hPclVwZGF0ZShzdGF0ZTogYW55LCBhY3Rpb246IFNsaWNlQWN0aW9uLCB1cGRhdGU6IGJvb2xlYW4pOiBhbnkge1xuICAgIGxldCBvYmogPSBbc3RhdGVdO1xuICAgIGxldCBwYXRjaCA9ICF1cGRhdGU7XG4gICAgY29uc3QgcGF0aCA9IGFjdGlvbi5wYXlsb2FkLnBhdGg7XG4gICAgY29uc3QgaGFzUGF0aCA9IHBhdGggJiYgcGF0aC5sZW5ndGg7XG4gICAgY29uc3QgcGF0aExlbmd0aCA9IGhhc1BhdGggPyBwYXRoLmxlbmd0aCA6IDA7XG4gICAgY29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXG4gICAgbGV0IHZhbCA9IHt9O1xuICAgIGxldCBwb3MgPSBwYXRoTGVuZ3RoO1xuXG4gICAgLy8gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24ucGF5bG9hZC52YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIHJldHVybiBbdmFsLCBwb3NdO1xuICAgICAgICB2YWwgPSBhY3Rpb24ucGF5bG9hZC52YWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uLnBheWxvYWQudmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIGZ1bmN0aW9uXG4gICAgICAgIHZhbFtrZXldID0gYWN0aW9uLnBheWxvYWQudmFsKHN0YXRlKTtcbiAgICAgICAgcG9zLS07XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwcmltaXRpdmVcbiAgICAgICAgdmFsW2tleV0gPSBhY3Rpb24ucGF5bG9hZC52YWw7XG4gICAgICAgIHBvcy0tO1xuICAgICAgICBwYXRjaCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwb3M7IGkrKykge1xuICAgICAgICBvYmpbaSArIDFdID0gb2JqW2ldW3BhdGhbaV1dO1xuICAgIH1cblxuICAgIGlmIChwYXRjaCkge1xuICAgICAgICB2YWwgPSBfLm1lcmdlKHt9LCBvYmpbcG9zXSwgdmFsKTtcbiAgICB9XG5cbiAgICBvYmogPSBbXTtcbiAgICBvYmpbcG9zXSA9IHZhbDtcbiAgICBmb3IgKGkgPSBwb3MgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBvYmpbaV0gPSB7fTtcbiAgICAgICAgb2JqW2ldW3BhdGhbaV1dID0gb2JqW2kgKyAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4ub2JqWzBdIH07XG59XG4iXX0=