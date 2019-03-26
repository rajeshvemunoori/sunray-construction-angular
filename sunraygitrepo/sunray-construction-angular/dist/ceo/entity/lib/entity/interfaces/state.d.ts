import { EntityState } from '@ngrx/entity';
import * as types from './types';
export interface iEntityStateConfig {
    [key: string]: any;
}
export interface iEntityState<T> extends EntityState<T> {
    selectedEntityId: types.SelectedEntityId;
    config: iEntityStateConfig;
}
