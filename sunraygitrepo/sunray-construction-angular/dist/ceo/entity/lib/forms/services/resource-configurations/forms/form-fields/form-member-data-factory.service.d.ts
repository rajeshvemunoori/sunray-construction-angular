import { RelationshipsProvider, RelationshipDataFactory } from '../relationships/index';
export declare class FormMemberDataFactory {
    private relationshipsProvider;
    private relationshipDataFactory;
    constructor(relationshipsProvider: RelationshipsProvider, relationshipDataFactory: RelationshipDataFactory);
    provide$(resourceConfiguration: any, formFieldEntity: any): any;
    private relationships$;
    private buildData;
    private buildEntityFormMemberData;
}
