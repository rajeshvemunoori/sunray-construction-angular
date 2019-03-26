export interface iResourceIdentifier {
    type: string;
    feature?: string;
    id?: any;
    [key: string]: any;
}
export declare type ResourceParam = iResourceIdentifier | string;
