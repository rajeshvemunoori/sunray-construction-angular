import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export declare class InputComponent extends BaseComponent {
    formGroup: FormGroup;
    field: any;
    readonly isValid: boolean;
    selected(option: any): boolean;
    checked(values: any): boolean;
}
