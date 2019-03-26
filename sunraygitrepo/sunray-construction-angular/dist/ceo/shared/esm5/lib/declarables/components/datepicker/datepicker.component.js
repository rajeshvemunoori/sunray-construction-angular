/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base/base.component';
import { DateParserFormatter } from './date-parser-formatter.service';
var DatepickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatepickerComponent, _super);
    function DatepickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.control.valueChanges.subscribe(function (value) { return _this.onControlValue(value); });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        //console.log("date selected")
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatepickerComponent.prototype.onControlValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        //console.log("on control value")
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-datepicker',
                    template: "<div class=\"input-group\">\n  <input ngbDatepicker\n    [formControl]=\"control\"\n    (dateSelect)=\"onDateSelect($event)\"\n    #datepicker=\"ngbDatepicker\"\n    name=\"dp\"\n    class=\"form-control\"\n    placeholder=\"mm/dd/yy\">\n\n  <div class=\"input-group-append\"\n    (click)=\"datepicker.toggle()\">\n\n    <div class=\"input-group-text\">\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"calendar\">\n      </mat-icon>\n    </div>\n  </div>\n</div>\n",
                    providers: [
                        {
                            provide: NgbDateParserFormatter,
                            useClass: DateParserFormatter,
                        },
                    ],
                    styles: [""]
                }] }
    ];
    DatepickerComponent.propDecorators = {
        control: [{ type: Input }]
    };
    return DatepickerComponent;
}(BaseComponent));
export { DatepickerComponent };
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssR0FBRyxNQUFNLGVBQWUsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQVksZ0JBQWdCLENBQUE7QUFFbEQsT0FBTyxFQUVMLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFBO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUVyRTtJQVd5QywrQ0FBYTtJQVh0RDs7SUEwQkEsQ0FBQzs7OztJQVpDLHNDQUFROzs7SUFBUjtRQUFBLGlCQUdDO1FBRkMsaUJBQU0sUUFBUSxXQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO0lBQzFFLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQWE7UUFDeEIsOEJBQThCO0lBQ2hDLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQVc7UUFDeEIsaUNBQWlDO0lBQ25DLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNmRBQTBDO29CQUUxQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLG1CQUFtQjt5QkFDOUI7cUJBQ0Y7O2lCQUNGOzs7MEJBRUUsS0FBSzs7SUFjUiwwQkFBQztDQUFBLEFBMUJELENBV3lDLGFBQWEsR0FlckQ7U0FmWSxtQkFBbUI7OztJQUM5QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBOZ2JEYXRlLFxuICBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLFxufSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7IERhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICcuL2RhdGUtcGFyc2VyLWZvcm1hdHRlci5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLFxuICAgICAgdXNlQ2xhc3M6IERhdGVQYXJzZXJGb3JtYXR0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbFxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KClcbiAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uQ29udHJvbFZhbHVlKHZhbHVlKSlcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBOZ2JEYXRlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImRhdGUgc2VsZWN0ZWRcIilcbiAgfVxuXG4gIG9uQ29udHJvbFZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIm9uIGNvbnRyb2wgdmFsdWVcIilcbiAgfVxufVxuIl19