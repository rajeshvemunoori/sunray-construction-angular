/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input, ViewChild, ComponentFactoryResolver, forwardRef, } from '@angular/core';
import { ContainerDirective } from '../../directives/index';
import { BaseComponent } from '../base/base.component';
export class PaneComponent extends BaseComponent {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.launch();
    }
    /**
     * @private
     * @return {?}
     */
    launch() {
        this.pane$.subscribe(pane => {
            this.loadComponent(pane);
        });
    }
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    loadComponent(pane) {
        /** @type {?} */
        let component = this.createComponent(pane.componentFactory);
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    resolveComponentFactory(component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component);
    }
    /**
     * @private
     * @param {?} componentFactory
     * @return {?}
     */
    createComponent(componentFactory) {
        /** @type {?} */
        let viewContainerRef = this.containerDirective.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.setInputs();
        return this.componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    setInputs() {
        if (this.inputs) {
            /** @type {?} */
            let setInput = (value, prop) => {
                this.componentRef.instance[prop] = value;
            };
            _.forEach(this.inputs, setInput);
        }
    }
}
PaneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-declarables-pane',
                template: "<ng-template shared-declarables-container>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PaneComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
PaneComponent.propDecorators = {
    containerDirective: [{ type: ViewChild, args: [forwardRef(() => ContainerDirective),] }],
    pane$: [{ type: Input }],
    inputs: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaneComponent.prototype.containerDirective;
    /** @type {?} */
    PaneComponent.prototype.componentRef;
    /** @type {?} */
    PaneComponent.prototype.pane$;
    /** @type {?} */
    PaneComponent.prototype.inputs;
    /**
     * @type {?}
     * @private
     */
    PaneComponent.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL3BhbmUvcGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFFakMsT0FBTyxFQUNMLFNBQVMsRUFBVSxLQUFLLEVBQ3hCLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEdBQ2hELE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQU90RCxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7Ozs7SUFVOUMsWUFDVSx3QkFBa0Q7UUFFMUQsS0FBSyxFQUFFLENBQUE7UUFGQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRzVELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2YsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxJQUFXOztZQUMzQixTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRU8sdUJBQXVCLENBQUMsU0FBUztRQUN2QyxPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDakMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLGdCQUFnQjs7WUFDbEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQjtRQUMvRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDOztnQkFDVCxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFJLEtBQUssQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyx3RUFBb0M7O2FBRXJDOzs7O1lBWlksd0JBQXdCOzs7aUNBY2xDLFNBQVMsU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBRzlDLEtBQUs7cUJBR0wsS0FBSzs7Ozs7OztJQU5OLDJDQUM4Qzs7SUFDOUMscUNBQWlCOztJQUNqQiw4QkFDd0I7O0lBRXhCLCtCQUNjOzs7OztJQUdaLGlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LFxuICBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbmRleCdcbmltcG9ydCB7IGlQYW5lIH0gICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLXNoYXJlZC1kZWNsYXJhYmxlcy1wYW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYW5lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFuZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gQ29udGFpbmVyRGlyZWN0aXZlKSlcbiAgcHJpdmF0ZSBjb250YWluZXJEaXJlY3RpdmU6IENvbnRhaW5lckRpcmVjdGl2ZVxuICBjb21wb25lbnRSZWY6IGFueVxuICBASW5wdXQoKVxuICBwYW5lJDogT2JzZXJ2YWJsZTxpUGFuZT5cblxuICBASW5wdXQoKVxuICBpbnB1dHM/OiBhbnlbXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF1bmNoKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoKCkge1xuICAgIHRoaXMucGFuZSQuc3Vic2NyaWJlKHBhbmUgPT4ge1xuICAgICAgdGhpcy5sb2FkQ29tcG9uZW50KHBhbmUpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgbG9hZENvbXBvbmVudChwYW5lOiBpUGFuZSk6IHZvaWQge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChwYW5lLmNvbXBvbmVudEZhY3RvcnkpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICBsZXQgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuY29udGFpbmVyRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWZcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKClcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpXG4gICAgdGhpcy5zZXRJbnB1dHMoKVxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFJlZlxuICB9XG5cbiAgcHJpdmF0ZSBzZXRJbnB1dHMoKSB7XG4gICAgaWYodGhpcy5pbnB1dHMpe1xuICAgICAgbGV0IHNldElucHV0ID0gKHZhbHVlLCBwcm9wKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW3Byb3BdICA9IHZhbHVlXG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5pbnB1dHMsIHNldElucHV0KVxuICAgIH1cbiAgfVxufVxuIl19