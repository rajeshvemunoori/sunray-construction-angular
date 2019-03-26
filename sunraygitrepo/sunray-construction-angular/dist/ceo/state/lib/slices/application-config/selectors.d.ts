import { MemoizedSelector } from '@ngrx/store';
export declare const selectApplicationConfig: MemoizedSelector<object, any>;
export declare const selectApplicationConfigLaunched: MemoizedSelector<object, boolean>;
export declare const selectApplicationConfigResourceType: MemoizedSelector<object, any>;
export declare const selectApplicationConfigResourceById: MemoizedSelector<object, any>;
export declare const selectApplicationConfigPrimaryEntity: MemoizedSelector<object, any>;
export declare const applicationConfigSelectors: {
    launched: MemoizedSelector<object, boolean>;
    resourceType: MemoizedSelector<object, any>;
    resourceById: MemoizedSelector<object, any>;
    primaryEntity: MemoizedSelector<object, any>;
};
