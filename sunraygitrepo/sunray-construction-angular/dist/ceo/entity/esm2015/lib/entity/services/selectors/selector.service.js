/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InflectionService } from '@ceo/core';
import { SelectorNameService } from './selector-name.service';
export class SelectorService {
    /**
     * @param {?} inflectionService
     * @param {?} store
     * @param {?} selectorNameService
     */
    constructor(inflectionService, store, selectorNameService) {
        this.inflectionService = inflectionService;
        this.store = store;
        this.selectorNameService = selectorNameService;
        this.selectors = {};
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    select$(selectorName) {
        /** @type {?} */
        let selector = this.getSelector(selectorName);
        return this.store.select(selector);
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    select(selectorName) {
        return this.select$(selectorName);
    }
    /**
     * @param {?} si
     * @return {?}
     */
    selectorFromSelectorIdentifier(si) {
        /** @type {?} */
        let selectorName = this.selectorNameService.getResourceSelectorName(si);
        return this.getSelector(selectorName);
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    getSelector(selectorName) {
        /** @type {?} */
        let path = this.selectorPath(selectorName);
        return _.get(this.selectors, path);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    addSelector(selector) {
        /** @type {?} */
        let path = this.selectorPath(selector.name);
        this.log(selector, path, false);
        return _.set(this.selectors, path, selector.selector);
    }
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    selectorPath(selectorName) {
        /** @type {?} */
        let pathElements = _.split(selectorName, '.')
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
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    log(selector, path, loggingEnabled = false) {
        if (loggingEnabled) {
            console.log("Registering the selector " + path);
        }
    }
}
SelectorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectorService.ctorParameters = () => [
    { type: InflectionService },
    { type: Store },
    { type: SelectorNameService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9zZWxlY3RvcnMvc2VsZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFJM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBRW5DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFrQixXQUFXLENBQUE7QUFPekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFHN0QsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUcxQixZQUNVLGlCQUFvQyxFQUNwQyxLQUFpQixFQUNqQixtQkFBd0M7UUFGeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMbEQsY0FBUyxHQUFrQixFQUFFLENBQUE7SUFNMUIsQ0FBQzs7Ozs7SUFFSixPQUFPLENBQUMsWUFBWTs7WUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7OztJQUVELDhCQUE4QixDQUFDLEVBQTZCOztZQUN0RCxZQUFZLEdBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQztRQUV0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsWUFBWTs7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQzFDLE9BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQVE7O1lBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsWUFBb0I7O1lBQ25DLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7UUFDN0M7Ozs7VUFJRTs7UUFKRjs7OztVQUlFO1FBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7Ozs7O0lBRU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxHQUFHLEtBQUs7UUFDaEQsSUFBRyxjQUFjLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsQ0FBQTtTQUNoRDtJQUNILENBQUM7OztZQXBERixVQUFVOzs7O1lBVEYsaUJBQWlCO1lBRmpCLEtBQUs7WUFTTCxtQkFBbUI7Ozs7SUFJMUIsb0NBQTZCOzs7OztJQUczQiw0Q0FBNEM7Ozs7O0lBQzVDLGdDQUF5Qjs7Ozs7SUFDekIsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSAgIGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBJbmZsZWN0aW9uU2VydmljZSB9ICAgICAgICAgICAgIGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaVNlbGVjdG9yc01hcCxcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgU2VsZWN0b3JOYW1lU2VydmljZSB9IGZyb20gJy4vc2VsZWN0b3ItbmFtZS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JTZXJ2aWNlIHtcbiAgc2VsZWN0b3JzOiBpU2VsZWN0b3JzTWFwID0ge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZmxlY3Rpb25TZXJ2aWNlOiBJbmZsZWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgc2VsZWN0b3JOYW1lU2VydmljZTogU2VsZWN0b3JOYW1lU2VydmljZVxuICApIHt9XG5cbiAgc2VsZWN0JChzZWxlY3Rvck5hbWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcilcbiAgfVxuXG4gIHNlbGVjdChzZWxlY3Rvck5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QkKHNlbGVjdG9yTmFtZSlcbiAgfVxuXG4gIHNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcihzaTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcikge1xuICAgIGxldCBzZWxlY3Rvck5hbWUgPVxuICAgICAgdGhpcy5zZWxlY3Rvck5hbWVTZXJ2aWNlLmdldFJlc291cmNlU2VsZWN0b3JOYW1lKHNpKVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKVxuICB9IFxuXG4gIGdldFNlbGVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgIGxldCBwYXRoID0gdGhpcy5zZWxlY3RvclBhdGgoc2VsZWN0b3JOYW1lKVxuICAgIHJldHVybiAgXy5nZXQodGhpcy5zZWxlY3RvcnMsIHBhdGgpXG4gIH1cblxuICBhZGRTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGxldCBwYXRoID0gdGhpcy5zZWxlY3RvclBhdGgoc2VsZWN0b3IubmFtZSlcbiAgICB0aGlzLmxvZyhzZWxlY3RvciwgcGF0aCwgZmFsc2UpXG4gICAgcmV0dXJuIF8uc2V0KHRoaXMuc2VsZWN0b3JzLCBwYXRoLCBzZWxlY3Rvci5zZWxlY3RvcilcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0b3JQYXRoKHNlbGVjdG9yTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcGF0aEVsZW1lbnRzID0gXy5zcGxpdChzZWxlY3Rvck5hbWUsICcuJylcbiAgICAvKlxuICAgIGlmKHBhdGhFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBwYXRoRWxlbWVudHMuc3BsaWNlKDEsIDAsICdlbnRpdGllcycpXG4gICAgfVxuICAgICovXG4gICAgcGF0aEVsZW1lbnRzLnB1c2goJ3NlbGVjdG9yJylcbiAgICByZXR1cm4gXy5qb2luKHBhdGhFbGVtZW50cywgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2coc2VsZWN0b3IsIHBhdGgsIGxvZ2dpbmdFbmFibGVkID0gZmFsc2UpIHtcbiAgICBpZihsb2dnaW5nRW5hYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmluZyB0aGUgc2VsZWN0b3IgXCIgKyBwYXRoKVxuICAgIH1cbiAgfVxufVxuIl19