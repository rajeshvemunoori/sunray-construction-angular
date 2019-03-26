/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class WindowMock {
    constructor() {
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
    alert(msg) {
        return;
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    confirm(msg) {
        return;
    }
}
if (false) {
    /** @type {?} */
    WindowMock.prototype.navigator;
    /** @type {?} */
    WindowMock.prototype.location;
}
export class WindowMockFrench extends WindowMock {
    constructor() {
        super();
        this.navigator.language = 'fr-US';
    }
}
export class WindowMockNoLanguage extends WindowMock {
    constructor() {
        super();
        this.navigator.language = undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFDUyxjQUFTLEdBQVE7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUNLLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFPNUIsQ0FBQzs7Ozs7SUFOUSxLQUFLLENBQUMsR0FBVztRQUN0QixPQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFDTSxPQUFPLENBQUMsR0FBVztRQUN4QixPQUFPO0lBQ1QsQ0FBQztDQUNGOzs7SUFYQywrQkFHRTs7SUFDRiw4QkFBMEI7O0FBUzVCLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVO0lBQzlDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFDbEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2luZG93TW9jayB7XG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHtcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICB1c2VyQWdlbnQ6ICd0ZXN0aW5nJ1xuICB9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tGcmVuY2ggZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9ICdmci1VUyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tOb0xhbmd1YWdlIGV4dGVuZHMgV2luZG93TW9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYXZpZ2F0b3IubGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==