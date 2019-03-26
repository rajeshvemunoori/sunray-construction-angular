import { FormMemberType, iFormWrapper } from '../interfaces/index';
import { FormGroup } from './form-group';
export declare class FormWrapper extends FormGroup implements iFormWrapper {
    type: FormMemberType;
}
