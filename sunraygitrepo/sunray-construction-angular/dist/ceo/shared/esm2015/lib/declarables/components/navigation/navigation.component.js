/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class NavigationComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.menuClass = 'horizontal';
        this.itemEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getMenuClass() {
        /** @type {?} */
        let classNames = ['menu', this.menuClass];
        return _.join(classNames, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation',
                template: "<nav class=\"navbar navbar-expand-sm\">\n  <div class=\"collapse navbar-collapse\">\n    <ceo-navigation-nav\n      [navigationMenu]=\"navigationMenu\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-navigation-nav>\n  </div>\n</nav>\n",
                styles: [".menu{display:flex}.horizontal{flex-direction:row;justify-content:space-evenly}.horizontal .pane{flex-direction:column;width:150px;border-radius:.3rem}.horizontal .pane img{width:30px}.vertical{flex-direction:column}"]
            }] }
];
NavigationComponent.propDecorators = {
    navigationMenu: [{ type: Input }],
    navigationLinks: [{ type: Input }],
    menuClass: [{ type: Input }],
    itemEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.navigationMenu;
    /** @type {?} */
    NavigationComponent.prototype.navigationLinks;
    /** @type {?} */
    NavigationComponent.prototype.menuClass;
    /** @type {?} */
    NavigationComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN4QixZQUFZLEVBQ1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQVd0RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUx0RDs7UUFhRSxjQUFTLEdBQVcsWUFBWSxDQUFBO1FBR2hDLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQVd4RCxDQUFDOzs7O0lBVEMsWUFBWTs7WUFDTixVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDhQQUEwQzs7YUFFM0M7Ozs2QkFFRSxLQUFLOzhCQUdMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxNQUFNOzs7O0lBVFAsNkNBQytCOztJQUUvQiw4Q0FDc0I7O0lBRXRCLHdDQUNnQzs7SUFFaEMsd0NBQ3NEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBpTmF2aWdhdGlvbk1lbnUsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbmF2aWdhdGlvbk1lbnU6IGlOYXZpZ2F0aW9uTWVudVxuXG4gIEBJbnB1dCgpXG4gIG5hdmlnYXRpb25MaW5rczogYW55W11cblxuICBASW5wdXQoKVxuICBtZW51Q2xhc3M6IHN0cmluZyA9ICdob3Jpem9udGFsJ1xuXG4gIEBPdXRwdXQoKVxuICBpdGVtRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBnZXRNZW51Q2xhc3MoKXtcbiAgICBsZXQgY2xhc3NOYW1lcyA9IFsnbWVudScsIHRoaXMubWVudUNsYXNzXVxuICAgIHJldHVybiBfLmpvaW4oY2xhc3NOYW1lcywgJyAnKVxuICB9XG5cblxuICBvbkl0ZW1FdmVudChldmVudCkge1xuICAgIHRoaXMuaXRlbUV2ZW50LmVtaXQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==