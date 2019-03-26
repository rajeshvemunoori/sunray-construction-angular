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
    var filter = ri.filter;
    /** @type {?} */
    var filterHasTaxonomy = function (filter) {
        return _.has(filter, 'taxonomy') && _.has(filter, 'term');
    };
    return filter && filterHasTaxonomy(filter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvaXMtdmFsaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7OztBQU0zQixNQUFNLFVBQVUsT0FBTyxDQUNyQixFQUF1Qjs7UUFFbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNOztRQUVsQixpQkFBaUIsR0FBRyxVQUFDLE1BQU07UUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRUQsT0FBTyxNQUFNLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICdAY2VvL2VudGl0eSdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoXG4gIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuKSB7XG4gIGxldCBmaWx0ZXIgPSByaS5maWx0ZXJcblxuICBsZXQgZmlsdGVySGFzVGF4b25vbXkgPSAoZmlsdGVyKSA9PiB7XG4gICAgcmV0dXJuIF8uaGFzKGZpbHRlciwgJ3RheG9ub215JykgJiYgXy5oYXMoZmlsdGVyLCAndGVybScpXG4gIH1cblxuICByZXR1cm4gZmlsdGVyICYmIGZpbHRlckhhc1RheG9ub215KGZpbHRlcilcbn1cbiJdfQ==