import { ProjectModule } from './accounting.module';

describe('ProjectModule', () => {
  let accountingModule: ProjectModule;

  beforeEach(() => {
    accountingModule = new ProjectModule();
  });

  it('should create an instance', () => {
    expect(accountingModule).toBeTruthy();
  });
});
