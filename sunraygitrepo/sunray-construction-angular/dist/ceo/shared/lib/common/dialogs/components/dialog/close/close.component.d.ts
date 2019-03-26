import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../../../declarables/index';
export declare class CloseComponent extends BaseComponent {
    close: EventEmitter<any>;
    onClose(): void;
}
