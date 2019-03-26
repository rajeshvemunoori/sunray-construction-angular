import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { iNavigationMenuItem } from '../../../../providers/interfaces/index';
export declare class CustomContentComponent extends BaseComponent {
    item: iNavigationMenuItem;
    itemEvent: EventEmitter<any>;
    onRouteEvent(event: any): void;
}
