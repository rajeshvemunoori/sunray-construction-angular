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
export function load(state, action) {
    /** @type {?} */
    const newState = _.merge({}, state, {
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
    const newState = _.merge({}, state, {
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
    const newState = _.merge({}, state, action.payload, {
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
    let obj = [state];
    /** @type {?} */
    let patch = !update;
    /** @type {?} */
    const path = action.payload.path;
    /** @type {?} */
    const hasPath = path && path.length;
    /** @type {?} */
    const pathLength = hasPath ? path.length : 0;
    /** @type {?} */
    const key = path[path.length - 1];
    /** @type {?} */
    let val = {};
    /** @type {?} */
    let pos = pathLength;
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
    let i = 0;
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
    return Object.assign({}, state, obj[0]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2FjdGlvbnMvc2xpY2UvZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBYTVCLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBUyxFQUFFLE1BQW1COztVQUN6QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ2hDLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztJQUNoQiw0Q0FBNEM7QUFDaEQsQ0FBQztBQUFBLENBQUM7Ozs7OztBQUVGLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQW1COztVQUN6QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ2hDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztJQUNoQiw0Q0FBNEM7QUFDaEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTTs7VUFDL0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2hELFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztJQUNoQiw0Q0FBNEM7QUFDaEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFVLEVBQUUsTUFBbUI7SUFDbEQsT0FBTyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQVUsRUFBRSxNQUFtQjtJQUNqRCxPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7OztBQVNELFNBQVMsYUFBYSxDQUFDLEtBQVUsRUFBRSxNQUFtQixFQUFFLE1BQWU7O1FBQy9ELEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs7UUFDYixLQUFLLEdBQUcsQ0FBQyxNQUFNOztVQUNiLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7O1VBQzFCLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07O1VBQzdCLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBQ3RDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1FBQzdCLEdBQUcsR0FBRyxFQUFFOztRQUNSLEdBQUcsR0FBRyxVQUFVO0lBRXBCLFNBQVM7SUFDVCxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQ3hDLHFCQUFxQjtRQUNyQixHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7S0FDNUI7U0FBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQ2pELFdBQVc7UUFDWCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsR0FBRyxFQUFFLENBQUM7UUFDTixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO1NBQU07UUFDSCxZQUFZO1FBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzlCLEdBQUcsRUFBRSxDQUFDO1FBQ04sS0FBSyxHQUFHLElBQUksQ0FBQztLQUNoQjs7UUFFRyxDQUFDLEdBQUcsQ0FBQztJQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDUCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDZixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQseUJBQVksS0FBSyxFQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgLCAgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9ICAgZnJvbSAnLi4vcGF5bG9hZCc7XG5cbmltcG9ydCB7IHR5cGVGb3IgfSAgICAgICAgIGZyb20gJy4vdHlwZS1mb3InO1xuaW1wb3J0IHsgU2xpY2VBY3Rpb24gfSAgICAgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbkNsYXNzZXMgIGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKHN0YXRlOiB7fSwgYWN0aW9uOiBTbGljZUFjdGlvbik6IGFueSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSwge1xuICAgICAgICBoYXNFcnJvcjogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgLy8gcmV0dXJuIHNldFNsaWNlTG9hZGluZyhuZXdTdGF0ZSwgYWN0aW9uKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmFpbChzdGF0ZSwgYWN0aW9uOiBTbGljZUFjdGlvbik6IGFueSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSwge1xuICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgLy8gcmV0dXJuIHNldFNsaWNlTG9hZGluZyhuZXdTdGF0ZSwgYWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pOiBhbnkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5wYXlsb2FkLCB7XG4gICAgICAgIGhhc0Vycm9yOiBmYWxzZSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgLy8gcmV0dXJuIHNldFNsaWNlTG9hZGluZyhuZXdTdGF0ZSwgYWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZTogYW55LCBhY3Rpb246IFNsaWNlQWN0aW9uKTogYW55IHtcbiAgICByZXR1cm4gcGF0Y2hPclVwZGF0ZShzdGF0ZSwgYWN0aW9uLCB0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKHN0YXRlOiBhbnksIGFjdGlvbjogU2xpY2VBY3Rpb24pOiBhbnkge1xuICAgIHJldHVybiBwYXRjaE9yVXBkYXRlKHN0YXRlLCBhY3Rpb24sIGZhbHNlKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gYWN0aW9uIGNvbnRhaW5zIGEgcGF5bG9hZCB0aGF0IGNvdWxkIGJlIGEgcHJpbWl0aXZlIHZhbHVlLCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50IHN0YXRlXG4gKiB0aGF0IGNvdWxkIHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZSBvciBhbiBvYmplY3RcbiAqIEBwYXJhbSB1cGRhdGUgYm9vbGVhbiB0cnVlIGlmIHVwZGF0aW5nLCBmYWxzZSBpZiBwYXRjaGluZ1xuICovXG5mdW5jdGlvbiBwYXRjaE9yVXBkYXRlKHN0YXRlOiBhbnksIGFjdGlvbjogU2xpY2VBY3Rpb24sIHVwZGF0ZTogYm9vbGVhbik6IGFueSB7XG4gICAgbGV0IG9iaiA9IFtzdGF0ZV07XG4gICAgbGV0IHBhdGNoID0gIXVwZGF0ZTtcbiAgICBjb25zdCBwYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aDtcbiAgICBjb25zdCBoYXNQYXRoID0gcGF0aCAmJiBwYXRoLmxlbmd0aDtcbiAgICBjb25zdCBwYXRoTGVuZ3RoID0gaGFzUGF0aCA/IHBhdGgubGVuZ3RoIDogMDtcbiAgICBjb25zdCBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cbiAgICBsZXQgdmFsID0ge307XG4gICAgbGV0IHBvcyA9IHBhdGhMZW5ndGg7XG5cbiAgICAvLyBvYmplY3RcbiAgICBpZiAodHlwZW9mIGFjdGlvbi5wYXlsb2FkLnZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gcmV0dXJuIFt2YWwsIHBvc107XG4gICAgICAgIHZhbCA9IGFjdGlvbi5wYXlsb2FkLnZhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24ucGF5bG9hZC52YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gZnVuY3Rpb25cbiAgICAgICAgdmFsW2tleV0gPSBhY3Rpb24ucGF5bG9hZC52YWwoc3RhdGUpO1xuICAgICAgICBwb3MtLTtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHByaW1pdGl2ZVxuICAgICAgICB2YWxba2V5XSA9IGFjdGlvbi5wYXlsb2FkLnZhbDtcbiAgICAgICAgcG9zLS07XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHBvczsgaSsrKSB7XG4gICAgICAgIG9ialtpICsgMV0gPSBvYmpbaV1bcGF0aFtpXV07XG4gICAgfVxuXG4gICAgaWYgKHBhdGNoKSB7XG4gICAgICAgIHZhbCA9IF8ubWVyZ2Uoe30sIG9ialtwb3NdLCB2YWwpO1xuICAgIH1cblxuICAgIG9iaiA9IFtdO1xuICAgIG9ialtwb3NdID0gdmFsO1xuICAgIGZvciAoaSA9IHBvcyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIG9ialtpXSA9IHt9O1xuICAgICAgICBvYmpbaV1bcGF0aFtpXV0gPSBvYmpbaSArIDFdO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5vYmpbMF0gfTtcbn1cbiJdfQ==