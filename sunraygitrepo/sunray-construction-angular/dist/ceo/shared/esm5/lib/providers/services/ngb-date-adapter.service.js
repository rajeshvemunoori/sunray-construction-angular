/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Native Date adapter for NgbDatepicker. Taken from:
// https://ng-bootstrap.github.io/#/components/datepicker/examples
import * as _ from "lodash";
import { Injectable } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.fromModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isValidDate(date) ? this.ngbDateStructFromValidDate(date) : null;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.toModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? this.dateFromValidNgbDateStruct(date) : null;
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.isValidDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (date && _.has(date, 'getFullYear'));
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.ngbDateStructFromValidDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    NgbDateNativeAdapter.prototype.dateFromValidNgbDateStruct = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day);
    };
    NgbDateNativeAdapter.decorators = [
        { type: Injectable }
    ];
    return NgbDateNativeAdapter;
}(NgbDateAdapter));
export { NgbDateNativeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL25nYi1kYXRlLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sNEJBQTRCLENBQUM7QUFFcEM7SUFDMEMsZ0RBQW9CO0lBRDlEOztJQXlCQSxDQUFDOzs7OztJQXZCQyx3Q0FBUzs7OztJQUFULFVBQVUsSUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLElBQW1CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsSUFBVTtRQUM1QixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRU8seURBQTBCOzs7OztJQUFsQyxVQUFtQyxJQUFVO1FBQzNDLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHlEQUEwQjs7Ozs7SUFBbEMsVUFBbUMsSUFBbUI7UUFDcEQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkF4QkYsVUFBVTs7SUF5QlgsMkJBQUM7Q0FBQSxBQXpCRCxDQUMwQyxjQUFjLEdBd0J2RDtTQXhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOYXRpdmUgRGF0ZSBhZGFwdGVyIGZvciBOZ2JEYXRlcGlja2VyLiBUYWtlbiBmcm9tOlxuLy8gaHR0cHM6Ly9uZy1ib290c3RyYXAuZ2l0aHViLmlvLyMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzXG5cbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5nYkRhdGVBZGFwdGVyLCBOZ2JEYXRlU3RydWN0XG59IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVOYXRpdmVBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZUFkYXB0ZXI8RGF0ZT4ge1xuICBmcm9tTW9kZWwoZGF0ZTogRGF0ZSk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlKGRhdGUpID8gdGhpcy5uZ2JEYXRlU3RydWN0RnJvbVZhbGlkRGF0ZShkYXRlKSA6IG51bGw7XG4gIH1cblxuICB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBEYXRlIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuZGF0ZUZyb21WYWxpZE5nYkRhdGVTdHJ1Y3QoZGF0ZSkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1ZhbGlkRGF0ZShkYXRlOiBEYXRlKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIChkYXRlICYmIF8uaGFzKGRhdGUsICdnZXRGdWxsWWVhcicpKTtcbiAgfVxuXG4gIHByaXZhdGUgbmdiRGF0ZVN0cnVjdEZyb21WYWxpZERhdGUoZGF0ZTogRGF0ZSk6IE5nYkRhdGVTdHJ1Y3Qge1xuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKClcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBkYXRlRnJvbVZhbGlkTmdiRGF0ZVN0cnVjdChkYXRlOiBOZ2JEYXRlU3RydWN0KTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KTtcbiAgfVxufVxuIl19