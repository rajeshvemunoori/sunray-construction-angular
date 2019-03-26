import { InflectionService } from '@ceo/core';
import { iResourceIdentifier } from '../interfaces/index';
export declare class ResourceIdentifierService {
    private inflectionService;
    constructor(inflectionService: InflectionService);
    isValid(ri: iResourceIdentifier): boolean;
    isScope(ri: iResourceIdentifier): boolean;
    isSameResource(riOne: iResourceIdentifier, riTwo: iResourceIdentifier): boolean;
    scopeName(ri: iResourceIdentifier): string;
}
