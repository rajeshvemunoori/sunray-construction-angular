/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewContainerRef, ViewChild, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class SvgLoaderComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const view = this._template.createEmbeddedView({ fromContext: 'John' });
        this.vc.insert(view);
    }
}
SvgLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-svg-loader',
                template: "<ng-template #template let-name='fromContext'>{{name}}</ng-template>\n<ng-container #vc></ng-container>\n",
                styles: [""]
            }] }
];
SvgLoaderComponent.propDecorators = {
    _template: [{ type: ViewChild, args: ['template', { read: TemplateRef },] }],
    vc: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    SvgLoaderComponent.prototype._template;
    /** @type {?} */
    SvgLoaderComponent.prototype.vc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL3N2Zy1sb2FkZXIvc3ZnLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBT3RELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxhQUFhOzs7O0lBSW5ELGtCQUFrQjs7Y0FDVixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMscUhBQTBDOzthQUUzQzs7O3dCQUVFLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2lCQUMzQyxTQUFTLFNBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDOzs7O0lBRHpDLHVDQUEwRTs7SUFDMUUsZ0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZWNsYXJhYmxlcy1zdmctbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Zy1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmctbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnTG9hZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd2YycsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgdmM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLl90ZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcoe2Zyb21Db250ZXh0OiAnSm9obid9KTtcbiAgICB0aGlzLnZjLmluc2VydCh2aWV3KTtcbiAgfVxufVxuIl19