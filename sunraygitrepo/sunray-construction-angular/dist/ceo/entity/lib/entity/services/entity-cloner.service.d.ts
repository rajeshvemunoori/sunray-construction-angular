import { iDataService, iEntity } from '../interfaces/index';
export declare class EntityCloner {
    clone(entity: iEntity, dataService?: iDataService): iEntity;
    private constructorParams;
}
