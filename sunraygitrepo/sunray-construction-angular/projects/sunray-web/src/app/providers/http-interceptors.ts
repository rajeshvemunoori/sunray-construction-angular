import { HTTP_INTERCEPTORS } from '@angular/common/http'

import {
  NoopInterceptor,
  CachingInterceptor,
} from '@ceo/shared'

/** Http interceptor providers in outside-in order */
export const providers = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
]
