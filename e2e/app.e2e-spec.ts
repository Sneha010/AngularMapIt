import { CombinedPage } from './app.po';

describe('combined App', () => {
  let page: CombinedPage;

  beforeEach(() => {
    page = new CombinedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
