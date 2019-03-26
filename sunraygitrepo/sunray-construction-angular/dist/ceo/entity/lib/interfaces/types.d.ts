import { EntityIdentifier } from './entity/entity-identifier';
export declare type UrlFunction = (any: any) => string;
export declare type EntityConfigUrlFragment = string | UrlFunction;
export declare type EntityConfigUrl = EntityConfigUrlFragment;
export declare type SliceName = string;
export declare type ApiUrl = string;
export declare type SelectedEntityId = EntityIdentifier | null;
