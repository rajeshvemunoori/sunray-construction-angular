/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class TableComponent extends BaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBTGpEOztRQW1CRSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFHM0Isa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVE3RCxDQUFDOzs7OztJQU5DLGFBQWEsQ0FBQyxNQUFNO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxrbUJBQXFDOzthQUV0Qzs7OzBCQUVFLEtBQUs7NEJBR0wsS0FBSzsyQkFHTCxLQUFLO2lDQUdMLEtBQUs7K0JBR0wsS0FBSzs0QkFHTCxNQUFNOzs7O0lBZlAscUNBQzZCOztJQUU3Qix1Q0FDK0I7O0lBRS9CLHNDQUM4Qjs7SUFFOUIsNENBQ29DOztJQUVwQywwQ0FDMkI7O0lBRTNCLHVDQUMyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb24kOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgQElucHV0KClcbiAgY29uZmlnSGVhZGVyJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGl0ZW1BY3Rpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb25BY3Rpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNlYXJjaEF0dHJpYnV0ZXM6IGFueSA9IHt9O1xuXG4gIEBPdXRwdXQoKVxuICBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRyaWdnZXJBY3Rpb24oZXZlbnRfKSB7XG4gICAgdGhpcy5hY3Rpb25FbWl0dGVyLmVtaXQoe1xuICAgICAgZW50aXR5OiBldmVudF8uZW50aXR5LFxuICAgICAgYWN0aW9uOiBldmVudF8uYWN0aW9uXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==