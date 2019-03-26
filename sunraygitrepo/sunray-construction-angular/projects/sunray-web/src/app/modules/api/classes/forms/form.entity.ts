import { JsonApiEntity } from '@ceo/entity';

export class FormEntity extends JsonApiEntity {
  type: string;
  id: string;
  name: string;
  resourceType: string;


  constructor(data: any) {
    super()
    this.type = data.type;
    this.id = data.id;
    this.resourceType = data['resource-type'];
    this.name = data.name;
  }

}
