/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from "@angular/core";
export class ClickStopEventBubbleDirective {
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.stopEventBubble(event);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    stopEventBubble(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}
ClickStopEventBubbleDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ceoClickStopEventBubble]"
            },] }
];
ClickStopEventBubbleDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stc3RvcC1ldmVudC1idWJibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGlyZWN0aXZlcy9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBS3ZELE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBR2pDLE9BQU8sQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7O0lBRVMsZUFBZSxDQUFDLEtBQUs7UUFDN0IsSUFBRyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtTQUN4QjtRQUNELElBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN2QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7U0FDdkI7SUFDSCxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7OztzQkFHRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbY2VvQ2xpY2tTdG9wRXZlbnRCdWJibGVdXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tTdG9wRXZlbnRCdWJibGVEaXJlY3RpdmVcbntcbiAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGV2ZW50KVxuICB9XG5cbiAgcHJvdGVjdGVkIHN0b3BFdmVudEJ1YmJsZShldmVudCkge1xuICAgIGlmKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==