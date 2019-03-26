/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { pluralize, } from '@ceo/core';
import { DataService, } from '../../../../../entity/index';
import { DropdownOptionsFactory } from './dropdown-options-factory.service';
import { resourceList } from './resource-list';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../entity/services/data.service";
import * as i2 from "./dropdown-options-factory.service";
var DropdownFactory = /** @class */ (function () {
    function DropdownFactory(dataService, optionsFactory) {
        this.dataService = dataService;
        this.optionsFactory = optionsFactory;
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    DropdownFactory.prototype.build = /**
     * @param {?} resolvable
     * @return {?}
     */
    function (resolvable) {
        /** @type {?} */
        var entityKey = 'name';
        /** @type {?} */
        var name = pluralize(resolvable.name.replace('_id', ''));
        /** @type {?} */
        var resource = resourceList.filter(function (item) { return item.key === name; });
        if (resource.length > 0) {
            entityKey = resource[0].value;
            this.selectorData$ = this.getSelectors$(resource[0].name);
        }
        else {
            this.selectorData$ = this.getSelectors$(name);
        }
        return this.optionsFactory.build(this.selectorData$, entityKey);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DropdownFactory.prototype.getSelectors$ = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var resourceOpts = {
            feature: "app",
            type: type
        };
        return this.dataService.get$(resourceOpts);
    };
    DropdownFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DropdownFactory.ctorParameters = function () { return [
        { type: DataService },
        { type: DropdownOptionsFactory }
    ]; };
    /** @nocollapse */ DropdownFactory.ngInjectableDef = i0.defineInjectable({ factory: function DropdownFactory_Factory() { return new DropdownFactory(i0.inject(i1.DataService), i0.inject(i2.DropdownOptionsFactory)); }, token: DropdownFactory, providedIn: "root" });
    return DropdownFactory;
}());
export { DropdownFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownFactory.prototype.selectorData$;
    /**
     * @type {?}
     * @private
     */
    DropdownFactory.prototype.dataService;
    /**
     * @type {?}
     * @private
     */
    DropdownFactory.prototype.optionsFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZGF0YS1mYWN0b3JpZXMvZHJvcGRvd24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTCxTQUFTLEdBRVYsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUdMLFdBQVcsR0FDWixNQUFNLDZCQUE2QixDQUFBO0FBR3BDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTs7OztBQUU5QztJQU9FLHlCQUNVLFdBQXdCLEVBQ3hCLGNBQXNDO1FBRHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtJQUM1QyxDQUFDOzs7OztJQUVMLCtCQUFLOzs7O0lBQUwsVUFBTSxVQUFVOztZQUNWLFNBQVMsR0FBRyxNQUFNOztZQUNsQixJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFDcEQsUUFBUSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksRUFBakIsQ0FBaUIsQ0FBQztRQUM3RCxJQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ3JCLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDMUQ7YUFDRztZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELHVDQUFhOzs7O0lBQWIsVUFBYyxJQUFJOztZQUNaLFlBQVksR0FBRztZQUNqQixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZDLFdBQVc7Z0JBSUosc0JBQXNCOzs7MEJBcEIvQjtDQXlEQyxBQWpDRCxJQWlDQztTQTdCWSxlQUFlOzs7Ozs7SUFDMUIsd0NBQW9EOzs7OztJQUdsRCxzQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZlxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGtlYmFiQ2FzZSxcbiAgcGx1cmFsaXplLFxuICBzbmFrZUNhc2UsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cblxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25zRmFjdG9yeSB9IGZyb20gJy4vZHJvcGRvd24tb3B0aW9ucy1mYWN0b3J5LnNlcnZpY2UnXG5cbmltcG9ydCB7IHJlc291cmNlTGlzdCB9IGZyb20gJy4vcmVzb3VyY2UtbGlzdCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkZhY3Rvcnkge1xuICBwcml2YXRlIHNlbGVjdG9yRGF0YSQ6IE9ic2VydmFibGU8aUVudGl0eUNvbGxlY3Rpb24+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zRmFjdG9yeTogRHJvcGRvd25PcHRpb25zRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChyZXNvbHZhYmxlKTogYW55IHtcbiAgICB2YXIgZW50aXR5S2V5ID0gJ25hbWUnO1xuICAgIHZhciBuYW1lID0gcGx1cmFsaXplKHJlc29sdmFibGUubmFtZS5yZXBsYWNlKCdfaWQnLCAnJykpO1xuICAgIGxldCByZXNvdXJjZSA9IHJlc291cmNlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmtleSA9PT0gbmFtZSlcbiAgICBpZihyZXNvdXJjZS5sZW5ndGggPiAwKXtcbiAgICAgIGVudGl0eUtleSA9IHJlc291cmNlWzBdLnZhbHVlXG4gICAgICB0aGlzLnNlbGVjdG9yRGF0YSQgPSB0aGlzLmdldFNlbGVjdG9ycyQocmVzb3VyY2VbMF0ubmFtZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuc2VsZWN0b3JEYXRhJCA9IHRoaXMuZ2V0U2VsZWN0b3JzJChuYW1lKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zRmFjdG9yeS5idWlsZCh0aGlzLnNlbGVjdG9yRGF0YSQsIGVudGl0eUtleSk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMkKHR5cGUpIHtcbiAgICBsZXQgcmVzb3VyY2VPcHRzID0ge1xuICAgICAgZmVhdHVyZTogXCJhcHBcIixcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChyZXNvdXJjZU9wdHMpO1xuICB9XG59XG5cbiJdfQ==