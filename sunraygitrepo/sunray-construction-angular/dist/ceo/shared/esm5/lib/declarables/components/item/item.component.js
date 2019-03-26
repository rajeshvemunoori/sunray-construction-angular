/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var ItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ItemComponent, _super);
    function ItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.attributeEntities$ = this.getAttributeEntities$();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.getAttributeEntities$ = /**
     * @return {?}
     */
    function () {
        return this.entity.getAttributeEntities$(this.configHeader$);
    };
    /**
     * @param {?} entity
     * @param {?} action
     * @return {?}
     */
    ItemComponent.prototype.triggerAction = /**
     * @param {?} entity
     * @param {?} action
     * @return {?}
     */
    function (entity, action) {
        this.actionEmitter.emit({
            entity: entity,
            action: action
        });
    };
    /**
     * @param {?} attributeEntity
     * @return {?}
     */
    ItemComponent.prototype.getValue = /**
     * @param {?} attributeEntity
     * @return {?}
     */
    function (attributeEntity) {
        if (attributeEntity) {
            switch (attributeEntity['value']) {
                case null: {
                    return "nil";
                }
                case true: {
                    return "Yes";
                }
                case false: {
                    return "No";
                }
                default: {
                    return attributeEntity['value'];
                }
            }
        }
        else {
            return '';
        }
    };
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    ItemComponent.prototype.getActions = /**
     * @param {?} headerAttribute
     * @return {?}
     */
    function (headerAttribute) {
        if (headerAttribute) {
            return this.getActionArray(headerAttribute);
        }
        return [];
    };
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    ItemComponent.prototype.getActionArray = /**
     * @param {?} headerAttribute
     * @return {?}
     */
    function (headerAttribute) {
        if (headerAttribute['actions']) {
            return this.checkActions(headerAttribute['actions']);
        }
        else {
            return [];
        }
    };
    /**
     * @param {?} actions
     * @return {?}
     */
    ItemComponent.prototype.checkActions = /**
     * @param {?} actions
     * @return {?}
     */
    function (actions) {
        /** @type {?} */
        var _currentObj = this;
        /** @type {?} */
        var attributes = _.map(actions, function (action) {
            if (action['check-attributes']) {
                /** @type {?} */
                var objs = _.filter(action['check-attributes'], function (condition) {
                    if (_currentObj.entity[condition['attribute']] != condition['value']) {
                        return false;
                    }
                    return true;
                });
                if (objs.length == action["check-attributes"].length) {
                    return action;
                }
                else {
                    return null;
                }
            }
            else {
                return action;
            }
        });
        return _.compact(attributes);
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[shared-declarables-item]',
                    template: "<td *ngFor=\"let attributeEntity of attributeEntities$ | async\">\n  {{ getValue(attributeEntity) }}\n</td>\n<td>\n  <a *ngFor=\"let action of itemActions$ | async\"\n  (click)=\"triggerAction(entity, action.name)\">\n    {{ action.displayValue }}\n  </a>\n\n</td>\n",
                    styles: [""]
                }] }
    ];
    ItemComponent.propDecorators = {
        entity: [{ type: Input }],
        configHeader$: [{ type: Input }],
        itemActions$: [{ type: Input }],
        actionEmitter: [{ type: Output }]
    };
    return ItemComponent;
}(BaseComponent));
export { ItemComponent };
if (false) {
    /** @type {?} */
    ItemComponent.prototype.entity;
    /** @type {?} */
    ItemComponent.prototype.configHeader$;
    /** @type {?} */
    ItemComponent.prototype.itemActions$;
    /** @type {?} */
    ItemComponent.prototype.actionEmitter;
    /** @type {?} */
    ItemComponent.prototype.actions;
    /** @type {?} */
    ItemComponent.prototype.attributeEntities$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDeEIsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RDtJQUttQyx5Q0FBYTtJQUxoRDtRQUFBLHFFQW1HQztRQW5GQyxtQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztJQW1GN0QsQ0FBQzs7OztJQTlFQyxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDeEQsQ0FBQzs7OztJQUVELDZDQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUN0QyxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQWE7Ozs7O0lBQWIsVUFBYyxNQUFNLEVBQUUsTUFBTTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnQ0FBUTs7OztJQUFSLFVBQVMsZUFBZTtRQUN0QixJQUFHLGVBQWUsRUFBRTtZQUNsQixRQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDUixPQUFPLEtBQUssQ0FBQztpQkFDZjtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNSLE9BQU8sS0FBSyxDQUFDO2lCQUNmO2dCQUNELEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ1QsT0FBTyxJQUFJLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ04sT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0g7U0FDRjthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLGVBQWU7UUFDeEIsSUFBRyxlQUFlLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVELHNDQUFjOzs7O0lBQWQsVUFBZSxlQUFlO1FBQzVCLElBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVk7Ozs7SUFBWixVQUFhLE9BQU87O1lBQ2QsV0FBVyxHQUFHLElBQUk7O1lBQ2xCLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLE1BQU07WUFDOUMsSUFBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRTs7b0JBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFVBQVMsU0FBUztvQkFDaEUsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQzt3QkFDakUsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7b0JBQ0QsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDO2dCQUNGLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ25ELE9BQU8sTUFBTSxDQUFDO2lCQUNmO3FCQUNHO29CQUNGLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7aUJBQ0k7Z0JBQ0gsT0FBTyxNQUFNLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFsR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHNSQUFvQzs7aUJBRXJDOzs7eUJBRUUsS0FBSztnQ0FHTCxLQUFLOytCQUdMLEtBQUs7Z0NBR0wsTUFBTTs7SUFvRlQsb0JBQUM7Q0FBQSxBQW5HRCxDQUttQyxhQUFhLEdBOEYvQztTQTlGWSxhQUFhOzs7SUFDeEIsK0JBQ1k7O0lBRVosc0NBQytCOztJQUUvQixxQ0FDNkI7O0lBRTdCLHNDQUMyRDs7SUFFM0QsZ0NBQWU7O0lBQ2YsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tzaGFyZWQtZGVjbGFyYWJsZXMtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGVudGl0eTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZ0hlYWRlciQ6IE9ic2VydmFibGU8YW55PjtcblxuICBASW5wdXQoKVxuICBpdGVtQWN0aW9ucyQ6IE9ic2VydmFibGU8YW55PlxuXG4gIEBPdXRwdXQoKVxuICBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGFjdGlvbnM6IGFueVtdO1xuICBhdHRyaWJ1dGVFbnRpdGllcyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZUVudGl0aWVzJCA9IHRoaXMuZ2V0QXR0cmlidXRlRW50aXRpZXMkKClcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUVudGl0aWVzJCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHkuZ2V0QXR0cmlidXRlRW50aXRpZXMkKFxuICAgICAgdGhpcy5jb25maWdIZWFkZXIkXG4gICAgKVxuICB9XG5cbiAgdHJpZ2dlckFjdGlvbihlbnRpdHksIGFjdGlvbikge1xuICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KHtcbiAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKGF0dHJpYnV0ZUVudGl0eSkge1xuICAgIGlmKGF0dHJpYnV0ZUVudGl0eSkge1xuICAgICAgc3dpdGNoKGF0dHJpYnV0ZUVudGl0eVsndmFsdWUnXSkge1xuICAgICAgICAgY2FzZSBudWxsOiB7XG4gICAgICAgICAgICByZXR1cm4gXCJuaWxcIjtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgcmV0dXJuIFwiWWVzXCI7XG4gICAgICAgICB9XG4gICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICByZXR1cm4gXCJOb1wiO1xuICAgICAgICAgfVxuICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZUVudGl0eVsndmFsdWUnXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aW9ucyhoZWFkZXJBdHRyaWJ1dGUpIHtcbiAgICBpZihoZWFkZXJBdHRyaWJ1dGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbkFycmF5KGhlYWRlckF0dHJpYnV0ZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldEFjdGlvbkFycmF5KGhlYWRlckF0dHJpYnV0ZSkge1xuICAgIGlmKGhlYWRlckF0dHJpYnV0ZVsnYWN0aW9ucyddKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0FjdGlvbnMoaGVhZGVyQXR0cmlidXRlWydhY3Rpb25zJ10pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBjaGVja0FjdGlvbnMoYWN0aW9ucykge1xuICAgIGxldCBfY3VycmVudE9iaiA9IHRoaXM7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBfLm1hcChhY3Rpb25zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBpZihhY3Rpb25bJ2NoZWNrLWF0dHJpYnV0ZXMnXSkge1xuICAgICAgICBsZXQgb2JqcyA9IF8uZmlsdGVyKGFjdGlvblsnY2hlY2stYXR0cmlidXRlcyddLCBmdW5jdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgICBpZiAoX2N1cnJlbnRPYmouZW50aXR5W2NvbmRpdGlvblsnYXR0cmlidXRlJ11dIT1jb25kaXRpb25bJ3ZhbHVlJ10pe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKG9ianMubGVuZ3RoID09IGFjdGlvbltcImNoZWNrLWF0dHJpYnV0ZXNcIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gXy5jb21wYWN0KGF0dHJpYnV0ZXMpO1xuICB9XG59XG4iXX0=