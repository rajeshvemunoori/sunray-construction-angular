/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Native Date adapter for NgbDatepicker. Taken from:
// https://ng-bootstrap.github.io/#/components/datepicker/examples
import * as _ from "lodash";
import { Injectable } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
export class NgbDateNativeAdapter extends NgbDateAdapter {
    /**
     * @param {?} date
     * @return {?}
     */
    fromModel(date) {
        return this.isValidDate(date) ? this.ngbDateStructFromValidDate(date) : null;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toModel(date) {
        return date ? this.dateFromValidNgbDateStruct(date) : null;
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    isValidDate(date) {
        return (date && _.has(date, 'getFullYear'));
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    ngbDateStructFromValidDate(date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    dateFromValidNgbDateStruct(date) {
        return new Date(date.year, date.month - 1, date.day);
    }
}
NgbDateNativeAdapter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL25nYi1kYXRlLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxjQUFjLEVBQ2YsTUFBTSw0QkFBNEIsQ0FBQztBQUdwQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBb0I7Ozs7O0lBQzVELFNBQVMsQ0FBQyxJQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBbUI7UUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFVO1FBQzVCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTywwQkFBMEIsQ0FBQyxJQUFVO1FBQzNDLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDBCQUEwQixDQUFDLElBQW1CO1FBQ3BELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBeEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOYXRpdmUgRGF0ZSBhZGFwdGVyIGZvciBOZ2JEYXRlcGlja2VyLiBUYWtlbiBmcm9tOlxuLy8gaHR0cHM6Ly9uZy1ib290c3RyYXAuZ2l0aHViLmlvLyMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzXG5cbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5nYkRhdGVBZGFwdGVyLCBOZ2JEYXRlU3RydWN0XG59IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVOYXRpdmVBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZUFkYXB0ZXI8RGF0ZT4ge1xuICBmcm9tTW9kZWwoZGF0ZTogRGF0ZSk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlKGRhdGUpID8gdGhpcy5uZ2JEYXRlU3RydWN0RnJvbVZhbGlkRGF0ZShkYXRlKSA6IG51bGw7XG4gIH1cblxuICB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBEYXRlIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuZGF0ZUZyb21WYWxpZE5nYkRhdGVTdHJ1Y3QoZGF0ZSkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1ZhbGlkRGF0ZShkYXRlOiBEYXRlKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIChkYXRlICYmIF8uaGFzKGRhdGUsICdnZXRGdWxsWWVhcicpKTtcbiAgfVxuXG4gIHByaXZhdGUgbmdiRGF0ZVN0cnVjdEZyb21WYWxpZERhdGUoZGF0ZTogRGF0ZSk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKClcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBkYXRlRnJvbVZhbGlkTmdiRGF0ZVN0cnVjdChkYXRlOiBOZ2JEYXRlU3RydWN0KTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KTtcbiAgfVxufVxuIl19