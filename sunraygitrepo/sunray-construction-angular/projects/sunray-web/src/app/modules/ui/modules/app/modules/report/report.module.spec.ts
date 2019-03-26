import { ReportModule } from './accounting.module';

describe('ReportModule', () => {
  let accountingModule: ReportModule;

  beforeEach(() => {
    accountingModule = new ReportModule();
  });

  it('should create an instance', () => {
    expect(accountingModule).toBeTruthy();
  });
});
