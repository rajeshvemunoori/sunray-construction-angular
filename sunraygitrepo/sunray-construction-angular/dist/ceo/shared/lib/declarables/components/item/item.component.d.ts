import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export declare class ItemComponent extends BaseComponent {
    entity: any;
    configHeader$: Observable<any>;
    itemActions$: Observable<any>;
    actionEmitter: EventEmitter<any>;
    actions: any[];
    attributeEntities$: Observable<any>;
    ngOnInit(): void;
    getAttributeEntities$(): any;
    triggerAction(entity: any, action: any): void;
    getValue(attributeEntity: any): any;
    getActions(headerAttribute: any): any[];
    getActionArray(headerAttribute: any): any[];
    checkActions(actions: any): any[];
}
