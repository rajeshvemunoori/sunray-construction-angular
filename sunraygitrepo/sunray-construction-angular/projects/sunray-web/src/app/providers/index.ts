import * as httpInterceptors from './http-interceptors' 

export const providers: any[] = [
  ...httpInterceptors.providers,
]
