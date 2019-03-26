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
        let propName = `${camelCase(relationshipName)}$`;
        /** @type {?} */
        let privatePropName = `_${propName}`;
        /** @type {?} */
        let getter = buildEntityRelationshipProperty(relationshipName);
        /** @type {?} */
        let props = {
            get: function () {
                return this.memoized(privatePropName, getter);
            },
            set: function (value) { }
        };
        Object.defineProperty(entityType.prototype, propName, props);
    }
    _.map(entityType.relationshipNames, defineRelationshipGetterAndSetter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXJlbGF0aW9uc2hpcC1wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL2VudGl0eS9idWlsZC1lbnRpdHktcmVsYXRpb25zaGlwLXByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU0zQixPQUFPLEVBQ0wsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFBOzs7OztBQU1sQixNQUFNLFVBQVUsK0JBQStCLENBQzdDLGdCQUFnQjs7OztJQUdoQixTQUFTLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQyxDQUMvQyxVQUFVOzs7OztJQUdWLFNBQVMsaUNBQWlDLENBQUMsZ0JBQWdCOztZQUNyRCxRQUFRLEdBQUcsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRzs7WUFDNUMsZUFBZSxHQUFHLElBQUksUUFBUSxFQUFFOztZQUVoQyxNQUFNLEdBQUcsK0JBQStCLENBQUMsZ0JBQWdCLENBQUM7O1lBRTFELEtBQUssR0FBRztZQUNWLEdBQUcsRUFBRTtnQkFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQy9DLENBQUM7WUFDRCxHQUFHLEVBQUUsVUFBUyxLQUFVLElBQUcsQ0FBQztTQUM3QjtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVELENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBjYW1lbENhc2UsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgRW50aXR5RGF0YSxcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRW50aXR5UmVsYXRpb25zaGlwUHJvcGVydHkoXG4gIHJlbGF0aW9uc2hpcE5hbWUsXG4pOiAoKCkgPT4gT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPikge1xuXG4gIGZ1bmN0aW9uIHJlbGF0aW9uc2hpcCgpOiBPYnNlcnZhYmxlPEVudGl0eURhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5yZWxhdGlvbnNoaXAkKHRoaXMsIHJlbGF0aW9uc2hpcE5hbWUsIHt9KVxuICB9XG5cbiAgcmV0dXJuIHJlbGF0aW9uc2hpcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlSZWxhdGlvbnNoaXBQcm9wZXJ0aWVzKFxuICBlbnRpdHlUeXBlLFxuKTogdm9pZCB7XG5cbiAgZnVuY3Rpb24gZGVmaW5lUmVsYXRpb25zaGlwR2V0dGVyQW5kU2V0dGVyKHJlbGF0aW9uc2hpcE5hbWUpIHtcbiAgICBsZXQgcHJvcE5hbWUgPSBgJHtjYW1lbENhc2UocmVsYXRpb25zaGlwTmFtZSl9JGBcbiAgICBsZXQgcHJpdmF0ZVByb3BOYW1lID0gYF8ke3Byb3BOYW1lfWBcblxuICAgIGxldCBnZXR0ZXIgPSBidWlsZEVudGl0eVJlbGF0aW9uc2hpcFByb3BlcnR5KHJlbGF0aW9uc2hpcE5hbWUpXG5cbiAgICBsZXQgcHJvcHMgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZW1vaXplZChwcml2YXRlUHJvcE5hbWUsIGdldHRlcilcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBhbnkpIHt9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eVR5cGUucHJvdG90eXBlLCBwcm9wTmFtZSwgcHJvcHMpXG4gIH1cblxuICBfLm1hcChlbnRpdHlUeXBlLnJlbGF0aW9uc2hpcE5hbWVzLCBkZWZpbmVSZWxhdGlvbnNoaXBHZXR0ZXJBbmRTZXR0ZXIpXG59XG4iXX0=