/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from "@angular/core";
var ClickStopEventBubbleDirective = /** @class */ (function () {
    function ClickStopEventBubbleDirective() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ClickStopEventBubbleDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.stopEventBubble(event);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    ClickStopEventBubbleDirective.prototype.stopEventBubble = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    ClickStopEventBubbleDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ceoClickStopEventBubble]"
                },] }
    ];
    ClickStopEventBubbleDirective.propDecorators = {
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return ClickStopEventBubbleDirective;
}());
export { ClickStopEventBubbleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stc3RvcC1ldmVudC1idWJibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGlyZWN0aXZlcy9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS9jbGljay1zdG9wLWV2ZW50LWJ1YmJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXZEO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7SUFaUSwrQ0FBTzs7OztJQURkLFVBQ2UsS0FBVTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7OztJQUVTLHVEQUFlOzs7OztJQUF6QixVQUEwQixLQUFLO1FBQzdCLElBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUN4QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7U0FDeEI7UUFDRCxJQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OzBCQUdFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBYW5DLG9DQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltjZW9DbGlja1N0b3BFdmVudEJ1YmJsZV1cIlxufSlcbmV4cG9ydCBjbGFzcyBDbGlja1N0b3BFdmVudEJ1YmJsZURpcmVjdGl2ZVxue1xuICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9wRXZlbnRCdWJibGUoZXZlbnQpXG4gIH1cblxuICBwcm90ZWN0ZWQgc3RvcEV2ZW50QnViYmxlKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxufVxuIl19