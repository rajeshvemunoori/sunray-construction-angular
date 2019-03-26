import { EntityData } from '../interfaces/index';
import { DataService } from './data.service';
export declare class EntityDecorator {
    private dataService;
    constructor(dataService: DataService);
    decorate(entityData: EntityData): EntityData;
}
