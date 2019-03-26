import {
  DialogService,
  iDialogService,
} from '@ceo/shared'

export function buildDialogService(
  adapterService,
  configService,
): iDialogService {
  return new DialogService(adapterService, configService)
}
