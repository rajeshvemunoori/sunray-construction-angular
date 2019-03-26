/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class StorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        /** @type {?} */
        const value = localStorage.getItem('' + key);
        return value === null ? null : JSON.parse(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        localStorage.removeItem('' + key);
    }
}
StorageService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUsxQyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBRXpCLE9BQU8sQ0FBQyxHQUFlLEVBQUUsS0FBVTtRQUNqQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBZTs7Y0FDZixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzVDLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQWU7UUFDeEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBZEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBJU3RvcmFnZSwgU3RvcmFnZUtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcblxuICBzZXRJdGVtKGtleTogU3RvcmFnZUtleSwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCcnICsga2V5LCB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXk6IFN0b3JhZ2VLZXkpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJycgKyBrZXkpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJycgKyBrZXkpO1xuICB9XG59XG4iXX0=