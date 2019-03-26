import { iFormWrapper, iFormMemberMap } from '../interfaces/index';
import { FormGroupFactory } from './form-group-factory.service';
export declare class FormFactory {
    private formGroupFactory;
    constructor(formGroupFactory: FormGroupFactory);
    build(members: iFormMemberMap): iFormWrapper;
}
