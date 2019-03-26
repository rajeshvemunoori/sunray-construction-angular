import { Injectable } from '@angular/core'

import {
  AppService as ParentAppService
} from '../imports'

@Injectable()
export class AppService extends ParentAppService {}

