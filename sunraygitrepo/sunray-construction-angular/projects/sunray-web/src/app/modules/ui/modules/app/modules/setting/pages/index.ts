import * as coverLetterTemplateDetail      from './cover-letter-template-detail';
import * as coverLetterTemplateDirectory   from './cover-letter-template-directory';
import * as lienReleaseTypeDetail          from './lien-release-type-detail';
import * as lienReleaseTypeDirectory       from './lien-release-type-directory';
import * as noteTemplate                   from './note-template';
import * as stateRequestTypeDirectory      from './state-request-type-directory'
import * as projectTypeDirectory           from './project-type-directory';
import * as stateRequestTypeDetail         from './state-request-type-detail';

export const pages: any[] = [
  coverLetterTemplateDetail.CoverLetterTemplateDetail,
  coverLetterTemplateDirectory.CoverLetterTemplateDirectory,
  lienReleaseTypeDetail.LienReleaseTypeDetail,
  noteTemplate.NoteTemplate,
  lienReleaseTypeDirectory.LienReleaseTypeDirectory,
  stateRequestTypeDirectory.StateRequestTypeDirectory,
  projectTypeDirectory.ProjectTypeDirectory,
  stateRequestTypeDetail.StateRequestTypeDetail,
  stateRequestTypeDetail.DocumentTemplate,
  stateRequestTypeDetail.DocumentRuleComponent,
  stateRequestTypeDetail.DocumentSettingComponent,
  stateRequestTypeDetail.FormSettingComponent
];

export * from './cover-letter-template-detail';
export * from './cover-letter-template-directory';
export * from './lien-release-type-detail';
export * from './lien-release-type-directory';
export * from './note-template';
export * from './state-request-type-directory';
export * from './project-type-directory';
export * from './state-request-type-detail';
