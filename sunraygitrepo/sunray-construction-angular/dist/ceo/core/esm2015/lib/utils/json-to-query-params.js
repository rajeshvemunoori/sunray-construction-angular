/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} params
 * @return {?}
 */
export function jsonToQueryParams(params) {
    /** @type {?} */
    let queryParams = "";
    for (let param in params) {
        queryParams += '&filter[' + param + ']=' + params[param];
    }
    return queryParams;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi10by1xdWVyeS1wYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvanNvbi10by1xdWVyeS1wYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBTTs7UUFDbEMsV0FBVyxHQUFHLEVBQUU7SUFFcEIsS0FBSSxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDdkIsV0FBVyxJQUFJLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUVELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpzb25Ub1F1ZXJ5UGFyYW1zKHBhcmFtcyk6IGFueSB7XG4gIGxldCBxdWVyeVBhcmFtcyA9IFwiXCI7XG5cbiAgZm9yKGxldCBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBxdWVyeVBhcmFtcyArPSAnJmZpbHRlclsnICsgcGFyYW0gKyAnXT0nICsgcGFyYW1zW3BhcmFtXTtcbiAgfVxuXG4gIHJldHVybiBxdWVyeVBhcmFtcztcbn1cbiJdfQ==