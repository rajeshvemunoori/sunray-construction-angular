import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { iBreadcrumb } from '../../../providers/interfaces/index';
import { BaseComponent } from '../base/base.component';
export declare class BreadcrumbComponent extends BaseComponent {
    breadcrumb$: Observable<iBreadcrumb>;
    itemSelected: EventEmitter<any>;
    onItemClick(item: any): void;
}
