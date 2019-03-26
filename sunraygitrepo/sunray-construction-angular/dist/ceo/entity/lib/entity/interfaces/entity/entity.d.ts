import { Observable } from 'rxjs';
import { FeatureIdentifier } from '../feature/feature-identifier';
import { EntityIdentifier } from './entity-identifier';
export declare type EntityAttributeDataType = any;
export declare type EntityRelationshipIdentifier = string;
export declare type EntityRelationshipType = string;
export declare const EntityHasOneRelationshipType = "HasOne";
export declare const EntityHasManyRelationshipType = "HasMany";
export declare type EntityRelationship = EntityHasOneRelationship | EntityHasManyRelationship;
export declare type EntityHasOneRelationship = iEntityRelationshipMapping;
export declare type EntityHasManyRelationship = iEntityRelationshipMapping[];
export declare type EntityTypeIdentifier = string;
export declare type EntityData = iEntity | iEntityCollection;
export interface iEntityAttributes {
    [key: string]: EntityAttributeDataType;
}
export interface iEntityRelationships {
    [key: string]: any;
}
export interface iEntityConstructorParams {
    id?: EntityIdentifier;
    feature?: FeatureIdentifier;
    type: EntityTypeIdentifier;
    attributes: iEntityAttributes;
    relationships?: iEntityRelationships;
    [key: string]: any;
}
export interface iEntity extends iEntityConstructorParams {
    sliceName?: string;
    dataService?: any;
    save$(opts?: any): Observable<iEntity>;
}
export interface Entity extends iEntity {
}
export interface iEntityConstructor {
    new (...args: any[]): iEntity;
    _sliceName: string;
    config: any;
    defaultAttributes: any;
}
export interface iEntityCollection {
    length: number;
    entities: iEntity[];
    slice(any: any): iEntityCollection;
    filter(any: any): iEntityCollection;
    find(any: any): iEntity;
    findByAttr(attr: any, value: any): iEntity;
    filterByAttrs(any: any): iEntityCollection;
    invokeFilter(methodName: string, ...args: any[]): iEntityCollection;
    filterByInvoke(methodName: string, ...args: any[]): iEntityCollection;
    where(any: any): iEntityCollection;
    stringSearch(any: any): iEntityCollection;
    search(any: any): iEntityCollection;
    stringSearchByAttr(attr: any, term: any): iEntityCollection;
    map(any: any): any[];
    sort(attributes: string[]): iEntityCollection;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    hasEntities(): boolean;
}
export interface iEntityRelationshipMapping {
    id: EntityIdentifier;
    type: EntityTypeIdentifier;
    [key: string]: any;
}
export interface iWrappedEntityRelationship {
    data: EntityRelationship;
}
export interface iEntityMap {
    EntityTypeIdentifier: iEntity[];
}
export interface iEntityTypeMap {
    EntityTypeIdentifier: iEntityConstructor;
}
