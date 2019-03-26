import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
export declare class SystemComponentsEffects {
    private store;
    private actions$;
    constructor(store: Store<any>, actions$: Actions<any>);
    activateComponent$: Observable<Action>;
}
