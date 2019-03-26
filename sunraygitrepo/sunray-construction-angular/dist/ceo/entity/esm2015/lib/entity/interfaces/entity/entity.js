/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const EntityHasOneRelationshipType = "HasOne";
/** @type {?} */
export const EntityHasManyRelationshipType = "HasMany";
/**
 * @record
 */
export function iEntityAttributes() { }
/**
 * @record
 */
export function iEntityRelationships() { }
/**
 * @record
 */
export function iEntityConstructorParams() { }
if (false) {
    /** @type {?|undefined} */
    iEntityConstructorParams.prototype.id;
    /** @type {?|undefined} */
    iEntityConstructorParams.prototype.feature;
    /** @type {?} */
    iEntityConstructorParams.prototype.type;
    /** @type {?} */
    iEntityConstructorParams.prototype.attributes;
    /** @type {?|undefined} */
    iEntityConstructorParams.prototype.relationships;
    /* Skipping unhandled member: [key: string]: any*/
}
/**
 * @record
 */
export function iEntity() { }
if (false) {
    /** @type {?|undefined} */
    iEntity.prototype.sliceName;
    /** @type {?|undefined} */
    iEntity.prototype.dataService;
    /**
     * @param {?=} opts
     * @return {?}
     */
    iEntity.prototype.save$ = function (opts) { };
}
/**
 * @record
 */
export function Entity() { }
/**
 * @record
 */
export function iEntityConstructor() { }
if (false) {
    /** @type {?} */
    iEntityConstructor.prototype._sliceName;
    /** @type {?} */
    iEntityConstructor.prototype.config;
    /** @type {?} */
    iEntityConstructor.prototype.defaultAttributes;
    /* Skipping unhandled member: new(...args): iEntity*/
}
/**
 * @record
 */
export function iEntityCollection() { }
if (false) {
    /** @type {?} */
    iEntityCollection.prototype.length;
    /** @type {?} */
    iEntityCollection.prototype.entities;
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.slice = function (any) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.filter = function (any) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.find = function (any) { };
    /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    iEntityCollection.prototype.findByAttr = function (attr, value) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.filterByAttrs = function (any) { };
    /**
     * @param {?} methodName
     * @param {...?} args
     * @return {?}
     */
    iEntityCollection.prototype.invokeFilter = function (methodName, args) { };
    /**
     * @param {?} methodName
     * @param {...?} args
     * @return {?}
     */
    iEntityCollection.prototype.filterByInvoke = function (methodName, args) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.where = function (any) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.stringSearch = function (any) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.search = function (any) { };
    /**
     * @param {?} attr
     * @param {?} term
     * @return {?}
     */
    iEntityCollection.prototype.stringSearchByAttr = function (attr, term) { };
    /**
     * @param {?} any
     * @return {?}
     */
    iEntityCollection.prototype.map = function (any) { };
    /**
     * @param {?} attributes
     * @return {?}
     */
    iEntityCollection.prototype.sort = function (attributes) { };
    /**
     * @return {?}
     */
    iEntityCollection.prototype.isEmpty = function () { };
    /**
     * @return {?}
     */
    iEntityCollection.prototype.isNotEmpty = function () { };
    /**
     * @return {?}
     */
    iEntityCollection.prototype.hasEntities = function () { };
}
/**
 * @record
 */
export function iEntityRelationshipMapping() { }
if (false) {
    /** @type {?} */
    iEntityRelationshipMapping.prototype.id;
    /** @type {?} */
    iEntityRelationshipMapping.prototype.type;
    /* Skipping unhandled member: [key: string]: any*/
}
/**
 * @record
 */
export function iWrappedEntityRelationship() { }
if (false) {
    /** @type {?} */
    iWrappedEntityRelationship.prototype.data;
}
/**
 * @record
 */
export function iEntityMap() { }
if (false) {
    /** @type {?} */
    iEntityMap.prototype.EntityTypeIdentifier;
}
/**
 * @record
 */
