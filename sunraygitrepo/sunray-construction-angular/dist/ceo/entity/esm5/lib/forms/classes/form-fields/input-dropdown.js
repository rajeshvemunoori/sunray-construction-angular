/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { InputControl } from './input-control';
var InputDropdown = /** @class */ (function (_super) {
    tslib_1.__extends(InputDropdown, _super);
    function InputDropdown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || _this.emptyDropdown(); //eg. [{key: 1, value: "Test1"}]
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    InputDropdown.prototype.emptyDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        return new Observable(function (observer) {
            observer.next([]);
            observer.complete();
        });
    };
    return InputDropdown;
}(InputControl));
export { InputDropdown };
if (false) {
    /** @type {?} */
    InputDropdown.prototype.controlType;
    /** @type {?} */
    InputDropdown.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZmllbGRzL2lucHV0LWRyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUVqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFOUM7SUFBbUMseUNBQW9CO0lBSXJELHVCQUFZLE9BQWdCO1FBQWhCLHdCQUFBLEVBQUEsWUFBZ0I7UUFBNUIsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FFZjtRQU5ELGlCQUFXLEdBQUcsVUFBVSxDQUFBO1FBQ3hCLGFBQU8sR0FBcUMsRUFBRSxDQUFBO1FBSTVDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQSxDQUFDLGdDQUFnQzs7SUFDNUYsQ0FBQzs7Ozs7SUFFTyxxQ0FBYTs7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBQyxRQUFRO1lBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWZELENBQW1DLFlBQVksR0FlOUM7Ozs7SUFkQyxvQ0FBd0I7O0lBQ3hCLGdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbnB1dENvbnRyb2wgfSBmcm9tICcuL2lucHV0LWNvbnRyb2wnXG5cbmV4cG9ydCBjbGFzcyBJbnB1dERyb3Bkb3duIGV4dGVuZHMgSW5wdXRDb250cm9sPHN0cmluZz4ge1xuICBjb250cm9sVHlwZSA9ICdkcm9wZG93bidcbiAgb3B0aW9uczogeyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNbJ29wdGlvbnMnXSB8fCB0aGlzLmVtcHR5RHJvcGRvd24oKSAvL2VnLiBbe2tleTogMSwgdmFsdWU6IFwiVGVzdDFcIn1dXG4gIH1cblxuICBwcml2YXRlIGVtcHR5RHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgIG9ic2VydmVyLm5leHQoW10pXG4gICAgb2JzZXJ2ZXIuY29tcGxldGUoKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==