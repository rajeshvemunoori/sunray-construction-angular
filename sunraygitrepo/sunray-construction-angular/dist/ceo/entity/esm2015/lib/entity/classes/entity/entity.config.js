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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHkuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVczQixNQUFNLE9BQU8sWUFBWTs7OztJQWN2QixZQUFtQixJQUE0QjtRQVJ4QyxnQkFBVyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsU0FBSSxHQUEwQixFQUFFLENBQUE7UUFHaEMsaUJBQVksR0FBUSxFQUFFLENBQUE7UUFLM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLElBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1NBQ3ZCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxxQkFBMEIsRUFBRTtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFBO0lBQzdDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFBO0lBQ3JDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNuQixJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN0QjthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELElBQUksVUFBVSxDQUFDLFVBQThCO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFBO0lBQy9CLENBQUM7Q0FDRjs7Ozs7O0lBN0RDLDZCQUFxQjs7Ozs7SUFDckIsbUNBQXVDOztJQUV2Qyw0QkFBbUI7O0lBQ25CLDJCQUFvQzs7SUFDcEMsbUNBQW1DOztJQUNuQyw0QkFBdUM7O0lBQ3ZDLGlDQUFxQjs7SUFDckIsK0JBQW1COztJQUNuQixvQ0FBNkI7O0lBRTdCLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uZmlnLFxuICBFbnRpdHlDb25maWdVcmwsXG4gIEVudGl0eUNvbmZpZ1VybEZyYWdtZW50LFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDb25maWcgaW1wbGVtZW50cyBpRW50aXR5Q29uZmlnIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nXG4gIHByaXZhdGUgX2VudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcbiAgcHVibGljIHVybD86IEVudGl0eUNvbmZpZ1VybEZyYWdtZW50XG4gIHB1YmxpYyBwcmltYXJ5S2V5cz86IGFueVtdID0gWydpZCddXG4gIHB1YmxpYyBzZWVkOiBpUmVzb3VyY2VJZGVudGlmaWVyW10gPSBbXVxuICBwdWJsaWMgYXBpQ29uZmlnOiBhbnlcbiAgcHVibGljIHJlZHVjZXI6IGFueVxuICBwdWJsaWMgaW5pdGlhbFN0YXRlOiBhbnkgPSB7fVxuXG4gIHB1YmxpYyBpc1NlZWQ/OiBib29sZWFuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEVudGl0eUNvbmZpZz4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpXG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIGlmKCEgdGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlXG4gIH1cblxuICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVxuICB9XG5cbiAgaGFzUmVzb3VyY2VUeXBlKHJlc291cmNlSWRlbnRpZmllcjogYW55ID0ge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IHJlc291cmNlSWRlbnRpZmllci50eXBlXG4gIH1cblxuICBvZlR5cGUoZW50aXR5RGF0YTogaUVudGl0eSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gZW50aXR5RGF0YS50eXBlXG4gIH1cblxuICBpc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gXy5oYXModGhpcywgXCJwcmltYXJ5S2V5c1wiKVxuICB9XG5cbiAgdXJsRnJhZ21lbnQob3B0cyA9IHt9KTogRW50aXR5Q29uZmlnVXJsRnJhZ21lbnQge1xuICAgIGlmKF8uaXNGdW5jdGlvbih0aGlzLnVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnVybChvcHRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVybCA/IHRoaXMudXJsIDogdGhpcy50eXBlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVudGl0eVR5cGUoKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZVxuICB9XG5cbiAgc2V0IGVudGl0eVR5cGUoZW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZSA9IGVudGl0eVR5cGVcbiAgfVxufVxuIl19