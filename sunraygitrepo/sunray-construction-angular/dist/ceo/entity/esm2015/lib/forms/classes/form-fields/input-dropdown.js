/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { InputControl } from './input-control';
export class InputDropdown extends InputControl {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.controlType = 'dropdown';
        this.options = [];
        this.options = options['options'] || this.emptyDropdown(); //eg. [{key: 1, value: "Test1"}]
    }
    /**
     * @private
     * @return {?}
     */
    emptyDropdown() {
        return new Observable((observer) => {
            observer.next([]);
            observer.complete();
        });
    }
}
if (false) {
    /** @type {?} */
    InputDropdown.prototype.controlType;
    /** @type {?} */
    InputDropdown.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZmllbGRzL2lucHV0LWRyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUU5QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFlBQW9COzs7O0lBSXJELFlBQVksVUFBYyxFQUFFO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUpoQixnQkFBVyxHQUFHLFVBQVUsQ0FBQTtRQUN4QixZQUFPLEdBQXFDLEVBQUUsQ0FBQTtRQUk1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUEsQ0FBQyxnQ0FBZ0M7SUFDNUYsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjs7O0lBZEMsb0NBQXdCOztJQUN4QixnQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5wdXRDb250cm9sIH0gZnJvbSAnLi9pbnB1dC1jb250cm9sJ1xuXG5leHBvcnQgY2xhc3MgSW5wdXREcm9wZG93biBleHRlbmRzIElucHV0Q29udHJvbDxzdHJpbmc+IHtcbiAgY29udHJvbFR5cGUgPSAnZHJvcGRvd24nXG4gIG9wdGlvbnM6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW11cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zWydvcHRpb25zJ10gfHwgdGhpcy5lbXB0eURyb3Bkb3duKCkgLy9lZy4gW3trZXk6IDEsIHZhbHVlOiBcIlRlc3QxXCJ9XVxuICB9XG5cbiAgcHJpdmF0ZSBlbXB0eURyb3Bkb3duKCkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICBvYnNlcnZlci5uZXh0KFtdKVxuICAgIG9ic2VydmVyLmNvbXBsZXRlKClcbiAgICB9KVxuICB9XG59XG4iXX0=