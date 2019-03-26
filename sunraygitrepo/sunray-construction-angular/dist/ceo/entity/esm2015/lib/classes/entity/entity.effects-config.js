/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class EntityEffectsConfig {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    hasEffectType(effectTypeName) {
        return (_.has(this.effectTypes, effectTypeName) &&
            this.effectTypes[effectTypeName]);
    }
    /**
     * @param {?} configItem
     * @return {?}
     */
    getConfig(configItem) {
        return this.config[configItem];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmVmZmVjdHMtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVMzQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBWTlCLFlBQ1MsTUFBZ0M7UUFBaEMsV0FBTSxHQUFOLE1BQU0sQ0FBMEI7UUFUakMsdUJBQWtCLEdBQXVCO1lBQy9DLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUUsSUFBSTtZQUNULEtBQUssRUFBRSxJQUFJO1lBQ1gsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQTtRQUtDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUE7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekUsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsY0FBc0I7UUFDekMsT0FBTSxDQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FDbkMsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0NBQ0Y7Ozs7OztJQTdCQyx3Q0FBeUI7Ozs7O0lBQ3pCLDRDQUE4Qjs7Ozs7SUFDOUIsMENBQXVDOzs7OztJQUN2QyxpREFNQzs7SUFHQyxxQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaUVudGl0eSxcbiAgaUVudGl0eUVmZmVjdHNDb25maWdBcmdzLFxuICBpRW50aXR5RWZmZWN0c0NvbmZpZyxcbiAgaUVudGl0eUVmZmVjdFR5cGVzLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgRW50aXR5RWZmZWN0c0NvbmZpZyBpbXBsZW1lbnRzIGlFbnRpdHlFZmZlY3RzQ29uZmlnIHtcbiAgcHJpdmF0ZSBzbGljZU5hbWU6IHN0cmluZ1xuICBwcml2YXRlIGluaXRpYWxFbnRpdHk6IGlFbnRpdHlcbiAgcHJpdmF0ZSBlZmZlY3RUeXBlczogaUVudGl0eUVmZmVjdFR5cGVzXG4gIHByaXZhdGUgZGVmYXVsdEVmZmVjdFR5cGVzOiBpRW50aXR5RWZmZWN0VHlwZXMgPSB7XG4gICAgaW5pdDogZmFsc2UsXG4gICAgbG9hZDogdHJ1ZSxcbiAgICBhZGQ6IHRydWUsXG4gICAgcGF0Y2g6IHRydWUsXG4gICAgYXN5bmNTdWNjZXNzOiB0cnVlXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBpRW50aXR5RWZmZWN0c0NvbmZpZ0FyZ3NcbiAgKSB7XG4gICAgdGhpcy5zbGljZU5hbWUgPSBjb25maWcuc2xpY2VOYW1lXG4gICAgdGhpcy5pbml0aWFsRW50aXR5ID0gY29uZmlnLmluaXRpYWxFbnRpdHlcbiAgICB0aGlzLmVmZmVjdFR5cGVzID0gXy5tZXJnZSh0aGlzLmRlZmF1bHRFZmZlY3RUeXBlcywgY29uZmlnLmVmZmVjdFR5cGVzKVxuICB9XG5cbiAgcHVibGljIGhhc0VmZmVjdFR5cGUoZWZmZWN0VHlwZU5hbWU6IHN0cmluZykge1xuICAgIHJldHVybihcbiAgICAgIF8uaGFzKHRoaXMuZWZmZWN0VHlwZXMsIGVmZmVjdFR5cGVOYW1lKSAgJiZcbiAgICAgICAgdGhpcy5lZmZlY3RUeXBlc1tlZmZlY3RUeXBlTmFtZV1cbiAgICApXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnKGNvbmZpZ0l0ZW06IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tjb25maWdJdGVtXVxuICB9XG59XG4iXX0=