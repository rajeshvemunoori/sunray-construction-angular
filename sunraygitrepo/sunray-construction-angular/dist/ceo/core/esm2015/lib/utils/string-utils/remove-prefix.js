/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
// Removes the prefix from the front of the string,
// if it exists
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function removePrefix(value, prefix = '') {
    /** @type {?} */
    let prefixLength = prefix.length;
    if (_.startsWith(value, prefix)) {
        return value.slice(prefixLength);
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXByZWZpeC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9zdHJpbmctdXRpbHMvcmVtb3ZlLXByZWZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7O0FBSTNCLE1BQU0sVUFBVSxZQUFZLENBQzFCLEtBQWEsRUFDYixTQUFpQixFQUFFOztRQUdmLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTTtJQUVoQyxJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtLQUNqQztJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBSZW1vdmVzIHRoZSBwcmVmaXggZnJvbSB0aGUgZnJvbnQgb2YgdGhlIHN0cmluZyxcbi8vIGlmIGl0IGV4aXN0c1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByZWZpeChcbiAgdmFsdWU6IHN0cmluZyxcbiAgcHJlZml4OiBzdHJpbmcgPSAnJyxcbik6IHN0cmluZyB7XG5cbiAgbGV0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGhcblxuICBpZihfLnN0YXJ0c1dpdGgodmFsdWUsIHByZWZpeCkpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UocHJlZml4TGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iXX0=