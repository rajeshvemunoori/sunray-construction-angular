/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        Object.assign(this, props);
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this._ngControl;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.ngControl.value;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.ngControl.valid;
    }
    /**
     * @return {?}
     */
    markAsTouchedAndDirty() {
        this.markAsTouched();
        this.markAsDirty();
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.ngControl.markAsTouched();
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.ngControl.markAsDirty();
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FormMember.prototype._ngControl;
    /** @type {?} */
    FormMember.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY2xhc3Nlcy9mb3JtLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0EsTUFBTSxPQUFPLFVBQVU7Ozs7SUFJckIsWUFBWSxRQUFhLEVBQUU7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUM3QixDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQzs7OztJQUdELGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ2hDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0NBQ0Y7Ozs7OztJQWpDQyxnQ0FBdUM7O0lBQ3ZDLDBCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCBhcyBOZ0Fic3RyYWN0Q29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJUeXBlLFxuICBpRm9ybU1lbWJlcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEZvcm1NZW1iZXIgaW1wbGVtZW50cyBpRm9ybU1lbWJlciB7XG4gIHByb3RlY3RlZCBfbmdDb250cm9sOiBOZ0Fic3RyYWN0Q29udHJvbFxuICB0eXBlOiBGb3JtTWVtYmVyVHlwZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpXG4gIH1cblxuICBnZXQgbmdDb250cm9sKCk6IE5nQWJzdHJhY3RDb250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5fbmdDb250cm9sXG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wudmFsdWVcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wudmFsaWRcbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKVxuICAgIHRoaXMubWFya0FzRGlydHkoKVxuICB9XG5cblxuICBtYXJrQXNUb3VjaGVkKCkge1xuICAgIHRoaXMubmdDb250cm9sLm1hcmtBc1RvdWNoZWQoKVxuICB9XG5cblxuICBtYXJrQXNEaXJ0eSgpIHtcbiAgICB0aGlzLm5nQ29udHJvbC5tYXJrQXNEaXJ0eSgpXG4gIH1cbn1cbiJdfQ==