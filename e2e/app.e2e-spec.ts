import { MyTemplatePage } from './app.po';

describe('my-template App', () => {
  let page: MyTemplatePage;

  beforeEach(() => {
    page = new MyTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
