import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { iFeatureMap, iResourceIdentifier, iDataServiceOpts } from '../../interfaces/index';
import { SelectorService } from './selector.service';
export declare class SelectorProvider {
    private selectorService;
    private store;
    features$: Observable<iFeatureMap>;
    features: iFeatureMap;
    private defaultOpts;
    constructor(selectorService: SelectorService, store: Store<any>);
    provide(ri: iResourceIdentifier, opts?: iDataServiceOpts): Observable<any>;
    private customSelector;
    private defaultSelector;
    private isRelationshipResourceRequest;
    private selectorIdentifier;
    private getBaseSelector;
    private isFindRequest;
    private findPropPath;
    private findSelector;
    private isFilteredResourceRequest;
    private filterSelector;
    private isScopedResourceIdentifier;
    private subscribeToFeatures;
    private getFeature;
    private getFilterParams;
    private getPrimaryKeys;
}
