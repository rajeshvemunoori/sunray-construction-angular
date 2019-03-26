import { AppService }                    from './app.service'
import { DataService }                   from './data.service'
import { PageService }                   from './page.service'
import { SnackBarNotificationService }   from './snack-bar-notification.service';

export const services: any[] = [
  AppService,
  DataService,
  PageService,
  SnackBarNotificationService,
];

export { SnackBarNotificationService as NotificationService }

export { AppService }
export { DataService }
export { PageService }
