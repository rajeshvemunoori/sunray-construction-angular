import { InflectionService } from '@ceo/core';
import { iEntitySelectorIdentifier } from '../../interfaces/index';
export declare class SelectorNameService {
    private inflectionService;
    constructor(inflectionService: InflectionService);
    getFeatureSelectorName(featureConfig: any): any;
    getEntitySelectorName(entityAdapter: any): any;
    getNestedSelectorName(parentName: any, selectorName: any): string;
    getResourceSelectorName(si: iEntitySelectorIdentifier): string;
    getSelectorName(si: iEntitySelectorIdentifier): string;
    private buildSegments;
    private sanitizedSelectorName;
    private selectorIdentifierToSelectorName;
}
