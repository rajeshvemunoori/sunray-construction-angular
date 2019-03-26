import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export declare class SearchComponent extends BaseComponent {
    search: FormControl;
    searchKeyEmitter: EventEmitter<any>;
    ngOnInit(): void;
    onValueChange(): void;
}
