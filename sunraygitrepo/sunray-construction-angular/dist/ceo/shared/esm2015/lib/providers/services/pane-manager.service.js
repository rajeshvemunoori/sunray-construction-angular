/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service to manage panes depending on the page.
// 
import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PaneProvider } from './pane-provider.service';
import * as i0 from "@angular/core";
import * as i1 from "./pane-provider.service";
export class PaneManager {
    /**
     * @param {?} paneProvider
     */
    constructor(paneProvider) {
        this.paneProvider = paneProvider;
    }
    /**
     * @return {?}
     */
    get panes$() {
        return this.paneProvider.panes$;
    }
    /**
     * @return {?}
     */
    get activePane$() {
        return this.paneProvider.activePane$;
    }
    /**
     * @param {?} pane
     * @return {?}
     */
    activatePane(pane) {
        /** @type {?} */
        let activePane$ = this.activePane$.pipe(first());
        activePane$.subscribe(activePane => {
            this.setPaneActiveStatus(activePane, false);
            this.setPaneActiveStatus(pane, true);
        });
    }
    /**
     * @private
     * @param {?=} pane
     * @param {?=} activeStatus
     * @return {?}
     */
    setPaneActiveStatus(pane = null, activeStatus = false) {
        if (!pane) {
            return false;
        }
        return this.paneProvider.setPaneActiveStatus(pane, activeStatus);
    }
}
PaneManager.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaneManager.ctorParameters = () => [
    { type: PaneProvider }
];
/** @nocollapse */ PaneManager.ngInjectableDef = i0.defineInjectable({ factory: function PaneManager_Factory() { return new PaneManager(i0.inject(i1.PaneProvider)); }, token: PaneManager, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaneManager.prototype.paneProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvcGFuZS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFBOzs7QUFPdEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFDVSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDOzs7O0lBRUosSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQTtJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQTtJQUN0QyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFXOztZQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3JDLEtBQUssRUFBRSxDQUNSO1FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQ3pCLE9BQWMsSUFBSSxFQUNsQixlQUF3QixLQUFLO1FBRTdCLElBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUNsRSxDQUFDOzs7WUFuQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsWUFBWTs7Ozs7Ozs7SUFTakIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSB0byBtYW5hZ2UgcGFuZXMgZGVwZW5kaW5nIG9uIHRoZSBwYWdlLlxuLy8gXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBQYW5lUHJvdmlkZXIgfSBmcm9tICcuL3BhbmUtcHJvdmlkZXIuc2VydmljZSdcblxuaW1wb3J0IHsgaVBhbmUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYW5lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFuZVByb3ZpZGVyOiBQYW5lUHJvdmlkZXJcbiAgKSB7fVxuXG4gIGdldCBwYW5lcyQoKTogT2JzZXJ2YWJsZTxpUGFuZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucGFuZVByb3ZpZGVyLnBhbmVzJFxuICB9XG5cbiAgZ2V0IGFjdGl2ZVBhbmUkKCk6IE9ic2VydmFibGU8aVBhbmU+IHtcbiAgICByZXR1cm4gdGhpcy5wYW5lUHJvdmlkZXIuYWN0aXZlUGFuZSRcbiAgfVxuXG4gIGFjdGl2YXRlUGFuZShwYW5lOiBpUGFuZSk6IHZvaWQge1xuICAgIGxldCBhY3RpdmVQYW5lJCA9IHRoaXMuYWN0aXZlUGFuZSQucGlwZShcbiAgICAgIGZpcnN0KClcbiAgICApXG4gICAgYWN0aXZlUGFuZSQuc3Vic2NyaWJlKGFjdGl2ZVBhbmUgPT4ge1xuICAgICAgdGhpcy5zZXRQYW5lQWN0aXZlU3RhdHVzKGFjdGl2ZVBhbmUsIGZhbHNlKVxuICAgICAgdGhpcy5zZXRQYW5lQWN0aXZlU3RhdHVzKHBhbmUsIHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgc2V0UGFuZUFjdGl2ZVN0YXR1cyhcbiAgICBwYW5lOiBpUGFuZSA9IG51bGwsXG4gICAgYWN0aXZlU3RhdHVzOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcblxuICAgIGlmKCFwYW5lKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYW5lUHJvdmlkZXIuc2V0UGFuZUFjdGl2ZVN0YXR1cyhwYW5lLCBhY3RpdmVTdGF0dXMpXG4gIH1cblxufVxuLypcbiAqXG4gIHByaXZhdGUgYWN0aXZhdGVOZXh0UGFuZSgpOiBhbnkge1xuICAgIGxldCBwYW5lID0gdGhpcy5nZXROZXh0UGFuZSgpXG4gICAgdGhpcy52YWxpZGF0ZVBhbmUocGFuZSlcbiAgICAvL3RoaXMuYWN0aXZhdGVQYW5lKHBhbmUpXG4gICAgcmV0dXJuIHBhbmVcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVQcmV2aW91c1BhbmUoKTogYW55IHtcbiAgICAvL3JldHVybiBwcmV2aW91cyBwYW5lLlxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZVBhbmUocGFuZTogYW55KSB7XG4gICAgLy9DaGVjayBhbmQgdmFsaWRhdGUgY2VydGFpbiBjb25kaXRpb25zIGJlZm9yZSBhY3RpdmFpb25cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFBhbmUoKTogYW55IHtcbiAgICByZXR1cm4gJ05leHQgUGFuZScgXG4gIH1cblxuKi9cbiJdfQ==