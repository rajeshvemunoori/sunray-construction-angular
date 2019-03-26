/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class ItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.attributeEntities$ = this.getAttributeEntities$();
    }
    /**
     * @return {?}
     */
    getAttributeEntities$() {
        return this.entity.getAttributeEntities$(this.configHeader$);
    }
    /**
     * @param {?} entity
     * @param {?} action
     * @return {?}
     */
    triggerAction(entity, action) {
        this.actionEmitter.emit({
            entity: entity,
            action: action
        });
    }
    /**
     * @param {?} attributeEntity
     * @return {?}
     */
    getValue(attributeEntity) {
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
    }
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    getActions(headerAttribute) {
        if (headerAttribute) {
            return this.getActionArray(headerAttribute);
        }
        return [];
    }
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    getActionArray(headerAttribute) {
        if (headerAttribute['actions']) {
            return this.checkActions(headerAttribute['actions']);
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    checkActions(actions) {
        /** @type {?} */
        let _currentObj = this;
        /** @type {?} */
        let attributes = _.map(actions, function (action) {
            if (action['check-attributes']) {
                /** @type {?} */
                let objs = _.filter(action['check-attributes'], function (condition) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUN4QixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBT3RELE1BQU0sT0FBTyxhQUFjLFNBQVEsYUFBYTtJQUxoRDs7UUFnQkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQW1GN0QsQ0FBQzs7OztJQTlFQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ3hELENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUN0QyxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxlQUFlO1FBQ3RCLElBQUcsZUFBZSxFQUFFO1lBQ2xCLFFBQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM5QixLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNSLE9BQU8sS0FBSyxDQUFDO2lCQUNmO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1IsT0FBTyxLQUFLLENBQUM7aUJBQ2Y7Z0JBQ0QsS0FBSyxLQUFLLENBQUMsQ0FBQztvQkFDVCxPQUFPLElBQUksQ0FBQztpQkFDZDtnQkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDTixPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEM7YUFDSDtTQUNGO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsZUFBZTtRQUN4QixJQUFHLGVBQWUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGVBQWU7UUFDNUIsSUFBRyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTzs7WUFDZCxXQUFXLEdBQUcsSUFBSTs7WUFDbEIsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsTUFBTTtZQUM5QyxJQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFOztvQkFDekIsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsVUFBUyxTQUFTO29CQUNoRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDO3dCQUNqRSxPQUFPLEtBQUssQ0FBQztxQkFDZDtvQkFDRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUM7Z0JBQ0YsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDbkQsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7cUJBQ0c7b0JBQ0YsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtpQkFDSTtnQkFDSCxPQUFPLE1BQU0sQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsc1JBQW9DOzthQUVyQzs7O3FCQUVFLEtBQUs7NEJBR0wsS0FBSzsyQkFHTCxLQUFLOzRCQUdMLE1BQU07Ozs7SUFUUCwrQkFDWTs7SUFFWixzQ0FDK0I7O0lBRS9CLHFDQUM2Qjs7SUFFN0Isc0NBQzJEOztJQUUzRCxnQ0FBZTs7SUFDZiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3NoYXJlZC1kZWNsYXJhYmxlcy1pdGVtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZW50aXR5OiBhbnk7XG5cbiAgQElucHV0KClcbiAgY29uZmlnSGVhZGVyJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGl0ZW1BY3Rpb25zJDogT2JzZXJ2YWJsZTxhbnk+XG5cbiAgQE91dHB1dCgpXG4gIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYWN0aW9uczogYW55W107XG4gIGF0dHJpYnV0ZUVudGl0aWVzJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXR0cmlidXRlRW50aXRpZXMkID0gdGhpcy5nZXRBdHRyaWJ1dGVFbnRpdGllcyQoKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlRW50aXRpZXMkKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eS5nZXRBdHRyaWJ1dGVFbnRpdGllcyQoXG4gICAgICB0aGlzLmNvbmZpZ0hlYWRlciRcbiAgICApXG4gIH1cblxuICB0cmlnZ2VyQWN0aW9uKGVudGl0eSwgYWN0aW9uKSB7XG4gICAgdGhpcy5hY3Rpb25FbWl0dGVyLmVtaXQoe1xuICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoYXR0cmlidXRlRW50aXR5KSB7XG4gICAgaWYoYXR0cmlidXRlRW50aXR5KSB7XG4gICAgICBzd2l0Y2goYXR0cmlidXRlRW50aXR5Wyd2YWx1ZSddKSB7XG4gICAgICAgICBjYXNlIG51bGw6IHtcbiAgICAgICAgICAgIHJldHVybiBcIm5pbFwiO1xuICAgICAgICAgfVxuICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICByZXR1cm4gXCJZZXNcIjtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgIHJldHVybiBcIk5vXCI7XG4gICAgICAgICB9XG4gICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlRW50aXR5Wyd2YWx1ZSddO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXRBY3Rpb25zKGhlYWRlckF0dHJpYnV0ZSkge1xuICAgIGlmKGhlYWRlckF0dHJpYnV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9uQXJyYXkoaGVhZGVyQXR0cmlidXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0QWN0aW9uQXJyYXkoaGVhZGVyQXR0cmlidXRlKSB7XG4gICAgaWYoaGVhZGVyQXR0cmlidXRlWydhY3Rpb25zJ10pIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrQWN0aW9ucyhoZWFkZXJBdHRyaWJ1dGVbJ2FjdGlvbnMnXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgbGV0IF9jdXJyZW50T2JqID0gdGhpcztcbiAgICBsZXQgYXR0cmlidXRlcyA9IF8ubWFwKGFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGlmKGFjdGlvblsnY2hlY2stYXR0cmlidXRlcyddKSB7XG4gICAgICAgIGxldCBvYmpzID0gXy5maWx0ZXIoYWN0aW9uWydjaGVjay1hdHRyaWJ1dGVzJ10sIGZ1bmN0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICAgIGlmIChfY3VycmVudE9iai5lbnRpdHlbY29uZGl0aW9uWydhdHRyaWJ1dGUnXV0hPWNvbmRpdGlvblsndmFsdWUnXSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYob2Jqcy5sZW5ndGggPT0gYWN0aW9uW1wiY2hlY2stYXR0cmlidXRlc1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfLmNvbXBhY3QoYXR0cmlidXRlcyk7XG4gIH1cbn1cbiJdfQ==