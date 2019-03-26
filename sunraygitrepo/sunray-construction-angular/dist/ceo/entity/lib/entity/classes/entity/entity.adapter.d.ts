import { iEntityAdapter } from '../../interfaces/index';
import { EntityCollection } from './entity.collection';
export declare class EntityAdapter implements iEntityAdapter {
    featureName: any;
    entityType: any;
    entityConfig: any;
    entityName: any;
    sliceName: any;
    private _initialState;
    private _ngrxEntityAdapter;
    private _selectors;
    private _stateInterface;
    private _reducer;
    private _entityCollectionType;
    constructor(entityOpts: any);
    readonly entityCollectionType: typeof EntityCollection;
    readonly reducer: any;
    readonly selectors: any;
    readonly initialState: any;
    readonly ngrxEntityAdapter: any;
    readonly scopes: any;
    private buildReducer;
    private featureEntitySliceName;
    private buildSelectors;
    private buildInitialState;
    private buildNgrxEntityAdapter;
    private getterWithBuilder;
}
