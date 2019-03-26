import { iEntityConfig, EntityConfigUrlFragment, iEntity, iEntityConstructor, iResourceIdentifier } from '../../interfaces/index';
export declare class EntityConfig implements iEntityConfig {
    private _name;
    private _entityType;
    type: string;
    url?: EntityConfigUrlFragment;
    primaryKeys?: any[];
    seed: iResourceIdentifier[];
    apiConfig: any;
    reducer: any;
    initialState: any;
    isSeed?: boolean;
    constructor(init?: Partial<EntityConfig>);
    name: string;
    getName(): string;
    hasResourceType(resourceIdentifier?: any): boolean;
    ofType(entityData: iEntity): boolean;
    isCustom(): boolean;
    urlFragment(opts?: {}): EntityConfigUrlFragment;
    entityType: iEntityConstructor;
}
