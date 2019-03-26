import * as documentTypes from './document-types'
import * as projects      from './projects'

export const services: any[] = [
  ...documentTypes.services,
  ...projects.services,
]

export {
  DocumentTypeProvider,
} from './document-types'

export {
  TypeResolver as ProjectTypeResolver,
} from './projects'
