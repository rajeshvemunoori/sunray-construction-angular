import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { iNavigationMenu } from '../../../providers/interfaces';
export declare class DropdownComponent extends BaseComponent {
    navigationMenu: iNavigationMenu;
    itemEvent: EventEmitter<any>;
    className(item: any): string;
    onItemEvent(event: any): void;
}
