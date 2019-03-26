import { SunrayEntity } from './sunray.entity'

export class ResourceAssociationEntity extends SunrayEntity {
  isForAttribute(attrName: string) {
    return (this as any).name == attrName
  }
}
