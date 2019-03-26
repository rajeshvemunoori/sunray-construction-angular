/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, } from '@angular/core';
import { ApiRequestOptionsBuilder as BaseApiRequestOptionsBuilder, } from '@ceo/shared';
export class RequestOptionsBuilder extends BaseApiRequestOptionsBuilder {
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    filterParams(ri) {
        /** @type {?} */
        let filter = this.getFilter(ri);
        if (filter) {
            return {
                filter: this.sanitizedParams(filter)
            };
        }
        else {
            return {};
        }
    }
}
RequestOptionsBuilder.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9zZXJ2aWNlcy9hcGkvcmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsd0JBQXdCLElBQUksNEJBQTRCLEdBRXpELE1BQU0sYUFBYSxDQUFBO0FBR3BCLE1BQU0sT0FBTyxxQkFBdUIsU0FBUSw0QkFBNEI7Ozs7OztJQUM1RCxZQUFZLENBQUMsRUFBMEI7O1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUUvQixJQUFHLE1BQU0sRUFBRTtZQUNULE9BQU87Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2FBQ3JDLENBQUE7U0FDRjthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUE7U0FDVjtJQUNILENBQUM7OztZQWJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQXBpUmVxdWVzdE9wdGlvbnNCdWlsZGVyIGFzIEJhc2VBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVxdWVzdE9wdGlvbnNCdWlsZGVyICBleHRlbmRzIEJhc2VBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIge1xuICBwcm90ZWN0ZWQgZmlsdGVyUGFyYW1zKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKSB7XG4gICAgbGV0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyKHJpKVxuXG4gICAgaWYoZmlsdGVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXI6IHRoaXMuc2FuaXRpemVkUGFyYW1zKGZpbHRlcilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cbn1cbiJdfQ==