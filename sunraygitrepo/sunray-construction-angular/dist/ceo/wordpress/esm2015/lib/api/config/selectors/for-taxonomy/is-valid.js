/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
/**
 * @param {?} ri
 * @return {?}
 */
export function isValid(ri) {
    /** @type {?} */
    let filter = ri.filter;
    /** @type {?} */
    let filterHasTaxonomy = (filter) => {
        return _.has(filter, 'taxonomy') && _.has(filter, 'term');
    };
    return filter && filterHasTaxonomy(filter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvaXMtdmFsaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7OztBQU0zQixNQUFNLFVBQVUsT0FBTyxDQUNyQixFQUF1Qjs7UUFFbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNOztRQUVsQixpQkFBaUIsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELE9BQU8sTUFBTSxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnQGNlby9lbnRpdHknXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKFxuICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbikge1xuICBsZXQgZmlsdGVyID0gcmkuZmlsdGVyXG5cbiAgbGV0IGZpbHRlckhhc1RheG9ub215ID0gKGZpbHRlcikgPT4ge1xuICAgIHJldHVybiBfLmhhcyhmaWx0ZXIsICd0YXhvbm9teScpICYmIF8uaGFzKGZpbHRlciwgJ3Rlcm0nKVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlciAmJiBmaWx0ZXJIYXNUYXhvbm9teShmaWx0ZXIpXG59XG4iXX0=