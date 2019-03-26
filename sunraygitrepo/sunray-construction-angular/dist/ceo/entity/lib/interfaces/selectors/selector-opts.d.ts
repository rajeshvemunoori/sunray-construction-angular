import { iEntitySelectorTypes } from './selector-types';
export interface iSelectorOpts {
    selectorType: keyof iEntitySelectorTypes;
    [key: string]: any;
}
