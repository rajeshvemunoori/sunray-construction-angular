import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { iNavigationMenu } from '../../../../providers/interfaces/index';
export declare class NavComponent extends BaseComponent {
    navigationMenu: iNavigationMenu;
    itemEvent: EventEmitter<any>;
    onItemEvent(event: any): void;
}
