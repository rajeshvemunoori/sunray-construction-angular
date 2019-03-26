/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var InputGroup = /** @class */ (function () {
    function InputGroup(inputs, key) {
        this.inputs = inputs;
        this.key = key;
        this.name = _.startCase(key);
    }
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    InputGroup.prototype[Symbol.iterator] = 
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = 0;
        /** @type {?} */
        var items = this.inputs;
        return {
            next: function () {
                /** @type {?} */
                var isEmpty = _.isEmpty(items);
                /** @type {?} */
                var value = isEmpty ? null : items[current++];
                /** @type {?} */
                var done = isEmpty ? true : current > items.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    };
    return InputGroup;
}());
export { InputGroup };
if (false) {
    /** @type {?} */
    InputGroup.prototype.key;
    /** @type {?} */
    InputGroup.prototype.inputs;
    /** @type {?} */
    InputGroup.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZmllbGRzL2lucHV0LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU8zQjtJQUtFLG9CQUFZLE1BQW1CLEVBQUUsR0FBVztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQsV0FBVztJQUNYLG9EQUFvRDtJQUNwRCxvQkFBb0I7Ozs7Ozs7SUFDcEIscUJBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUFqQjs7WUFDTSxPQUFPLEdBQUcsQ0FBQzs7WUFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDdkIsT0FBUTtZQUNOLElBQUksRUFBRTs7b0JBQ0EsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztvQkFDMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O29CQUN6QyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtnQkFDbEQsT0FBTztvQkFDTCxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7O0lBNUJDLHlCQUFXOztJQUNYLDRCQUFtQjs7SUFDbkIsMEJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaUlucHV0R3JvdXAsXG4gIElucHV0VHlwZSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXAgaW1wbGVtZW50cyBpSW5wdXRHcm91cCB7XG4gIGtleTogc3RyaW5nXG4gIGlucHV0czogSW5wdXRUeXBlW11cbiAgbmFtZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoaW5wdXRzOiBJbnB1dFR5cGVbXSwga2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0cyA9IGlucHV0c1xuICAgIHRoaXMua2V5ID0ga2V5IFxuICAgIHRoaXMubmFtZSA9IF8uc3RhcnRDYXNlKGtleSlcbiAgfVxuXG4gIC8vIEl0ZXJhdG9yXG4gIC8vIEFsbG93cyB1cyB0byB1c2UgdGhlIG9iamVjdCBpbiBhbmd1bGFyIGRpcmVjdGl2ZXNcbiAgLy8gKGkuZS4gbmdGb3IsIGV0YylcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgbGV0IGN1cnJlbnQgPSAwXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pbnB1dHNcbiAgICByZXR1cm4gIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlzRW1wdHkgPSBfLmlzRW1wdHkoaXRlbXMpXG4gICAgICAgIGxldCB2YWx1ZSA9IGlzRW1wdHkgPyBudWxsIDogaXRlbXNbY3VycmVudCsrXVxuICAgICAgICBsZXQgZG9uZSA9IGlzRW1wdHkgPyB0cnVlIDogY3VycmVudCA+IGl0ZW1zLmxlbmd0aFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBkb25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==