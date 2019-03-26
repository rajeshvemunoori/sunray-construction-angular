/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class InputGroup {
    /**
     * @param {?} inputs
     * @param {?} key
     */
    constructor(inputs, key) {
        this.inputs = inputs;
        this.key = key;
        this.name = _.startCase(key);
    }
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let items = this.inputs;
        return {
            next: function () {
                /** @type {?} */
                let isEmpty = _.isEmpty(items);
                /** @type {?} */
                let value = isEmpty ? null : items[current++];
                /** @type {?} */
                let done = isEmpty ? true : current > items.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}
if (false) {
    /** @type {?} */
    InputGroup.prototype.key;
    /** @type {?} */
    InputGroup.prototype.inputs;
    /** @type {?} */
    InputGroup.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZmllbGRzL2lucHV0LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU8zQixNQUFNLE9BQU8sVUFBVTs7Ozs7SUFLckIsWUFBWSxNQUFtQixFQUFFLEdBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7OztJQUtELENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7WUFDWCxPQUFPLEdBQUcsQ0FBQzs7WUFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDdkIsT0FBUTtZQUNOLElBQUksRUFBRTs7b0JBQ0EsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztvQkFDMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O29CQUN6QyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtnQkFDbEQsT0FBTztvQkFDTCxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0Y7OztJQTVCQyx5QkFBVzs7SUFDWCw0QkFBbUI7O0lBQ25CLDBCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlJbnB1dEdyb3VwLFxuICBJbnB1dFR5cGUsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwIGltcGxlbWVudHMgaUlucHV0R3JvdXAge1xuICBrZXk6IHN0cmluZ1xuICBpbnB1dHM6IElucHV0VHlwZVtdXG4gIG5hbWU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0czogSW5wdXRUeXBlW10sIGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbnB1dHMgPSBpbnB1dHNcbiAgICB0aGlzLmtleSA9IGtleSBcbiAgICB0aGlzLm5hbWUgPSBfLnN0YXJ0Q2FzZShrZXkpXG4gIH1cblxuICAvLyBJdGVyYXRvclxuICAvLyBBbGxvd3MgdXMgdG8gdXNlIHRoZSBvYmplY3QgaW4gYW5ndWxhciBkaXJlY3RpdmVzXG4gIC8vIChpLmUuIG5nRm9yLCBldGMpXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIGxldCBjdXJyZW50ID0gMFxuICAgIGxldCBpdGVtcyA9IHRoaXMuaW5wdXRzXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBpc0VtcHR5ID0gXy5pc0VtcHR5KGl0ZW1zKVxuICAgICAgICBsZXQgdmFsdWUgPSBpc0VtcHR5ID8gbnVsbCA6IGl0ZW1zW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBpc0VtcHR5ID8gdHJ1ZSA6IGN1cnJlbnQgPiBpdGVtcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=