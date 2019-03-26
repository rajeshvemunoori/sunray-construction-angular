/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormMember = /** @class */ (function () {
    function FormMember(props) {
        if (props === void 0) { props = {}; }
        Object.assign(this, props);
    }
    Object.defineProperty(FormMember.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMember.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngControl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormMember.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngControl.valid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormMember.prototype.markAsTouchedAndDirty = /**
     * @return {?}
     */
    function () {
        this.markAsTouched();
        this.markAsDirty();
    };
    /**
     * @return {?}
     */
    FormMember.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        this.ngControl.markAsTouched();
    };
    /**
     * @return {?}
     */
    FormMember.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        this.ngControl.markAsDirty();
    };
    return FormMember;
}());
export { FormMember };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FormMember.prototype._ngControl;
    /** @type {?} */
    FormMember.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY2xhc3Nlcy9mb3JtLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0E7SUFJRSxvQkFBWSxLQUFlO1FBQWYsc0JBQUEsRUFBQSxVQUFlO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxzQkFBSSxpQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtRQUM3QixDQUFDOzs7T0FBQTs7OztJQUVELDBDQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDOzs7O0lBR0Qsa0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBR0QsZ0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDOzs7Ozs7O0lBakNDLGdDQUF1Qzs7SUFDdkMsMEJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sIGFzIE5nQWJzdHJhY3RDb250cm9sLFxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHtcbiAgRm9ybU1lbWJlclR5cGUsXG4gIGlGb3JtTWVtYmVyLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgRm9ybU1lbWJlciBpbXBsZW1lbnRzIGlGb3JtTWVtYmVyIHtcbiAgcHJvdGVjdGVkIF9uZ0NvbnRyb2w6IE5nQWJzdHJhY3RDb250cm9sXG4gIHR5cGU6IEZvcm1NZW1iZXJUeXBlXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcylcbiAgfVxuXG4gIGdldCBuZ0NvbnRyb2woKTogTmdBYnN0cmFjdENvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLl9uZ0NvbnRyb2xcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC52YWx1ZVxuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC52YWxpZFxuICB9XG5cbiAgbWFya0FzVG91Y2hlZEFuZERpcnR5KCk6IHZvaWQge1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpXG4gICAgdGhpcy5tYXJrQXNEaXJ0eSgpXG4gIH1cblxuXG4gIG1hcmtBc1RvdWNoZWQoKSB7XG4gICAgdGhpcy5uZ0NvbnRyb2wubWFya0FzVG91Y2hlZCgpXG4gIH1cblxuXG4gIG1hcmtBc0RpcnR5KCkge1xuICAgIHRoaXMubmdDb250cm9sLm1hcmtBc0RpcnR5KClcbiAgfVxufVxuIl19