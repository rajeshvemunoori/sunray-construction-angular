import { DocumentModule } from './accounting.module';

describe('DocumentModule', () => {
  let accountingModule: DocumentModule;

  beforeEach(() => {
    accountingModule = new DocumentModule();
  });

  it('should create an instance', () => {
    expect(accountingModule).toBeTruthy();
  });
});
