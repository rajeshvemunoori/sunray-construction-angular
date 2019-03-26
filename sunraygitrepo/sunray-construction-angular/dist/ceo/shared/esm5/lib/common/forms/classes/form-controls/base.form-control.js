/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var BaseFormControl = /** @class */ (function () {
    function BaseFormControl(init) {
        if (init === void 0) { init = {}; }
        this.order = -1;
        this.validators = [];
        Object.assign(this, init);
    }
    Object.defineProperty(BaseFormControl.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngControl;
        },
        set: /**
         * @param {?} ngControl
         * @return {?}
         */
        function (ngControl) {
            this._ngControl = ngControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFormControl.prototype, "showValidations", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngControl.errors &&
                (this.ngControl.dirty || this.ngControl.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFormControl.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var buildErrorMessage = function (value, key) {
                /** @type {?} */
                var message = '';
                /** @type {?} */
                var lowerCased = _.lowerCase(_this.displayName);
                /** @type {?} */
                var firstLetter = lowerCased[0];
                /** @type {?} */
                var startsWithVowel = _.includes(['a', 'e', 'i', 'o', 'u'], firstLetter);
                /** @type {?} */
                var article = startsWithVowel ? 'an' : 'a';
                if (key == 'required') {
                    message = "Please enter " + article + " " + lowerCased + ".";
                }
                if (key == 'email') {
                    message = "Please enter a valid email.";
                }
                return {
                    key: key,
                    message: message,
                };
            };
            return _.map(this.ngControl.errors, buildErrorMessage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFormControl.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.displayName;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFormControl;
}());
export { BaseFormControl };
if (false) {
    /** @type {?} */
    BaseFormControl.prototype.controlType;
    /**
     * @type {?}
     * @protected
     */
    BaseFormControl.prototype._ngControl;
    /** @type {?} */
    BaseFormControl.prototype.displayName;
    /** @type {?} */
    BaseFormControl.prototype.elementId;
    /** @type {?} */
    BaseFormControl.prototype.key;
    /** @type {?} */
    BaseFormControl.prototype.label;
    /** @type {?} */
    BaseFormControl.prototype.order;
    /** @type {?} */
    BaseFormControl.prototype.placeholder;
    /** @type {?} */
    BaseFormControl.prototype.row;
    /** @type {?} */
    BaseFormControl.prototype.text;
    /** @type {?} */
    BaseFormControl.prototype.validators;
    /** @type {?} */
    BaseFormControl.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY2xhc3Nlcy9mb3JtLWNvbnRyb2xzL2Jhc2UuZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQWlCM0I7SUFlRSx5QkFBWSxJQUFnQztRQUFoQyxxQkFBQSxFQUFBLFNBQWdDO1FBUDVDLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQTtRQUlsQixlQUFVLEdBQVUsRUFBRSxDQUFBO1FBSXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxzQkFBSSxzQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hCLENBQUM7Ozs7O1FBRUQsVUFBYyxTQUE0QjtZQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDRDQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQzFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFhOzs7O1FBQWpCO1lBQUEsaUJBdUJDOztnQkF0QkssaUJBQWlCLEdBQUcsVUFBQyxLQUFLLEVBQUUsR0FBRzs7b0JBQzdCLE9BQU8sR0FBRyxFQUFFOztvQkFFWixVQUFVLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDOztvQkFDMUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7O29CQUMzQixlQUFlLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUM7O29CQUNwRSxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBRTFDLElBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRTtvQkFDcEIsT0FBTyxHQUFHLGtCQUFnQixPQUFPLFNBQUksVUFBVSxNQUFHLENBQUE7aUJBQ25EO2dCQUVELElBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRTtvQkFDakIsT0FBTyxHQUFHLDZCQUE2QixDQUFBO2lCQUN4QztnQkFFRCxPQUFPO29CQUNMLEdBQUcsRUFBRSxHQUFHO29CQUNSLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFBO1lBQ0gsQ0FBQztZQUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3hELENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQzs7OztJQTNEQyxzQ0FBNEI7Ozs7O0lBQzVCLHFDQUF1Qzs7SUFFdkMsc0NBQW1COztJQUNuQixvQ0FBaUI7O0lBQ2pCLDhCQUFXOztJQUNYLGdDQUFhOztJQUNiLGdDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQiw4QkFBVzs7SUFDWCwrQkFBWTs7SUFDWixxQ0FBc0I7O0lBQ3RCLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sIGFzIE5nRm9ybUNvbnRyb2wsXG4gIEFic3RyYWN0Q29udHJvbCBhcyBOZ0Fic3RyYWN0Q29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIHdvcmRzLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlGb3JtQ29udHJvbCxcbiAgaUZvcm1NZW1iZXJFcnJvcixcbiAgRm9ybUNvbnRyb2xUeXBlLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgQmFzZUZvcm1Db250cm9sIGltcGxlbWVudHMgaUZvcm1Db250cm9sIHtcbiAgY29udHJvbFR5cGU6IEZvcm1Db250cm9sVHlwZVxuICBwcm90ZWN0ZWQgX25nQ29udHJvbDogTmdBYnN0cmFjdENvbnRyb2xcblxuICBkaXNwbGF5TmFtZTogc3RyaW5nXG4gIGVsZW1lbnRJZDogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgb3JkZXI6IG51bWJlciA9IC0xXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgcm93OiBudW1iZXJcbiAgdGV4dDogc3RyaW5nXG4gIHZhbGlkYXRvcnM6IGFueVtdID0gW11cbiAgdmFsdWU6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8aUZvcm1Db250cm9sPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG5cbiAgZ2V0IG5nQ29udHJvbCgpOiBOZ0Fic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuX25nQ29udHJvbFxuICB9XG5cbiAgc2V0IG5nQ29udHJvbChuZ0NvbnRyb2w6IE5nQWJzdHJhY3RDb250cm9sKSB7XG4gICAgdGhpcy5fbmdDb250cm9sID0gbmdDb250cm9sXG4gIH1cblxuICBnZXQgc2hvd1ZhbGlkYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5lcnJvcnMgJiZcbiAgICAgICh0aGlzLm5nQ29udHJvbC5kaXJ0eSB8fCB0aGlzLm5nQ29udHJvbC50b3VjaGVkKVxuICB9XG5cbiAgZ2V0IGVycm9yTWVzc2FnZXMoKTogaUZvcm1NZW1iZXJFcnJvcltdIHtcbiAgICBsZXQgYnVpbGRFcnJvck1lc3NhZ2UgPSAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnJ1xuXG4gICAgICBsZXQgbG93ZXJDYXNlZCA9IF8ubG93ZXJDYXNlKHRoaXMuZGlzcGxheU5hbWUpXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBsb3dlckNhc2VkWzBdXG4gICAgICBsZXQgc3RhcnRzV2l0aFZvd2VsID0gXy5pbmNsdWRlcyhbJ2EnLCAnZScsICdpJywgJ28nLCAndSddLCBmaXJzdExldHRlcilcbiAgICAgIGxldCBhcnRpY2xlID0gc3RhcnRzV2l0aFZvd2VsID8gJ2FuJyA6ICdhJ1xuICAgIFxuICAgICAgaWYoa2V5ID09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBQbGVhc2UgZW50ZXIgJHthcnRpY2xlfSAke2xvd2VyQ2FzZWR9LmBcbiAgICAgIH1cblxuICAgICAgaWYoa2V5ID09ICdlbWFpbCcpIHtcbiAgICAgICAgbWVzc2FnZSA9IGBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC5gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXy5tYXAodGhpcy5uZ0NvbnRyb2wuZXJyb3JzLCBidWlsZEVycm9yTWVzc2FnZSlcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWVcbiAgfVxufVxuIl19