import * as queues          from './queue/index';
import * as queueElements   from './queue-element/index';
import * as batches         from './batch/index';
import * as batchItems      from './batch-item/index';
import * as printJobs       from './print-job/index';

export const printComponents: any[] = [
  batches.BatchComponent,
  batches.ListComponent,
  batches.DetailComponent,
  batches.NewComponent,
  batches.ListSelectorComponent,
  batches.SelectListComponent,
  batchItems.BatchItemComponent,
  batchItems.CheckboxComponent,
  batchItems.StatusComponent,
  queues.ListComponent,
  queues.QueueComponent,
  queueElements.QueueElementComponent,
  queues.DetailComponent,
  printJobs.PrintJobComponent,
  printJobs.NewComponent,
];

export const printServices: any[] = [
  batchItems.BatchItemService,
];

export { queues };
export { batches };
export { printJobs };
export { batchItems };
