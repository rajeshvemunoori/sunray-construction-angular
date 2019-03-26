/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Current Implementation taken from:
// https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/datepicker/ngb-date-parser-formatter.ts
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
/**
 * @param {?} value
 * @return {?}
 */
export function padNumber(value) {
    if (_.isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
var DateParserFormatter = /** @class */ (function () {
    function DateParserFormatter() {
    }
    // from input -> internal model
    // from input -> internal model
    /**
     * @param {?} value
     * @return {?}
     */
    DateParserFormatter.prototype.parse = 
    // from input -> internal model
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && _.isNumber(dateParts[0])) {
                return { year: _.toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && _.isNumber(dateParts[0]) && _.isNumber(dateParts[1])) {
                return { year: _.toInteger(dateParts[0]), month: _.toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && _.isNumber(dateParts[0]) && _.isNumber(dateParts[1]) && _.isNumber(dateParts[2])) {
                return { year: _.toInteger(dateParts[0]), month: _.toInteger(dateParts[1]), day: _.toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    // from internal model -> string
    // from internal model -> string
    /**
     * @param {?} date
     * @return {?}
     */
    DateParserFormatter.prototype.format = 
    // from internal model -> string
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!date) {
            return '';
        }
        /** @type {?} */
        var separator = '/';
        /** @type {?} */
        var year = _.isNumber(date.year) ? padNumber(date.year) : '';
        /** @type {?} */
        var month = _.isNumber(date.month) ? padNumber(date.month) : '';
        /** @type {?} */
        var day = _.isNumber(date.day) ? padNumber(date.day) : '';
        return _.join([month, day, year], separator);
    };
    DateParserFormatter.decorators = [
        { type: Injectable }
    ];
    return DateParserFormatter;
}());
export { DateParserFormatter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXItZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZS1wYXJzZXItZm9ybWF0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxLQUFNLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7Ozs7QUFPMUMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFhO0lBQ3JDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUEsTUFBSSxLQUFPLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUM3QjtTQUFNO1FBQ0wsT0FBTyxFQUFFLENBQUE7S0FDVjtBQUNILENBQUM7QUFFRDtJQUFBO0lBOEJBLENBQUM7SUE1QkMsK0JBQStCOzs7Ozs7SUFDL0IsbUNBQUs7Ozs7OztJQUFMLFVBQU0sS0FBYTtRQUNqQixJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3pDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsT0FBTyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFBO2FBQ2pFO2lCQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6RixPQUFPLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFBO2FBQ3RGO2lCQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JILE9BQU8sRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFBO2FBQzNHO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxnQ0FBZ0M7Ozs7OztJQUNoQyxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFtQjtRQUN4QixJQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUE7U0FDVjs7WUFFRyxTQUFTLEdBQUcsR0FBRzs7WUFDZixJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ3hELEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDM0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBRXpELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDOUMsQ0FBQzs7Z0JBN0JGLFVBQVU7O0lBOEJYLDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VycmVudCBJbXBsZW1lbnRhdGlvbiB0YWtlbiBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvYmxvYi9tYXN0ZXIvc3JjL2RhdGVwaWNrZXIvbmdiLWRhdGUtcGFyc2VyLWZvcm1hdHRlci50c1xuXG5pbXBvcnQgKiBhcyAgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBOZ2JEYXRlU3RydWN0LFxuICBOZ2JEYXRlLFxufSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKF8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGAwJHt2YWx1ZX1gLnNsaWNlKC0yKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGFyc2VyRm9ybWF0dGVyIHtcbiAgLy8gZnJvbSBpbnB1dCAtPiBpbnRlcm5hbCBtb2RlbFxuICBwYXJzZSh2YWx1ZTogc3RyaW5nKTogTmdiRGF0ZVN0cnVjdCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlUGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJy0nKVxuICAgICAgaWYgKGRhdGVQYXJ0cy5sZW5ndGggPT09IDEgJiYgXy5pc051bWJlcihkYXRlUGFydHNbMF0pKSB7XG4gICAgICAgIHJldHVybiB7eWVhcjogXy50b0ludGVnZXIoZGF0ZVBhcnRzWzBdKSwgbW9udGg6IG51bGwsIGRheTogbnVsbH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0ZVBhcnRzLmxlbmd0aCA9PT0gMiAmJiBfLmlzTnVtYmVyKGRhdGVQYXJ0c1swXSkgJiYgXy5pc051bWJlcihkYXRlUGFydHNbMV0pKSB7XG4gICAgICAgIHJldHVybiB7eWVhcjogXy50b0ludGVnZXIoZGF0ZVBhcnRzWzBdKSwgbW9udGg6IF8udG9JbnRlZ2VyKGRhdGVQYXJ0c1sxXSksIGRheTogbnVsbH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0ZVBhcnRzLmxlbmd0aCA9PT0gMyAmJiBfLmlzTnVtYmVyKGRhdGVQYXJ0c1swXSkgJiYgXy5pc051bWJlcihkYXRlUGFydHNbMV0pICYmIF8uaXNOdW1iZXIoZGF0ZVBhcnRzWzJdKSkge1xuICAgICAgICByZXR1cm4ge3llYXI6IF8udG9JbnRlZ2VyKGRhdGVQYXJ0c1swXSksIG1vbnRoOiBfLnRvSW50ZWdlcihkYXRlUGFydHNbMV0pLCBkYXk6IF8udG9JbnRlZ2VyKGRhdGVQYXJ0c1syXSl9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBmcm9tIGludGVybmFsIG1vZGVsIC0+IHN0cmluZ1xuICBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XG4gICAgaWYoIWRhdGUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGxldCBzZXBhcmF0b3IgPSAnLydcbiAgICBsZXQgeWVhciA9IF8uaXNOdW1iZXIoZGF0ZS55ZWFyKSA/IHBhZE51bWJlcihkYXRlLnllYXIpIDogJydcbiAgICBsZXQgbW9udGggPSBfLmlzTnVtYmVyKGRhdGUubW9udGgpID8gcGFkTnVtYmVyKGRhdGUubW9udGgpIDogJydcbiAgICBsZXQgZGF5ID0gXy5pc051bWJlcihkYXRlLmRheSkgPyBwYWROdW1iZXIoZGF0ZS5kYXkpIDogJydcblxuICAgIHJldHVybiBfLmpvaW4oW21vbnRoLCBkYXksIHllYXJdLCBzZXBhcmF0b3IpXG4gIH1cbn1cbiJdfQ==