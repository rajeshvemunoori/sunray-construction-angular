import { Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
export declare class AttributeListComponent extends BaseComponent {
    attributeEntity$: Observable<any>;
    attributeEntityLabels$: Observable<any>;
    attributeEntities$: Observable<any>;
    ngOnInit(): void;
    getAttributeValue(attributeEntity: any, attribute: any): any;
}
