import { EntityIdentifier, iEntity, iEntityCollection } from '../../interfaces';
export declare class EntityCollection implements iEntityCollection {
    entities: iEntity[];
    length: number;
    constructor(entities?: iEntity[]);
    none(): any;
    sort(attributes: string[] | string): iEntityCollection;
    filter(...args: any[]): iEntityCollection;
    invokeFilter(methodName: string, attribute: any): iEntityCollection;
    filterByInvoke(methodName: string, attribute: any): iEntityCollection;
    filterByAttrs(filters: any): iEntityCollection;
    find(id: EntityIdentifier): iEntity;
    findByAttr(attr: string, value: any): iEntity;
    map(mapFn: any): any[];
    slice(...args: any[]): iEntityCollection;
    where(conditions: any): iEntityCollection;
    stringSearch(conditions: any): iEntityCollection;
    search(conditions: any): iEntityCollection;
    stringSearchByAttr(attr: string, searchTerm: any): iEntityCollection;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    hasEntities(): boolean;
    private filterByAttr;
    private buildCollection;
    [Symbol.iterator](): {
        next: () => {
            value: iEntity;
            done: boolean;
        };
    };
}
