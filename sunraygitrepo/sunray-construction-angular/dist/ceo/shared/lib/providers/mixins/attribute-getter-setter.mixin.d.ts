export declare const createGetSet: (obj: any, props: any, key: string, name: string) => void;
export declare class AttributeGetterSetter {
    attributes: any;
    updatedKeys: string[];
    createAttributeSettersAndGetters(): void;
    createSettersAndGetters(props: any): void;
    setProp(props: any, key: any, value: any): void;
    getProp(props: any, key: any): any;
}
