import { iFormMemberFactoryParams } from '@ceo/shared';
import { iEntity } from '../../../../../entity/index';
import { DataFactoryResolver } from './data-factory-resolver.service';
export declare class DataFactory {
    private dataFactoryResolver;
    constructor(dataFactoryResolver: DataFactoryResolver);
    build(entity: iEntity): Partial<iFormMemberFactoryParams>;
    private resolveDataFactory;
}
