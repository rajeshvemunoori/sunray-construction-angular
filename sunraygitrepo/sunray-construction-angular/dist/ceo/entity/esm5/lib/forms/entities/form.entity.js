/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { JsonApiEntity, defineEntityRelationshipGetSet, } from '../../entity/index';
var FormEntity = /** @class */ (function (_super) {
    tslib_1.__extends(FormEntity, _super);
    function FormEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormEntity.relationshipNames = [
        'form-fields',
    ];
    return FormEntity;
}(JsonApiEntity));
export { FormEntity };
if (false) {
    /** @type {?} */
    FormEntity.relationshipNames;
    /**
     * @type {?}
     * @private
     */
    FormEntity.prototype._formFields$;
    /** @type {?} */
    FormEntity.prototype.formFields$;
}
//buildEntityRelationshipProperties(FormEntity)
/** @type {?} */
var buildEntityRelationship = function (name) {
    defineEntityRelationshipGetSet(FormEntity, name);
};
var ɵ0 = buildEntityRelationship;
_.map(FormEntity.relationshipNames, buildEntityRelationship);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9lbnRpdGllcy9mb3JtLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFFTCxhQUFhLEVBRWIsOEJBQThCLEdBQy9CLE1BQU0sb0JBQW9CLENBQUE7QUFNM0I7SUFBZ0Msc0NBQWE7SUFBN0M7O0lBUUEsQ0FBQztJQUxRLDRCQUFpQixHQUFhO1FBQ25DLGFBQWE7S0FDZCxDQUFBO0lBR0gsaUJBQUM7Q0FBQSxBQVJELENBQWdDLGFBQWEsR0FRNUM7U0FSWSxVQUFVOzs7SUFHckIsNkJBRUM7Ozs7O0lBSkQsa0NBQW1EOztJQU1uRCxpQ0FBZ0I7Ozs7SUFJZCx1QkFBdUIsR0FBRyxVQUFDLElBQUk7SUFDakMsOEJBQThCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ2xELENBQUM7O0FBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgSnNvbkFwaUVudGl0eSxcbiAgYnVpbGRFbnRpdHlSZWxhdGlvbnNoaXBQcm9wZXJ0aWVzLFxuICBkZWZpbmVFbnRpdHlSZWxhdGlvbnNoaXBHZXRTZXQsXG59IGZyb20gJy4uLy4uL2VudGl0eS9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUZvcm1FbnRpdHksXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBGb3JtRW50aXR5IGV4dGVuZHMgSnNvbkFwaUVudGl0eSBpbXBsZW1lbnRzIGlGb3JtRW50aXR5IHtcbiAgcHJpdmF0ZSBfZm9ybUZpZWxkcyQ6IE9ic2VydmFibGU8aUVudGl0eUNvbGxlY3Rpb24+XG5cbiAgc3RhdGljIHJlbGF0aW9uc2hpcE5hbWVzOiBzdHJpbmdbXSA9IFtcbiAgICAnZm9ybS1maWVsZHMnLFxuICBdXG5cbiAgZm9ybUZpZWxkcyQ6IGFueVxufVxuLy9idWlsZEVudGl0eVJlbGF0aW9uc2hpcFByb3BlcnRpZXMoRm9ybUVudGl0eSlcblxubGV0IGJ1aWxkRW50aXR5UmVsYXRpb25zaGlwID0gKG5hbWUpID0+IHtcbiAgZGVmaW5lRW50aXR5UmVsYXRpb25zaGlwR2V0U2V0KEZvcm1FbnRpdHksIG5hbWUpXG59XG5fLm1hcChGb3JtRW50aXR5LnJlbGF0aW9uc2hpcE5hbWVzLCBidWlsZEVudGl0eVJlbGF0aW9uc2hpcClcbiJdfQ==