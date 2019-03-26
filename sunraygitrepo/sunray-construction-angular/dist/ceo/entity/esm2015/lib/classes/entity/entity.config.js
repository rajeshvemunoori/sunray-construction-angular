/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class EntityConfig {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.primaryKeys = ['id'];
        this.seed = [];
        this.initialState = {};
        Object.assign(this, init);
    }
    /**
     * @return {?}
     */
    get name() {
        if (!this._name) {
            this._name = this.type;
        }
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.type;
    }
    /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    hasResourceType(resourceIdentifier = {}) {
        return this.type == resourceIdentifier.type;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        return this.type == entityData.type;
    }
    /**
     * @return {?}
     */
    isCustom() {
        return _.has(this, "primaryKeys");
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    urlFragment(opts = {}) {
        if (_.isFunction(this.url)) {
            return this.url(opts);
        }
        else {
            return this.url ? this.url : this.type;
        }
    }
    /**
     * @return {?}
     */
    get entityType() {
        return this._entityType;
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    set entityType(entityType) {
        this._entityType = entityType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityConfig.prototype._name;
    /**
     * @type {?}
     * @private
     */
    EntityConfig.prototype._entityType;
    /** @type {?} */
    EntityConfig.prototype.type;
    /** @type {?} */
    EntityConfig.prototype.url;
    /** @type {?} */
    EntityConfig.prototype.primaryKeys;
    /** @type {?} */
    EntityConfig.prototype.seed;
    /** @type {?} */
    EntityConfig.prototype.apiConfig;
    /** @type {?} */
    EntityConfig.prototype.reducer;
    /** @type {?} */
    EntityConfig.prototype.initialState;
    /** @type {?} */
    EntityConfig.prototype.isSeed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBVzNCLE1BQU0sT0FBTyxZQUFZOzs7O0lBY3ZCLFlBQW1CLElBQTRCO1FBUnhDLGdCQUFXLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixTQUFJLEdBQTBCLEVBQUUsQ0FBQTtRQUdoQyxpQkFBWSxHQUFRLEVBQUUsQ0FBQTtRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sSUFBRyxDQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7U0FDdkI7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLHFCQUEwQixFQUFFO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUE7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUE7SUFDckMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFO1FBQ25CLElBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3RCO2FBQ0k7WUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsVUFBOEI7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUE7SUFDL0IsQ0FBQztDQUNGOzs7Ozs7SUE3REMsNkJBQXFCOzs7OztJQUNyQixtQ0FBdUM7O0lBRXZDLDRCQUFtQjs7SUFDbkIsMkJBQW9DOztJQUNwQyxtQ0FBbUM7O0lBQ25DLDRCQUF1Qzs7SUFDdkMsaUNBQXFCOztJQUNyQiwrQkFBbUI7O0lBQ25CLG9DQUE2Qjs7SUFFN0IsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb25maWcsXG4gIEVudGl0eUNvbmZpZ1VybCxcbiAgRW50aXR5Q29uZmlnVXJsRnJhZ21lbnQsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbmZpZyBpbXBsZW1lbnRzIGlFbnRpdHlDb25maWcge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmdcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG5cbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuICBwdWJsaWMgdXJsPzogRW50aXR5Q29uZmlnVXJsRnJhZ21lbnRcbiAgcHVibGljIHByaW1hcnlLZXlzPzogYW55W10gPSBbJ2lkJ11cbiAgcHVibGljIHNlZWQ6IGlSZXNvdXJjZUlkZW50aWZpZXJbXSA9IFtdXG4gIHB1YmxpYyBhcGlDb25maWc6IGFueVxuICBwdWJsaWMgcmVkdWNlcjogYW55XG4gIHB1YmxpYyBpbml0aWFsU3RhdGU6IGFueSA9IHt9XG5cbiAgcHVibGljIGlzU2VlZD86IGJvb2xlYW5cblxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RW50aXR5Q29uZmlnPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgaWYoISB0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdGhpcy50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWVcbiAgfVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50eXBlXG4gIH1cblxuICBoYXNSZXNvdXJjZVR5cGUocmVzb3VyY2VJZGVudGlmaWVyOiBhbnkgPSB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gcmVzb3VyY2VJZGVudGlmaWVyLnR5cGVcbiAgfVxuXG4gIG9mVHlwZShlbnRpdHlEYXRhOiBpRW50aXR5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBlbnRpdHlEYXRhLnR5cGVcbiAgfVxuXG4gIGlzQ3VzdG9tKCkge1xuICAgIHJldHVybiBfLmhhcyh0aGlzLCBcInByaW1hcnlLZXlzXCIpXG4gIH1cblxuICB1cmxGcmFnbWVudChvcHRzID0ge30pOiBFbnRpdHlDb25maWdVcmxGcmFnbWVudCB7XG4gICAgaWYoXy5pc0Z1bmN0aW9uKHRoaXMudXJsKSkge1xuICAgICAgcmV0dXJuIHRoaXMudXJsKG9wdHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudXJsID8gdGhpcy51cmwgOiB0aGlzLnR5cGVcbiAgICB9XG4gIH1cblxuICBnZXQgZW50aXR5VHlwZSgpOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlXG4gIH1cblxuICBzZXQgZW50aXR5VHlwZShlbnRpdHlUeXBlOiBpRW50aXR5Q29uc3RydWN0b3IpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlID0gZW50aXR5VHlwZVxuICB9XG59XG4iXX0=