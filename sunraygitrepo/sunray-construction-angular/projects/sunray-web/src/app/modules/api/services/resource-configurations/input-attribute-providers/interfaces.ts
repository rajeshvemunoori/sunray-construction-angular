import { iEntity } from '@ceo/entity'

export interface iResolveableProvider {
  provide$(resourceConfiguration: iEntity, formFieldEntity: iEntity);
}
