/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFormManager = /** @class */ (function () {
    function EntityFormManager(entity$, form$) {
        this.entity$ = entity$;
        this.form$ = form$;
    }
    Object.defineProperty(EntityFormManager.prototype, "entity$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entity$;
        },
        set: /**
         * @param {?} entity$
         * @return {?}
         */
        function (entity$) {
            var _this = this;
            this._entity$ = entity$;
            entity$.subscribe(function (entity) { return _this.entity = entity; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "form$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form$;
        },
        set: /**
         * @param {?} form$
         * @return {?}
         */
        function (form$) {
            var _this = this;
            this._form$ = form$;
            form$.subscribe(function (form) { return _this.form = form; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "entity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entity;
        },
        set: /**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            this._entity = entity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "form", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form;
        },
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this._form = form;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EntityFormManager.prototype.formToEntity = /**
     * @return {?}
     */
    function () {
        this.entity.updateAttributes(this.form.value);
    };
    return EntityFormManager;
}());
export { EntityFormManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityFormManager.prototype._entity;
    /**
     * @type {?}
     * @private
     */
    EntityFormManager.prototype._form;
    /**
     * @type {?}
     * @private
     */
    EntityFormManager.prototype._entity$;
    /**
     * @type {?}
     * @private
     */
    EntityFormManager.prototype._form$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NsYXNzZXMvZW50aXR5LWZvcm0tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBaUJBO0lBT0UsMkJBQ0UsT0FBNEIsRUFDNUIsS0FBb0M7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFJLHNDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDdEIsQ0FBQzs7Ozs7UUFQRCxVQUFZLE9BQTRCO1lBQXhDLGlCQUdDO1lBRkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7WUFDdkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxvQ0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3BCLENBQUM7Ozs7O1FBUEQsVUFBVSxLQUFvQztZQUE5QyxpQkFHQztZQUZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO1FBQzNDLENBQUM7OztPQUFBO0lBTUQsc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQixDQUFDOzs7OztRQUVELFVBQVcsTUFBZTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbkIsQ0FBQzs7Ozs7UUFFRCxVQUFTLElBQWtCO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ25CLENBQUM7OztPQUpBOzs7O0lBTUQsd0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7Ozs7Ozs7SUFuREMsb0NBQXdCOzs7OztJQUN4QixrQ0FBMkI7Ozs7O0lBRTNCLHFDQUFxQzs7Ozs7SUFDckMsbUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBpRm9ybVdyYXBwZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlGb3JtTWFuYWdlcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUZvcm1NYW5hZ2VyIGltcGxlbWVudHMgaUVudGl0eUZvcm1NYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZW50aXR5OiBpRW50aXR5XG4gIHByaXZhdGUgX2Zvcm06IGlGb3JtV3JhcHBlclxuXG4gIHByaXZhdGUgX2VudGl0eSQ6IE9ic2VydmFibGU8aUVudGl0eT5cbiAgcHJpdmF0ZSBfZm9ybSQ6IEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZW50aXR5JDogT2JzZXJ2YWJsZTxpRW50aXR5PixcbiAgICBmb3JtJDogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4sXG4gICkge1xuICAgIHRoaXMuZW50aXR5JCA9IGVudGl0eSRcbiAgICB0aGlzLmZvcm0kID0gZm9ybSRcbiAgfVxuXG4gIHNldCBlbnRpdHkkKGVudGl0eSQ6IE9ic2VydmFibGU8aUVudGl0eT4pIHtcbiAgICB0aGlzLl9lbnRpdHkkID0gZW50aXR5JFxuICAgIGVudGl0eSQuc3Vic2NyaWJlKGVudGl0eSA9PiB0aGlzLmVudGl0eSA9IGVudGl0eSlcbiAgfVxuXG4gIGdldCBlbnRpdHkkKCk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHkkXG4gIH1cblxuICBzZXQgZm9ybSQoZm9ybSQ6IEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+KSB7XG4gICAgdGhpcy5fZm9ybSQgPSBmb3JtJFxuICAgIGZvcm0kLnN1YnNjcmliZShmb3JtID0+IHRoaXMuZm9ybSA9IGZvcm0pXG4gIH1cblxuICBnZXQgZm9ybSQoKTogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4ge1xuICAgIHJldHVybiB0aGlzLl9mb3JtJFxuICB9XG5cbiAgZ2V0IGVudGl0eSgpOiBpRW50aXR5IHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5XG4gIH1cblxuICBzZXQgZW50aXR5KGVudGl0eTogaUVudGl0eSkgIHtcbiAgICB0aGlzLl9lbnRpdHkgPSBlbnRpdHlcbiAgfVxuXG4gIGdldCBmb3JtKCk6IGlGb3JtV3JhcHBlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1cbiAgfVxuXG4gIHNldCBmb3JtKGZvcm06IGlGb3JtV3JhcHBlcikge1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtXG4gIH1cblxuICBmb3JtVG9FbnRpdHkoKSB7XG4gICAgdGhpcy5lbnRpdHkudXBkYXRlQXR0cmlidXRlcyh0aGlzLmZvcm0udmFsdWUpXG4gIH1cbn1cbiJdfQ==