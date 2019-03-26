/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageService.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = localStorage.getItem('' + key);
        return value === null ? null : JSON.parse(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem('' + key);
    };
    StorageService.decorators = [
        { type: Injectable }
    ];
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUkxQztJQUFBO0lBZUEsQ0FBQzs7Ozs7O0lBWkMsZ0NBQU87Ozs7O0lBQVAsVUFBUSxHQUFlLEVBQUUsS0FBVTtRQUNqQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsR0FBZTs7WUFDZixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzVDLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEdBQWU7UUFDeEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBZEYsVUFBVTs7SUFlWCxxQkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgSVN0b3JhZ2UsIFN0b3JhZ2VLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XG5cbiAgc2V0SXRlbShrZXk6IFN0b3JhZ2VLZXksIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnJyArIGtleSwgdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogYW55IHtcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCcnICsga2V5KTtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5wYXJzZSh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogU3RvcmFnZUtleSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCcnICsga2V5KTtcbiAgfVxufVxuIl19