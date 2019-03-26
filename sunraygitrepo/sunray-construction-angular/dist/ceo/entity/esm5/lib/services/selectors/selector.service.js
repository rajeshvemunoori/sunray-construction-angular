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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUkzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFbkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQWtCLFdBQVcsQ0FBQTtBQU96RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUU3RDtJQUlFLHlCQUNVLGlCQUFvQyxFQUNwQyxLQUFpQixFQUNqQixtQkFBd0M7UUFGeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMbEQsY0FBUyxHQUFrQixFQUFFLENBQUE7SUFNMUIsQ0FBQzs7Ozs7SUFFSixpQ0FBTzs7OztJQUFQLFVBQVEsWUFBWTs7WUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7OztJQUVELHdEQUE4Qjs7OztJQUE5QixVQUErQixFQUE2Qjs7WUFDdEQsWUFBWSxHQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLFlBQVk7O1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMxQyxPQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNyQyxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxRQUFROztZQUNkLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Ozs7O0lBRU8sc0NBQVk7Ozs7O0lBQXBCLFVBQXFCLFlBQW9COztZQUNuQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO1FBQzdDOzs7O1VBSUU7O1FBSkY7Ozs7VUFJRTtRQUNGLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7Ozs7OztJQUVPLDZCQUFHOzs7Ozs7O0lBQVgsVUFBWSxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQXNCO1FBQXRCLCtCQUFBLEVBQUEsc0JBQXNCO1FBQ2hELElBQUcsY0FBYyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLENBQUE7U0FDaEQ7SUFDSCxDQUFDOztnQkFwREYsVUFBVTs7OztnQkFURixpQkFBaUI7Z0JBRmpCLEtBQUs7Z0JBU0wsbUJBQW1COztJQXVENUIsc0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXBEWSxlQUFlOzs7SUFDMUIsb0NBQTZCOzs7OztJQUczQiw0Q0FBNEM7Ozs7O0lBQzVDLGdDQUF5Qjs7Ozs7SUFDekIsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSAgIGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBJbmZsZWN0aW9uU2VydmljZSB9ICAgICAgICAgICAgIGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaVNlbGVjdG9yc01hcCxcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgU2VsZWN0b3JOYW1lU2VydmljZSB9IGZyb20gJy4vc2VsZWN0b3ItbmFtZS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JTZXJ2aWNlIHtcbiAgc2VsZWN0b3JzOiBpU2VsZWN0b3JzTWFwID0ge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZmxlY3Rpb25TZXJ2aWNlOiBJbmZsZWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgc2VsZWN0b3JOYW1lU2VydmljZTogU2VsZWN0b3JOYW1lU2VydmljZVxuICApIHt9XG5cbiAgc2VsZWN0JChzZWxlY3Rvck5hbWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcilcbiAgfVxuXG4gIHNlbGVjdChzZWxlY3Rvck5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QkKHNlbGVjdG9yTmFtZSlcbiAgfVxuXG4gIHNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcihzaTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcikge1xuICAgIGxldCBzZWxlY3Rvck5hbWUgPVxuICAgICAgdGhpcy5zZWxlY3Rvck5hbWVTZXJ2aWNlLmdldFJlc291cmNlU2VsZWN0b3JOYW1lKHNpKVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKVxuICB9IFxuXG4gIGdldFNlbGVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgIGxldCBwYXRoID0gdGhpcy5zZWxlY3RvclBhdGgoc2VsZWN0b3JOYW1lKVxuICAgIHJldHVybiAgXy5nZXQodGhpcy5zZWxlY3RvcnMsIHBhdGgpXG4gIH1cblxuICBhZGRTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGxldCBwYXRoID0gdGhpcy5zZWxlY3RvclBhdGgoc2VsZWN0b3IubmFtZSlcbiAgICB0aGlzLmxvZyhzZWxlY3RvciwgcGF0aCwgZmFsc2UpXG4gICAgcmV0dXJuIF8uc2V0KHRoaXMuc2VsZWN0b3JzLCBwYXRoLCBzZWxlY3Rvci5zZWxlY3RvcilcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0b3JQYXRoKHNlbGVjdG9yTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcGF0aEVsZW1lbnRzID0gXy5zcGxpdChzZWxlY3Rvck5hbWUsICcuJylcbiAgICAvKlxuICAgIGlmKHBhdGhFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBwYXRoRWxlbWVudHMuc3BsaWNlKDEsIDAsICdlbnRpdGllcycpXG4gICAgfVxuICAgICovXG4gICAgcGF0aEVsZW1lbnRzLnB1c2goJ3NlbGVjdG9yJylcbiAgICByZXR1cm4gXy5qb2luKHBhdGhFbGVtZW50cywgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2coc2VsZWN0b3IsIHBhdGgsIGxvZ2dpbmdFbmFibGVkID0gZmFsc2UpIHtcbiAgICBpZihsb2dnaW5nRW5hYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmluZyB0aGUgc2VsZWN0b3IgXCIgKyBwYXRoKVxuICAgIH1cbiAgfVxufVxuIl19