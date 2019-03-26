/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var Memoizer = /** @class */ (function () {
    function Memoizer() {
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    Memoizer.prototype.memoized = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        if (!this[property]) {
            /** @type {?} */
            var theFunction = _.bind(value, this);
            /** @type {?} */
            var result = theFunction();
            this[property] = (/** @type {?} */ (result));
        }
        return this[property];
    };
    return Memoizer;
}());
export { Memoizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL21lbW9pemVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQjtJQUFBO0lBVUEsQ0FBQzs7Ozs7O0lBVEMsMkJBQVE7Ozs7O0lBQVIsVUFBUyxRQUFnQixFQUFFLEtBQVU7UUFDbkMsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQ2QsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs7Z0JBQ2pDLE1BQU0sR0FBRyxXQUFXLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLG1CQUFLLE1BQU0sRUFBQSxDQUFBO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgTWVtb2l6ZXIge1xuICBtZW1vaXplZChwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZighdGhpc1twcm9wZXJ0eV0pIHtcbiAgICAgIGxldCB0aGVGdW5jdGlvbiA9IF8uYmluZCh2YWx1ZSwgdGhpcylcbiAgICAgIGxldCByZXN1bHQgPSB0aGVGdW5jdGlvbigpXG4gICAgICB0aGlzW3Byb3BlcnR5XSA9IDxhbnk+cmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbcHJvcGVydHldXG4gIH1cbn1cbiJdfQ==