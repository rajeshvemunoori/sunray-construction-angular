import { Observable } from 'rxjs';
import { EntityData } from '../../../interfaces/index';
export declare function buildEntityRelationshipProperty(relationshipName: any): (() => Observable<EntityData>);
export declare function buildEntityRelationshipProperties(entityType: any): void;
