import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { iEntityConstructor, iEntityConstructorParams } from '../interfaces/index';
export declare class EntityTypeProviderService {
    protected store: Store<any>;
    private _features$;
    constructor(store: Store<any>);
    provide$(entityData: iEntityConstructorParams): Observable<iEntityConstructor>;
    private getEntityType;
    private getCustomEntityType;
    private getFeature$;
    private readonly features$;
    private buildFeatures$;
}
