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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlcy9lbnRpdHkvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBV0EsTUFBTSxPQUFPLDRCQUE0QixHQUFHLFFBQVE7O0FBQ3BELE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxTQUFTOzs7O0FBV3RELHVDQUVDOzs7O0FBRUQsMENBRUM7Ozs7QUFFRCw4Q0FPQzs7O0lBTkMsc0NBQXFCOztJQUNyQiwyQ0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsOENBQTZCOztJQUM3QixpREFBb0M7Ozs7OztBQUl0Qyw2QkFHQzs7O0lBRkMsNEJBQWtCOztJQUNsQiw4QkFBaUI7Ozs7O0FBR25CLDRCQUEwQzs7OztBQUUxQyx3Q0FPQzs7O0lBSkMsd0NBQWtCOztJQUVsQixvQ0FBVzs7SUFDWCwrQ0FBc0I7Ozs7OztBQUd4Qix1Q0FrQkM7OztJQWpCQyxtQ0FBZTs7SUFDZixxQ0FBb0I7Ozs7O0lBRXBCLHVEQUE4Qjs7Ozs7SUFDOUIsd0RBQStCOzs7OztJQUMvQixzREFBbUI7Ozs7OztJQUNuQixvRUFBMkM7Ozs7O0lBQzNDLCtEQUFzQzs7Ozs7O0lBQ3RDLDJFQUE0RDs7Ozs7O0lBQzVELDZFQUE4RDs7Ozs7SUFDOUQsdURBQThCOzs7OztJQUM5Qiw4REFBcUM7Ozs7O0lBQ3JDLHdEQUErQjs7Ozs7O0lBQy9CLDJFQUE0RDs7Ozs7SUFDNUQscURBQWU7Ozs7O0lBQ2YsNkRBQTZDOzs7O0lBQzdDLHNEQUFrQjs7Ozs7QUFJcEIsZ0RBSUM7OztJQUhDLHdDQUFxQjs7SUFDckIsMENBQTJCOzs7Ozs7QUFJN0IsZ0RBRUM7OztJQURDLDBDQUF3Qjs7Ozs7QUFJMUIsZ0NBRUM7OztJQURDLDBDQUFnQzs7Ozs7QUFHbEMsb0NBRUM7OztJQURDLDhDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBGZWF0dXJlSWRlbnRpZmllciB9IGZyb20gJy4uL2ZlYXR1cmUvZmVhdHVyZS1pZGVudGlmaWVyJ1xuXG5pbXBvcnQgeyBFbnRpdHlJZGVudGlmaWVyIH0gZnJvbSAnLi9lbnRpdHktaWRlbnRpZmllcidcblxuZXhwb3J0IHR5cGUgRW50aXR5QXR0cmlidXRlRGF0YVR5cGUgPSBhbnk7XG5cbmV4cG9ydCB0eXBlIEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIgPSBzdHJpbmdcblxuZXhwb3J0IHR5cGUgRW50aXR5UmVsYXRpb25zaGlwVHlwZSA9IHN0cmluZ1xuZXhwb3J0IGNvbnN0IEVudGl0eUhhc09uZVJlbGF0aW9uc2hpcFR5cGUgPSBcIkhhc09uZVwiXG5leHBvcnQgY29uc3QgRW50aXR5SGFzTWFueVJlbGF0aW9uc2hpcFR5cGUgPSBcIkhhc01hbnlcIlxuZXhwb3J0IHR5cGUgRW50aXR5UmVsYXRpb25zaGlwID0gRW50aXR5SGFzT25lUmVsYXRpb25zaGlwIHwgRW50aXR5SGFzTWFueVJlbGF0aW9uc2hpcFxuXG5leHBvcnQgdHlwZSBFbnRpdHlIYXNPbmVSZWxhdGlvbnNoaXAgPSBpRW50aXR5UmVsYXRpb25zaGlwTWFwcGluZ1xuZXhwb3J0IHR5cGUgRW50aXR5SGFzTWFueVJlbGF0aW9uc2hpcCA9IGlFbnRpdHlSZWxhdGlvbnNoaXBNYXBwaW5nW11cblxuZXhwb3J0IHR5cGUgRW50aXR5VHlwZUlkZW50aWZpZXIgPSBzdHJpbmc7XG5cblxuZXhwb3J0IHR5cGUgRW50aXR5RGF0YSA9IGlFbnRpdHkgfCBpRW50aXR5Q29sbGVjdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlBdHRyaWJ1dGVzIHtcbiAgW2tleTogc3RyaW5nXTogRW50aXR5QXR0cmlidXRlRGF0YVR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUVudGl0eVJlbGF0aW9uc2hpcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuICBpZD86IEVudGl0eUlkZW50aWZpZXJcbiAgZmVhdHVyZT86IEZlYXR1cmVJZGVudGlmaWVyXG4gIHR5cGU6IEVudGl0eVR5cGVJZGVudGlmaWVyXG4gIGF0dHJpYnV0ZXM6IGlFbnRpdHlBdHRyaWJ1dGVzXG4gIHJlbGF0aW9uc2hpcHM/OiBpRW50aXR5UmVsYXRpb25zaGlwc1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5IGV4dGVuZHMgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zIHtcbiAgc2xpY2VOYW1lPzogc3RyaW5nXG4gIGRhdGFTZXJ2aWNlPzogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5IGV4dGVuZHMgaUVudGl0eSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gIG5ldyguLi5hcmdzKTogaUVudGl0eVxuXG4gIF9zbGljZU5hbWU6IHN0cmluZ1xuXG4gIGNvbmZpZzogYW55XG4gIGRlZmF1bHRBdHRyaWJ1dGVzOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpRW50aXR5Q29sbGVjdGlvbiB7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBlbnRpdGllczogaUVudGl0eVtdO1xuXG4gIHNsaWNlKGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uO1xuICBmaWx0ZXIoYW55KTogaUVudGl0eUNvbGxlY3Rpb247XG4gIGZpbmQoYW55KTogaUVudGl0eTtcbiAgZmluZEJ5QXR0cihhdHRyOiBhbnksIHZhbHVlOiBhbnkpOiBpRW50aXR5O1xuICBmaWx0ZXJCeUF0dHJzKGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uO1xuICBpbnZva2VGaWx0ZXIobWV0aG9kTmFtZTogc3RyaW5nLCAuLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb25cbiAgZmlsdGVyQnlJbnZva2UobWV0aG9kTmFtZTogc3RyaW5nLCAuLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb25cbiAgd2hlcmUoYW55KTogaUVudGl0eUNvbGxlY3Rpb247XG4gIHN0cmluZ1NlYXJjaChhbnkpOiBpRW50aXR5Q29sbGVjdGlvbjtcbiAgc2VhcmNoKGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uO1xuICBzdHJpbmdTZWFyY2hCeUF0dHIoYXR0cjogYW55LCB0ZXJtOiBhbnkpOiBpRW50aXR5Q29sbGVjdGlvbjtcbiAgbWFwKGFueSk6IGFueVtdXG4gIHNvcnQoYXR0cmlidXRlczogc3RyaW5nW10pOiBpRW50aXR5Q29sbGVjdGlvblxuICBpc0VtcHR5KCk6IGJvb2xlYW5cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIGlFbnRpdHlSZWxhdGlvbnNoaXBNYXBwaW5nIHtcbiAgaWQ6IEVudGl0eUlkZW50aWZpZXIsXG4gIHR5cGU6IEVudGl0eVR5cGVJZGVudGlmaWVyO1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpV3JhcHBlZEVudGl0eVJlbGF0aW9uc2hpcCB7XG4gIGRhdGE6IEVudGl0eVJlbGF0aW9uc2hpcFxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgaUVudGl0eU1hcCB7XG4gIEVudGl0eVR5cGVJZGVudGlmaWVyOiBpRW50aXR5W10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUVudGl0eVR5cGVNYXAge1xuICBFbnRpdHlUeXBlSWRlbnRpZmllcjogaUVudGl0eUNvbnN0cnVjdG9yXG59XG4iXX0=