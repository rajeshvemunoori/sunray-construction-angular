import { Observable } from 'rxjs';
import { iEntityCollection } from '../../../../../entity/index';
export declare class DropdownOptionsFactory {
    build(data$: Observable<iEntityCollection>, entityKey: any): Observable<{
        key: any;
        value: any;
    }[]>;
    getOptions(key: any, entity: any): {
        key: any;
        value: any;
    };
}
