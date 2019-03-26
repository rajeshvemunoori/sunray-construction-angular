export declare class Helper {
    source: any;
    target: any;
    propNames: any;
    bindToSource: boolean;
    constructor(source: any, target: any, propNames: any, bindToSource: boolean);
    run(): void;
    private copyProperty;
    private copyFromSource;
    private getDescriptor;
}
export declare class PropertyDelegator {
    delegatedProperties: any;
    setDelegatedProperties(source: any, propNames: string[], bindToSource?: boolean): void;
    setAllDelegatedProperties(): void;
}
