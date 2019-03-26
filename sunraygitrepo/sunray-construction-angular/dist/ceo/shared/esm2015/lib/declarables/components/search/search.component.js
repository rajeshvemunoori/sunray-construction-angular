/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export class SearchComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.search = new FormControl('');
        this.searchKeyEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onValueChange();
    }
    /**
     * @return {?}
     */
    onValueChange() {
        this.search.valueChanges.subscribe((searchText) => {
            this.searchKeyEmitter.emit({
                searchText: searchText
            });
        });
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-search',
                template: "<input type=\"text\" [formControl]=\"search\" placeholder=\"enter search term here\">\n",
                styles: [""]
            }] }
];
SearchComponent.propDecorators = {
    searchKeyEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchComponent.prototype.search;
    /** @type {?} */
    SearchComponent.prototype.searchKeyEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUFFLFlBQVksRUFDckIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQU90RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBTGxEOztRQU9FLFdBQU0sR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHMUMscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFhaEUsQ0FBQzs7OztJQVhDLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN6QixVQUFVLEVBQUUsVUFBVTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsbUdBQXNDOzthQUV2Qzs7OytCQUtFLE1BQU07Ozs7SUFGUCxpQ0FBMEM7O0lBRTFDLDJDQUM4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCxcbiAgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBzZWFyY2g6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBAT3V0cHV0KClcbiAgc2VhcmNoS2V5RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKCkge1xuICAgIHRoaXMuc2VhcmNoLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHNlYXJjaFRleHQpID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoS2V5RW1pdHRlci5lbWl0KHtcbiAgICAgICAgc2VhcmNoVGV4dDogc2VhcmNoVGV4dCBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=