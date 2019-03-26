/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormMember } from './form-member';
var FormItem = /** @class */ (function (_super) {
    tslib_1.__extends(FormItem, _super);
    function FormItem(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this.type = 'form-item';
        return _this;
    }
    Object.defineProperty(FormItem.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.ngControl;
        },
        set: /**
         * @param {?} ngControl
         * @return {?}
         */
        function (ngControl) {
            this.control.ngControl = ngControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormItem.prototype, "showValidations", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.showValidations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormItem.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.errorMessages;
        },
        enumerable: true,
        configurable: true
    });
    return FormItem;
}(FormMember));
export { FormItem };
if (false) {
    /** @type {?} */
    FormItem.prototype.type;
    /** @type {?} */
    FormItem.prototype.control;
    /** @type {?} */
    FormItem.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NsYXNzZXMvZm9ybS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBWUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQztJQUE4QixvQ0FBVTtJQU10QyxrQkFBWSxLQUE4QjtRQUE5QixzQkFBQSxFQUFBLFVBQThCO1FBQTFDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFQRCxVQUFJLEdBQW1CLFdBQVcsQ0FBQTs7SUFPbEMsQ0FBQztJQUVELHNCQUFJLCtCQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFBO1FBQy9CLENBQUM7Ozs7O1FBRUQsVUFBYyxTQUE0QjtZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDcEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUE7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE4QixVQUFVLEdBeUJ2Qzs7OztJQXhCQyx3QkFBa0M7O0lBRWxDLDJCQUFxQjs7SUFDckIseUJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sIGFzIE5nQWJzdHJhY3RDb250cm9sLFxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHtcbiAgRm9ybU1lbWJlclR5cGUsXG4gIGlGb3JtQ29udHJvbCxcbiAgaUZvcm1JdGVtLFxuICBpRm9ybU1lbWJlckVycm9yLFxuICBpTGFiZWxFbGVtZW50LFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtTWVtYmVyIH0gZnJvbSAnLi9mb3JtLW1lbWJlcidcblxuZXhwb3J0IGNsYXNzIEZvcm1JdGVtIGV4dGVuZHMgRm9ybU1lbWJlciBpbXBsZW1lbnRzIGlGb3JtSXRlbSB7XG4gIHR5cGU6IEZvcm1NZW1iZXJUeXBlID0gJ2Zvcm0taXRlbSdcblxuICBjb250cm9sOiBpRm9ybUNvbnRyb2xcbiAgbGFiZWw6IGlMYWJlbEVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUGFydGlhbDxpRm9ybUl0ZW0+ID0ge30pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGdldCBuZ0NvbnRyb2woKTogTmdBYnN0cmFjdENvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wubmdDb250cm9sXG4gIH1cblxuICBzZXQgbmdDb250cm9sKG5nQ29udHJvbDogTmdBYnN0cmFjdENvbnRyb2wpIHtcbiAgICB0aGlzLmNvbnRyb2wubmdDb250cm9sID0gbmdDb250cm9sXG4gIH1cblxuICBnZXQgc2hvd1ZhbGlkYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuc2hvd1ZhbGlkYXRpb25zXG4gIH1cblxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBpRm9ybU1lbWJlckVycm9yW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZXJyb3JNZXNzYWdlc1xuICB9XG59XG4iXX0=