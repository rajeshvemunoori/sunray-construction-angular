import { iFormItem } from './form-item.interface';
import { iFormGroup } from './form-group.interface';
export declare type FormMemberType = iFormItem | iFormGroup;
export interface FormMemberTypeMap {
    [key: string]: FormMemberType;
}
