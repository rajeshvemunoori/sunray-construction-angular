import { iEntitySelectorTypes } from './selector-types';
export interface iEntitySelectorIdentifier {
    feature: string;
    entityType: string;
    selectorType: keyof iEntitySelectorTypes;
    scope?: string;
}
