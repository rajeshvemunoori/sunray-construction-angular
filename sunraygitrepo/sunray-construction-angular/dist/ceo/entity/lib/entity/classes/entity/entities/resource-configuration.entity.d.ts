import { iResourceConfigurationEntity } from '../../../interfaces/index';
import { JsonApiEntity } from './json-api.entity';
export declare class ResourceConfigurationEntity extends JsonApiEntity implements iResourceConfigurationEntity {
    static defaultAttributes: {};
    static relationshipNames: string[];
    resourceAssociations$: any;
}
