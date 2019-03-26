import { BaseFormControl } from './base.form-control';
import { iFormControl, iDropdownFormControl, FormControlType } from '../../interfaces/index';
export declare class DropdownFormControl extends BaseFormControl implements iDropdownFormControl {
    controlType: FormControlType;
    options: {
        text: string;
        value: string;
    }[];
    constructor(init?: Partial<iFormControl>);
}
