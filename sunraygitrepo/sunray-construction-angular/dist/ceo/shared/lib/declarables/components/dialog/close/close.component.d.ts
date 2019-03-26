import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
export declare class CloseComponent extends BaseComponent {
    close: EventEmitter<any>;
    onClose(): void;
}