export function iEntityTypeMap() { }
if (false) {
    /** @type {?} */
    iEntityTypeMap.prototype.EntityTypeIdentifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2ludGVyZmFjZXMvZW50aXR5L2VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWVBLE1BQU0sT0FBTyw0QkFBNEIsR0FBRyxRQUFROztBQUNwRCxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsU0FBUzs7OztBQVd0RCx1Q0FFQzs7OztBQUVELDBDQUVDOzs7O0FBRUQsOENBT0M7OztJQU5DLHNDQUFxQjs7SUFDckIsMkNBQTJCOztJQUMzQix3Q0FBMEI7O0lBQzFCLDhDQUE2Qjs7SUFDN0IsaURBQW9DOzs7Ozs7QUFJdEMsNkJBS0M7OztJQUpDLDRCQUFrQjs7SUFDbEIsOEJBQWlCOzs7OztJQUVqQiw4Q0FBc0M7Ozs7O0FBR3hDLDRCQUEwQzs7OztBQUUxQyx3Q0FPQzs7O0lBSkMsd0NBQWtCOztJQUVsQixvQ0FBVzs7SUFDWCwrQ0FBc0I7Ozs7OztBQUd4Qix1Q0FvQkM7OztJQW5CQyxtQ0FBZTs7SUFDZixxQ0FBb0I7Ozs7O0lBRXBCLHVEQUE4Qjs7Ozs7SUFDOUIsd0RBQStCOzs7OztJQUMvQixzREFBbUI7Ozs7OztJQUNuQixvRUFBMkM7Ozs7O0lBQzNDLCtEQUFzQzs7Ozs7O0lBQ3RDLDJFQUE0RDs7Ozs7O0lBQzVELDZFQUE4RDs7Ozs7SUFDOUQsdURBQThCOzs7OztJQUM5Qiw4REFBcUM7Ozs7O0lBQ3JDLHdEQUErQjs7Ozs7O0lBQy9CLDJFQUE0RDs7Ozs7SUFDNUQscURBQWU7Ozs7O0lBQ2YsNkRBQTZDOzs7O0lBQzdDLHNEQUFrQjs7OztJQUNsQix5REFBcUI7Ozs7SUFDckIsMERBQXNCOzs7OztBQUl4QixnREFJQzs7O0lBSEMsd0NBQXFCOztJQUNyQiwwQ0FBMkI7Ozs7OztBQUk3QixnREFFQzs7O0lBREMsMENBQXdCOzs7OztBQUkxQixnQ0FFQzs7O0lBREMsMENBQWdDOzs7OztBQUdsQyxvQ0FFQzs7O0lBREMsOENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IEZlYXR1cmVJZGVudGlmaWVyIH0gZnJvbSAnLi4vZmVhdHVyZS9mZWF0dXJlLWlkZW50aWZpZXInXG5cbmltcG9ydCB7IEVudGl0eUlkZW50aWZpZXIgfSBmcm9tICcuL2VudGl0eS1pZGVudGlmaWVyJ1xuXG5leHBvcnQgdHlwZSBFbnRpdHlBdHRyaWJ1dGVEYXRhVHlwZSA9IGFueTtcblxuZXhwb3J0IHR5cGUgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllciA9IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBFbnRpdHlSZWxhdGlvbnNoaXBUeXBlID0gc3RyaW5nXG5leHBvcnQgY29uc3QgRW50aXR5SGFzT25lUmVsYXRpb25zaGlwVHlwZSA9IFwiSGFzT25lXCJcbmV4cG9ydCBjb25zdCBFbnRpdHlIYXNNYW55UmVsYXRpb25zaGlwVHlwZSA9IFwiSGFzTWFueVwiXG5leHBvcnQgdHlwZSBFbnRpdHlSZWxhdGlvbnNoaXAgPSBFbnRpdHlIYXNPbmVSZWxhdGlvbnNoaXAgfCBFbnRpdHlIYXNNYW55UmVsYXRpb25zaGlwXG5cbmV4cG9ydCB0eXBlIEVudGl0eUhhc09uZVJlbGF0aW9uc2hpcCA9IGlFbnRpdHlSZWxhdGlvbnNoaXBNYXBwaW5nXG5leHBvcnQgdHlwZSBFbnRpdHlIYXNNYW55UmVsYXRpb25zaGlwID0gaUVudGl0eVJlbGF0aW9uc2hpcE1hcHBpbmdbXVxuXG5leHBvcnQgdHlwZSBFbnRpdHlUeXBlSWRlbnRpZmllciA9IHN0cmluZztcblxuXG5leHBvcnQgdHlwZSBFbnRpdHlEYXRhID0gaUVudGl0eSB8IGlFbnRpdHlDb2xsZWN0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgaUVudGl0eUF0dHJpYnV0ZXMge1xuICBba2V5OiBzdHJpbmddOiBFbnRpdHlBdHRyaWJ1dGVEYXRhVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5UmVsYXRpb25zaGlwcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyB7XG4gIGlkPzogRW50aXR5SWRlbnRpZmllclxuICBmZWF0dXJlPzogRmVhdHVyZUlkZW50aWZpZXJcbiAgdHlwZTogRW50aXR5VHlwZUlkZW50aWZpZXJcbiAgYXR0cmlidXRlczogaUVudGl0eUF0dHJpYnV0ZXNcbiAgcmVsYXRpb25zaGlwcz86IGlFbnRpdHlSZWxhdGlvbnNoaXBzXG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHkgZXh0ZW5kcyBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuICBzbGljZU5hbWU/OiBzdHJpbmdcbiAgZGF0YVNlcnZpY2U/OiBhbnlcblxuICBzYXZlJChvcHRzPzogYW55KTogT2JzZXJ2YWJsZTxpRW50aXR5PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eSBleHRlbmRzIGlFbnRpdHkge31cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5Q29uc3RydWN0b3Ige1xuICBuZXcoLi4uYXJncyk6IGlFbnRpdHlcblxuICBfc2xpY2VOYW1lOiBzdHJpbmdcblxuICBjb25maWc6IGFueVxuICBkZWZhdWx0QXR0cmlidXRlczogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUVudGl0eUNvbGxlY3Rpb24ge1xuICBsZW5ndGg6IG51bWJlcjtcbiAgZW50aXRpZXM6IGlFbnRpdHlbXTtcblxuICBzbGljZShhbnkpOiBpRW50aXR5Q29sbGVjdGlvbjtcbiAgZmlsdGVyKGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uO1xuICBmaW5kKGFueSk6IGlFbnRpdHk7XG4gIGZpbmRCeUF0dHIoYXR0cjogYW55LCB2YWx1ZTogYW55KTogaUVudGl0eTtcbiAgZmlsdGVyQnlBdHRycyhhbnkpOiBpRW50aXR5Q29sbGVjdGlvbjtcbiAgaW52b2tlRmlsdGVyKG1ldGhvZE5hbWU6IHN0cmluZywgLi4uYXJncyk6IGlFbnRpdHlDb2xsZWN0aW9uXG4gIGZpbHRlckJ5SW52b2tlKG1ldGhvZE5hbWU6IHN0cmluZywgLi4uYXJncyk6IGlFbnRpdHlDb2xsZWN0aW9uXG4gIHdoZXJlKGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uO1xuICBzdHJpbmdTZWFyY2goYW55KTogaUVudGl0eUNvbGxlY3Rpb247XG4gIHNlYXJjaChhbnkpOiBpRW50aXR5Q29sbGVjdGlvbjtcbiAgc3RyaW5nU2VhcmNoQnlBdHRyKGF0dHI6IGFueSwgdGVybTogYW55KTogaUVudGl0eUNvbGxlY3Rpb247XG4gIG1hcChhbnkpOiBhbnlbXVxuICBzb3J0KGF0dHJpYnV0ZXM6IHN0cmluZ1tdKTogaUVudGl0eUNvbGxlY3Rpb25cbiAgaXNFbXB0eSgpOiBib29sZWFuXG4gIGlzTm90RW1wdHkoKTogYm9vbGVhblxuICBoYXNFbnRpdGllcygpOiBib29sZWFuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5UmVsYXRpb25zaGlwTWFwcGluZyB7XG4gIGlkOiBFbnRpdHlJZGVudGlmaWVyLFxuICB0eXBlOiBFbnRpdHlUeXBlSWRlbnRpZmllcjtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaVdyYXBwZWRFbnRpdHlSZWxhdGlvbnNoaXAge1xuICBkYXRhOiBFbnRpdHlSZWxhdGlvbnNoaXBcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlNYXAge1xuICBFbnRpdHlUeXBlSWRlbnRpZmllcjogaUVudGl0eVtdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlUeXBlTWFwIHtcbiAgRW50aXR5VHlwZUlkZW50aWZpZXI6IGlFbnRpdHlDb25zdHJ1Y3RvclxufVxuIl19