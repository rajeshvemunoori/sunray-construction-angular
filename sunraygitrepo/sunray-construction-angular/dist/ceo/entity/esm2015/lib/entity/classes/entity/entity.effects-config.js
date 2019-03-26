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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0eS5lZmZlY3RzLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFTM0IsTUFBTSxPQUFPLG1CQUFtQjs7OztJQVk5QixZQUNTLE1BQWdDO1FBQWhDLFdBQU0sR0FBTixNQUFNLENBQTBCO1FBVGpDLHVCQUFrQixHQUF1QjtZQUMvQyxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFLElBQUk7WUFDVCxLQUFLLEVBQUUsSUFBSTtZQUNYLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUE7UUFLQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLGNBQXNCO1FBQ3pDLE9BQU0sQ0FDSixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQ25DLENBQUE7SUFDSCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNGOzs7Ozs7SUE3QkMsd0NBQXlCOzs7OztJQUN6Qiw0Q0FBOEI7Ozs7O0lBQzlCLDBDQUF1Qzs7Ozs7SUFDdkMsaURBTUM7O0lBR0MscUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG4gIGlFbnRpdHlFZmZlY3RzQ29uZmlnQXJncyxcbiAgaUVudGl0eUVmZmVjdHNDb25maWcsXG4gIGlFbnRpdHlFZmZlY3RUeXBlcyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUVmZmVjdHNDb25maWcgaW1wbGVtZW50cyBpRW50aXR5RWZmZWN0c0NvbmZpZyB7XG4gIHByaXZhdGUgc2xpY2VOYW1lOiBzdHJpbmdcbiAgcHJpdmF0ZSBpbml0aWFsRW50aXR5OiBpRW50aXR5XG4gIHByaXZhdGUgZWZmZWN0VHlwZXM6IGlFbnRpdHlFZmZlY3RUeXBlc1xuICBwcml2YXRlIGRlZmF1bHRFZmZlY3RUeXBlczogaUVudGl0eUVmZmVjdFR5cGVzID0ge1xuICAgIGluaXQ6IGZhbHNlLFxuICAgIGxvYWQ6IHRydWUsXG4gICAgYWRkOiB0cnVlLFxuICAgIHBhdGNoOiB0cnVlLFxuICAgIGFzeW5jU3VjY2VzczogdHJ1ZVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogaUVudGl0eUVmZmVjdHNDb25maWdBcmdzXG4gICkge1xuICAgIHRoaXMuc2xpY2VOYW1lID0gY29uZmlnLnNsaWNlTmFtZVxuICAgIHRoaXMuaW5pdGlhbEVudGl0eSA9IGNvbmZpZy5pbml0aWFsRW50aXR5XG4gICAgdGhpcy5lZmZlY3RUeXBlcyA9IF8ubWVyZ2UodGhpcy5kZWZhdWx0RWZmZWN0VHlwZXMsIGNvbmZpZy5lZmZlY3RUeXBlcylcbiAgfVxuXG4gIHB1YmxpYyBoYXNFZmZlY3RUeXBlKGVmZmVjdFR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4oXG4gICAgICBfLmhhcyh0aGlzLmVmZmVjdFR5cGVzLCBlZmZlY3RUeXBlTmFtZSkgICYmXG4gICAgICAgIHRoaXMuZWZmZWN0VHlwZXNbZWZmZWN0VHlwZU5hbWVdXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyhjb25maWdJdGVtOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdbY29uZmlnSXRlbV1cbiAgfVxufVxuIl19