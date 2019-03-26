import { DocumentRequestModule } from './account.module';

describe('DocumentRequestModule', () => {
  let documentRequestModule: DocumentRequestModule;

  beforeEach(() => {
    documentRequestModule = new DocumentRequestModule();
  });

  it('should create an instance', () => {
    expect(documentRequestModule).toBeTruthy();
  });
});
