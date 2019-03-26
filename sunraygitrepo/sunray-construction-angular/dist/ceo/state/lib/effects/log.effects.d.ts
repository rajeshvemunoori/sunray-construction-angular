import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
export declare class LogEffects {
    private actions$;
    constructor(actions$: Actions);
    log$: Observable<Action>;
    private log;
}
