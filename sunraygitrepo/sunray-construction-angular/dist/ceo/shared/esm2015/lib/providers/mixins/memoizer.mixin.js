/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class Memoizer {
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    memoized(property, value) {
        if (!this[property]) {
            /** @type {?} */
            let theFunction = _.bind(value, this);
            /** @type {?} */
            let result = theFunction();
            this[property] = (/** @type {?} */ (result));
        }
        return this[property];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL21lbW9pemVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBQ25CLFFBQVEsQ0FBQyxRQUFnQixFQUFFLEtBQVU7UUFDbkMsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQ2QsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs7Z0JBQ2pDLE1BQU0sR0FBRyxXQUFXLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLG1CQUFLLE1BQU0sRUFBQSxDQUFBO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjbGFzcyBNZW1vaXplciB7XG4gIG1lbW9pemVkKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmKCF0aGlzW3Byb3BlcnR5XSkge1xuICAgICAgbGV0IHRoZUZ1bmN0aW9uID0gXy5iaW5kKHZhbHVlLCB0aGlzKVxuICAgICAgbGV0IHJlc3VsdCA9IHRoZUZ1bmN0aW9uKClcbiAgICAgIHRoaXNbcHJvcGVydHldID0gPGFueT5yZXN1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1twcm9wZXJ0eV1cbiAgfVxufVxuIl19