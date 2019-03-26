import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
export declare class FooterComponent extends BaseComponent {
    data: any;
    actionEmitter: EventEmitter<any>;
    onTriggerAction(action: any): void;
}
