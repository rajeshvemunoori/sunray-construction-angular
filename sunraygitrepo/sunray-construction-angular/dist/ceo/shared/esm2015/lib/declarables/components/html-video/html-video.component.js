/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://www.w3schools.com/tags/tag_video.asp
import * as _ from 'lodash';
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class HtmlVideoComponent extends BaseComponent {
    /**
     * @return {?}
     */
    get videoSources() {
        /** @type {?} */
        var sources;
        if (_.isString(this.tagAttributes.src)) {
            /** @type {?} */
            let source = {
                src: this.tagAttributes.src,
                type: 'video/mp4'
            };
            sources = [source];
        }
        else {
            sources = this.tagAttributes.src;
        }
        return (/** @type {?} */ (_.flattenDeep(sources)));
    }
}
HtmlVideoComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-html-video',
                template: "<video\n  [width]=\"tagAttributes.width\"\n  [height]=\"tagAttributes.height\"\n  [autoplay]=\"tagAttributes.autoplay\"\n  [controls]=\"tagAttributes.controls\">\n\n\n  <source \n    *ngFor=\"let src of videoSources\"\n    [src]=\"src.src\"\n    [type]=\"src.type\">\n\n\n</video>\n",
                styles: [""]
            }] }
];
HtmlVideoComponent.propDecorators = {
    tagAttributes: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HtmlVideoComponent.prototype.tagAttributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2h0bWwtdmlkZW8vaHRtbC12aWRlby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssR0FBRyxNQUFNLGVBQWUsQ0FBQTtBQU9qRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7Ozs7SUFHbkQsSUFBSSxZQUFZOztZQUNWLE9BQU87UUFDWCxJQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ2pDLE1BQU0sR0FBRztnQkFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2dCQUMzQixJQUFJLEVBQUUsV0FBVzthQUNsQjtZQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ25CO2FBQ0k7WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUE7U0FDakM7UUFDRCxPQUFPLG1CQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQThCLENBQUE7SUFDN0QsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixzU0FBMEM7O2FBRTNDOzs7NEJBRUUsS0FBSzs7OztJQUFOLDJDQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vdGFncy90YWdfdmlkZW8uYXNwXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlIdG1sVmlkZW9UYWdBdHRyaWJ1dGVzLFxuICBpSHRtbFNvdXJjZVRhZ0F0dHJpYnV0ZXMsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbmRleCdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1odG1sLXZpZGVvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2h0bWwtdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9odG1sLXZpZGVvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSHRtbFZpZGVvQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRhZ0F0dHJpYnV0ZXM6IGlIdG1sVmlkZW9UYWdBdHRyaWJ1dGVzXG5cbiAgZ2V0IHZpZGVvU291cmNlcygpOiBpSHRtbFNvdXJjZVRhZ0F0dHJpYnV0ZXNbXSB7XG4gICAgdmFyIHNvdXJjZXNcbiAgICBpZihfLmlzU3RyaW5nKHRoaXMudGFnQXR0cmlidXRlcy5zcmMpKSB7XG4gICAgICBsZXQgc291cmNlID0ge1xuICAgICAgICBzcmM6IHRoaXMudGFnQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIHR5cGU6ICd2aWRlby9tcDQnXG4gICAgICB9XG4gICAgICBzb3VyY2VzID0gW3NvdXJjZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzb3VyY2VzID0gdGhpcy50YWdBdHRyaWJ1dGVzLnNyY1xuICAgIH1cbiAgICByZXR1cm4gXy5mbGF0dGVuRGVlcChzb3VyY2VzKSBhcyBpSHRtbFNvdXJjZVRhZ0F0dHJpYnV0ZXNbXVxuICB9XG59XG4iXX0=