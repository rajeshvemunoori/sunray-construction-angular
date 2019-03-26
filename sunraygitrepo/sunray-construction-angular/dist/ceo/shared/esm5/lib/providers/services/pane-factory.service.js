/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { of as observableOf, } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { Pane } from '../classes/index';
import { PaneList } from '../tokens/index';
import * as i0 from "@angular/core";
import * as i1 from "../tokens/pane-list";
var PaneFactory = /** @class */ (function () {
    function PaneFactory(paneList) {
        this.paneList = paneList;
    }
    /**
     * @return {?}
     */
    PaneFactory.prototype.build$ = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panes = _.map(this.paneList, this.buildPane);
        return observableOf(panes);
    };
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    PaneFactory.prototype.buildPane = /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        return new Pane(attributes);
    };
    PaneFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PaneFactory.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PaneList,] }] }
    ]; };
    /** @nocollapse */ PaneFactory.ngInjectableDef = i0.defineInjectable({ factory: function PaneFactory_Factory() { return new PaneFactory(i0.inject(i1.PaneList)); }, token: PaneFactory, providedIn: "root" });
    return PaneFactory;
}());
export { PaneFactory };
if (false) {
    /** @type {?} */
    PaneFactory.prototype.paneList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvcGFuZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxFQUFFLElBQUksWUFBWSxHQUVuQixNQUFNLE1BQU0sQ0FBQTtBQUViLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBSWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBVSxrQkFBa0IsQ0FBQTtBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7OztBQUUxQztJQUlFLHFCQUMyQixRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBRUosNEJBQU07OztJQUFOOztZQUNNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOzs7Ozs7SUFFTywrQkFBUzs7Ozs7SUFBakIsVUFBa0IsVUFBVTtRQUMxQixPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdCLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBR0ksTUFBTSxTQUFDLFFBQVE7OztzQkFyQnBCO0NBZ0NDLEFBaEJELElBZ0JDO1NBYlksV0FBVzs7O0lBRXBCLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgaVBhbmVGYWN0b3J5LCBpUGFuZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IFBhbmUgfSAgICAgZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgUGFuZUxpc3QgfSBmcm9tICcuLi90b2tlbnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVGYWN0b3J5IGltcGxlbWVudHMgaVBhbmVGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQYW5lTGlzdCkgcHVibGljIHBhbmVMaXN0LFxuICApIHt9XG5cbiAgYnVpbGQkKCk6IE9ic2VydmFibGU8aVBhbmVbXT4ge1xuICAgIGxldCBwYW5lcyA9IF8ubWFwKHRoaXMucGFuZUxpc3QsIHRoaXMuYnVpbGRQYW5lKVxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YocGFuZXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGFuZShhdHRyaWJ1dGVzKTogaVBhbmUge1xuICAgIHJldHVybiBuZXcgUGFuZShhdHRyaWJ1dGVzKVxuICB9XG59XG4iXX0=