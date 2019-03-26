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
export class EntityFormManagerFactory {
    /**
     * @param {?} formFactory
     */
    constructor(formFactory) {
        this.formFactory = formFactory;
    }
    /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    build(entity$, formName) {
        /** @type {?} */
        let form$ = (/** @type {?} */ (this.buildForm$(entity$, formName).pipe(shareReplay(1))));
        return new EntityFormManager(entity$, form$);
    }
    /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    buildForm$(entity$, formName) {
        return (/** @type {?} */ (entity$.pipe(shareReplay(1), mergeMap(entity => this.buildForm(entity, formName)))));
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    buildForm(entity, formName) {
        /** @type {?} */
        let opts = {
            formName: formName
        };
        return this.formFactory.build$(entity, opts);
    }
}
EntityFormManagerFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityFormManagerFactory.ctorParameters = () => [
    { type: EntityFormFactory }
];
/** @nocollapse */ EntityFormManagerFactory.ngInjectableDef = i0.defineInjectable({ factory: function EntityFormManagerFactory_Factory() { return new EntityFormManagerFactory(i0.inject(i1.EntityFormFactory)); }, token: EntityFormManagerFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityFormManagerFactory.prototype.formFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tbWFuYWdlci1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9lbnRpdHktZm9ybS1tYW5hZ2VyLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVTFDLE9BQU8sRUFDTCxpQkFBaUIsR0FDbEIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTs7O0FBS2pFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFDVSxXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDcEMsQ0FBQzs7Ozs7O0lBRUwsS0FBSyxDQUFDLE9BQTRCLEVBQUUsUUFBZ0I7O1lBQzlDLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2pELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDZixFQUFpQztRQUVsQyxPQUFPLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzlDLENBQUM7Ozs7Ozs7SUFFTyxVQUFVLENBQ2hCLE9BQTRCLEVBQzVCLFFBQWdCO1FBR2hCLE9BQU8sbUJBQUEsT0FBTyxDQUFDLElBQUksQ0FDakIsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQ3JELEVBQWlDLENBQUE7SUFDcEMsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FDZixNQUFlLEVBQ2YsUUFBZ0I7O1lBRVosSUFBSSxHQUFHO1lBQ1QsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDOzs7WUFuQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsaUJBQWlCOzs7Ozs7OztJQU90QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIG1lcmdlTWFwLFxuICBzaGFyZVJlcGxheSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRm9ybVdyYXBwZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEVudGl0eUZvcm1NYW5hZ2VyLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlGb3JtRmFjdG9yeSB9IGZyb20gJy4vZW50aXR5LWZvcm0tZmFjdG9yeS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlGb3JtTWFuYWdlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1GYWN0b3J5OiBFbnRpdHlGb3JtRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChlbnRpdHkkOiBPYnNlcnZhYmxlPGlFbnRpdHk+LCBmb3JtTmFtZTogc3RyaW5nKTogRW50aXR5Rm9ybU1hbmFnZXIge1xuICAgIGxldCBmb3JtJCA9IHRoaXMuYnVpbGRGb3JtJChlbnRpdHkkLCBmb3JtTmFtZSkucGlwZShcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICAgICkgYXMgQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj5cblxuICAgIHJldHVybiBuZXcgRW50aXR5Rm9ybU1hbmFnZXIoZW50aXR5JCwgZm9ybSQpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybSQoXG4gICAgZW50aXR5JDogT2JzZXJ2YWJsZTxpRW50aXR5PixcbiAgICBmb3JtTmFtZTogc3RyaW5nLFxuICApOiBCZWhhdmlvclN1YmplY3Q8aUZvcm1XcmFwcGVyPiB7XG5cbiAgICByZXR1cm4gZW50aXR5JC5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICBtZXJnZU1hcChlbnRpdHkgPT4gdGhpcy5idWlsZEZvcm0oZW50aXR5LCBmb3JtTmFtZSkpXG4gICAgKSBhcyBCZWhhdmlvclN1YmplY3Q8aUZvcm1XcmFwcGVyPlxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm0oXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIGZvcm1OYW1lOiBzdHJpbmdcbiAgKTogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4ge1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgZm9ybU5hbWU6IGZvcm1OYW1lXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm1GYWN0b3J5LmJ1aWxkJChlbnRpdHksIG9wdHMpXG4gIH1cbn1cbiJdfQ==