import { iEntity } from '../../../../../entity/index';
import { FormControlDataFactory } from './form-control-data-factory.service';
import { FormControlValidatorFactory } from './form-control-validator-factory.service';
export declare class FormItemDataFactory {
    private formControlDataFactory;
    private formControlValidatorFactory;
    constructor(formControlDataFactory: FormControlDataFactory, formControlValidatorFactory: FormControlValidatorFactory);
    build(entity: iEntity): any;
    private resolveParamsFactory;
}
