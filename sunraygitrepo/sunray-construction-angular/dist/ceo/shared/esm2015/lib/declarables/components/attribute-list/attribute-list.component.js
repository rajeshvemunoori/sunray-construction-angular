/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class AttributeListComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.attributeEntities$ = this.attributeEntity$
            .pipe(mergeMap((entity) => {
            return entity.getAttributeEntities$(this.attributeEntityLabels$);
        }));
    }
    /**
     * @param {?} attributeEntity
     * @param {?} attribute
     * @return {?}
     */
    getAttributeValue(attributeEntity, attribute) {
        return attributeEntity[attribute];
    }
}
AttributeListComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-attribute-list',
                template: "<table *ngIf=\"attributeEntities$\" class='table table-bordered'>\n  <tbody>\n    <tr *ngFor=\"let attributeEntity of (attributeEntities$ | async)\">\n      <th *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'displayName'\n        ) }}\n      </th>\n      <td *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'value'\n        ) }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                styles: [""]
            }] }
];
AttributeListComponent.propDecorators = {
    attributeEntity$: [{ type: Input }],
    attributeEntityLabels$: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AttributeListComponent.prototype.attributeEntity$;
    /** @type {?} */
    AttributeListComponent.prototype.attributeEntityLabels$;
    /** @type {?} */
    AttributeListComponent.prototype.attributeEntities$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9hdHRyaWJ1dGUtbGlzdC9hdHRyaWJ1dGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFDakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRXpDLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7Ozs7SUFRdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4QixPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFNBQVM7UUFDMUMsT0FBTyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxnZUFBOEM7O2FBRS9DOzs7K0JBRUUsS0FBSztxQ0FFTCxLQUFLOzs7O0lBRk4sa0RBQ2lDOztJQUNqQyx3REFDdUM7O0lBRXZDLG9EQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgXG4gIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLWF0dHJpYnV0ZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F0dHJpYnV0ZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXR0cmlidXRlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0ZUVudGl0eSQ6IE9ic2VydmFibGU8YW55PlxuICBASW5wdXQoKVxuICBhdHRyaWJ1dGVFbnRpdHlMYWJlbHMkOiBPYnNlcnZhYmxlPGFueT5cblxuICBhdHRyaWJ1dGVFbnRpdGllcyQ6IE9ic2VydmFibGU8YW55PlxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXR0cmlidXRlRW50aXRpZXMkID0gdGhpcy5hdHRyaWJ1dGVFbnRpdHkkXG4gICAgICAucGlwZShtZXJnZU1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgIHJldHVybiBlbnRpdHkuZ2V0QXR0cmlidXRlRW50aXRpZXMkKHRoaXMuYXR0cmlidXRlRW50aXR5TGFiZWxzJClcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlRW50aXR5LCBhdHRyaWJ1dGUpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlRW50aXR5W2F0dHJpYnV0ZV1cbiAgfVxufVxuIl19