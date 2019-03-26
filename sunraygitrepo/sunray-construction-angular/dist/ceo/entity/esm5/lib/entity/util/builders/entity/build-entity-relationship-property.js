/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { camelCase, } from '@ceo/core';
/**
 * @param {?} relationshipName
 * @return {?}
 */
export function buildEntityRelationshipProperty(relationshipName) {
    /**
     * @return {?}
     */
    function relationship() {
        return this.dataService.relationship$(this, relationshipName, {});
    }
    return relationship;
}
/**
 * @param {?} entityType
 * @return {?}
 */
export function buildEntityRelationshipProperties(entityType) {
    /**
     * @param {?} relationshipName
     * @return {?}
     */
    function defineRelationshipGetterAndSetter(relationshipName) {
        /** @type {?} */
        var propName = camelCase(relationshipName) + "$";
        /** @type {?} */
        var privatePropName = "_" + propName;
        /** @type {?} */
        var getter = buildEntityRelationshipProperty(relationshipName);
        /** @type {?} */
        var props = {
            get: function () {
                return this.memoized(privatePropName, getter);
            },
            set: function (value) { }
        };
        Object.defineProperty(entityType.prototype, propName, props);
    }
    _.map(entityType.relationshipNames, defineRelationshipGetterAndSetter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXJlbGF0aW9uc2hpcC1wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL2VudGl0eS9idWlsZC1lbnRpdHktcmVsYXRpb25zaGlwLXByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU0zQixPQUFPLEVBQ0wsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFBOzs7OztBQU1sQixNQUFNLFVBQVUsK0JBQStCLENBQzdDLGdCQUFnQjs7OztJQUdoQixTQUFTLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQyxDQUMvQyxVQUFVOzs7OztJQUdWLFNBQVMsaUNBQWlDLENBQUMsZ0JBQWdCOztZQUNyRCxRQUFRLEdBQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQUc7O1lBQzVDLGVBQWUsR0FBRyxNQUFJLFFBQVU7O1lBRWhDLE1BQU0sR0FBRywrQkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFMUQsS0FBSyxHQUFHO1lBQ1YsR0FBRyxFQUFFO2dCQUNILE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDL0MsQ0FBQztZQUNELEdBQUcsRUFBRSxVQUFTLEtBQVUsSUFBRyxDQUFDO1NBQzdCO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQTtBQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIGNhbWVsQ2FzZSxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlSZWxhdGlvbnNoaXBQcm9wZXJ0eShcbiAgcmVsYXRpb25zaGlwTmFtZSxcbik6ICgoKSA9PiBPYnNlcnZhYmxlPEVudGl0eURhdGE+KSB7XG5cbiAgZnVuY3Rpb24gcmVsYXRpb25zaGlwKCk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnJlbGF0aW9uc2hpcCQodGhpcywgcmVsYXRpb25zaGlwTmFtZSwge30pXG4gIH1cblxuICByZXR1cm4gcmVsYXRpb25zaGlwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudGl0eVJlbGF0aW9uc2hpcFByb3BlcnRpZXMoXG4gIGVudGl0eVR5cGUsXG4pOiB2b2lkIHtcblxuICBmdW5jdGlvbiBkZWZpbmVSZWxhdGlvbnNoaXBHZXR0ZXJBbmRTZXR0ZXIocmVsYXRpb25zaGlwTmFtZSkge1xuICAgIGxldCBwcm9wTmFtZSA9IGAke2NhbWVsQ2FzZShyZWxhdGlvbnNoaXBOYW1lKX0kYFxuICAgIGxldCBwcml2YXRlUHJvcE5hbWUgPSBgXyR7cHJvcE5hbWV9YFxuXG4gICAgbGV0IGdldHRlciA9IGJ1aWxkRW50aXR5UmVsYXRpb25zaGlwUHJvcGVydHkocmVsYXRpb25zaGlwTmFtZSlcblxuICAgIGxldCBwcm9wcyA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9pemVkKHByaXZhdGVQcm9wTmFtZSwgZ2V0dGVyKVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWU6IGFueSkge31cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5VHlwZS5wcm90b3R5cGUsIHByb3BOYW1lLCBwcm9wcylcbiAgfVxuXG4gIF8ubWFwKGVudGl0eVR5cGUucmVsYXRpb25zaGlwTmFtZXMsIGRlZmluZVJlbGF0aW9uc2hpcEdldHRlckFuZFNldHRlcilcbn1cbiJdfQ==