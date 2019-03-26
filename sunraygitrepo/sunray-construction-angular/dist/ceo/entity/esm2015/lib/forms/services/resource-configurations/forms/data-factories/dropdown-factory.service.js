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
export class DropdownFactory {
    /**
     * @param {?} dataService
     * @param {?} optionsFactory
     */
    constructor(dataService, optionsFactory) {
        this.dataService = dataService;
        this.optionsFactory = optionsFactory;
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    build(resolvable) {
        /** @type {?} */
        var entityKey = 'name';
        /** @type {?} */
        var name = pluralize(resolvable.name.replace('_id', ''));
        /** @type {?} */
        let resource = resourceList.filter(item => item.key === name);
        if (resource.length > 0) {
            entityKey = resource[0].value;
            this.selectorData$ = this.getSelectors$(resource[0].name);
        }
        else {
            this.selectorData$ = this.getSelectors$(name);
        }
        return this.optionsFactory.build(this.selectorData$, entityKey);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getSelectors$(type) {
        /** @type {?} */
        let resourceOpts = {
            feature: "app",
            type: type
        };
        return this.dataService.get$(resourceOpts);
    }
}
DropdownFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DropdownFactory.ctorParameters = () => [
    { type: DataService },
    { type: DropdownOptionsFactory }
];
/** @nocollapse */ DropdownFactory.ngInjectableDef = i0.defineInjectable({ factory: function DropdownFactory_Factory() { return new DropdownFactory(i0.inject(i1.DataService), i0.inject(i2.DropdownOptionsFactory)); }, token: DropdownFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZGF0YS1mYWN0b3JpZXMvZHJvcGRvd24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTCxTQUFTLEdBRVYsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUdMLFdBQVcsR0FDWixNQUFNLDZCQUE2QixDQUFBO0FBR3BDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTs7OztBQU05QyxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFHMUIsWUFDVSxXQUF3QixFQUN4QixjQUFzQztRQUR0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7SUFDNUMsQ0FBQzs7Ozs7SUFFTCxLQUFLLENBQUMsVUFBVTs7WUFDVixTQUFTLEdBQUcsTUFBTTs7WUFDbEIsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBQ3BELFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFDN0QsSUFBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUNyQixTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzFEO2FBQ0c7WUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTs7WUFDWixZQUFZLEdBQUc7WUFDakIsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVkMsV0FBVztZQUlKLHNCQUFzQjs7Ozs7Ozs7SUFTN0Isd0NBQW9EOzs7OztJQUdsRCxzQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZlxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGtlYmFiQ2FzZSxcbiAgcGx1cmFsaXplLFxuICBzbmFrZUNhc2UsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cblxuaW1wb3J0IHsgRHJvcGRvd25PcHRpb25zRmFjdG9yeSB9IGZyb20gJy4vZHJvcGRvd24tb3B0aW9ucy1mYWN0b3J5LnNlcnZpY2UnXG5cbmltcG9ydCB7IHJlc291cmNlTGlzdCB9IGZyb20gJy4vcmVzb3VyY2UtbGlzdCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkZhY3Rvcnkge1xuICBwcml2YXRlIHNlbGVjdG9yRGF0YSQ6IE9ic2VydmFibGU8aUVudGl0eUNvbGxlY3Rpb24+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zRmFjdG9yeTogRHJvcGRvd25PcHRpb25zRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChyZXNvbHZhYmxlKTogYW55IHtcbiAgICB2YXIgZW50aXR5S2V5ID0gJ25hbWUnO1xuICAgIHZhciBuYW1lID0gcGx1cmFsaXplKHJlc29sdmFibGUubmFtZS5yZXBsYWNlKCdfaWQnLCAnJykpO1xuICAgIGxldCByZXNvdXJjZSA9IHJlc291cmNlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmtleSA9PT0gbmFtZSlcbiAgICBpZihyZXNvdXJjZS5sZW5ndGggPiAwKXtcbiAgICAgIGVudGl0eUtleSA9IHJlc291cmNlWzBdLnZhbHVlXG4gICAgICB0aGlzLnNlbGVjdG9yRGF0YSQgPSB0aGlzLmdldFNlbGVjdG9ycyQocmVzb3VyY2VbMF0ubmFtZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuc2VsZWN0b3JEYXRhJCA9IHRoaXMuZ2V0U2VsZWN0b3JzJChuYW1lKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zRmFjdG9yeS5idWlsZCh0aGlzLnNlbGVjdG9yRGF0YSQsIGVudGl0eUtleSk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMkKHR5cGUpIHtcbiAgICBsZXQgcmVzb3VyY2VPcHRzID0ge1xuICAgICAgZmVhdHVyZTogXCJhcHBcIixcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChyZXNvdXJjZU9wdHMpO1xuICB9XG59XG5cbiJdfQ==