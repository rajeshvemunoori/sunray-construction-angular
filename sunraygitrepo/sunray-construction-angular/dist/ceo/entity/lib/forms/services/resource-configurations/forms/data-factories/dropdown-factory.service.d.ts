import { Observable } from 'rxjs';
import { DataService } from '../../../../../entity/index';
import { DropdownOptionsFactory } from './dropdown-options-factory.service';
export declare class DropdownFactory {
    private dataService;
    private optionsFactory;
    private selectorData$;
    constructor(dataService: DataService, optionsFactory: DropdownOptionsFactory);
    build(resolvable: any): any;
    getSelectors$(type: any): Observable<any>;
}
