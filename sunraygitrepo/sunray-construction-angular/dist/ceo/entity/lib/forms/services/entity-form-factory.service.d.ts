import { BehaviorSubject } from 'rxjs';
import { iFormWrapper } from '@ceo/shared';
import { iEntity, DataService } from '../../entity/index';
import { iEntityFormFactoryOpts } from '../interfaces/index';
import { ResourceConfigurationFormFactory } from './resource-configurations/index';
export declare class EntityFormFactory {
    private resourceConfigurationFormFactory;
    private dataService;
    constructor(resourceConfigurationFormFactory: ResourceConfigurationFormFactory, dataService: DataService);
    build$(entity: iEntity, opts: iEntityFormFactoryOpts): BehaviorSubject<iFormWrapper>;
    private form$;
    private resourceConfiguration$;
    private loadData$;
}
