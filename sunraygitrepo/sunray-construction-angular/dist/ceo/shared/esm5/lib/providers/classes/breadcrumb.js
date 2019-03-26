/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(items) {
        if (items === void 0) { items = []; }
        this.items = items;
        this.length = items.length;
    }
    // Iterator
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    // Iterator
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    Breadcrumb.prototype[Symbol.iterator] = 
    // Iterator
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = 0;
        /** @type {?} */
        var items = this.items;
        return {
            next: function () {
                /** @type {?} */
                var noItems = _.isEmpty(items);
                /** @type {?} */
                var value = noItems ? null : items[current++];
                /** @type {?} */
                var done = noItems ? true : current > items.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    };
    return Breadcrumb;
}());
export { Breadcrumb };
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.length;
    /** @type {?} */
    Breadcrumb.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL2JyZWFkY3J1bWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTzNCO0lBR0Usb0JBQ1MsS0FBNkI7UUFBN0Isc0JBQUEsRUFBQSxVQUE2QjtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQUVwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQztJQUdELFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsb0JBQW9COzs7Ozs7O0lBQ3BCLHFCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFBakI7O1lBQ00sT0FBTyxHQUFHLENBQUM7O1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3RCLE9BQVE7WUFDTixJQUFJLEVBQUU7O29CQUNBLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7b0JBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOztvQkFDekMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU07Z0JBQ2xELE9BQU87b0JBQ0wsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQzs7OztJQTNCQyw0QkFBcUI7O0lBR25CLDJCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpQnJlYWRjcnVtYixcbiAgaUJyZWFkY3J1bWJJdGVtLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYiBpbXBsZW1lbnRzIGlCcmVhZGNydW1iIHtcbiAgcHVibGljIGxlbmd0aDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGl0ZW1zOiBpQnJlYWRjcnVtYkl0ZW1bXSA9IFtdXG4gICkge1xuICAgIHRoaXMubGVuZ3RoID0gaXRlbXMubGVuZ3RoXG4gIH1cblxuXG4gIC8vIEl0ZXJhdG9yXG4gIC8vIEFsbG93cyB1cyB0byB1c2UgdGhlIGNvbGxlY3Rpb25zIGluIGFuZ3VsYXIgZGlyZWN0aXZlc1xuICAvLyAoaS5lLiBuZ0ZvciwgZXRjKVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICBsZXQgY3VycmVudCA9IDBcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBub0l0ZW1zID0gXy5pc0VtcHR5KGl0ZW1zKVxuICAgICAgICBsZXQgdmFsdWUgPSBub0l0ZW1zID8gbnVsbCA6IGl0ZW1zW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBub0l0ZW1zID8gdHJ1ZSA6IGN1cnJlbnQgPiBpdGVtcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=