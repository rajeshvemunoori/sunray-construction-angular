import { FormGroup } from '@angular/forms';
import { iInputGroup } from '../../../providers/index';
import { BaseComponent } from '../base/base.component';
export declare class FormGroupComponent extends BaseComponent {
    inputGroup: iInputGroup;
    formGroup: FormGroup;
    isInputGroup(input: any): boolean;
}
