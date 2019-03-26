import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { iNavigationMenu } from '../../../providers/interfaces';
export declare class NavigationComponent extends BaseComponent {
    navigationMenu: iNavigationMenu;
    navigationLinks: any[];
    menuClass: string;
    itemEvent: EventEmitter<any>;
    getMenuClass(): string;
    onItemEvent(event: any): void;
}
