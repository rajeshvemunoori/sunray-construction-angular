/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// https://www.w3schools.com/tags/tag_video.asp
import * as _ from 'lodash';
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../../../../declarables/index';
var HtmlVideoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlVideoComponent, _super);
    function HtmlVideoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HtmlVideoComponent.prototype, "videoSources", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var sources;
            if (_.isString(this.tagAttributes.src)) {
                /** @type {?} */
                var source = {
                    src: this.tagAttributes.src,
                    type: 'video/mp4'
                };
                sources = [source];
            }
            else {
                sources = this.tagAttributes.src;
            }
            return (/** @type {?} */ (_.flattenDeep(sources)));
        },
        enumerable: true,
        configurable: true
    });
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
    return HtmlVideoComponent;
}(BaseComponent));
export { HtmlVideoComponent };
if (false) {
    /** @type {?} */
    HtmlVideoComponent.prototype.tagAttributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vaHRtbC9jb21wb25lbnRzL2h0bWwtdmlkZW8vaHRtbC12aWRlby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEdBQUcsTUFBTSxlQUFlLENBQUE7QUFPakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRTdEO0lBS3dDLDhDQUFhO0lBTHJEOztJQXNCQSxDQUFDO0lBZEMsc0JBQUksNENBQVk7Ozs7UUFBaEI7O2dCQUNNLE9BQU87WUFDWCxJQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBQ2pDLE1BQU0sR0FBRztvQkFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHO29CQUMzQixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbkI7aUJBQ0k7Z0JBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFBO2FBQ2pDO1lBQ0QsT0FBTyxtQkFBQSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUE4QixDQUFBO1FBQzdELENBQUM7OztPQUFBOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHNTQUEwQzs7aUJBRTNDOzs7Z0NBRUUsS0FBSzs7SUFnQlIseUJBQUM7Q0FBQSxBQXRCRCxDQUt3QyxhQUFhLEdBaUJwRDtTQWpCWSxrQkFBa0I7OztJQUM3QiwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3RhZ3MvdGFnX3ZpZGVvLmFzcFxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpSHRtbFZpZGVvVGFnQXR0cmlidXRlcyxcbiAgaUh0bWxTb3VyY2VUYWdBdHRyaWJ1dGVzLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1odG1sLXZpZGVvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2h0bWwtdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9odG1sLXZpZGVvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSHRtbFZpZGVvQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRhZ0F0dHJpYnV0ZXM6IGlIdG1sVmlkZW9UYWdBdHRyaWJ1dGVzXG5cbiAgZ2V0IHZpZGVvU291cmNlcygpOiBpSHRtbFNvdXJjZVRhZ0F0dHJpYnV0ZXNbXSB7XG4gICAgdmFyIHNvdXJjZXNcbiAgICBpZihfLmlzU3RyaW5nKHRoaXMudGFnQXR0cmlidXRlcy5zcmMpKSB7XG4gICAgICBsZXQgc291cmNlID0ge1xuICAgICAgICBzcmM6IHRoaXMudGFnQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIHR5cGU6ICd2aWRlby9tcDQnXG4gICAgICB9XG4gICAgICBzb3VyY2VzID0gW3NvdXJjZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzb3VyY2VzID0gdGhpcy50YWdBdHRyaWJ1dGVzLnNyY1xuICAgIH1cbiAgICByZXR1cm4gXy5mbGF0dGVuRGVlcChzb3VyY2VzKSBhcyBpSHRtbFNvdXJjZVRhZ0F0dHJpYnV0ZXNbXVxuICB9XG59XG4iXX0=