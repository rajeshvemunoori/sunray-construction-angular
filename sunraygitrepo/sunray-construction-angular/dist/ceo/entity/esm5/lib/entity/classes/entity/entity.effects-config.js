/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var EntityEffectsConfig = /** @class */ (function () {
    function EntityEffectsConfig(config) {
        this.config = config;
        this.defaultEffectTypes = {
            init: false,
            load: true,
            add: true,
            patch: true,
            asyncSuccess: true
        };
        this.sliceName = config.sliceName;
        this.initialEntity = config.initialEntity;
        this.effectTypes = _.merge(this.defaultEffectTypes, config.effectTypes);
    }
    /**
     * @param {?} effectTypeName
     * @return {?}
     */
    EntityEffectsConfig.prototype.hasEffectType = /**
     * @param {?} effectTypeName
     * @return {?}
     */
    function (effectTypeName) {
        return (_.has(this.effectTypes, effectTypeName) &&
            this.effectTypes[effectTypeName]);
    };
    /**
     * @param {?} configItem
     * @return {?}
     */
    EntityEffectsConfig.prototype.getConfig = /**
     * @param {?} configItem
     * @return {?}
     */
    function (configItem) {
        return this.config[configItem];
    };
    return EntityEffectsConfig;
}());
export { EntityEffectsConfig };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityEffectsConfig.prototype.sliceName;
    /**
     * @type {?}
     * @private
     */
    EntityEffectsConfig.prototype.initialEntity;
    /**
     * @type {?}
     * @private
     */
    EntityEffectsConfig.prototype.effectTypes;
    /**
     * @type {?}
     * @private
     */
    EntityEffectsConfig.prototype.defaultEffectTypes;
    /** @type {?} */
    EntityEffectsConfig.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0eS5lZmZlY3RzLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFTM0I7SUFZRSw2QkFDUyxNQUFnQztRQUFoQyxXQUFNLEdBQU4sTUFBTSxDQUEwQjtRQVRqQyx1QkFBa0IsR0FBdUI7WUFDL0MsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxJQUFJO1lBQ1QsS0FBSyxFQUFFLElBQUk7WUFDWCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFBO1FBS0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQTtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVNLDJDQUFhOzs7O0lBQXBCLFVBQXFCLGNBQXNCO1FBQ3pDLE9BQU0sQ0FDSixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQ25DLENBQUE7SUFDSCxDQUFDOzs7OztJQUVNLHVDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7O0lBN0JDLHdDQUF5Qjs7Ozs7SUFDekIsNENBQThCOzs7OztJQUM5QiwwQ0FBdUM7Ozs7O0lBQ3ZDLGlEQU1DOztJQUdDLHFDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxuICBpRW50aXR5RWZmZWN0c0NvbmZpZ0FyZ3MsXG4gIGlFbnRpdHlFZmZlY3RzQ29uZmlnLFxuICBpRW50aXR5RWZmZWN0VHlwZXMsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlFZmZlY3RzQ29uZmlnIGltcGxlbWVudHMgaUVudGl0eUVmZmVjdHNDb25maWcge1xuICBwcml2YXRlIHNsaWNlTmFtZTogc3RyaW5nXG4gIHByaXZhdGUgaW5pdGlhbEVudGl0eTogaUVudGl0eVxuICBwcml2YXRlIGVmZmVjdFR5cGVzOiBpRW50aXR5RWZmZWN0VHlwZXNcbiAgcHJpdmF0ZSBkZWZhdWx0RWZmZWN0VHlwZXM6IGlFbnRpdHlFZmZlY3RUeXBlcyA9IHtcbiAgICBpbml0OiBmYWxzZSxcbiAgICBsb2FkOiB0cnVlLFxuICAgIGFkZDogdHJ1ZSxcbiAgICBwYXRjaDogdHJ1ZSxcbiAgICBhc3luY1N1Y2Nlc3M6IHRydWVcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IGlFbnRpdHlFZmZlY3RzQ29uZmlnQXJnc1xuICApIHtcbiAgICB0aGlzLnNsaWNlTmFtZSA9IGNvbmZpZy5zbGljZU5hbWVcbiAgICB0aGlzLmluaXRpYWxFbnRpdHkgPSBjb25maWcuaW5pdGlhbEVudGl0eVxuICAgIHRoaXMuZWZmZWN0VHlwZXMgPSBfLm1lcmdlKHRoaXMuZGVmYXVsdEVmZmVjdFR5cGVzLCBjb25maWcuZWZmZWN0VHlwZXMpXG4gIH1cblxuICBwdWJsaWMgaGFzRWZmZWN0VHlwZShlZmZlY3RUeXBlTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuKFxuICAgICAgXy5oYXModGhpcy5lZmZlY3RUeXBlcywgZWZmZWN0VHlwZU5hbWUpICAmJlxuICAgICAgICB0aGlzLmVmZmVjdFR5cGVzW2VmZmVjdFR5cGVOYW1lXVxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcoY29uZmlnSXRlbTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2NvbmZpZ0l0ZW1dXG4gIH1cbn1cbiJdfQ==