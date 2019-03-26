import { AppInjector }                   from './app-injector.service'
import { AppService }                    from './app.service'
import { DataService }                   from './data.service'
import { EntityService }                 from './entity.service'
import { EntityTypeDynamicPropertyNameService } from './entity-type-dynamic-property-name.service'
import { PageService }                   from './page.service'
import { RouterEventsService }           from './router-events.service'
import { SnackBarNotificationService }   from './snack-bar-notification.service'
import { UiService }                     from './ui.service'

import * as entities from './entities'

export const services: any[] = [
  AppInjector,
  AppService,
  DataService,
  EntityService,
  EntityTypeDynamicPropertyNameService,
  PageService,
  RouterEventsService,
  SnackBarNotificationService,
  UiService,
  ...entities.services,
]

export { AppInjector }
export { AppService }
export { DataService }
export { EntityService }
export { EntityTypeDynamicPropertyNameService }
export { PageService }
export { RouterEventsService }
export { SnackBarNotificationService as NotificationService }
export { UiService }

export {
  DocumentTypeProvider,
  ProjectTypeResolver,
} from './entities'
