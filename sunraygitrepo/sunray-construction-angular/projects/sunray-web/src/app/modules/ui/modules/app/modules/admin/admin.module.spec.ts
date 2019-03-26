import { AdminModule } from './accounting.module';

describe('AdminModule', () => {
  let accountingModule: AdminModule;

  beforeEach(() => {
    accountingModule = new AdminModule();
  });

  it('should create an instance', () => {
    expect(accountingModule).toBeTruthy();
  });
});
