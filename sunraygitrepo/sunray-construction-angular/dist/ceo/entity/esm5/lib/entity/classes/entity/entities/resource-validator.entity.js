/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { JsonApiEntity } from './json-api.entity';
var ResourceValidatorEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceValidatorEntity, _super);
    function ResourceValidatorEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    ResourceValidatorEntity.prototype.isForAttribute = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return _.includes(((/** @type {?} */ (this))).attributeNames, attrName);
    };
    return ResourceValidatorEntity;
}(JsonApiEntity));
export { ResourceValidatorEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdmFsaWRhdG9yLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdGllcy9yZXNvdXJjZS12YWxpZGF0b3IuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRWpEO0lBQTZDLG1EQUFhO0lBQTFEOztJQUlBLENBQUM7Ozs7O0lBSEMsZ0RBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFKRCxDQUE2QyxhQUFhLEdBSXpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEpzb25BcGlFbnRpdHkgfSBmcm9tICcuL2pzb24tYXBpLmVudGl0eSdcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlVmFsaWRhdG9yRW50aXR5IGV4dGVuZHMgSnNvbkFwaUVudGl0eSB7XG4gIGlzRm9yQXR0cmlidXRlKGF0dHJOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gXy5pbmNsdWRlcygodGhpcyBhcyBhbnkpLmF0dHJpYnV0ZU5hbWVzLCBhdHRyTmFtZSlcbiAgfVxufVxuIl19