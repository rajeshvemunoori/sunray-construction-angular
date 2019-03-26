import { FormGroup as NgFormGroup } from '@angular/forms';
import { iFormGroup } from '../../interfaces/index';
import { FormControlFactory } from './form-control-factory.service';
export declare class FormGroupFactory {
    private formControlFactory;
    constructor(formControlFactory: FormControlFactory);
    build(formGroup: iFormGroup): NgFormGroup;
    private buildNgFormGroup;
    private buildNgControls;
    private getNgControl;
    private buildNgControl;
    private resolveControlFactory;
}
