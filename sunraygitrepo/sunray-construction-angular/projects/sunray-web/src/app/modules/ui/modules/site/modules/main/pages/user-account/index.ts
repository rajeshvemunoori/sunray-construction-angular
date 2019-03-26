import { UserAccountComponent } from './user-account.component'

import * as passwordReset from './password-reset'

export const components: any[]= [
  UserAccountComponent,
  ...passwordReset.components,
]

export { UserAccountComponent }

export * from './password-reset'
