/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Similar implementation to:
// https://angular.io/guide/dynamic-form
// type Input = InputBase | InputGroup
import * as _ from 'lodash';
/** @type {?} */
var inputControlDefaults = {
    value: null,
    key: '',
    label: '',
    placeholder: '',
    validators: [],
    order: -1,
    row: null,
    controlType: '',
};
/**
 * @template T
 */
var /**
 * @template T
 */
InputControl = /** @class */ (function () {
    function InputControl(options) {
        if (options === void 0) { options = {}; }
        options = _.defaults(options, inputControlDefaults);
        _.forEach(options, _.bind(this.setAttribute, this));
    }
    /**
     * @private
     * @param {?} attributeValue
     * @param {?} attributeName
     * @return {?}
     */
    InputControl.prototype.setAttribute = /**
     * @private
     * @param {?} attributeValue
     * @param {?} attributeName
     * @return {?}
     */
    function (attributeValue, attributeName) {
        this[attributeName] = attributeValue;
    };
    return InputControl;
}());
/**
 * @template T
 */
export { InputControl };
if (false) {
    /** @type {?} */
    InputControl.prototype.value;
    /** @type {?} */
    InputControl.prototype.key;
    /** @type {?} */
    InputControl.prototype.label;
    /** @type {?} */
    InputControl.prototype.placeholder;
    /** @type {?} */
    InputControl.prototype.validators;
    /** @type {?} */
    InputControl.prototype.order;
    /** @type {?} */
    InputControl.prototype.row;
    /** @type {?} */
    InputControl.prototype.controlType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NsYXNzZXMvZm9ybS1maWVsZHMvaW5wdXQtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7O0lBT3ZCLG9CQUFvQixHQUFHO0lBQ3pCLEtBQUssRUFBRSxJQUFJO0lBQ1gsR0FBRyxFQUFFLEVBQUU7SUFDUCxLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxFQUFFO0lBQ2YsVUFBVSxFQUFFLEVBQUU7SUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxXQUFXLEVBQUUsRUFBRTtDQUNoQjs7OztBQUVEOzs7O0lBVUUsc0JBQVksT0FBcUM7UUFBckMsd0JBQUEsRUFBQSxZQUFxQztRQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7Ozs7O0lBRU8sbUNBQVk7Ozs7OztJQUFwQixVQUFxQixjQUFjLEVBQUUsYUFBYTtRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsY0FBYyxDQUFBO0lBQ3RDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7Ozs7Ozs7SUFqQkMsNkJBQVM7O0lBQ1QsMkJBQVk7O0lBQ1osNkJBQWM7O0lBQ2QsbUNBQW9COztJQUNwQixrQ0FBa0I7O0lBQ2xCLDZCQUFjOztJQUNkLDJCQUFZOztJQUNaLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbWlsYXIgaW1wbGVtZW50YXRpb24gdG86XG4vLyBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZHluYW1pYy1mb3JtXG5cbi8vIHR5cGUgSW5wdXQgPSBJbnB1dEJhc2UgfCBJbnB1dEdyb3VwXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpSW5wdXRDb250cm9sLFxuICBpSW5wdXRDb250cm9sT3B0aW9ucyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxubGV0IGlucHV0Q29udHJvbERlZmF1bHRzID0ge1xuICB2YWx1ZTogbnVsbCxcbiAga2V5OiAnJyxcbiAgbGFiZWw6ICcnLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIHZhbGlkYXRvcnM6IFtdLFxuICBvcmRlcjogLTEsXG4gIHJvdzogbnVsbCxcbiAgY29udHJvbFR5cGU6ICcnLFxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb250cm9sPFQ+IGltcGxlbWVudHMgaUlucHV0Q29udHJvbCB7XG4gIHZhbHVlOiBUO1xuICBrZXk6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgdmFsaWRhdG9yczogYW55W107XG4gIG9yZGVyOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xuICBjb250cm9sVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlJbnB1dENvbnRyb2xPcHRpb25zPFQ+ID0ge30pIHtcbiAgICBvcHRpb25zID0gXy5kZWZhdWx0cyhvcHRpb25zLCBpbnB1dENvbnRyb2xEZWZhdWx0cylcbiAgICBfLmZvckVhY2gob3B0aW9ucywgXy5iaW5kKHRoaXMuc2V0QXR0cmlidXRlLCB0aGlzKSlcbiAgfVxuXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlLCBhdHRyaWJ1dGVOYW1lKTogdm9pZCB7XG4gICAgdGhpc1thdHRyaWJ1dGVOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlXG4gIH1cbn1cbiJdfQ==