/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class EntityFormManager {
    /**
     * @param {?} entity$
     * @param {?} form$
     */
    constructor(entity$, form$) {
        this.entity$ = entity$;
        this.form$ = form$;
    }
    /**
     * @param {?} entity$
     * @return {?}
     */
    set entity$(entity$) {
        this._entity$ = entity$;
        entity$.subscribe(entity => this.entity = entity);
    }
    /**
     * @return {?}
     */
    get entity$() {
        return this._entity$;
    }
    /**
     * @param {?} form$
     * @return {?}
     */
    set form$(form$) {
        this._form$ = form$;
        form$.subscribe(form => this.form = form);
    }
    /**
     * @return {?}
     */
    get form$() {
        return this._form$;
    }
    /**
     * @return {?}
     */
    get entity() {
        return this._entity;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    set entity(entity) {
        this._entity = entity;
    }
    /**
     * @return {?}
     */
    get form() {
        return this._form;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this._form = form;
    }
    /**
     * @return {?}
     */
    formToEntity() {
        this.entity.updateAttributes(this.form.value);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NsYXNzZXMvZW50aXR5LWZvcm0tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBaUJBLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTzVCLFlBQ0UsT0FBNEIsRUFDNUIsS0FBb0M7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUE0QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBb0M7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7SUFDbkIsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0MsQ0FBQztDQUNGOzs7Ozs7SUFuREMsb0NBQXdCOzs7OztJQUN4QixrQ0FBMkI7Ozs7O0lBRTNCLHFDQUFxQzs7Ozs7SUFDckMsbUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBpRm9ybVdyYXBwZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlGb3JtTWFuYWdlcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUZvcm1NYW5hZ2VyIGltcGxlbWVudHMgaUVudGl0eUZvcm1NYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZW50aXR5OiBpRW50aXR5XG4gIHByaXZhdGUgX2Zvcm06IGlGb3JtV3JhcHBlclxuXG4gIHByaXZhdGUgX2VudGl0eSQ6IE9ic2VydmFibGU8aUVudGl0eT5cbiAgcHJpdmF0ZSBfZm9ybSQ6IEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZW50aXR5JDogT2JzZXJ2YWJsZTxpRW50aXR5PixcbiAgICBmb3JtJDogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4sXG4gICkge1xuICAgIHRoaXMuZW50aXR5JCA9IGVudGl0eSRcbiAgICB0aGlzLmZvcm0kID0gZm9ybSRcbiAgfVxuXG4gIHNldCBlbnRpdHkkKGVudGl0eSQ6IE9ic2VydmFibGU8aUVudGl0eT4pIHtcbiAgICB0aGlzLl9lbnRpdHkkID0gZW50aXR5JFxuICAgIGVudGl0eSQuc3Vic2NyaWJlKGVudGl0eSA9PiB0aGlzLmVudGl0eSA9IGVudGl0eSlcbiAgfVxuXG4gIGdldCBlbnRpdHkkKCk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHkkXG4gIH1cblxuICBzZXQgZm9ybSQoZm9ybSQ6IEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+KSB7XG4gICAgdGhpcy5fZm9ybSQgPSBmb3JtJFxuICAgIGZvcm0kLnN1YnNjcmliZShmb3JtID0+IHRoaXMuZm9ybSA9IGZvcm0pXG4gIH1cblxuICBnZXQgZm9ybSQoKTogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4ge1xuICAgIHJldHVybiB0aGlzLl9mb3JtJFxuICB9XG5cbiAgZ2V0IGVudGl0eSgpOiBpRW50aXR5IHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5XG4gIH1cblxuICBzZXQgZW50aXR5KGVudGl0eTogaUVudGl0eSkgIHtcbiAgICB0aGlzLl9lbnRpdHkgPSBlbnRpdHlcbiAgfVxuXG4gIGdldCBmb3JtKCk6IGlGb3JtV3JhcHBlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1cbiAgfVxuXG4gIHNldCBmb3JtKGZvcm06IGlGb3JtV3JhcHBlcikge1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtXG4gIH1cblxuICBmb3JtVG9FbnRpdHkoKSB7XG4gICAgdGhpcy5lbnRpdHkudXBkYXRlQXR0cmlidXRlcyh0aGlzLmZvcm0udmFsdWUpXG4gIH1cbn1cbiJdfQ==