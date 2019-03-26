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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHkuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVczQjtJQWNFLHNCQUFtQixJQUE0QjtRQVJ4QyxnQkFBVyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsU0FBSSxHQUEwQixFQUFFLENBQUE7UUFHaEMsaUJBQVksR0FBUSxFQUFFLENBQUE7UUFLM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELHNCQUFJLDhCQUFJOzs7O1FBQVI7WUFDRSxJQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7YUFDdkI7WUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbkIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDcEIsQ0FBQzs7O09BSkE7Ozs7SUFNRCw4QkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxzQ0FBZTs7OztJQUFmLFVBQWdCLGtCQUE0QjtRQUE1QixtQ0FBQSxFQUFBLHVCQUE0QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFBO0lBQzdDLENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLFVBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFBO0lBQ3JDLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7UUFDbkIsSUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdEI7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtTQUN2QztJQUNILENBQUM7SUFFRCxzQkFBSSxvQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBZSxVQUE4QjtZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQTtRQUMvQixDQUFDOzs7T0FKQTtJQUtILG1CQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQzs7Ozs7OztJQTdEQyw2QkFBcUI7Ozs7O0lBQ3JCLG1DQUF1Qzs7SUFFdkMsNEJBQW1COztJQUNuQiwyQkFBb0M7O0lBQ3BDLG1DQUFtQzs7SUFDbkMsNEJBQXVDOztJQUN2QyxpQ0FBcUI7O0lBQ3JCLCtCQUFtQjs7SUFDbkIsb0NBQTZCOztJQUU3Qiw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaUVudGl0eUNvbmZpZyxcbiAgRW50aXR5Q29uZmlnVXJsLFxuICBFbnRpdHlDb25maWdVcmxGcmFnbWVudCxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgRW50aXR5Q29uZmlnIGltcGxlbWVudHMgaUVudGl0eUNvbmZpZyB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZ1xuICBwcml2YXRlIF9lbnRpdHlUeXBlOiBpRW50aXR5Q29uc3RydWN0b3JcblxuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHB1YmxpYyB1cmw/OiBFbnRpdHlDb25maWdVcmxGcmFnbWVudFxuICBwdWJsaWMgcHJpbWFyeUtleXM/OiBhbnlbXSA9IFsnaWQnXVxuICBwdWJsaWMgc2VlZDogaVJlc291cmNlSWRlbnRpZmllcltdID0gW11cbiAgcHVibGljIGFwaUNvbmZpZzogYW55XG4gIHB1YmxpYyByZWR1Y2VyOiBhbnlcbiAgcHVibGljIGluaXRpYWxTdGF0ZTogYW55ID0ge31cblxuICBwdWJsaWMgaXNTZWVkPzogYm9vbGVhblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFbnRpdHlDb25maWc+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICBpZighIHRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB0aGlzLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnR5cGVcbiAgfVxuXG4gIGhhc1Jlc291cmNlVHlwZShyZXNvdXJjZUlkZW50aWZpZXI6IGFueSA9IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSByZXNvdXJjZUlkZW50aWZpZXIudHlwZVxuICB9XG5cbiAgb2ZUeXBlKGVudGl0eURhdGE6IGlFbnRpdHkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IGVudGl0eURhdGEudHlwZVxuICB9XG5cbiAgaXNDdXN0b20oKSB7XG4gICAgcmV0dXJuIF8uaGFzKHRoaXMsIFwicHJpbWFyeUtleXNcIilcbiAgfVxuXG4gIHVybEZyYWdtZW50KG9wdHMgPSB7fSk6IEVudGl0eUNvbmZpZ1VybEZyYWdtZW50IHtcbiAgICBpZihfLmlzRnVuY3Rpb24odGhpcy51cmwpKSB7XG4gICAgICByZXR1cm4gdGhpcy51cmwob3B0cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy51cmwgPyB0aGlzLnVybCA6IHRoaXMudHlwZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbnRpdHlUeXBlKCk6IGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVcbiAgfVxuXG4gIHNldCBlbnRpdHlUeXBlKGVudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuX2VudGl0eVR5cGUgPSBlbnRpdHlUeXBlXG4gIH1cbn1cbiJdfQ==