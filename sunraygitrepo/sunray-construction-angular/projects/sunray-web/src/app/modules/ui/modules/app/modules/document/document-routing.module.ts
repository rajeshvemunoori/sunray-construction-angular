import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay
import * as pages from './pages';

const routes: Routes =  [
  {
    path: 'document-types',
    component: pages.DocumentTypePage,
  },
  {
    path: 'document-types/:id',
    component: pages.DocumentTypeDetailPage,
    children: [
      {
        path: 'document-rule-pane',
        component: pages.DocumentRulePaneComponent,
      },
      {
        path: 'document-setting-pane',
        component: pages.DocumentSettingPaneComponent,
      },
      {
        path: 'document-template-pane',
        component: pages.DocumentTemplatePaneComponent,
      },
      {
        path: 'form-setting-pane',
        component: pages.FormSettingPaneComponent,
      }
    ],
  },
  {
    path: 'document-types/:id/document-template',
    component: pages.DocumentTemplatePage,
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
export class DocumentRoutingModule { }
