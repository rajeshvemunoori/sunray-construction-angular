export declare class EntityAdapterFactory {
    private _featureConfig;
    _adapters: any[];
    constructor(_featureConfig: any);
    readonly featureConfig: any;
    readonly adapters: any[];
    private buildAdapters;
    private buildAdapter;
}
