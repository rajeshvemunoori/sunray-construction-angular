import {
  DialogConfigService,
} from '@ceo/shared'

export function buildDialogConfigService(
  dialogConfigs,
): any {
  return new DialogConfigService(dialogConfigs)
}

