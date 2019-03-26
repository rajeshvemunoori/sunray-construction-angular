/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { slugify, camelCase, removePrefix, words, } from '../utils/index';
var InflectionService = /** @class */ (function () {
    function InflectionService() {
    }
    /**
     * @param {?} value
     * @param {?} inflections
     * @return {?}
     */
    InflectionService.prototype.inflect = /**
     * @param {?} value
     * @param {?} inflections
     * @return {?}
     */
    function (value, inflections) {
        var _this = this;
        /** @type {?} */
        var applyInflection = function (value, inflection) {
            return _this.applyInflection(value, inflection);
        };
        return _.reduce(inflections, applyInflection, value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.camelCase = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return camelCase(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.capitalize = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return _.capitalize(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.classify = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var temp = this.pascalCase(value);
        return this.singularize(temp);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.kebabCase = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return _.kebabCase(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.pascalCase = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == 'print-batches') {
            return "PrintBatch";
        }
        else {
            return _.upperFirst(camelCase(_.replace(value, /_/g, "-")));
        }
    };
    // Simple pluralization;
    // just appends the letter 's'
    // to the tne of the string.
    // Simple pluralization;
    // just appends the letter 's'
    // to the tne of the string.
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.pluralize = 
    // Simple pluralization;
    // just appends the letter 's'
    // to the tne of the string.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value + "s";
    };
    /**
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    InflectionService.prototype.removePrefix = /**
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    function (value, prefix) {
        if (prefix === void 0) { prefix = ''; }
        return removePrefix(value, prefix);
    };
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.singularize = 
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var re = /s$/;
        return value.toString().replace(re, "");
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.slugify = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return slugify(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InflectionService.prototype.words = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return words(value);
    };
    // Apply an inflection; if it does not exist, delegate it to underscore
    // Apply an inflection; if it does not exist, delegate it to underscore
    /**
     * @private
     * @param {?} value
     * @param {?} inflection
     * @return {?}
     */
    InflectionService.prototype.applyInflection = 
    // Apply an inflection; if it does not exist, delegate it to underscore
    /**
     * @private
     * @param {?} value
     * @param {?} inflection
     * @return {?}
     */
    function (value, inflection) {
        /** @type {?} */
        var inflectionName;
        /** @type {?} */
        var inflectionArgs;
        if (_.isString(inflection)) {
            inflectionName = inflection;
            inflectionArgs = [value];
        }
        else {
            inflectionName = _.head(inflection);
            inflectionArgs = _.flatten([value, _.drop(inflection)]);
        }
        /** @type {?} */
        var executeInflection;
        if (this[inflectionName]) {
            executeInflection = _.bind(this[inflectionName], this);
        }
        else {
            executeInflection = _[inflectionName];
        }
        return executeInflection.apply(void 0, tslib_1.__spread(inflectionArgs));
    };
    InflectionService.decorators = [
        { type: Injectable }
    ];
    return InflectionService;
}());
export { InflectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2luZmxlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQUUsWUFBWSxFQUN2QixLQUFLLEdBQ04sTUFBTSxnQkFBZ0IsQ0FBQTtBQUl2QjtJQUFBO0lBdUZBLENBQUM7Ozs7OztJQXBGQyxtQ0FBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxXQUE2QjtRQUFwRCxpQkFNQzs7WUFMSyxlQUFlLEdBQUcsVUFBQyxLQUFhLEVBQUUsVUFBMEI7WUFDOUQsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxLQUFhOztZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7O0lBRUQsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxLQUFLLElBQUksZUFBZSxFQUFFO1lBQzVCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQ0k7WUFDSCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUQ7SUFDSCxDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7Ozs7Ozs7O0lBQzVCLHFDQUFTOzs7Ozs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixPQUFVLEtBQUssTUFBRyxDQUFBO0lBQ3BCLENBQUM7Ozs7OztJQUVELHdDQUFZOzs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFDN0MsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGtCQUFrQjs7Ozs7Ozs7SUFDbEIsdUNBQVc7Ozs7Ozs7O0lBQVgsVUFBWSxLQUFhOztZQUNuQixFQUFFLEdBQUcsSUFBSTtRQUNiLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVELGlDQUFLOzs7O0lBQUwsVUFBTSxLQUFhO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCx1RUFBdUU7Ozs7Ozs7O0lBQy9ELDJDQUFlOzs7Ozs7OztJQUF2QixVQUF3QixLQUFhLEVBQUUsVUFBMEI7O1lBQzNELGNBQWM7O1lBQ2QsY0FBYztRQUNsQixJQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekIsY0FBYyxHQUFHLFVBQVUsQ0FBQTtZQUMzQixjQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QjthQUNJO1lBQ0gsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDeEQ7O1lBRUcsaUJBQWlCO1FBQ3JCLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3ZCLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ3ZEO2FBQ0k7WUFDSCxpQkFBaUIsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDdEM7UUFFRCxPQUFPLGlCQUFpQixnQ0FBSSxjQUFjLEdBQUM7SUFDN0MsQ0FBQzs7Z0JBdEZGLFVBQVU7O0lBdUZYLHdCQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F0RlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBzbHVnaWZ5LCBzdGFydHNXaXRoLFxuICBjYW1lbENhc2UsIHJlbW92ZVByZWZpeCxcbiAgd29yZHMsXG59IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG5leHBvcnQgdHlwZSBJbmZsZWN0aW9uVHlwZSA9IHN0cmluZyB8IGFueVtdXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmZsZWN0aW9uU2VydmljZSB7XG5cbiAgaW5mbGVjdCh2YWx1ZTogc3RyaW5nLCBpbmZsZWN0aW9uczogSW5mbGVjdGlvblR5cGVbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFwcGx5SW5mbGVjdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCBpbmZsZWN0aW9uOiBJbmZsZWN0aW9uVHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbHlJbmZsZWN0aW9uKHZhbHVlLCBpbmZsZWN0aW9uKVxuICAgIH1cblxuICAgIHJldHVybiBfLnJlZHVjZShpbmZsZWN0aW9ucywgYXBwbHlJbmZsZWN0aW9uLCB2YWx1ZSlcbiAgfVxuXG4gIGNhbWVsQ2FzZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY2FtZWxDYXNlKHZhbHVlKVxuICB9XG5cbiAgY2FwaXRhbGl6ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXy5jYXBpdGFsaXplKHZhbHVlKVxuICB9XG5cbiAgY2xhc3NpZnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHRlbXAgPSB0aGlzLnBhc2NhbENhc2UodmFsdWUpXG4gICAgcmV0dXJuIHRoaXMuc2luZ3VsYXJpemUodGVtcClcbiAgfVxuXG4gIGtlYmFiQ2FzZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXy5rZWJhYkNhc2UodmFsdWUpXG4gIH1cblxuICBwYXNjYWxDYXNlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA9PSAncHJpbnQtYmF0Y2hlcycpIHtcbiAgICAgIHJldHVybiBcIlByaW50QmF0Y2hcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy51cHBlckZpcnN0KGNhbWVsQ2FzZShfLnJlcGxhY2UodmFsdWUsIC9fL2csIFwiLVwiKSkpXG4gICAgfVxuICB9XG5cbiAgLy8gU2ltcGxlIHBsdXJhbGl6YXRpb247XG4gIC8vIGp1c3QgYXBwZW5kcyB0aGUgbGV0dGVyICdzJ1xuICAvLyB0byB0aGUgdG5lIG9mIHRoZSBzdHJpbmcuXG4gIHBsdXJhbGl6ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9c2BcbiAgfVxuXG4gIHJlbW92ZVByZWZpeCh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVtb3ZlUHJlZml4KHZhbHVlLCBwcmVmaXgpXG4gIH1cblxuICAvLyBTaW1wbGUgc2luZ3VsYXJpemF0aW9uO1xuICAvLyBzaW1wbHkgcmVtb3ZlcyB0aGUgdHJhaWxpbmcgJ3MnXG4gIC8vIGZyb20gYW55IHN0cmluZ1xuICBzaW5ndWxhcml6ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgcmUgPSAvcyQvXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShyZSwgXCJcIilcbiAgfVxuXG4gIHNsdWdpZnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNsdWdpZnkodmFsdWUpXG4gIH1cblxuICB3b3Jkcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd29yZHModmFsdWUpXG4gIH1cbiAgXG4gIC8vIEFwcGx5IGFuIGluZmxlY3Rpb247IGlmIGl0IGRvZXMgbm90IGV4aXN0LCBkZWxlZ2F0ZSBpdCB0byB1bmRlcnNjb3JlXG4gIHByaXZhdGUgYXBwbHlJbmZsZWN0aW9uKHZhbHVlOiBzdHJpbmcsIGluZmxlY3Rpb246IEluZmxlY3Rpb25UeXBlKTogc3RyaW5nIHtcbiAgICB2YXIgaW5mbGVjdGlvbk5hbWVcbiAgICB2YXIgaW5mbGVjdGlvbkFyZ3NcbiAgICBpZihfLmlzU3RyaW5nKGluZmxlY3Rpb24pKSB7XG4gICAgICBpbmZsZWN0aW9uTmFtZSA9IGluZmxlY3Rpb25cbiAgICAgIGluZmxlY3Rpb25BcmdzID0gW3ZhbHVlXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluZmxlY3Rpb25OYW1lID0gXy5oZWFkKGluZmxlY3Rpb24pXG4gICAgICBpbmZsZWN0aW9uQXJncyA9IF8uZmxhdHRlbihbdmFsdWUsIF8uZHJvcChpbmZsZWN0aW9uKV0pXG4gICAgfVxuXG4gICAgdmFyIGV4ZWN1dGVJbmZsZWN0aW9uXG4gICAgaWYodGhpc1tpbmZsZWN0aW9uTmFtZV0pIHtcbiAgICAgIGV4ZWN1dGVJbmZsZWN0aW9uID0gXy5iaW5kKHRoaXNbaW5mbGVjdGlvbk5hbWVdLCB0aGlzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4ZWN1dGVJbmZsZWN0aW9uID0gX1tpbmZsZWN0aW9uTmFtZV1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0ZUluZmxlY3Rpb24oLi4uaW5mbGVjdGlvbkFyZ3MpXG4gIH1cbn1cbiJdfQ==