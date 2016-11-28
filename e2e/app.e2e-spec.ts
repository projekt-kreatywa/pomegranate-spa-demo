import { PomegranateSpaDemo000Page } from './app.po';

describe('pomegranate-spa-demo-000 App', function() {
  let page: PomegranateSpaDemo000Page;

  beforeEach(() => {
    page = new PomegranateSpaDemo000Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
