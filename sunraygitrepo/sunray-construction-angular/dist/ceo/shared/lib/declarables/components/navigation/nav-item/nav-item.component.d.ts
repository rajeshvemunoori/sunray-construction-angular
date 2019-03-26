import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { iNavigationMenuItem } from '../../../../providers/interfaces/index';
export declare class NavItemComponent extends BaseComponent {
    item: iNavigationMenuItem;
    itemEvent: EventEmitter<any>;
    className(): string;
    onItemEvent(event: any): void;
}
