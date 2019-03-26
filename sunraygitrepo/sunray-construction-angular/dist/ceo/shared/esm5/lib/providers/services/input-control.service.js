/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
/**
 * @record
 */
export function iAbstractControlMap() { }
var InputControlService = /** @class */ (function () {
    function InputControlService() {
    }
    /**
     * @param {?} inputGroup
     * @return {?}
     */
    InputControlService.prototype.toFormGroup = /**
     * @param {?} inputGroup
     * @return {?}
     */
    function (inputGroup) {
        return this.buildFormGroup(inputGroup);
    };
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    InputControlService.prototype.buildFormGroup = /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    function (inputGroup) {
        return new FormGroup(this.buildControls(inputGroup));
    };
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    InputControlService.prototype.buildControls = /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    function (inputGroup) {
        return _.reduce(inputGroup.inputs, _.bind(_.partial(this.buildAbstractControl, inputGroup), this), {});
    };
    /**
     * @private
     * @param {?} inputGroup
     * @param {?} controls
     * @param {?} input
     * @return {?}
     */
    InputControlService.prototype.buildAbstractControl = /**
     * @private
     * @param {?} inputGroup
     * @param {?} controls
     * @param {?} input
     * @return {?}
     */
    function (inputGroup, controls, input) {
        /** @type {?} */
        var build = this.getFormControlBuilder(input);
        input.key = this.generateInputKey(input, inputGroup);
        controls[input.key] = build(input);
        return controls;
    };
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    InputControlService.prototype.getFormControlBuilder = /**
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (input.constructor.name == 'InputGroup') {
            return _.bind(this.buildFormGroup, this);
        }
        else {
            return _.bind(this.buildFormControl, this);
        }
    };
    /**
     * @private
     * @param {?} input
     * @param {?} inputGroup
     * @return {?}
     */
    InputControlService.prototype.generateInputKey = /**
     * @private
     * @param {?} input
     * @param {?} inputGroup
     * @return {?}
     */
    function (input, inputGroup) {
        return input.key;
    };
    /**
     * @private
     * @param {?} inputControl
     * @return {?}
     */
    InputControlService.prototype.buildFormControl = /**
     * @private
     * @param {?} inputControl
     * @return {?}
     */
    function (inputControl) {
        /** @type {?} */
        var value = inputControl.value || '';
        return new FormControl(value, Validators.compose(inputControl.validators));
    };
    return InputControlService;
}());
export { InputControlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2lucHV0LWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFHM0IsT0FBTyxFQUNMLFdBQVcsRUFBRSxTQUFTLEVBQ3RCLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFBOzs7O0FBTXZCLHlDQUVDO0FBRUQ7SUFBQTtJQTZDQSxDQUFDOzs7OztJQTVDQyx5Q0FBVzs7OztJQUFYLFVBQVksVUFBdUI7UUFDakMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixVQUFVO1FBQy9CLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3RELENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixVQUF1QjtRQUMzQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsVUFBVSxDQUFDLE1BQU0sRUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsRUFDOUQsRUFBRSxDQUNILENBQUE7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLGtEQUFvQjs7Ozs7OztJQUE1QixVQUE2QixVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUs7O1lBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNwRCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQyxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDOzs7Ozs7SUFFTyxtREFBcUI7Ozs7O0lBQTdCLFVBQThCLEtBQUs7UUFDakMsSUFBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDekMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDekM7YUFDSTtZQUNILE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDM0M7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sOENBQWdCOzs7Ozs7SUFBeEIsVUFBeUIsS0FBSyxFQUFFLFVBQVU7UUFDeEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFBO0lBQ2xCLENBQUM7Ozs7OztJQUdPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsWUFBWTs7WUFDL0IsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQyxPQUFPLElBQUksV0FBVyxDQUNwQixLQUFLLEVBQ0wsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQzVDLENBQUE7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLFxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHtcbiAgaUlucHV0R3JvdXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBpbnRlcmZhY2UgaUFic3RyYWN0Q29udHJvbE1hcCB7XG4gIFtrZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbFxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb250cm9sU2VydmljZSB7XG4gIHRvRm9ybUdyb3VwKGlucHV0R3JvdXA6IGlJbnB1dEdyb3VwKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRGb3JtR3JvdXAoaW5wdXRHcm91cClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtR3JvdXAoaW5wdXRHcm91cCk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAodGhpcy5idWlsZENvbnRyb2xzKGlucHV0R3JvdXApKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZENvbnRyb2xzKGlucHV0R3JvdXA6IGlJbnB1dEdyb3VwKTogaUFic3RyYWN0Q29udHJvbE1hcCB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKFxuICAgICAgaW5wdXRHcm91cC5pbnB1dHMsXG4gICAgICBfLmJpbmQoXy5wYXJ0aWFsKHRoaXMuYnVpbGRBYnN0cmFjdENvbnRyb2wsIGlucHV0R3JvdXApLCB0aGlzKSxcbiAgICAgIHt9XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFic3RyYWN0Q29udHJvbChpbnB1dEdyb3VwLCBjb250cm9scywgaW5wdXQpIHtcbiAgICB2YXIgYnVpbGQgPSB0aGlzLmdldEZvcm1Db250cm9sQnVpbGRlcihpbnB1dClcbiAgICBpbnB1dC5rZXkgPSB0aGlzLmdlbmVyYXRlSW5wdXRLZXkoaW5wdXQsIGlucHV0R3JvdXApXG4gICAgY29udHJvbHNbaW5wdXQua2V5XSA9IGJ1aWxkKGlucHV0KVxuICAgIHJldHVybiBjb250cm9sc1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtQ29udHJvbEJ1aWxkZXIoaW5wdXQpIHtcbiAgICBpZihpbnB1dC5jb25zdHJ1Y3Rvci5uYW1lID09ICdJbnB1dEdyb3VwJykge1xuICAgICAgcmV0dXJuIF8uYmluZCh0aGlzLmJ1aWxkRm9ybUdyb3VwLCB0aGlzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBfLmJpbmQodGhpcy5idWlsZEZvcm1Db250cm9sLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJbnB1dEtleShpbnB1dCwgaW5wdXRHcm91cCkge1xuICAgIHJldHVybiBpbnB1dC5rZXlcbiAgfVxuXG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1Db250cm9sKGlucHV0Q29udHJvbCkge1xuICAgIGxldCB2YWx1ZSA9IGlucHV0Q29udHJvbC52YWx1ZSB8fCAnJ1xuICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woXG4gICAgICB2YWx1ZSxcbiAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShpbnB1dENvbnRyb2wudmFsaWRhdG9ycylcbiAgICApXG4gIH1cbn1cbiJdfQ==