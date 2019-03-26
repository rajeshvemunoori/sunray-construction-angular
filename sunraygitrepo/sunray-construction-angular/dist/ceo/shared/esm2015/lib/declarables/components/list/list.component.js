/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class ListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.searchAttributes = {};
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event_
     * @return {?}
     */
    triggerAction(event_) {
        this.actionEmitter.emit({
            entity: event_.entity,
            action: event_.action
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGFBQWMsU0FBUSxhQUFhO0lBTGhEOztRQWFFLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUczQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBUTdELENBQUM7Ozs7O0lBTkMsYUFBYSxDQUFDLE1BQU07UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLHdMQUFvQzs7YUFFckM7OzswQkFFRSxLQUFLOzRCQUdMLEtBQUs7K0JBR0wsS0FBSzs0QkFHTCxNQUFNOzs7O0lBVFAsb0NBQzZCOztJQUU3QixzQ0FDK0I7O0lBRS9CLHlDQUMyQjs7SUFFM0Isc0NBQzJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb24kOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgQElucHV0KClcbiAgY29uZmlnSGVhZGVyJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNlYXJjaEF0dHJpYnV0ZXM6IGFueSA9IHt9O1xuXG4gIEBPdXRwdXQoKVxuICBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRyaWdnZXJBY3Rpb24oZXZlbnRfKSB7XG4gICAgdGhpcy5hY3Rpb25FbWl0dGVyLmVtaXQoe1xuICAgICAgZW50aXR5OiBldmVudF8uZW50aXR5LFxuICAgICAgYWN0aW9uOiBldmVudF8uYWN0aW9uXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==