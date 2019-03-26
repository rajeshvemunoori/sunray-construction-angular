/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var TableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TableComponent, _super);
    function TableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchAttributes = {};
        _this.actionEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} event_
     * @return {?}
     */
    TableComponent.prototype.triggerAction = /**
     * @param {?} event_
     * @return {?}
     */
    function (event_) {
        this.actionEmitter.emit({
            entity: event_.entity,
            action: event_.action
        });
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-table',
                    template: "<a *ngFor=\"let action of collectionActions$ | async\">\n  {{ action.displayValue }}\n</a>\n<table class='table table-bordered'>\n  <thead>\n    <tr>\n      <th *ngFor=\"let header of configHeader$ | async\">\n        {{ header.displayName }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let entity of collection$ | async | customSearch:searchAttributes\"\n      shared-declarables-item\n      [entity]=\"entity\"\n      [configHeader$]=\"configHeader$\"\n      [itemActions$]=\"itemActions$\"\n      (actionEmitter)=\"triggerAction($event)\">\n    </tr>\n  </tbody>\n</table>\n",
                    styles: [""]
                }] }
    ];
    TableComponent.propDecorators = {
        collection$: [{ type: Input }],
        configHeader$: [{ type: Input }],
        itemActions$: [{ type: Input }],
        collectionActions$: [{ type: Input }],
        searchAttributes: [{ type: Input }],
        actionEmitter: [{ type: Output }]
    };
    return TableComponent;
}(BaseComponent));
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.collection$;
    /** @type {?} */
    TableComponent.prototype.configHeader$;
    /** @type {?} */
    TableComponent.prototype.itemActions$;
    /** @type {?} */
    TableComponent.prototype.collectionActions$;
    /** @type {?} */
    TableComponent.prototype.searchAttributes;
    /** @type {?} */
    TableComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS29DLDBDQUFhO0lBTGpEO1FBQUEscUVBOEJDO1FBWEMsc0JBQWdCLEdBQVEsRUFBRSxDQUFDO1FBRzNCLG1CQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7O0lBUTdELENBQUM7Ozs7O0lBTkMsc0NBQWE7Ozs7SUFBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLGttQkFBcUM7O2lCQUV0Qzs7OzhCQUVFLEtBQUs7Z0NBR0wsS0FBSzsrQkFHTCxLQUFLO3FDQUdMLEtBQUs7bUNBR0wsS0FBSztnQ0FHTCxNQUFNOztJQVNULHFCQUFDO0NBQUEsQUE5QkQsQ0FLb0MsYUFBYSxHQXlCaEQ7U0F6QlksY0FBYzs7O0lBQ3pCLHFDQUM2Qjs7SUFFN0IsdUNBQytCOztJQUUvQixzQ0FDOEI7O0lBRTlCLDRDQUNvQzs7SUFFcEMsMENBQzJCOztJQUUzQix1Q0FDMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjb2xsZWN0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZ0hlYWRlciQ6IE9ic2VydmFibGU8YW55PjtcblxuICBASW5wdXQoKVxuICBpdGVtQWN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBASW5wdXQoKVxuICBjb2xsZWN0aW9uQWN0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBASW5wdXQoKVxuICBzZWFyY2hBdHRyaWJ1dGVzOiBhbnkgPSB7fTtcblxuICBAT3V0cHV0KClcbiAgYWN0aW9uRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB0cmlnZ2VyQWN0aW9uKGV2ZW50Xykge1xuICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KHtcbiAgICAgIGVudGl0eTogZXZlbnRfLmVudGl0eSxcbiAgICAgIGFjdGlvbjogZXZlbnRfLmFjdGlvblxuICAgIH0pO1xuICB9XG59XG4iXX0=