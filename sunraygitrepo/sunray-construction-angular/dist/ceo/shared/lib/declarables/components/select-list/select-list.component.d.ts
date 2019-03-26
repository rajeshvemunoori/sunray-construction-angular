import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export declare class SelectListComponent extends BaseComponent {
    items$: Observable<any>;
    selectedItem: any;
    itemEmitter: EventEmitter<any>;
    isSelectedItem(item: any): boolean;
    select(item: any): void;
    emit(): void;
}
