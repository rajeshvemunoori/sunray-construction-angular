/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
export class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeHtml'
            },] }
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeHtmlPipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9waXBlcy9zYWZlLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFhLDJCQUEyQixDQUFBO0FBS3pFLE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3ZCLFlBQ1UsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUM5QixDQUFDOzs7OztJQUVKLFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RELENBQUM7OztZQVZGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQjs7OztZQUpRLFlBQVk7Ozs7Ozs7SUFPakIsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcblxuQFBpcGUoe1xuICBuYW1lOiAnc2FmZUh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0gIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZWQ6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSlcbiAgfVxufVxuIl19