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
export class InputControlService {
    /**
     * @param {?} inputGroup
     * @return {?}
     */
    toFormGroup(inputGroup) {
        return this.buildFormGroup(inputGroup);
    }
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    buildFormGroup(inputGroup) {
        return new FormGroup(this.buildControls(inputGroup));
    }
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    buildControls(inputGroup) {
        return _.reduce(inputGroup.inputs, _.bind(_.partial(this.buildAbstractControl, inputGroup), this), {});
    }
    /**
     * @private
     * @param {?} inputGroup
     * @param {?} controls
     * @param {?} input
     * @return {?}
     */
    buildAbstractControl(inputGroup, controls, input) {
        /** @type {?} */
        var build = this.getFormControlBuilder(input);
        input.key = this.generateInputKey(input, inputGroup);
        controls[input.key] = build(input);
        return controls;
    }
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    getFormControlBuilder(input) {
        if (input.constructor.name == 'InputGroup') {
            return _.bind(this.buildFormGroup, this);
        }
        else {
            return _.bind(this.buildFormControl, this);
        }
    }
    /**
     * @private
     * @param {?} input
     * @param {?} inputGroup
     * @return {?}
     */
    generateInputKey(input, inputGroup) {
        return input.key;
    }
    /**
     * @private
     * @param {?} inputControl
     * @return {?}
     */
    buildFormControl(inputControl) {
        /** @type {?} */
        let value = inputControl.value || '';
        return new FormControl(value, Validators.compose(inputControl.validators));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2lucHV0LWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFHM0IsT0FBTyxFQUNMLFdBQVcsRUFBRSxTQUFTLEVBQ3RCLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFBOzs7O0FBTXZCLHlDQUVDO0FBRUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsV0FBVyxDQUFDLFVBQXVCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsVUFBVTtRQUMvQixPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUN0RCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsVUFBdUI7UUFDM0MsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNiLFVBQVUsQ0FBQyxNQUFNLEVBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQzlELEVBQUUsQ0FDSCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUs7O1lBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNwRCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQyxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxLQUFLO1FBQ2pDLElBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ3pDO2FBQ0k7WUFDSCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxVQUFVO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtJQUNsQixDQUFDOzs7Ozs7SUFHTyxnQkFBZ0IsQ0FBQyxZQUFZOztZQUMvQixLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BDLE9BQU8sSUFBSSxXQUFXLENBQ3BCLEtBQUssRUFDTCxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FDNUMsQ0FBQTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIGlJbnB1dEdyb3VwLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgaW50ZXJmYWNlIGlBYnN0cmFjdENvbnRyb2xNYXAge1xuICBba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2xcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0Q29udHJvbFNlcnZpY2Uge1xuICB0b0Zvcm1Hcm91cChpbnB1dEdyb3VwOiBpSW5wdXRHcm91cCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkRm9ybUdyb3VwKGlucHV0R3JvdXApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybUdyb3VwKGlucHV0R3JvdXApOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHRoaXMuYnVpbGRDb250cm9scyhpbnB1dEdyb3VwKSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb250cm9scyhpbnB1dEdyb3VwOiBpSW5wdXRHcm91cCk6IGlBYnN0cmFjdENvbnRyb2xNYXAge1xuICAgIHJldHVybiBfLnJlZHVjZShcbiAgICAgIGlucHV0R3JvdXAuaW5wdXRzLFxuICAgICAgXy5iaW5kKF8ucGFydGlhbCh0aGlzLmJ1aWxkQWJzdHJhY3RDb250cm9sLCBpbnB1dEdyb3VwKSwgdGhpcyksXG4gICAgICB7fVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBYnN0cmFjdENvbnRyb2woaW5wdXRHcm91cCwgY29udHJvbHMsIGlucHV0KSB7XG4gICAgdmFyIGJ1aWxkID0gdGhpcy5nZXRGb3JtQ29udHJvbEJ1aWxkZXIoaW5wdXQpXG4gICAgaW5wdXQua2V5ID0gdGhpcy5nZW5lcmF0ZUlucHV0S2V5KGlucHV0LCBpbnB1dEdyb3VwKVxuICAgIGNvbnRyb2xzW2lucHV0LmtleV0gPSBidWlsZChpbnB1dClcbiAgICByZXR1cm4gY29udHJvbHNcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUNvbnRyb2xCdWlsZGVyKGlucHV0KSB7XG4gICAgaWYoaW5wdXQuY29uc3RydWN0b3IubmFtZSA9PSAnSW5wdXRHcm91cCcpIHtcbiAgICAgIHJldHVybiBfLmJpbmQodGhpcy5idWlsZEZvcm1Hcm91cCwgdGhpcylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5iaW5kKHRoaXMuYnVpbGRGb3JtQ29udHJvbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSW5wdXRLZXkoaW5wdXQsIGlucHV0R3JvdXApIHtcbiAgICByZXR1cm4gaW5wdXQua2V5XG4gIH1cblxuXG4gIHByaXZhdGUgYnVpbGRGb3JtQ29udHJvbChpbnB1dENvbnRyb2wpIHtcbiAgICBsZXQgdmFsdWUgPSBpbnB1dENvbnRyb2wudmFsdWUgfHwgJydcbiAgICByZXR1cm4gbmV3IEZvcm1Db250cm9sKFxuICAgICAgdmFsdWUsXG4gICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoaW5wdXRDb250cm9sLnZhbGlkYXRvcnMpXG4gICAgKVxuICB9XG59XG4iXX0=