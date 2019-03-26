/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var WindowMock = /** @class */ (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    WindowMock.prototype.alert = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        return;
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    WindowMock.prototype.confirm = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        return;
    };
    return WindowMock;
}());
export { WindowMock };
if (false) {
    /** @type {?} */
    WindowMock.prototype.navigator;
    /** @type {?} */
    WindowMock.prototype.location;
}
var WindowMockFrench = /** @class */ (function (_super) {
    tslib_1.__extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
export { WindowMockFrench };
var WindowMockNoLanguage = /** @class */ (function (_super) {
    tslib_1.__extends(WindowMockNoLanguage, _super);
    function WindowMockNoLanguage() {
        var _this = _super.call(this) || this;
        _this.navigator.language = undefined;
        return _this;
    }
    return WindowMockNoLanguage;
}(WindowMock));
export { WindowMockNoLanguage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7UUFDUyxjQUFTLEdBQVE7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUNLLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFPNUIsQ0FBQzs7Ozs7SUFOUSwwQkFBSzs7OztJQUFaLFVBQWEsR0FBVztRQUN0QixPQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFDTSw0QkFBTzs7OztJQUFkLFVBQWUsR0FBVztRQUN4QixPQUFPO0lBQ1QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQywrQkFHRTs7SUFDRiw4QkFBMEI7O0FBUzVCO0lBQXNDLDRDQUFVO0lBQzlDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOztJQUNwQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBc0MsVUFBVSxHQUsvQzs7QUFFRDtJQUEwQyxnREFBVTtJQUNsRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQzs7SUFDdEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTBDLFVBQVUsR0FLbkQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2luZG93TW9jayB7XG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHtcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICB1c2VyQWdlbnQ6ICd0ZXN0aW5nJ1xuICB9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tGcmVuY2ggZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9ICdmci1VUyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tOb0xhbmd1YWdlIGV4dGVuZHMgV2luZG93TW9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYXZpZ2F0b3IubGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==