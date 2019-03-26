import { iResourceIdentifier } from '../resource';
export interface iCustomSelector {
    isValid(ri: iResourceIdentifier): boolean;
    selector(selectorService: any, ri: iResourceIdentifier): any;
}
