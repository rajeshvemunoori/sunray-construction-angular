/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Pipe } from '@angular/core';
export class CustomSearchPipe {
    /**
     * @param {?} collection
     * @param {?=} args
     * @return {?}
     */
    transform(collection, args) {
        if (!_.isEmpty(args) && collection) {
            return this.filter(collection, args);
        }
        return collection;
    }
    /**
     * @param {?} collection
     * @param {?} attributes
     * @return {?}
     */
    filter(collection, attributes) {
        /** @type {?} */
        let filterCollection = (value, key) => {
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
    }
}
CustomSearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'customSearch'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlYXJjaC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvcGlwZXMvY3VzdG9tLXNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFPLFFBQVEsQ0FBQztBQUU3QixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDM0IsU0FBUyxDQUFDLFVBQWUsRUFBRSxJQUFVO1FBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVOztZQUN2QixnQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNwQyxJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQTthQUMzQjtZQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVMsUUFBUSxFQUFFLE1BQU07Z0JBQzVELElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNwQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sUUFBUSxDQUFDO2lCQUNqQjtnQkFDRCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDUixDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQWhDRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGNBQWM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N1c3RvbVNlYXJjaCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAoIV8uaXNFbXB0eShhcmdzKSAmJiBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoY29sbGVjdGlvbiwgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBmaWx0ZXIoY29sbGVjdGlvbiwgYXR0cmlidXRlcykge1xuICAgIGxldCBmaWx0ZXJDb2xsZWN0aW9uID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmKF8uaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZW50aXRpZXNcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8ucmVkdWNlKGNvbGxlY3Rpb24uZW50aXRpZXMsIGZ1bmN0aW9uKGVudGl0aWVzLCBlbnRpdHkpIHtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhfLmxvd2VyQ2FzZShlbnRpdHlba2V5XSksXG4gICAgICAgICAgXy5sb3dlckNhc2UodmFsdWUpKSAmJlxuICAgICAgICAgICFfLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgZW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XG4gICAgICB9LCBbXSlcbiAgICB9XG5cbiAgICByZXR1cm4gXy51bmlxQnkoXG4gICAgICBfLmZsYXR0ZW4oXy5tYXAoYXR0cmlidXRlcywgZmlsdGVyQ29sbGVjdGlvbikpLFxuICAgICAgJ2lkJyk7XG4gIH1cbn1cbiJdfQ==