import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { iNavigationMenuItem } from '../../../../providers/interfaces/index';
export declare class ItemComponent extends BaseComponent {
    item: iNavigationMenuItem;
    itemEvent: EventEmitter<any>;
    displayType(): import("../../../../providers/interfaces").NavigationMenuItemDisplayType;
    className(item: any): string;
    onItemEvent(event: any): void;
}
