/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base/base.component';
import { DateParserFormatter } from './date-parser-formatter.service';
export class DatepickerComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.control.valueChanges.subscribe(value => this.onControlValue(value));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        //console.log("date selected")
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onControlValue(value) {
        //console.log("on control value")
    }
}
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
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFBO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBWSxnQkFBZ0IsQ0FBQTtBQUVsRCxPQUFPLEVBRUwsc0JBQXNCLEdBQ3ZCLE1BQU0sNEJBQTRCLENBQUE7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBYXJFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBR3BELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWE7UUFDeEIsOEJBQThCO0lBQ2hDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVc7UUFDeEIsaUNBQWlDO0lBQ25DLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNmRBQTBDO2dCQUUxQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtxQkFDOUI7aUJBQ0Y7O2FBQ0Y7OztzQkFFRSxLQUFLOzs7O0lBQU4sc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSAgICAgICBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHtcbiAgTmdiRGF0ZSxcbiAgTmdiRGF0ZVBhcnNlckZvcm1hdHRlcixcbn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi9kYXRlLXBhcnNlci1mb3JtYXR0ZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlcixcbiAgICAgIHVzZUNsYXNzOiBEYXRlUGFyc2VyRm9ybWF0dGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2xcblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpXG4gICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5vbkNvbnRyb2xWYWx1ZSh2YWx1ZSkpXG4gIH1cblxuICBvbkRhdGVTZWxlY3QoZGF0ZTogTmdiRGF0ZSkge1xuICAgIC8vY29uc29sZS5sb2coXCJkYXRlIHNlbGVjdGVkXCIpXG4gIH1cblxuICBvbkNvbnRyb2xWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIC8vY29uc29sZS5sb2coXCJvbiBjb250cm9sIHZhbHVlXCIpXG4gIH1cbn1cbiJdfQ==