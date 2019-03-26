import { JsonApiEntity } from '../../entity/index';
import { iFormEntity } from '../interfaces/index';
export declare class FormEntity extends JsonApiEntity implements iFormEntity {
    private _formFields$;
    static relationshipNames: string[];
    formFields$: any;
}
