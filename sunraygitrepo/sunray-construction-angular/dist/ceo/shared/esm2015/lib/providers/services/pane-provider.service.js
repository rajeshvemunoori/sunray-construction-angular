/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Loads the pane list
// Initializes it to the Pane class
// Serves as Pane Factory;
// uses pane attributes to build Pane objects
import * as _ from 'lodash';
import { BehaviorSubject, } from 'rxjs';
import { startWith, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PaneFactory } from './pane-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./pane-factory.service";
export class PaneProvider {
    /**
     * @param {?} paneFactory
     */
    constructor(paneFactory) {
        this.paneFactory = paneFactory;
        this._activePane$ = new BehaviorSubject(null);
        this.panes = [];
        this._panes$ = this.paneFactory.build$();
        this._panes$.subscribe(panes => this.setPanes(panes));
    }
    /**
     * @return {?}
     */
    get panes$() {
        return this._panes$;
    }
    /**
     * @return {?}
     */
    get activePane$() {
        return this._activePane$.pipe(startWith(this.activePaneFromPanes(this.panes)));
    }
    /**
     * @param {?} pane
     * @param {?} activeStatus
     * @return {?}
     */
    setPaneActiveStatus(pane, activeStatus) {
        pane.setStatus(activeStatus);
        if (activeStatus) {
            this.emitActivePane(pane);
        }
        return true;
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    emitActivePanes(panes) {
        /** @type {?} */
        let pane = this.activePaneFromPanes(panes);
        this.emitActivePane(pane);
    }
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    emitActivePane(pane) {
        this._activePane$.next(pane);
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    setPanes(panes) {
        this.panes = panes;
        this.emitActivePanes(this.panes);
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    activePaneFromPanes(panes) {
        return _.find(panes, 'active');
    }
}
PaneProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaneProvider.ctorParameters = () => [
    { type: PaneFactory }
];
/** @nocollapse */ PaneProvider.ngInjectableDef = i0.defineInjectable({ factory: function PaneProvider_Factory() { return new PaneProvider(i0.inject(i1.PaneFactory)); }, token: PaneProvider, providedIn: "root" });
if (false) {
    /** @type {?} */
    PaneProvider.prototype._panes$;
    /** @type {?} */
    PaneProvider.prototype._activePane$;
    /**
     * @type {?}
     * @private
     */
    PaneProvider.prototype.panes;
    /**
     * @type {?}
     * @private
     */
    PaneProvider.prototype.paneFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL3BhbmUtcHJvdmlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFFVyxlQUFlLEdBQ2hDLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUVMLFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFVLHdCQUF3QixDQUFBOzs7QUFLeEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFNdkIsWUFDVSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxsQyxpQkFBWSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQTtRQUUzRCxVQUFLLEdBQVksRUFBRSxDQUFDO1FBSzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUMzQixTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNoRCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFlBQVk7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QixJQUFHLFlBQVksRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFLOztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxJQUFJO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxLQUFLO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLEtBQWM7UUFDeEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsV0FBVzs7Ozs7SUFNbEIsK0JBQTZCOztJQUM3QixvQ0FBbUU7Ozs7O0lBRW5FLDZCQUE0Qjs7Ozs7SUFHMUIsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9hZHMgdGhlIHBhbmUgbGlzdFxuLy8gSW5pdGlhbGl6ZXMgaXQgdG8gdGhlIFBhbmUgY2xhc3Ncbi8vIFNlcnZlcyBhcyBQYW5lIEZhY3Rvcnk7XG4vLyB1c2VzIHBhbmUgYXR0cmlidXRlcyB0byBidWlsZCBQYW5lIG9iamVjdHNcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIHppcCBhcyBvYnNlcnZhYmxlWmlwLCAgXG4gIE9ic2VydmFibGUsIG9mLCBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBzdGFydFdpdGgsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlQYW5lUHJvdmlkZXIsIGlQYW5lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgUGFuZUZhY3RvcnkgfSAgICAgZnJvbSAnLi9wYW5lLWZhY3Rvcnkuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFuZVByb3ZpZGVyIGltcGxlbWVudHMgaVBhbmVQcm92aWRlciB7XG4gIF9wYW5lcyQ6IE9ic2VydmFibGU8aVBhbmVbXT47XG4gIF9hY3RpdmVQYW5lJDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbClcblxuICBwcml2YXRlIHBhbmVzOiBpUGFuZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYW5lRmFjdG9yeTogUGFuZUZhY3RvcnlcbiAgKSB7XG4gICAgdGhpcy5fcGFuZXMkID0gdGhpcy5wYW5lRmFjdG9yeS5idWlsZCQoKVxuXG4gICAgdGhpcy5fcGFuZXMkLnN1YnNjcmliZShwYW5lcyA9PiB0aGlzLnNldFBhbmVzKHBhbmVzKSlcbiAgfVxuXG4gIGdldCBwYW5lcyQoKTogT2JzZXJ2YWJsZTxpUGFuZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhbmVzJFxuICB9XG5cbiAgZ2V0IGFjdGl2ZVBhbmUkKCk6IE9ic2VydmFibGU8aVBhbmU+IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlUGFuZSQucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLmFjdGl2ZVBhbmVGcm9tUGFuZXModGhpcy5wYW5lcykpXG4gICAgKVxuICB9XG5cbiAgc2V0UGFuZUFjdGl2ZVN0YXR1cyhwYW5lLCBhY3RpdmVTdGF0dXMpOiBib29sZWFuIHtcbiAgICBwYW5lLnNldFN0YXR1cyhhY3RpdmVTdGF0dXMpXG4gICAgaWYoYWN0aXZlU3RhdHVzKSB7XG4gICAgICB0aGlzLmVtaXRBY3RpdmVQYW5lKHBhbmUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBwcml2YXRlIGVtaXRBY3RpdmVQYW5lcyhwYW5lcykge1xuICAgIGxldCBwYW5lID0gdGhpcy5hY3RpdmVQYW5lRnJvbVBhbmVzKHBhbmVzKVxuICAgIHRoaXMuZW1pdEFjdGl2ZVBhbmUocGFuZSlcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEFjdGl2ZVBhbmUocGFuZSkge1xuICAgIHRoaXMuX2FjdGl2ZVBhbmUkLm5leHQocGFuZSkgXG4gIH1cblxuICBwcml2YXRlIHNldFBhbmVzKHBhbmVzKSB7XG4gICAgdGhpcy5wYW5lcyA9IHBhbmVzXG4gICAgdGhpcy5lbWl0QWN0aXZlUGFuZXModGhpcy5wYW5lcylcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZlUGFuZUZyb21QYW5lcyhwYW5lczogaVBhbmVbXSk6IGlQYW5lIHtcbiAgICByZXR1cm4gXy5maW5kKHBhbmVzLCAnYWN0aXZlJylcbiAgfVxufVxuXG5cbi8qXG4gIHByaXZhdGUgcGFuZXNCeU5hbWUkKHBhbmVOYW1lKTogT2JzZXJ2YWJsZTxpUGFuZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhbmVzJC5waXBlKFxuICAgICAgbWFwKHBhbmVzID0+IHRoaXMucGFuZXNCeU5hbWUocGFuZXMsIHBhbmVOYW1lKSlcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHBhbmVzQnlOYW1lKHBhbmVzLCBwYW5lTmFtZSk6IGlQYW5lW10ge1xuICAgIHJldHVybiAoPGlQYW5lW10+IF8uZmlsdGVyKFxuICAgICAgcGFuZXMsIFxuICAgICAge25hbWU6IHBhbmVOYW1lfVxuICAgICkpXG4gIH1cbiovXG4iXX0=