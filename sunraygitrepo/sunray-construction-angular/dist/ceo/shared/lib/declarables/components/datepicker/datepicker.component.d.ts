import { FormControl } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base/base.component';
export declare class DatepickerComponent extends BaseComponent {
    control: FormControl;
    ngOnInit(): void;
    onDateSelect(date: NgbDate): void;
    onControlValue(value: Date): void;
}
