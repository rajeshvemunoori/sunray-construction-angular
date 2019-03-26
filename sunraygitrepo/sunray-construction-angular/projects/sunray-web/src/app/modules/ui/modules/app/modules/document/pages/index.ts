import * as documentTemplatePage      from './document-template';
import * as documentTypeDetailPage    from './document-type-detail';
import * as documentTypePage          from './document-type';

export const pages: any[] = [
  documentTemplatePage.DocumentTemplatePage,
  documentTypeDetailPage.DocumentTypeDetailPage,
  documentTypeDetailPage.DocumentRulePaneComponent,
  documentTypeDetailPage.DocumentSettingPaneComponent,
  documentTypeDetailPage.DocumentTemplatePaneComponent,
  documentTypeDetailPage.FormSettingPaneComponent,
  documentTypePage.DocumentTypePage,
];

export * from './document-template';
export * from './document-type-detail';
export * from './document-type';
