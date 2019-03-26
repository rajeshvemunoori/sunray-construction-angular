/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var ListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListComponent, _super);
    function ListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchAttributes = {};
        _this.actionEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} event_
     * @return {?}
     */
    ListComponent.prototype.triggerAction = /**
     * @param {?} event_
     * @return {?}
     */
    function (event_) {
        this.actionEmitter.emit({
            entity: event_.entity,
            action: event_.action
        });
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-list',
                    template: "<shared-declarables-table\n  [collection$]=\"collection$\"\n  [configHeader$]=\"configHeader$\"\n  (actionEmitter)=\"triggerAction($event)\">\n</shared-declarables-table>\n",
                    styles: [""]
                }] }
    ];
    ListComponent.propDecorators = {
        collection$: [{ type: Input }],
        configHeader$: [{ type: Input }],
        searchAttributes: [{ type: Input }],
        actionEmitter: [{ type: Output }]
    };
    return ListComponent;
}(BaseComponent));
export { ListComponent };
if (false) {
    /** @type {?} */
    ListComponent.prototype.collection$;
    /** @type {?} */
    ListComponent.prototype.configHeader$;
    /** @type {?} */
    ListComponent.prototype.searchAttributes;
    /** @type {?} */
    ListComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS21DLHlDQUFhO0lBTGhEO1FBQUEscUVBd0JDO1FBWEMsc0JBQWdCLEdBQVEsRUFBRSxDQUFDO1FBRzNCLG1CQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7O0lBUTdELENBQUM7Ozs7O0lBTkMscUNBQWE7Ozs7SUFBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLHdMQUFvQzs7aUJBRXJDOzs7OEJBRUUsS0FBSztnQ0FHTCxLQUFLO21DQUdMLEtBQUs7Z0NBR0wsTUFBTTs7SUFTVCxvQkFBQztDQUFBLEFBeEJELENBS21DLGFBQWEsR0FtQi9DO1NBbkJZLGFBQWE7OztJQUN4QixvQ0FDNkI7O0lBRTdCLHNDQUMrQjs7SUFFL0IseUNBQzJCOztJQUUzQixzQ0FDMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29sbGVjdGlvbiQ6IE9ic2VydmFibGU8YW55PjtcblxuICBASW5wdXQoKVxuICBjb25maWdIZWFkZXIkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgQElucHV0KClcbiAgc2VhcmNoQXR0cmlidXRlczogYW55ID0ge307XG5cbiAgQE91dHB1dCgpXG4gIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdHJpZ2dlckFjdGlvbihldmVudF8pIHtcbiAgICB0aGlzLmFjdGlvbkVtaXR0ZXIuZW1pdCh7XG4gICAgICBlbnRpdHk6IGV2ZW50Xy5lbnRpdHksXG4gICAgICBhY3Rpb246IGV2ZW50Xy5hY3Rpb25cbiAgICB9KTtcbiAgfVxufVxuIl19