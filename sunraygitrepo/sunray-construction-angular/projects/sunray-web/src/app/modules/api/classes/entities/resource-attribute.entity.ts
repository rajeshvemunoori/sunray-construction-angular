import { SunrayEntity } from './sunray.entity'

export class ResourceAttributeEntity extends SunrayEntity {
  isForAttribute(attrName: string) {
    return (this as any).name == attrName
  }
}
