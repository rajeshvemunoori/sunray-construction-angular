/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// https://www.w3schools.com/tags/tag_video.asp
import * as _ from 'lodash';
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2h0bWwtdmlkZW8vaHRtbC12aWRlby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEdBQUcsTUFBTSxlQUFlLENBQUE7QUFPakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS3dDLDhDQUFhO0lBTHJEOztJQXNCQSxDQUFDO0lBZEMsc0JBQUksNENBQVk7Ozs7UUFBaEI7O2dCQUNNLE9BQU87WUFDWCxJQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBQ2pDLE1BQU0sR0FBRztvQkFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHO29CQUMzQixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbkI7aUJBQ0k7Z0JBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFBO2FBQ2pDO1lBQ0QsT0FBTyxtQkFBQSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUE4QixDQUFBO1FBQzdELENBQUM7OztPQUFBOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHNTQUEwQzs7aUJBRTNDOzs7Z0NBRUUsS0FBSzs7SUFnQlIseUJBQUM7Q0FBQSxBQXRCRCxDQUt3QyxhQUFhLEdBaUJwRDtTQWpCWSxrQkFBa0I7OztJQUM3QiwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3RhZ3MvdGFnX3ZpZGVvLmFzcFxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpSHRtbFZpZGVvVGFnQXR0cmlidXRlcyxcbiAgaUh0bWxTb3VyY2VUYWdBdHRyaWJ1dGVzLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8taHRtbC12aWRlbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9odG1sLXZpZGVvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaHRtbC12aWRlby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxWaWRlb0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSB0YWdBdHRyaWJ1dGVzOiBpSHRtbFZpZGVvVGFnQXR0cmlidXRlc1xuXG4gIGdldCB2aWRlb1NvdXJjZXMoKTogaUh0bWxTb3VyY2VUYWdBdHRyaWJ1dGVzW10ge1xuICAgIHZhciBzb3VyY2VzXG4gICAgaWYoXy5pc1N0cmluZyh0aGlzLnRhZ0F0dHJpYnV0ZXMuc3JjKSkge1xuICAgICAgbGV0IHNvdXJjZSA9IHtcbiAgICAgICAgc3JjOiB0aGlzLnRhZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICB0eXBlOiAndmlkZW8vbXA0J1xuICAgICAgfVxuICAgICAgc291cmNlcyA9IFtzb3VyY2VdXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc291cmNlcyA9IHRoaXMudGFnQXR0cmlidXRlcy5zcmNcbiAgICB9XG4gICAgcmV0dXJuIF8uZmxhdHRlbkRlZXAoc291cmNlcykgYXMgaUh0bWxTb3VyY2VUYWdBdHRyaWJ1dGVzW11cbiAgfVxufVxuIl19