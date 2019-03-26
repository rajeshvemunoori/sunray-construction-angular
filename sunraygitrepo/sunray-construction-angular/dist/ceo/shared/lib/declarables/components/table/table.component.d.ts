import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export declare class TableComponent extends BaseComponent {
    collection$: Observable<any>;
    configHeader$: Observable<any>;
    itemActions$: Observable<any>;
    collectionActions$: Observable<any>;
    searchAttributes: any;
    actionEmitter: EventEmitter<any>;
    triggerAction(event_: any): void;
}
