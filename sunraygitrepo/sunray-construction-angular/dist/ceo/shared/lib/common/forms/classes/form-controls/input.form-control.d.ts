import { BaseFormControl } from './base.form-control';
import { FormControlType, InputTypeAttribute, iInputFormControl } from '../../interfaces/index';
export declare class InputFormControl extends BaseFormControl implements iInputFormControl {
    private defaults;
    controlType: FormControlType;
    inputType: InputTypeAttribute;
    required: boolean;
    options: {
        text: string;
        value: string;
    }[];
    constructor(init?: Partial<iInputFormControl>);
}
