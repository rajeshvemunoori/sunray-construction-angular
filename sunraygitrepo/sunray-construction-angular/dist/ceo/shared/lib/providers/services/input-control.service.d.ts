import { FormGroup, AbstractControl } from '@angular/forms';
import { iInputGroup } from '../interfaces/index';
export interface iAbstractControlMap {
    [key: string]: AbstractControl;
}
export declare class InputControlService {
    toFormGroup(inputGroup: iInputGroup): FormGroup;
    private buildFormGroup;
    private buildControls;
    private buildAbstractControl;
    private getFormControlBuilder;
    private generateInputKey;
    private buildFormControl;
}
