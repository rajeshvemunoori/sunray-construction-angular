/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
var SearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchComponent, _super);
    function SearchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search = new FormControl('');
        _this.searchKeyEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onValueChange();
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.onValueChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.search.valueChanges.subscribe(function (searchText) {
            _this.searchKeyEmitter.emit({
                searchText: searchText
            });
        });
    };
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
    return SearchComponent;
}(BaseComponent));
export { SearchComponent };
if (false) {
    /** @type {?} */
    SearchComponent.prototype.search;
    /** @type {?} */
    SearchComponent.prototype.searchKeyEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFBRSxZQUFZLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFLcUMsMkNBQWE7SUFMbEQ7UUFBQSxxRUF1QkM7UUFoQkMsWUFBTSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUcxQyxzQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFhaEUsQ0FBQzs7OztJQVhDLGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsdUNBQWE7OztJQUFiO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQzVDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLFVBQVUsRUFBRSxVQUFVO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxtR0FBc0M7O2lCQUV2Qzs7O21DQUtFLE1BQU07O0lBY1Qsc0JBQUM7Q0FBQSxBQXZCRCxDQUtxQyxhQUFhLEdBa0JqRDtTQWxCWSxlQUFlOzs7SUFFMUIsaUNBQTBDOztJQUUxQywyQ0FDOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsXG4gIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZWNsYXJhYmxlcy1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgc2VhcmNoOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgQE91dHB1dCgpXG4gIHNlYXJjaEtleUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgb25WYWx1ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnNlYXJjaC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaEtleUVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIHNlYXJjaFRleHQ6IHNlYXJjaFRleHQgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19