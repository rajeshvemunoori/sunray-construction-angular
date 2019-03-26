import { Observable }   from 'rxjs';

import { iEntity }      from '@ceo/entity';

import {
  InputType,
  iInputGroup,
  iInputControl,
  iInputControlOptions,
} from '@ceo/shared'

export {
  InputType,
  iInputGroup,
  iInputControl,
  iInputControlOptions,
}

export interface iResourceAssociationInputFactory {
  build$(entity: iEntity): Observable<iInputGroup>
}

