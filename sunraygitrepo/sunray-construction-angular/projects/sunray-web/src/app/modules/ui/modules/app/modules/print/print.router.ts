import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Other feature modules
//import { BodyComponent }   from '../../../layout/index';

// SunRay
import {
  batches, queues, printJobs
} from './components';

const routes: Routes = [
  {
    path: 'batches',
    component: batches.BatchComponent,
    children: [
      {
        path: '',
        component: batches.ListComponent,
      },
      {
        path: ':id',
        component: batches.DetailComponent,
      }
    ]
  },
  {
    path: 'queues',
    component: queues.QueueComponent,
    children: [
      {
        path: '',
        component: queues.ListComponent,
      },
      {
        path: ':id',
        component: queues.DetailComponent,
      }
    ]
  },
  {
    path: 'print-jobs',
    component: printJobs.PrintJobComponent,
    children: [
      {
        path: 'new',
        component: printJobs.NewComponent,
        data: {
          name: "Luis"
        },
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PrintRouterModule { }
