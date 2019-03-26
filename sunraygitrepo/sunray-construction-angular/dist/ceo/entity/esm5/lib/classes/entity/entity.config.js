/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var EntityConfig = /** @class */ (function () {
    function EntityConfig(init) {
        this.primaryKeys = ['id'];
        this.seed = [];
        this.initialState = {};
        Object.assign(this, init);
    }
    Object.defineProperty(EntityConfig.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._name) {
                this._name = this.type;
            }
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EntityConfig.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    EntityConfig.prototype.hasResourceType = /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    function (resourceIdentifier) {
        if (resourceIdentifier === void 0) { resourceIdentifier = {}; }
        return this.type == resourceIdentifier.type;
    };
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.type == entityData.type;
    };
    /**
     * @return {?}
     */
    EntityConfig.prototype.isCustom = /**
     * @return {?}
     */
    function () {
        return _.has(this, "primaryKeys");
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    EntityConfig.prototype.urlFragment = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        if (_.isFunction(this.url)) {
            return this.url(opts);
        }
        else {
            return this.url ? this.url : this.type;
        }
    };
    Object.defineProperty(EntityConfig.prototype, "entityType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entityType;
        },
        set: /**
         * @param {?} entityType
         * @return {?}
         */
        function (entityType) {
            this._entityType = entityType;
        },
        enumerable: true,
        configurable: true
    });
    return EntityConfig;
}());
export { EntityConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBVzNCO0lBY0Usc0JBQW1CLElBQTRCO1FBUnhDLGdCQUFXLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixTQUFJLEdBQTBCLEVBQUUsQ0FBQTtRQUdoQyxpQkFBWSxHQUFRLEVBQUUsQ0FBQTtRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsc0JBQUksOEJBQUk7Ozs7UUFBUjtZQUNFLElBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNwQixDQUFDOzs7T0FKQTs7OztJQU1ELDhCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDOzs7OztJQUVELHNDQUFlOzs7O0lBQWYsVUFBZ0Isa0JBQTRCO1FBQTVCLG1DQUFBLEVBQUEsdUJBQTRCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUE7SUFDN0MsQ0FBQzs7Ozs7SUFFRCw2QkFBTTs7OztJQUFOLFVBQU8sVUFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUE7SUFDckMsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxrQ0FBVzs7OztJQUFYLFVBQVksSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUNuQixJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN0QjthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDekIsQ0FBQzs7Ozs7UUFFRCxVQUFlLFVBQThCO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFBO1FBQy9CLENBQUM7OztPQUpBO0lBS0gsbUJBQUM7QUFBRCxDQUFDLEFBOURELElBOERDOzs7Ozs7O0lBN0RDLDZCQUFxQjs7Ozs7SUFDckIsbUNBQXVDOztJQUV2Qyw0QkFBbUI7O0lBQ25CLDJCQUFvQzs7SUFDcEMsbUNBQW1DOztJQUNuQyw0QkFBdUM7O0lBQ3ZDLGlDQUFxQjs7SUFDckIsK0JBQW1COztJQUNuQixvQ0FBNkI7O0lBRTdCLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uZmlnLFxuICBFbnRpdHlDb25maWdVcmwsXG4gIEVudGl0eUNvbmZpZ1VybEZyYWdtZW50LFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDb25maWcgaW1wbGVtZW50cyBpRW50aXR5Q29uZmlnIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nXG4gIHByaXZhdGUgX2VudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcbiAgcHVibGljIHVybD86IEVudGl0eUNvbmZpZ1VybEZyYWdtZW50XG4gIHB1YmxpYyBwcmltYXJ5S2V5cz86IGFueVtdID0gWydpZCddXG4gIHB1YmxpYyBzZWVkOiBpUmVzb3VyY2VJZGVudGlmaWVyW10gPSBbXVxuICBwdWJsaWMgYXBpQ29uZmlnOiBhbnlcbiAgcHVibGljIHJlZHVjZXI6IGFueVxuICBwdWJsaWMgaW5pdGlhbFN0YXRlOiBhbnkgPSB7fVxuXG4gIHB1YmxpYyBpc1NlZWQ/OiBib29sZWFuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEVudGl0eUNvbmZpZz4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpXG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIGlmKCEgdGhpcy5fbmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlXG4gIH1cblxuICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVxuICB9XG5cbiAgaGFzUmVzb3VyY2VUeXBlKHJlc291cmNlSWRlbnRpZmllcjogYW55ID0ge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IHJlc291cmNlSWRlbnRpZmllci50eXBlXG4gIH1cblxuICBvZlR5cGUoZW50aXR5RGF0YTogaUVudGl0eSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gZW50aXR5RGF0YS50eXBlXG4gIH1cblxuICBpc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gXy5oYXModGhpcywgXCJwcmltYXJ5S2V5c1wiKVxuICB9XG5cbiAgdXJsRnJhZ21lbnQob3B0cyA9IHt9KTogRW50aXR5Q29uZmlnVXJsRnJhZ21lbnQge1xuICAgIGlmKF8uaXNGdW5jdGlvbih0aGlzLnVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnVybChvcHRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVybCA/IHRoaXMudXJsIDogdGhpcy50eXBlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVudGl0eVR5cGUoKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZVxuICB9XG5cbiAgc2V0IGVudGl0eVR5cGUoZW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZSA9IGVudGl0eVR5cGVcbiAgfVxufVxuIl19