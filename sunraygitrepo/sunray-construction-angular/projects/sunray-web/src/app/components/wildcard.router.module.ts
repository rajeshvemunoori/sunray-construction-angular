import { Routes } from '@angular/router';

export const wildcardRoutes: Routes = [
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
