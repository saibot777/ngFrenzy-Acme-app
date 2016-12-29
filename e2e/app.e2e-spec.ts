import { DeborahPage } from './app.po';

describe('deborah App', function() {
  let page: DeborahPage;

  beforeEach(() => {
    page = new DeborahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
