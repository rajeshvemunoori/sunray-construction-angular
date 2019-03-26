import { Routes } from '@angular/router';

import { SunraySiteModule } from '@sunray-ui-site'
import { SunrayAppModule }  from '@sunray-ui-app'

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => SunrayAppModule,
    data: {
      reuseRoute: true,
    },
  },
  {
    path: '',
    loadChildren: () => SunraySiteModule,
    data: {
      reuseRoute: true,
    },
  },
]

export const AppRoutes: Array <any> = [
  ...routes,
];
