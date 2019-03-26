import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SunRay
import * as pages from './pages';

const routes: Routes =  [
  {
    path: ':id/cover-letter-template',
    component: pages.CoverLetterTemplateDetail,
  },
  {
    path: 'note-templates',
    component: pages.NoteTemplate,
  },
  {
    path: 'lien-release-types',
    component: pages.LienReleaseTypeDirectory,
  },
  {
    path: ':id/lien-release-type',
    component: pages.LienReleaseTypeDetail,
  },
  {
    path: ':id/project-type',
    component: pages.ProjectTypeDirectory,
  },
  {
    path: 'state-request-types',
    component: pages.StateRequestTypeDirectory,
  },
  {
    path: ':id/state-request-type',
    component: pages.StateRequestTypeDetail,
    children: [
      {
        path: 'document-rules',
        component: pages.DocumentRuleComponent
      },
      {
        path: 'form-settings',
        component: pages.FormSettingComponent
      },
      {
        path: 'document-templates',
        component: pages.DocumentTemplate
      },
      {
        path: 'document-settings',
        component: pages.DocumentSettingComponent
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
export class SettingRoutingModule { }
