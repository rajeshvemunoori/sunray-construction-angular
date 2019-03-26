/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Pipe } from '@angular/core';
var CustomSearchPipe = /** @class */ (function () {
    function CustomSearchPipe() {
    }
    /**
     * @param {?} collection
     * @param {?=} args
     * @return {?}
     */
    CustomSearchPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?=} args
     * @return {?}
     */
    function (collection, args) {
        if (!_.isEmpty(args) && collection) {
            return this.filter(collection, args);
        }
        return collection;
    };
    /**
     * @param {?} collection
     * @param {?} attributes
     * @return {?}
     */
    CustomSearchPipe.prototype.filter = /**
     * @param {?} collection
     * @param {?} attributes
     * @return {?}
     */
    function (collection, attributes) {
        /** @type {?} */
        var filterCollection = function (value, key) {
            if (_.isEmpty(value)) {
                return collection.entities;
            }
            return _.reduce(collection.entities, function (entities, entity) {
                if (_.includes(_.lowerCase(entity[key]), _.lowerCase(value)) &&
                    !_.isEmpty(value)) {
                    entities.push(entity);
                    return entities;
                }
                return entities;
            }, []);
        };
        return _.uniqBy(_.flatten(_.map(attributes, filterCollection)), 'id');
    };
    CustomSearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'customSearch'
                },] }
    ];
    return CustomSearchPipe;
}());
export { CustomSearchPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlYXJjaC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvcGlwZXMvY3VzdG9tLXNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFPLFFBQVEsQ0FBQztBQUU3QixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBaUNBLENBQUM7Ozs7OztJQTdCQyxvQ0FBUzs7Ozs7SUFBVCxVQUFVLFVBQWUsRUFBRSxJQUFVO1FBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsaUNBQU07Ozs7O0lBQU4sVUFBTyxVQUFVLEVBQUUsVUFBVTs7WUFDdkIsZ0JBQWdCLEdBQUcsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUNoQyxJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQTthQUMzQjtZQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVMsUUFBUSxFQUFFLE1BQU07Z0JBQzVELElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNwQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sUUFBUSxDQUFDO2lCQUNqQjtnQkFDRCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDUixDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQWhDRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7aUJBQ3JCOztJQStCRCx1QkFBQztDQUFBLEFBakNELElBaUNDO1NBOUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3VzdG9tU2VhcmNoJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21TZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICghXy5pc0VtcHR5KGFyZ3MpICYmIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihjb2xsZWN0aW9uLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbHRlcihjb2xsZWN0aW9uLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGZpbHRlckNvbGxlY3Rpb24gPSAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYoXy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5lbnRpdGllc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy5yZWR1Y2UoY29sbGVjdGlvbi5lbnRpdGllcywgZnVuY3Rpb24oZW50aXRpZXMsIGVudGl0eSkge1xuICAgICAgICBpZihfLmluY2x1ZGVzKF8ubG93ZXJDYXNlKGVudGl0eVtrZXldKSxcbiAgICAgICAgICBfLmxvd2VyQ2FzZSh2YWx1ZSkpICYmXG4gICAgICAgICAgIV8uaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICBlbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgIH0sIFtdKVxuICAgIH1cblxuICAgIHJldHVybiBfLnVuaXFCeShcbiAgICAgIF8uZmxhdHRlbihfLm1hcChhdHRyaWJ1dGVzLCBmaWx0ZXJDb2xsZWN0aW9uKSksXG4gICAgICAnaWQnKTtcbiAgfVxufVxuIl19