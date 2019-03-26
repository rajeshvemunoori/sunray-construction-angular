import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InflectionService } from '@ceo/core';
import { iSelectorsMap, iEntitySelectorIdentifier } from '../../interfaces/index';
import { SelectorNameService } from './selector-name.service';
export declare class SelectorService {
    private inflectionService;
    private store;
    private selectorNameService;
    selectors: iSelectorsMap;
    constructor(inflectionService: InflectionService, store: Store<any>, selectorNameService: SelectorNameService);
    select$(selectorName: any): Observable<any>;
    select(selectorName: any): Observable<any>;
    selectorFromSelectorIdentifier(si: iEntitySelectorIdentifier): any;
    getSelector(selectorName: any): any;
    addSelector(selector: any): iSelectorsMap;
    private selectorPath;
    private log;
}
