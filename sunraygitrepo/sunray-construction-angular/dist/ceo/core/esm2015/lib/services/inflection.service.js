/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { slugify, camelCase, removePrefix, words, } from '../utils/index';
export class InflectionService {
    /**
     * @param {?} value
     * @param {?} inflections
     * @return {?}
     */
    inflect(value, inflections) {
        /** @type {?} */
        let applyInflection = (value, inflection) => {
            return this.applyInflection(value, inflection);
        };
        return _.reduce(inflections, applyInflection, value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    camelCase(value) {
        return camelCase(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    capitalize(value) {
        return _.capitalize(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    classify(value) {
        /** @type {?} */
        let temp = this.pascalCase(value);
        return this.singularize(temp);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    kebabCase(value) {
        return _.kebabCase(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pascalCase(value) {
        if (value == 'print-batches') {
            return "PrintBatch";
        }
        else {
            return _.upperFirst(camelCase(_.replace(value, /_/g, "-")));
        }
    }
    // Simple pluralization;
    // just appends the letter 's'
    // to the tne of the string.
    /**
     * @param {?} value
     * @return {?}
     */
    pluralize(value) {
        return `${value}s`;
    }
    /**
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    removePrefix(value, prefix = '') {
        return removePrefix(value, prefix);
    }
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    /**
     * @param {?} value
     * @return {?}
     */
    singularize(value) {
        /** @type {?} */
        var re = /s$/;
        return value.toString().replace(re, "");
    }
    /**
     * @param {?} value
     * @return {?}
     */
    slugify(value) {
        return slugify(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    words(value) {
        return words(value);
    }
    // Apply an inflection; if it does not exist, delegate it to underscore
    /**
     * @private
     * @param {?} value
     * @param {?} inflection
     * @return {?}
     */
    applyInflection(value, inflection) {
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
        return executeInflection(...inflectionArgs);
    }
}
InflectionService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2luZmxlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLEtBQUssR0FDTixNQUFNLGdCQUFnQixDQUFBO0FBS3ZCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUU1QixPQUFPLENBQUMsS0FBYSxFQUFFLFdBQTZCOztZQUM5QyxlQUFlLEdBQUcsQ0FBQyxLQUFhLEVBQUUsVUFBMEIsRUFBRSxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDaEQsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3RELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTs7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksS0FBSyxJQUFJLGVBQWUsRUFBRTtZQUM1QixPQUFPLFlBQVksQ0FBQztTQUNyQjthQUNJO1lBQ0gsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzVEO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLEdBQUcsS0FBSyxHQUFHLENBQUE7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxTQUFpQixFQUFFO1FBQzdDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7Ozs7OztJQUtELFdBQVcsQ0FBQyxLQUFhOztZQUNuQixFQUFFLEdBQUcsSUFBSTtRQUNiLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFhO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCLENBQUM7Ozs7Ozs7O0lBR08sZUFBZSxDQUFDLEtBQWEsRUFBRSxVQUEwQjs7WUFDM0QsY0FBYzs7WUFDZCxjQUFjO1FBQ2xCLElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QixjQUFjLEdBQUcsVUFBVSxDQUFBO1lBQzNCLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3pCO2FBQ0k7WUFDSCxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNuQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN4RDs7WUFFRyxpQkFBaUI7UUFDckIsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdkIsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDdkQ7YUFDSTtZQUNILGlCQUFpQixHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUN0QztRQUVELE9BQU8saUJBQWlCLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7WUF0RkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgc2x1Z2lmeSwgc3RhcnRzV2l0aCxcbiAgY2FtZWxDYXNlLCByZW1vdmVQcmVmaXgsXG4gIHdvcmRzLFxufSBmcm9tICcuLi91dGlscy9pbmRleCdcblxuZXhwb3J0IHR5cGUgSW5mbGVjdGlvblR5cGUgPSBzdHJpbmcgfCBhbnlbXVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5mbGVjdGlvblNlcnZpY2Uge1xuXG4gIGluZmxlY3QodmFsdWU6IHN0cmluZywgaW5mbGVjdGlvbnM6IEluZmxlY3Rpb25UeXBlW10pOiBzdHJpbmcge1xuICAgIGxldCBhcHBseUluZmxlY3Rpb24gPSAodmFsdWU6IHN0cmluZywgaW5mbGVjdGlvbjogSW5mbGVjdGlvblR5cGUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmFwcGx5SW5mbGVjdGlvbih2YWx1ZSwgaW5mbGVjdGlvbilcbiAgICB9XG5cbiAgICByZXR1cm4gXy5yZWR1Y2UoaW5mbGVjdGlvbnMsIGFwcGx5SW5mbGVjdGlvbiwgdmFsdWUpXG4gIH1cblxuICBjYW1lbENhc2UodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZSh2YWx1ZSlcbiAgfVxuXG4gIGNhcGl0YWxpemUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIF8uY2FwaXRhbGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIGNsYXNzaWZ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCB0ZW1wID0gdGhpcy5wYXNjYWxDYXNlKHZhbHVlKVxuICAgIHJldHVybiB0aGlzLnNpbmd1bGFyaXplKHRlbXApXG4gIH1cblxuICBrZWJhYkNhc2UodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIF8ua2ViYWJDYXNlKHZhbHVlKVxuICB9XG5cbiAgcGFzY2FsQ2FzZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUgPT0gJ3ByaW50LWJhdGNoZXMnKSB7XG4gICAgICByZXR1cm4gXCJQcmludEJhdGNoXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIF8udXBwZXJGaXJzdChjYW1lbENhc2UoXy5yZXBsYWNlKHZhbHVlLCAvXy9nLCBcIi1cIikpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFNpbXBsZSBwbHVyYWxpemF0aW9uO1xuICAvLyBqdXN0IGFwcGVuZHMgdGhlIGxldHRlciAncydcbiAgLy8gdG8gdGhlIHRuZSBvZiB0aGUgc3RyaW5nLlxuICBwbHVyYWxpemUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXNgXG4gIH1cblxuICByZW1vdmVQcmVmaXgodmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlbW92ZVByZWZpeCh2YWx1ZSwgcHJlZml4KVxuICB9XG5cbiAgLy8gU2ltcGxlIHNpbmd1bGFyaXphdGlvbjtcbiAgLy8gc2ltcGx5IHJlbW92ZXMgdGhlIHRyYWlsaW5nICdzJ1xuICAvLyBmcm9tIGFueSBzdHJpbmdcbiAgc2luZ3VsYXJpemUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHJlID0gL3MkL1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UocmUsIFwiXCIpXG4gIH1cblxuICBzbHVnaWZ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzbHVnaWZ5KHZhbHVlKVxuICB9XG5cbiAgd29yZHModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdvcmRzKHZhbHVlKVxuICB9XG4gIFxuICAvLyBBcHBseSBhbiBpbmZsZWN0aW9uOyBpZiBpdCBkb2VzIG5vdCBleGlzdCwgZGVsZWdhdGUgaXQgdG8gdW5kZXJzY29yZVxuICBwcml2YXRlIGFwcGx5SW5mbGVjdGlvbih2YWx1ZTogc3RyaW5nLCBpbmZsZWN0aW9uOiBJbmZsZWN0aW9uVHlwZSk6IHN0cmluZyB7XG4gICAgdmFyIGluZmxlY3Rpb25OYW1lXG4gICAgdmFyIGluZmxlY3Rpb25BcmdzXG4gICAgaWYoXy5pc1N0cmluZyhpbmZsZWN0aW9uKSkge1xuICAgICAgaW5mbGVjdGlvbk5hbWUgPSBpbmZsZWN0aW9uXG4gICAgICBpbmZsZWN0aW9uQXJncyA9IFt2YWx1ZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbmZsZWN0aW9uTmFtZSA9IF8uaGVhZChpbmZsZWN0aW9uKVxuICAgICAgaW5mbGVjdGlvbkFyZ3MgPSBfLmZsYXR0ZW4oW3ZhbHVlLCBfLmRyb3AoaW5mbGVjdGlvbildKVxuICAgIH1cblxuICAgIHZhciBleGVjdXRlSW5mbGVjdGlvblxuICAgIGlmKHRoaXNbaW5mbGVjdGlvbk5hbWVdKSB7XG4gICAgICBleGVjdXRlSW5mbGVjdGlvbiA9IF8uYmluZCh0aGlzW2luZmxlY3Rpb25OYW1lXSwgdGhpcylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleGVjdXRlSW5mbGVjdGlvbiA9IF9baW5mbGVjdGlvbk5hbWVdXG4gICAgfVxuXG4gICAgcmV0dXJuIGV4ZWN1dGVJbmZsZWN0aW9uKC4uLmluZmxlY3Rpb25BcmdzKVxuICB9XG59XG4iXX0=