/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { mergeMap, shareReplay, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EntityFormManager, } from '../classes/index';
import { EntityFormFactory } from './entity-form-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./entity-form-factory.service";
var EntityFormManagerFactory = /** @class */ (function () {
    function EntityFormManagerFactory(formFactory) {
        this.formFactory = formFactory;
    }
    /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.build = /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    function (entity$, formName) {
        /** @type {?} */
        var form$ = (/** @type {?} */ (this.buildForm$(entity$, formName).pipe(shareReplay(1))));
        return new EntityFormManager(entity$, form$);
    };
    /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.buildForm$ = /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    function (entity$, formName) {
        var _this = this;
        return (/** @type {?} */ (entity$.pipe(shareReplay(1), mergeMap(function (entity) { return _this.buildForm(entity, formName); }))));
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.buildForm = /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    function (entity, formName) {
        /** @type {?} */
        var opts = {
            formName: formName
        };
        return this.formFactory.build$(entity, opts);
    };
    EntityFormManagerFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityFormManagerFactory.ctorParameters = function () { return [
        { type: EntityFormFactory }
    ]; };
    /** @nocollapse */ EntityFormManagerFactory.ngInjectableDef = i0.defineInjectable({ factory: function EntityFormManagerFactory_Factory() { return new EntityFormManagerFactory(i0.inject(i1.EntityFormFactory)); }, token: EntityFormManagerFactory, providedIn: "root" });
    return EntityFormManagerFactory;
}());
export { EntityFormManagerFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityFormManagerFactory.prototype.formFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tbWFuYWdlci1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9lbnRpdHktZm9ybS1tYW5hZ2VyLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVTFDLE9BQU8sRUFDTCxpQkFBaUIsR0FDbEIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTs7O0FBRWpFO0lBSUUsa0NBQ1UsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ3BDLENBQUM7Ozs7OztJQUVMLHdDQUFLOzs7OztJQUFMLFVBQU0sT0FBNEIsRUFBRSxRQUFnQjs7WUFDOUMsS0FBSyxHQUFHLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDakQsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLEVBQWlDO1FBRWxDLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDOUMsQ0FBQzs7Ozs7OztJQUVPLDZDQUFVOzs7Ozs7SUFBbEIsVUFDRSxPQUE0QixFQUM1QixRQUFnQjtRQUZsQixpQkFTQztRQUpDLE9BQU8sbUJBQUEsT0FBTyxDQUFDLElBQUksQ0FDakIsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFFBQVEsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQ3JELEVBQWlDLENBQUE7SUFDcEMsQ0FBQzs7Ozs7OztJQUVPLDRDQUFTOzs7Ozs7SUFBakIsVUFDRSxNQUFlLEVBQ2YsUUFBZ0I7O1lBRVosSUFBSSxHQUFHO1lBQ1QsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDOztnQkFuQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxpQkFBaUI7OzttQ0F4QjFCO0NBOERDLEFBcENELElBb0NDO1NBakNZLHdCQUF3Qjs7Ozs7O0lBRWpDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWVyZ2VNYXAsXG4gIHNoYXJlUmVwbGF5LFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlGb3JtV3JhcHBlcixcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJy4uLy4uL2VudGl0eS9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5Rm9ybU1hbmFnZXIsXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eUZvcm1GYWN0b3J5IH0gZnJvbSAnLi9lbnRpdHktZm9ybS1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUZvcm1NYW5hZ2VyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUZhY3Rvcnk6IEVudGl0eUZvcm1GYWN0b3J5LFxuICApIHsgfVxuXG4gIGJ1aWxkKGVudGl0eSQ6IE9ic2VydmFibGU8aUVudGl0eT4sIGZvcm1OYW1lOiBzdHJpbmcpOiBFbnRpdHlGb3JtTWFuYWdlciB7XG4gICAgbGV0IGZvcm0kID0gdGhpcy5idWlsZEZvcm0kKGVudGl0eSQsIGZvcm1OYW1lKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgKSBhcyBCZWhhdmlvclN1YmplY3Q8aUZvcm1XcmFwcGVyPlxuXG4gICAgcmV0dXJuIG5ldyBFbnRpdHlGb3JtTWFuYWdlcihlbnRpdHkkLCBmb3JtJClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtJChcbiAgICBlbnRpdHkkOiBPYnNlcnZhYmxlPGlFbnRpdHk+LFxuICAgIGZvcm1OYW1lOiBzdHJpbmcsXG4gICk6IEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+IHtcblxuICAgIHJldHVybiBlbnRpdHkkLnBpcGUoXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIG1lcmdlTWFwKGVudGl0eSA9PiB0aGlzLmJ1aWxkRm9ybShlbnRpdHksIGZvcm1OYW1lKSlcbiAgICApIGFzIEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybShcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICAgZm9ybU5hbWU6IHN0cmluZ1xuICApOiBCZWhhdmlvclN1YmplY3Q8aUZvcm1XcmFwcGVyPiB7XG4gICAgbGV0IG9wdHMgPSB7XG4gICAgICBmb3JtTmFtZTogZm9ybU5hbWVcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybUZhY3RvcnkuYnVpbGQkKGVudGl0eSwgb3B0cylcbiAgfVxufVxuIl19