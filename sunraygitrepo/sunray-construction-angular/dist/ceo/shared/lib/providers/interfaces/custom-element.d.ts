export declare type CustomElementName = string;
export interface iCustomElementOpts {
    injector: any;
    [key: string]: any;
}
export interface iCustomElementConfig {
    elementName: string;
    ctor: any;
    opts: iCustomElementOpts;
}
