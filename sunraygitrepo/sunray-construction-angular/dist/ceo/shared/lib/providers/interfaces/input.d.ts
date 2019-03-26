export declare type InputType = iInputGroup | iInputControl;
export interface iInputGroup {
    inputs: InputType[];
    key: string;
    name: string;
}
export interface iInputControl {
}
export interface iInputControlOptions<T> {
    value?: T;
    key?: string;
    label?: string;
    placeholder?: string;
    validators?: any[];
    order?: number;
    row?: number;
    controlType?: string;
}
export declare type InputResolvableType = 'InputGroup' | 'InputControl';
export interface iInputResolvableTypeData {
    [key: string]: any;
}
export interface iInputResolvableData {
    resolvableType: InputResolvableType;
    data: iInputResolvableTypeData;
}
