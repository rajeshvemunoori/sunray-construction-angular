import {
  DialogService,
  DialogConfigService,
  MatDialogAdapterService,
} from '@ceo/shared'

import { dialogConfigs } from '../config'

import { DIALOG_CONFIGS } from './tokens'

import {
  buildDialogService,
  buildDialogConfigService,
} from './builders'

export const providers: any[] = [
  {
    provide: DIALOG_CONFIGS,
    useValue: dialogConfigs,
  },
  {
    provide: DialogConfigService,
    useFactory: buildDialogConfigService,
    deps: [
      DIALOG_CONFIGS,
    ],
  },
  {
    provide: DialogService,
    useFactory: buildDialogService,
    deps: [
      MatDialogAdapterService,
      DialogConfigService,
    ],
  },
]
