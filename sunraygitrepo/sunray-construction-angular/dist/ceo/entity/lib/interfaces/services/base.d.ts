import { Observable } from 'rxjs';
import * as types from '../types';
import * as entity from '../entity/index';
import { iDataService, iDataServiceOpts } from './data.service';
import { iResourceIdentifier } from '../resource';
export interface iApiResponse {
    data: any;
    resourceIdentifier: iResourceIdentifier;
}
export interface iResponseParser {
    parse(data: any): entity.iEntity[];
}
export interface iEntityRelationshipProvider {
    provide$(dataService: iDataService, entity: entity.iEntity, relationshpIdentifier: entity.EntityRelationshipIdentifier, opts: iDataServiceOpts): Observable<entity.EntityData>;
}
export interface iEntitySliceNamePayload {
    sliceName: types.SliceName;
    entities: entity.iEntity[];
}
