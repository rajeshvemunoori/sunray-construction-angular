/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InflectionService } from '@ceo/core';
import { SelectorNameService } from './selector-name.service';
var SelectorService = /** @class */ (function () {
    function SelectorService(inflectionService, store, selectorNameService) {
        this.inflectionService = inflectionService;
        this.store = store;
        this.selectorNameService = selectorNameService;
        this.selectors = {};
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.select$ = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var selector = this.getSelector(selectorName);
        return this.store.select(selector);
    };
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.select = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        return this.select$(selectorName);
    };
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorService.prototype.selectorFromSelectorIdentifier = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        /** @type {?} */
        var selectorName = this.selectorNameService.getResourceSelectorName(si);
        return this.getSelector(selectorName);
    };
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.getSelector = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var path = this.selectorPath(selectorName);
        return _.get(this.selectors, path);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    SelectorService.prototype.addSelector = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var path = this.selectorPath(selector.name);
        this.log(selector, path, false);
        return _.set(this.selectors, path, selector.selector);
    };
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.selectorPath = /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var pathElements = _.split(selectorName, '.')
        /*
        if(pathElements.length > 1) {
          pathElements.splice(1, 0, 'entities')
        }
        */
        ;
        /*
        if(pathElements.length > 1) {
          pathElements.splice(1, 0, 'entities')
        }
        */
        pathElements.push('selector');
        return _.join(pathElements, '.');
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    SelectorService.prototype.log = /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    function (selector, path, loggingEnabled) {
        if (loggingEnabled === void 0) { loggingEnabled = false; }
        if (loggingEnabled) {
            console.log("Registering the selector " + path);
        }
    };
    SelectorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectorService.ctorParameters = function () { return [
        { type: InflectionService },
        { type: Store },
        { type: SelectorNameService }
    ]; };
    return SelectorService;
}());
export { SelectorService };
if (false) {
    /** @type {?} */
    SelectorService.prototype.selectors;
    /**
     * @type {?}
     * @private
     */
    SelectorService.prototype.inflectionService;
    /**
     * @type {?}
     * @private
     */
    SelectorService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SelectorService.prototype.selectorNameService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9zZWxlY3RvcnMvc2VsZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFJM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBRW5DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFrQixXQUFXLENBQUE7QUFPekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFFN0Q7SUFJRSx5QkFDVSxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsbUJBQXdDO1FBRnhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTGxELGNBQVMsR0FBa0IsRUFBRSxDQUFBO0lBTTFCLENBQUM7Ozs7O0lBRUosaUNBQU87Ozs7SUFBUCxVQUFRLFlBQVk7O1lBQ2QsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCx3REFBOEI7Ozs7SUFBOUIsVUFBK0IsRUFBNkI7O1lBQ3RELFlBQVksR0FDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDO1FBRXRELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxZQUFZOztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDMUMsT0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckMsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksUUFBUTs7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7Ozs7OztJQUVPLHNDQUFZOzs7OztJQUFwQixVQUFxQixZQUFvQjs7WUFDbkMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztRQUM3Qzs7OztVQUlFOztRQUpGOzs7O1VBSUU7UUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7Ozs7SUFFTyw2QkFBRzs7Ozs7OztJQUFYLFVBQVksUUFBUSxFQUFFLElBQUksRUFBRSxjQUFzQjtRQUF0QiwrQkFBQSxFQUFBLHNCQUFzQjtRQUNoRCxJQUFHLGNBQWMsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxDQUFBO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBcERGLFVBQVU7Ozs7Z0JBVEYsaUJBQWlCO2dCQUZqQixLQUFLO2dCQVNMLG1CQUFtQjs7SUF1RDVCLHNCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFksZUFBZTs7O0lBQzFCLG9DQUE2Qjs7Ozs7SUFHM0IsNENBQTRDOzs7OztJQUM1QyxnQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgSW5mbGVjdGlvblNlcnZpY2UgfSAgICAgICAgICAgICBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlTZWxlY3RvcnNNYXAsXG4gIGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IFNlbGVjdG9yTmFtZVNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdG9yLW5hbWUuc2VydmljZSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yU2VydmljZSB7XG4gIHNlbGVjdG9yczogaVNlbGVjdG9yc01hcCA9IHt9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIHNlbGVjdG9yTmFtZVNlcnZpY2U6IFNlbGVjdG9yTmFtZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHNlbGVjdCQoc2VsZWN0b3JOYW1lKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yKHNlbGVjdG9yTmFtZSlcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3IpXG4gIH1cblxuICBzZWxlY3Qoc2VsZWN0b3JOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0JChzZWxlY3Rvck5hbWUpXG4gIH1cblxuICBzZWxlY3RvckZyb21TZWxlY3RvcklkZW50aWZpZXIoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICBsZXQgc2VsZWN0b3JOYW1lID1cbiAgICAgIHRoaXMuc2VsZWN0b3JOYW1lU2VydmljZS5nZXRSZXNvdXJjZVNlbGVjdG9yTmFtZShzaSlcblxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdG9yKHNlbGVjdG9yTmFtZSlcbiAgfSBcblxuICBnZXRTZWxlY3RvcihzZWxlY3Rvck5hbWUpIHtcbiAgICBsZXQgcGF0aCA9IHRoaXMuc2VsZWN0b3JQYXRoKHNlbGVjdG9yTmFtZSlcbiAgICByZXR1cm4gIF8uZ2V0KHRoaXMuc2VsZWN0b3JzLCBwYXRoKVxuICB9XG5cbiAgYWRkU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBsZXQgcGF0aCA9IHRoaXMuc2VsZWN0b3JQYXRoKHNlbGVjdG9yLm5hbWUpXG4gICAgdGhpcy5sb2coc2VsZWN0b3IsIHBhdGgsIGZhbHNlKVxuICAgIHJldHVybiBfLnNldCh0aGlzLnNlbGVjdG9ycywgcGF0aCwgc2VsZWN0b3Iuc2VsZWN0b3IpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdG9yUGF0aChzZWxlY3Rvck5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHBhdGhFbGVtZW50cyA9IF8uc3BsaXQoc2VsZWN0b3JOYW1lLCAnLicpXG4gICAgLypcbiAgICBpZihwYXRoRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgcGF0aEVsZW1lbnRzLnNwbGljZSgxLCAwLCAnZW50aXRpZXMnKVxuICAgIH1cbiAgICAqL1xuICAgIHBhdGhFbGVtZW50cy5wdXNoKCdzZWxlY3RvcicpXG4gICAgcmV0dXJuIF8uam9pbihwYXRoRWxlbWVudHMsICcuJylcbiAgfVxuXG4gIHByaXZhdGUgbG9nKHNlbGVjdG9yLCBwYXRoLCBsb2dnaW5nRW5hYmxlZCA9IGZhbHNlKSB7XG4gICAgaWYobG9nZ2luZ0VuYWJsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJpbmcgdGhlIHNlbGVjdG9yIFwiICsgcGF0aClcbiAgICB9XG4gIH1cbn1cbiJdfQ==