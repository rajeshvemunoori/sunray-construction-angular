/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class Breadcrumb {
    /**
     * @param {?=} items
     */
    constructor(items = []) {
        this.items = items;
        this.length = items.length;
    }
    // Iterator
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let items = this.items;
        return {
            next: function () {
                /** @type {?} */
                let noItems = _.isEmpty(items);
                /** @type {?} */
                let value = noItems ? null : items[current++];
                /** @type {?} */
                let done = noItems ? true : current > items.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.length;
    /** @type {?} */
    Breadcrumb.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL2JyZWFkY3J1bWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTzNCLE1BQU0sT0FBTyxVQUFVOzs7O0lBR3JCLFlBQ1MsUUFBMkIsRUFBRTtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQUVwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQzs7Ozs7OztJQU1ELENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7WUFDWCxPQUFPLEdBQUcsQ0FBQzs7WUFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdEIsT0FBUTtZQUNOLElBQUksRUFBRTs7b0JBQ0EsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztvQkFDMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O29CQUN6QyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtnQkFDbEQsT0FBTztvQkFDTCxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0Y7OztJQTNCQyw0QkFBcUI7O0lBR25CLDJCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpQnJlYWRjcnVtYixcbiAgaUJyZWFkY3J1bWJJdGVtLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYiBpbXBsZW1lbnRzIGlCcmVhZGNydW1iIHtcbiAgcHVibGljIGxlbmd0aDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGl0ZW1zOiBpQnJlYWRjcnVtYkl0ZW1bXSA9IFtdXG4gICkge1xuICAgIHRoaXMubGVuZ3RoID0gaXRlbXMubGVuZ3RoXG4gIH1cblxuXG4gIC8vIEl0ZXJhdG9yXG4gIC8vIEFsbG93cyB1cyB0byB1c2UgdGhlIGNvbGxlY3Rpb25zIGluIGFuZ3VsYXIgZGlyZWN0aXZlc1xuICAvLyAoaS5lLiBuZ0ZvciwgZXRjKVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICBsZXQgY3VycmVudCA9IDBcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBub0l0ZW1zID0gXy5pc0VtcHR5KGl0ZW1zKVxuICAgICAgICBsZXQgdmFsdWUgPSBub0l0ZW1zID8gbnVsbCA6IGl0ZW1zW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBub0l0ZW1zID8gdHJ1ZSA6IGN1cnJlbnQgPiBpdGVtcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=