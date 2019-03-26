import {
  Observable,
} from 'rxjs'

import { Injectable } from '@angular/core'

import { InflectionService } from '@ceo/core'

import {
  EntityService,
} from '../../../entity.service'

import { Provider as DocumentTypeProvider } from '../provider.service'

@Injectable({
  providedIn: 'root'
})
export class Provider {
  constructor(
    public entityService: EntityService,
    public inflectionService: InflectionService,
  ) {}

}
